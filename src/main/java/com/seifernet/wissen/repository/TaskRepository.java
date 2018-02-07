package com.seifernet.wissen.repository;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

import com.seifernet.wissen.model.Task;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
public interface TaskRepository extends MongoRepository<Task, String>{
	
	public ArrayList<Task> findAllByExpiresTrueAndExpirationDateLessThanAndCompletedFalseAndActiveTrueOrderByCreationDate(Date currentDate);
	
	@PreAuthorize("authentication.name == #owner")
	public Page<Task> findAllByOwnerAndCompletedFalseAndActiveTrueOrderByCreationDate(@Param("owner") String owner, Pageable pageable);
}