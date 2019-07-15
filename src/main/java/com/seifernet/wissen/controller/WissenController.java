package com.seifernet.wissen.controller;

//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.seifernet.wissen.model.Account;
import com.seifernet.wissen.repository.AccountRepository;
import com.seifernet.wissen.util.Utils;

/**
 * Application controller
 * 
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@Controller
public class WissenController {
	
	//private static final Logger logger = LoggerFactory.getLogger(WissenController.class);
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AccountRepository repo;
	
	@PostMapping("/accounts/create")
    @ResponseBody
    public ResponseEntity<String> createAccountService(@RequestBody Account account){
    	String message = "";
    	
    	if(
    		Utils.isNotNullOrEmpty(account.getEmail()) &&
    		Utils.isNotNullOrEmpty(account.getPassword()) &&
    		Utils.isNotNullOrEmpty(account.getNickname())
    	) {
    		ArrayList<String> authorities = new ArrayList<String>();
			authorities.add("USER");
		
			account.setEnabled(true);
			account.setPassword(passwordEncoder.encode(account.getPassword()));
			account.setAuthorities(authorities);
    		account = repo.insert(account);
    		
    		return ResponseEntity.ok(message);
    	} else {
    		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(message);
    	}
    }
	
	
}
