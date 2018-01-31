package com.seifernet.wissen.repository;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.Task;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
public interface TaskRepository extends MongoRepository<Task, String>{
	
	public ArrayList<Task> findAllByExpiresTrueAndExpirationDateLessThanAndCompletedFalseAndActiveTrueOrderByCreationDate(Date currentDate);
}