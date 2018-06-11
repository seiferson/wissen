package com.seifernet.wissen.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.ScheduledTask;

public interface ScheduledTaskRepository extends MongoRepository<ScheduledTask, String>{
	
	

}
