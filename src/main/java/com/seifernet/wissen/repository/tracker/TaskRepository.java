package com.seifernet.wissen.repository.tracker;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.tracker.Task;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
public interface TaskRepository extends MongoRepository<Task, String>{

	public List<Task> findByOwnerAndCompletedFalseOrderByCreationDate(String owner);

	public List<Task> findByOwnerAndCompletedTrueOrderByCompletionDate(String owner);
}