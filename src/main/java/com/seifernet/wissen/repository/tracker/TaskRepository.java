package com.seifernet.wissen.repository.tracker;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.tracker.Task;
import org.springframework.data.mongodb.repository.Query;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
public interface TaskRepository extends MongoRepository<Task, String>{

	public Page<Task> findByOwnerAndCompletedFalseOrderByCreationDate(String owner, Pageable pageable);

	public Page<Task> findByOwnerAndCompletedTrueOrderByCompletionDate(String owner, Pageable pageable);

	public Page<Task> findByOwnerAndCompletedFalseAndDueDateLessThanOrderByCompletionDate(String owner, Date dueDate, Pageable pageable);

	public Page<Task> findByOwnerAndTagsIn(String owner, List<String> tags, Pageable pageable);

}