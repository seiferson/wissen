package com.seifernet.wissen.controller;

import com.seifernet.wissen.model.finance.BalanceData;
import com.seifernet.wissen.model.finance.Transaction;
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

@Controller
public class FinanceController {

    @Autowired
    private TransactionRepository transactionRepo;

    private static final Logger logger = LoggerFactory.getLogger(FinanceController.class);

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
