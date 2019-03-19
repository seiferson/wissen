package com.seifernet.wissen.repository.scheduler;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.scheduler.SchedulerLog;

public interface SchedulerLogRepository extends MongoRepository<SchedulerLog,String>{

	public Optional<SchedulerLog> findByActivityId(String activityId);
}
