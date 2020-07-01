package com.seifernet.wissen.repository.finance;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.finance.Transaction;

public interface TransactionRepository extends MongoRepository<Transaction, String>{

	public List<Transaction> findByOwnerAndDateBetween(
			String owner,
			Date start,
			Date end
	);
}
