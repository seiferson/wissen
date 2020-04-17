package com.seifernet.wissen.repository.finance;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.access.prepost.PreAuthorize;

import com.seifernet.wissen.model.finance.Transaction;

public interface TransactionRepository extends MongoRepository<Transaction, String>{

	public List<Transaction> findByOwnerAndDateBetween(
			String owner,
			Date start,
			Date end
	);
}
