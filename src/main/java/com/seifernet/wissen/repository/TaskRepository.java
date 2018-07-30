package com.seifernet.wissen.repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;

import com.seifernet.wissen.model.Task;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
public interface TaskRepository extends MongoRepository<Task, String>{
	
	@RestResource(path = "taskscompletedtoday")
	@PreAuthorize("authentication.name == #owner")
	public long countByOwnerAndDueDateBetweenAndCompletedTrue(
		@Param("owner") String owner, 
		@Param("startdate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date startDate, 
		@Param("enddate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date endDate
	);

	@RestResource(path = "expiredcountbydaterange")
	@PreAuthorize("authentication.name == #owner")
	public long countByOwnerAndExpiredTrueAndExpirationDateBetween(
		@Param("owner") String owner, 
		@Param("startdate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date startDate, 
		@Param("enddate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date endDate
	);
	
	@RestResource(path = "duedatecountbydaterange")
	@PreAuthorize("authentication.name == #owner")
	public long countByOwnerAndDueDateBetweenAndExpiredFalse(
		@Param("owner") String owner, 
		@Param("startdate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date startDate, 
		@Param("enddate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date endDate
	);
	
	@RestResource(path = "completedcountbydaterange")
	@PreAuthorize("authentication.name == #owner")
	public long countByOwnerAndCompletedTrueAndCompletionDateGreaterThanAndCompletionDateLessThan(
		@Param("owner") String owner, 
		@Param("startdate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date startDate, 
		@Param("enddate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date endDate
	);
	
	@RestResource(path = "mytasks")
	@PreAuthorize("authentication.name == #owner")
	public Page<Task> findByOwnerAndCompletedFalseAndExpiredFalseOrderByCreationDate(@Param("owner") String owner, Pageable pageable);
	
	public ArrayList<Task> findByExpirationDateLessThanAndExpiredFalseAndExpiresTrueAndCompletedFalse(Date currentDate);
	
	//@PostAuthorize("authentication.name == returnObject.owner")
	
	
}