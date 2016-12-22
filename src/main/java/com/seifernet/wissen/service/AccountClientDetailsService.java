package com.seifernet.wissen.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.provider.ClientDetails;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.security.oauth2.provider.ClientRegistrationException;
import org.springframework.stereotype.Service;

import com.seifernet.wissen.model.AccountClientDetails;
import com.seifernet.wissen.model.Author;
import com.seifernet.wissen.repository.AuthorRepository;

/**
 * 
 * @author cuauhteh
 *
 */
@Service
public class AccountClientDetailsService implements ClientDetailsService{

	@Autowired
	private AuthorRepository authorRepository;
	
	@Override
	public ClientDetails loadClientByClientId(String clientId) throws ClientRegistrationException {
		Author account = authorRepository.findByNickname(clientId);
		if(account != null) {
			return new AccountClientDetails(account);
		} else {
			throw new ClientRegistrationException("Client not found: '" + clientId + "'");
		}
	}

}
