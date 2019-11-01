package com.seifernet.wissen.repository.tracker;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;

import com.seifernet.wissen.model.tracker.Task;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@RepositoryRestResource
public interface TaskRepository extends MongoRepository<Task, String>{

	@RestResource(path = "taskscompletedtoday")
	@PreAuthorize("@hashgen.md5gen(authentication.name) == #owner")
	public long countByOwnerAndDueDateBetweenAndCompletedTrue(
			@Param("owner") String owner,
			@Param("startdate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date startDate,
			@Param("enddate") @DateTimeFormat(pattern = "MM-dd-yyyy/HH-mm") Date endDate
	);

	@RestResource(path = "todo")
	@PreAuthorize("@hashgen.md5gen(authentication.name) == #owner")
	public List<Task> findByOwnerAndCompletedFalseOrCompletedIsNullAndExpiredFalseOrExpiredIsNullOrderByCreationDate(@Param("owner") String owner);

	/**
	@PostAuthorize("@hashgen.md5gen(authentication.name) == returnObject.get().owner")
	@Override
	public Optional<Task> findById(String id);**/
}