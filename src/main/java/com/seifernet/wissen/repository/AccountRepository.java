package com.seifernet.wissen.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.Account;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
public interface AccountRepository extends MongoRepository<Account, String>{
	
	public Account findByNickname(String nickname);
}
