package com.seifernet.wissen.service;

import org.springframework.beans.factory.annotation.Autowired;
/*
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;*/
import org.springframework.stereotype.Service;

import com.seifernet.wissen.model.Author;
import com.seifernet.wissen.repository.AuthorRepository;

@Service
public class AccountUserDetailsService {/*implements UserDetailsService{

	@Autowired
	private AuthorRepository authorRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Author account = authorRepository.findByNickname(username);
		if(account != null) {
			System.out.println(account.getNickname());
			System.out.println(account.getPassword());
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
			throw new UsernameNotFoundException("User not found: '" + username + "'");
		}
	}*/

}
