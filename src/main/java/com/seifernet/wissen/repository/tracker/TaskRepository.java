package com.seifernet.wissen.repository.tracker;

import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;

import com.seifernet.wissen.model.tracker.Task;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
public interface TaskRepository extends MongoRepository<Task, String>{

	@PreAuthorize("authentication.name == #owner")
	public long countByOwnerAndDueDateBetweenAndCompletedTrue(
		@Param("owner") String owner, 
		@Param("startdate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date startDate, 
		@Param("enddate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date endDate
	);

	@PreAuthorize("authentication.name == #owner")
	public long countByOwnerAndExpiredTrueAndExpirationDateBetween(
		@Param("owner") String owner, 
		@Param("startdate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date startDate, 
		@Param("enddate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date endDate
	);

	@PreAuthorize("authentication.name == #owner")
	public long countByOwnerAndDueDateBetweenAndExpiredFalse(
		@Param("owner") String owner, 
		@Param("startdate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date startDate, 
		@Param("enddate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date endDate
	);

	@PreAuthorize("authentication.name == #owner")
	public long countByOwnerAndCompletedTrueAndCompletionDateGreaterThanAndCompletionDateLessThan(
		@Param("owner") String owner, 
		@Param("startdate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date startDate, 
		@Param("enddate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date endDate
	);

	@PreAuthorize("authentication.name == #owner")
	public Page<Task> findByOwnerAndCompletedFalseAndExpiredFalseOrderByCreationDate(@Param("owner") String owner, Pageable pageable);
	
	public ArrayList<Task> findByExpirationDateLessThanAndExpiredFalseAndCompletedFalse(Date currentDate);

	@PostAuthorize("authentication.name == returnObject.owner")
	@Override
	public Optional<Task> findById(String id);
}