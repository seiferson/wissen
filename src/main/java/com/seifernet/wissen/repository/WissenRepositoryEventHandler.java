package com.seifernet.wissen.repository;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.seifernet.wissen.model.Account;

@RepositoryEventHandler
public class WissenRepositoryEventHandler {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@HandleBeforeCreate
	public void handleAccountCreation(Account account){
		ArrayList<String> authorities = new ArrayList<String>();
		authorities.add("USER");
		
		account.setEnabled(true);
		account.setPassword(passwordEncoder.encode(account.getPassword()));
		account.setAuthorities(authorities);
	}
}
