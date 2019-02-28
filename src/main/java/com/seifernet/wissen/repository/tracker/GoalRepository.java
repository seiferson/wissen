package com.seifernet.wissen.repository.tracker;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.security.access.prepost.PreAuthorize;

import com.seifernet.wissen.model.tracker.Goal;

public interface GoalRepository extends MongoRepository<Goal,String>{

	@RestResource(path = "mygoals")
	@PreAuthorize("@hashgen.md5gen(authentication.name) == #owner")
	public List<Goal> findByOwner(@Param("owner") String owner);
}
