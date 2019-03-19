package com.seifernet.wissen.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.seifernet.wissen.model.Account;
import com.seifernet.wissen.repository.AccountRepository;
import com.seifernet.wissen.scheduler.Scheduler;

/**
 * 
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@Service
public class CustomUserDetailsService implements UserDetailsService{
	
	private static final Logger logger = LoggerFactory.getLogger(Scheduler.class);

	@Autowired
	private AccountRepository accountRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Account account = accountRepository.findByNickname(username);
		if(account != null) {
			return new User( 
					account.getNickname(),
					account.getPassword(),
					account.getEnabled(),
					account.getEnabled(),
					account.getEnabled(),
					account.getEnabled(),
					account.getGrantedAuthorities()
				);
		} else {
			logger.info("User not found: '" + username + "'");
			throw new UsernameNotFoundException("User not found: '" + username + "'");
		}
	}

}
