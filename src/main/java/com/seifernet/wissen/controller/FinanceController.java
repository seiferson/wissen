package com.seifernet.wissen.controller;

import com.seifernet.wissen.model.finance.BalanceData;
import com.seifernet.wissen.model.finance.FinancialAccount;
import com.seifernet.wissen.model.finance.Transaction;
import com.seifernet.wissen.repository.finance.FinancialAccountRepository;
import com.seifernet.wissen.repository.finance.TransactionRepository;
import com.seifernet.wissen.util.HashGen;
import com.seifernet.wissen.util.ResponseMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Optional;

@Controller
public class FinanceController {

    @Autowired
    private TransactionRepository transactionRepo;

    @Autowired
    private FinancialAccountRepository financialAccountRepo;

    private static final Logger logger = LoggerFactory.getLogger(FinanceController.class);

    @PostMapping("/api/v1/finance/accounts")
    public @ResponseBody ResponseEntity<ResponseMessage> createFinancialAccountService(
            @RequestBody @Valid FinancialAccount account,
            Authentication authentication
    ) {
        account.setOwner(HashGen.md5gen(authentication.getName()));

        if(account.getAccount() == null) {
            account.setAccount(HashGen.md5gen(authentication.getName() + "@GeneralAccount"));
        } else {
            Optional<FinancialAccount> reference = financialAccountRepo.findById(account.getAccount());
            if(!reference.isPresent()) {
                return ResponseEntity
                    .badRequest()
                    .body(new ResponseMessage(
                        ResponseMessage.ResponseStatus.ERROR,
                        "[Error creating financial account. Parent account not valid]"
                    ));
            } else if(!reference.get().getId().equals(HashGen.md5gen(authentication.getName()))) {
                return ResponseEntity
                    .badRequest()
                    .body(new ResponseMessage(
                        ResponseMessage.ResponseStatus.ERROR,
                        "[Error creating financial account. Parent account not valid]"
                    ));
            }
        }

        try{
            financialAccountRepo.insert(account);
        } catch (Exception e) {
            logger.error(e.getMessage());
			return ResponseEntity
				.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body(new ResponseMessage(
					ResponseMessage.ResponseStatus.ERROR,
                    "[Error creating financial account, server error]"
				));
        }

        return ResponseEntity.ok(new ResponseMessage(
			ResponseMessage.ResponseStatus.SUCCESS,
			"[Financial account " + account.getId() + " created]"
		));
    }

    @PatchMapping("/api/v1/finance/accounts/{id}")
    public @ResponseBody ResponseEntity<ResponseMessage> updateFinancialAccountService(
            @RequestBody FinancialAccount account,
            @PathVariable String id,
            Authentication authentication
    ) {
        Optional<FinancialAccount> optional = financialAccountRepo.findById(id);
        if(optional.isPresent()){
            FinancialAccount base = optional.get();

            if(HashGen.md5gen(authentication.getName()).equals(base.getOwner())) {

                if (account.getType() != null) {
                    base.setType(account.getType());
                }

                financialAccountRepo.save(base);

                return ResponseEntity.ok(new ResponseMessage(
                    ResponseMessage.ResponseStatus.SUCCESS,
                    "[Financial account successfully updated]"
                ));
            } else {
                return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(new ResponseMessage(
                            ResponseMessage.ResponseStatus.ERROR,
                            "[Access denied]"
                    ));
            }
        } else {
            return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(null);
        }
    }

    @PostMapping("/api/v1/finance/transactions")
    public @ResponseBody ResponseEntity<ResponseMessage> createTransactionService(
            @RequestBody @Valid Transaction transaction,
            Authentication authentication
    ) {

        transaction.setOwner(HashGen.md5gen(authentication.getName()));

        try {
            transactionRepo.insert(transaction);
        } catch(Exception e) {
            logger.error(e.getMessage());
			return ResponseEntity
				.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body(new ResponseMessage(
						ResponseMessage.ResponseStatus.ERROR,
                        "[Error creating transaction, server error]"
				));
        }

        return ResponseEntity.ok(new ResponseMessage(
			ResponseMessage.ResponseStatus.SUCCESS,
			"[Transaction " + transaction.getId() + " created]"
		));
    }

    @GetMapping("/api/v1/finance/balance")
    public @ResponseBody ResponseEntity<BalanceData> getBalance(
            @RequestParam int month,
            @RequestParam int year,
            Authentication authentication
    ) {

        Calendar calendar = Calendar.getInstance();

        calendar.set(year, month - 1, 1);
        Date start = calendar.getTime();

        calendar.set(year, month - 1, calendar.getActualMaximum(Calendar.DATE));
        Date end = calendar.getTime();

        ArrayList<Transaction> transactions = new ArrayList<>(
                transactionRepo.findByOwnerAndDateBetween(HashGen.md5gen(authentication.getName()), start, end)
        );

        double balance = 0.0;
        double incomeAmount = 0.0;
        double expensesAmount = 0.0;

        ArrayList<Transaction> expenses = new ArrayList<>();
        ArrayList<Transaction> income = new ArrayList<>();

        for(Transaction t : transactions) {
            if(t.getType().equals(Transaction.TransactionType.EXPENSE)){
                balance -= t.getAmount();
                expensesAmount += t.getAmount();
                expenses.add(t);
            } else if(t.getType().equals(Transaction.TransactionType.INCOME)) {
                balance += t.getAmount();
                income.add(t);
                incomeAmount += t.getAmount();
            }
        }

        BalanceData data = new BalanceData();
        data.setBalance(Math.floor(balance * 100) / 100);
        data.setExpenses(expenses);
        data.setIncome(income);
        data.setExpensesAmount(Math.floor(expensesAmount * 100) / 100);
        data.setIncomeAmount(Math.floor(incomeAmount * 100) / 100);

        return ResponseEntity
                .ok()
				.body(data);
    }
}
