package com.seifernet.wissen.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.Task;

public interface TaskRepository extends MongoRepository<Task, String>{

	
}