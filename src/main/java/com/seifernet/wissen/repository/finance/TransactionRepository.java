package com.seifernet.wissen.repository.finance;

import java.util.Date;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.access.prepost.PreAuthorize;

import com.seifernet.wissen.model.finance.Transaction;

public interface TransactionRepository extends MongoRepository<Transaction, String>{
	/**
	@PreAuthorize("@hashgen.md5gen(authentication.name) == #owner")
	public Page<Transaction> findByOwnerAndDateBetween(
		@Param("owner") String owner, 
		@Param("start") @DateTimeFormat(pattern = "MM-dd-yyyy-HH-mm") Date start, 
		@Param("end") @DateTimeFormat(pattern = "MM-dd-yyyy-HH-mm") Date end, 
		Pageable pageable
	);*/
}
