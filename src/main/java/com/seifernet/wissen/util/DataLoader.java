package com.seifernet.wissen.util;

import java.util.ArrayList;
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
import com.seifernet.wissen.model.scheduler.ScheduledActivity;
import com.seifernet.wissen.repository.AccountRepository;
import com.seifernet.wissen.repository.finance.RecordRepository;
import com.seifernet.wissen.repository.finance.TransactionRepository;
import com.seifernet.wissen.repository.scheduler.ScheduledActivityRepository;

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
	
	@Autowired
	private ScheduledActivityRepository schedulerRepo;
	
	private static final Logger logger = LoggerFactory.getLogger(DataLoader.class);
	
	public void run(ApplicationArguments args) {
		if(properties.getProfile().equals("DEVENV")){
			accountLoader();
			schedulerRepo.deleteAll();
			try {
				financeLoader();
			} catch(Exception e) {
				e.printStackTrace();
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
		a.setPassword(passwordEncoder.encode("testpasswd"));
		a.setAuthorities(authorities);
		
		accrepo.insert(a);
	}
	
	private void financeLoader() throws Exception{
		financialrepo.deleteAll();
		recordrepo.deleteAll();
		
		Record r1 = new Record(HashGen.md5gen("seiferson"), 10000.00, "Bancomer savings account", Record.RecordType.ASSET_BANK_ACCOUNT, new Date(), null, null);
		recordrepo.insert(r1);
		
		Record r2 = new Record(HashGen.md5gen("seiferson"), 24000.00, "Gibson SG guitar", Record.RecordType.DEBT, new Date(), null, 12);
		
		Transaction t1 = new Transaction(HashGen.md5gen("seiferson"), 12.5, "Sears chocolates", Transaction.TransactionType.EXPENSE, new Date());
		Transaction t2 = new Transaction(HashGen.md5gen("seiferson"), 300.0, "Fuel", Transaction.TransactionType.EXPENSE, new Date());
		Transaction t3 = new Transaction(HashGen.md5gen("seiferson"), 130.0, "Uber", Transaction.TransactionType.EXPENSE, new Date());
		
		financialrepo.insert(t1);
		financialrepo.insert(t2);
		financialrepo.insert(t3);
	}
	
}
