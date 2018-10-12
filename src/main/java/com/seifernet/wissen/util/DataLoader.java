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
	}
	
}
