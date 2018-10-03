package com.seifernet.wissen.repository.finance;

import java.util.ArrayList;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.finance.Record;

public interface RecordRepository extends MongoRepository<Record, String>{
	
	public ArrayList<Record> findByOwner(String owner); 

}
