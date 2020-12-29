package com.seifernet.wissen.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.Account;

import java.util.List;
import java.util.Optional;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
public interface AccountRepository extends MongoRepository<Account, String>{
	
	public Optional<Account> findByNickname(String nickname);

	public boolean existsByNickname(String nickname);
}
