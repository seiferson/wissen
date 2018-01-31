package com.seifernet.wissen.scheduler;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.seifernet.wissen.model.Task;
import com.seifernet.wissen.repository.TaskRepository;

@Component
public class Scheduler {
	
	@Autowired
	private TaskRepository taskRepository;

	@Scheduled(fixedRate = 10000)
	public void watchDog() {
		
		ArrayList<Task> expiredTasks = taskRepository.findAllByExpiresTrueAndExpirationDateLessThanAndCompletedFalseAndActiveTrueOrderByCreationDate(new Date());
		for(Task expiredTask : expiredTasks){
			expiredTask.setActive(false);
			taskRepository.save(expiredTask);
		}
	}
	
	@Scheduled(cron="0 0 7 * * MON-FRI")
	public void weekDayTaskCreator(){
		
	}
	
	
}
