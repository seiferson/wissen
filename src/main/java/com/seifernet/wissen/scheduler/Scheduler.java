package com.seifernet.wissen.scheduler;

import java.util.ArrayList;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.seifernet.wissen.model.Task;
import com.seifernet.wissen.repository.TaskRepository;

@Component
public class Scheduler {
	private static final Logger logger = LoggerFactory.getLogger(Scheduler.class);
	
	@Autowired
	private TaskRepository taskRepository;

	@Scheduled(fixedRate = 10000)
	public void watchDog() {
		ArrayList<Task> expiredTasks = taskRepository.findByExpirationDateLessThanAndExpiredFalseAndExpiresTrueAndCompletedFalse(new Date());
		for(Task expiredTask : expiredTasks){
			expiredTask.setExpired(true);
			taskRepository.save(expiredTask);
		}
	}
	
	@Scheduled(cron="0 0 7 * * MON-FRI")
	public void weekDayTaskCreator(){
		
	}
	
	
}
