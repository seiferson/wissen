package com.seifernet.wissen.util;

import java.security.MessageDigest;

import javax.xml.bind.DatatypeConverter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.seifernet.wissen.configuration.CustomProperties;
import com.seifernet.wissen.model.Account;
import com.seifernet.wissen.repository.AccountRepository;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@Component
public class DataLoader implements ApplicationRunner{
	
	@Autowired
	private CustomProperties properties;
	
	@Autowired
	private AccountRepository accrepo;
	
	private static final Logger logger = LoggerFactory.getLogger(DataLoader.class);
	
	public void run(ApplicationArguments args) {
		if(properties.getProfile().equals("DEVENV")){
			accountLoader();
		}
	}
	
	private void accountLoader(){
		Account a = new Account();
		
		a.setEmail("seifer.ch@gmail.com");
		a.setNickname("seiferson");
		a.setEnabled(true);
		logger.info("Test account :" + a.getNickname());
		
		try{
			MessageDigest md = MessageDigest.getInstance("MD5");
			md.update("testPasswd13".getBytes());
			byte[] digest = md.digest();
			a.setPassword(DatatypeConverter.printHexBinary(digest).toUpperCase());
			logger.info("Test password : testPasswd13");
		} catch (Exception e){
			logger.error("Error on data initialization: account-password");
			logger.debug(e.getStackTrace().toString());
			a.setPassword("4101bef8794fed986e95dfb54850c68b");
			logger.info("Test password : nope");
		}
		
		accrepo.insert(a);
	}
	
}
