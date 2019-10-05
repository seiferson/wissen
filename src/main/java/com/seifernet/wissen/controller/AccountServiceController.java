package com.seifernet.wissen.controller;

import com.seifernet.wissen.util.HashGen;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.seifernet.wissen.model.Account;
import com.seifernet.wissen.repository.AccountRepository;
import com.seifernet.wissen.util.Utils;

/**
 * Account service controller
 * 
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@Controller
public class AccountServiceController {
	
	private static final Logger logger = LoggerFactory.getLogger(AccountServiceController.class);
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AccountRepository repo;
	
	@PostMapping("/account")
    @ResponseBody
    public ResponseEntity<String> createAccountService(@RequestBody Account account){
		if(
				Utils.isNotNullOrEmpty(account.getEmail()) &&
				Utils.isNotNullOrEmpty(account.getPassword()) &&
				Utils.isNotNullOrEmpty(account.getNickname())
		) {
    		ArrayList<String> authorities = new ArrayList<>();
			authorities.add("USER");
		
			account.setEnabled(true);
			account.setPassword(passwordEncoder.encode(account.getPassword()));
			account.setAuthorities(authorities);
			account.setCreationDate(new Date());
			account.setLastUpdate(new Date());
			account.setAvatarSeed(HashGen.md5gen(Utils.getRandomPassword()));

			Calendar cal = Calendar.getInstance();
			cal.setTime(new Date());
			cal.add(Calendar.DAY_OF_MONTH, 30);
			account.setValidationTokenExpiration(cal.getTime());
			account.setValidationToken(HashGen.md5gen(Utils.getRandomPassword()));

			try {
				account = repo.insert(account);
			} catch(DuplicateKeyException e){
				logger.error(e.getMessage());
				return ResponseEntity
						.badRequest()
						.body("Error creating account, email or nickname not available");
			} catch(Exception e){
				logger.error(e.getMessage());
				return ResponseEntity
						.status(HttpStatus.INTERNAL_SERVER_ERROR)
						.body("Error creating account, server error");
			}

			//TODO send a mail with the activation link
    		return ResponseEntity.ok(
    				"Success: " +
					account.getId() +
					" account created, please follow the link sent to your mail address to activate your account");
    	} else {
    		return ResponseEntity
					.badRequest()
					.body("Error creating account, empty required field");
    	}
    }

	@GetMapping("/activate")
	@ResponseBody
    public ResponseEntity<String> activateAccountService(@RequestParam String token, @RequestParam String nickname){
		Account account = repo.findByNickname(nickname);
		Date currentDate = new Date();

		if(account == null){
			return ResponseEntity
					.badRequest()
					.body("Invalid token/account combination");
		}

		if(account.isEnabled()){
			return ResponseEntity
					.badRequest()
					.body("Account already active");
		}

		if(account.getValidationTokenExpiration().after(currentDate) || !account.getValidationToken().equals(token)){
			return ResponseEntity
					.badRequest()
					.body("Invalid or expired token");
		}

		account.setValidationTokenExpiration(null);
		account.setValidationToken(null);
		account.setEnabled(true);

		repo.save(account);

		return ResponseEntity
				.ok()
				.body("Account activated");
	}

	@GetMapping("/account/{nickname}")
	@ResponseBody
    public ResponseEntity<Account> checkAccountService(@PathVariable String nickname, Authentication authentication){
		Account account = repo.findByNickname(nickname);

		if(account == null){
			return ResponseEntity
					.status(HttpStatus.NOT_FOUND)
					.body(null);
		}

		account.setPassword(null);
		account.setLastUpdate(null);
		account.setValidationToken(null);
		account.setId(null);

		if(authentication != null && account.getNickname().equals(authentication.getName())){
			return ResponseEntity
					.ok()
					.body(account);
		} else {
			account.setAuthorities(null);
			account.setCreationDate(null);
			account.setEmail(null);
			account.setEnabled(null);
			return ResponseEntity
					.ok()
					.body(account);
		}
	}

	@GetMapping("/recover")
	@ResponseBody
	public ResponseEntity<String> recoverPassword(@RequestParam String nickname){
		Account account = repo.findByNickname(nickname);

		if(account == null){
			return ResponseEntity
					.badRequest()
					.body("Invalid account");
		}

		//TODO send mail with new password?
		return null;
	}

	@PatchMapping("/account")
	@ResponseBody
	public ResponseEntity<String> updateAccount(@RequestBody Account account, Authentication authentication){
		if(
				authentication != null &&
				authentication.isAuthenticated() &&
				!authentication.getName().equals(account.getNickname())
		) {
			if (
					Utils.isNotNullOrEmpty(account.getPassword()) &&
					Utils.isNotNullOrEmpty(account.getNickname()) &&
					Utils.isNotNullOrEmpty(account.getEmail())
			) {
				Account base = repo.findByNickname(account.getNickname());
				if(!base.getEmail().equals(account.getEmail())){
					base.setEmail(account.getEmail());
					base.setEnabled(false);

					Calendar cal = Calendar.getInstance();
					cal.setTime(new Date());
					cal.add(Calendar.DAY_OF_MONTH, 30);
					account.setValidationTokenExpiration(cal.getTime());
					account.setValidationToken(HashGen.md5gen(Utils.getRandomPassword()));

					//TODO Send a validation mail with token
				}
				base.setPassword(passwordEncoder.encode(account.getPassword()));

				repo.save(base);
				//TODO Send a mail informing a password change

				return ResponseEntity.ok().body("Password/email succesfully changed");
			} else {
				return ResponseEntity
						.badRequest()
						.body("Error updating account password, empty required field");
			}
		} else {
			return ResponseEntity
					.status(HttpStatus.UNAUTHORIZED)
					.body("Access denied");
		}
	}

}
