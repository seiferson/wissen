package com.seifernet.wissen.util;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.seifernet.wissen.configuration.CustomProperties;
import com.seifernet.wissen.model.Account;
import com.seifernet.wissen.model.finance.Record;
import com.seifernet.wissen.model.finance.Transaction;
import com.seifernet.wissen.repository.AccountRepository;
import com.seifernet.wissen.repository.finance.RecordRepository;
import com.seifernet.wissen.repository.finance.TransactionRepository;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@Component
public class DataLoader implements ApplicationRunner{
	
	@Autowired
	private CustomProperties properties;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AccountRepository accrepo;
	
	@Autowired 
	private TransactionRepository financialrepo;
	
	@Autowired
	private RecordRepository recordrepo;
	
	private static final Logger logger = LoggerFactory.getLogger(DataLoader.class);
	
	public void run(ApplicationArguments args) {
		if(properties.getProfile().equals("DEVENV")){
			accountLoader();
			try {
				financeLoader();
			} catch(Exception e) {
				
			}
		}
	}
	
	private void accountLoader(){
		accrepo.deleteAll();
		ArrayList<String> authorities = new ArrayList<String>();
		authorities.add("USER");
		authorities.add("ACTUATOR");
		
		Account a = new Account();
		
		a.setEmail("seifer.ch@gmail.com");
		a.setNickname("seiferson");
		a.setEnabled(true);
		logger.info("Test account :" + a.getNickname());
		a.setPassword(passwordEncoder.encode("testpasswd"));
		a.setAuthorities(authorities);
		
		accrepo.insert(a);
	}
	
	private void financeLoader() throws Exception{
		financialrepo.deleteAll();
		recordrepo.deleteAll();
		
		String owner = HashGen.md5gen("seiferson");
		
		Record bankaccount = new Record(owner, 25000.00, "Bank account", Record.RecordType.ASSET, new Date(), null, null);
		Record salary1 = new Record(owner, 12000.00, "Salary 1st", Record.RecordType.RECURRENT_INCOME, new Date(), 1, null);
		Record salary2 = new Record(owner, 12000.00, "Salary 15th", Record.RecordType.RECURRENT_INCOME, new Date(), 15, null);
		
		recordrepo.insert(bankaccount);
		recordrepo.insert(salary1);
		recordrepo.insert(salary2);
		
		Record iphone5 = new Record(owner, 30000.00, "Iphone 5", Record.RecordType.DEBT, new Date(), 8, 12);
		
		recordrepo.insert(iphone5);
		
		ArrayList<Transaction> x = generateCurrentIncome(new Date(), "asd");
		for(Transaction t : x) {
			logger.error(t.toString());
		}
	}
	
	private ArrayList<Transaction> generateCurrentIncome(Date d, String owner) throws Exception{
		ArrayList<Transaction> incomeList = new ArrayList<>();
		Calendar cal = Calendar.getInstance();
		
		ArrayList<Record> data = recordrepo.findByOwner(HashGen.md5gen("seiferson"));
		for(Record t : data) {
			if(t.getType().equals(Record.RecordType.RECURRENT_INCOME)) {
				cal.setTime(d);
				cal.set(Calendar.DAY_OF_MONTH, t.getEffectiveDay());
				Transaction n = new Transaction(t.getOwner(), t.getValue(), t.getDescription(), Transaction.TransactionType.INCOME, cal.getTime());
				incomeList.add(n);
			}
		}
		
		return incomeList;
	}
	
}
