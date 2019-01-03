package com.seifernet.wissen.repository.scheduler;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.scheduler.ScheduledActivity;

public interface ScheduledActivityRepository extends MongoRepository<ScheduledActivity, String>{
	
	public List<ScheduledActivity> findAllByOrderByPriorityDesc();
}
