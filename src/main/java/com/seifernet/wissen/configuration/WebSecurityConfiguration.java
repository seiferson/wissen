package com.seifernet.wissen.configuration;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.seifernet.wissen.model.Account;
import com.seifernet.wissen.repository.AccountRepository;


/**
 * Web security configuration
 * 
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private AccountRepository repository;
	
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		ArrayList<String> authorities = new ArrayList<String>();
		authorities.add("ADMIN");
		Account account = new Account();
		account.setNickname("seiferson");
		account.setEmail("seifer.ch@gmail.com");
		account.setEnabled(true);
		account.setPassword("testpasswd");
		account.setAuthorities(authorities);
		
		repository.insert(account);
		return super.authenticationManagerBean();
	}
}
