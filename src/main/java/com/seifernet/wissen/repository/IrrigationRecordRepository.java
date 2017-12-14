package com.seifernet.wissen.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.IrrigationRecord;

public interface IrrigationRecordRepository extends MongoRepository<IrrigationRecord, String>{
	
	
	public IrrigationRecord findTop1ByOrderByDateDesc();
}
