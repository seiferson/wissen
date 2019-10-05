package com.seifernet.wissen.util;

import com.seifernet.wissen.model.Account;
import com.seifernet.wissen.repository.AccountRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@Component
public class DataLoader implements ApplicationRunner{
	
	private static final Logger logger = LoggerFactory.getLogger(DataLoader.class);

	@Autowired
	private Environment env;

	@Autowired
	private AccountRepository accounts;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public void run(ApplicationArguments args) {

	}

	public void loadMainAccount(){
		if(!accounts.existsByNickname("wissenmaster")){
			logger.info("Unexistent main account, creating");

			ArrayList<String> authorities = new ArrayList<>();
			authorities.add("USER");
			authorities.add("MASTER");

			Account mainAccount = new Account();
			mainAccount.setEnabled(true);
			mainAccount.setEmail("wissenmaster@seiferson.com");
			mainAccount.setAuthorities(authorities);

			String randomPassword = Utils.getRandomPassword();
			logger.info("Random created password :" + randomPassword);
			mainAccount.setPassword(passwordEncoder.encode(randomPassword));
		}
	}
}
