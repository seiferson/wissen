package com.seifernet.wissen.repository.finance;

import java.util.ArrayList;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.finance.Transaction;

public interface TransactionRepository extends MongoRepository<Transaction, String>{

	
	public ArrayList<Transaction> findByOwner(String owner);
}
