package com.seifernet.wissen.scheduler;

import java.util.ArrayList;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.seifernet.wissen.model.ScheduledTask;
import com.seifernet.wissen.model.Task;
import com.seifernet.wissen.repository.ScheduledTaskRepository;
import com.seifernet.wissen.repository.TaskRepository;

@Component
public class Scheduler {
	private static final Logger logger = LoggerFactory.getLogger(Scheduler.class);
	
	@Autowired
	private TaskRepository taskRepository;
	
	@Autowired
	private ScheduledTaskRepository scheduledTaskRepository;

	@Scheduled(fixedRate = 10000)
	public void watchDog() {
		ArrayList<Task> expiredTasks = taskRepository.findByExpirationDateLessThanAndExpiredFalseAndExpiresTrueAndCompletedFalse(new Date());
		for(Task expiredTask : expiredTasks){
			expiredTask.setExpired(true);
			taskRepository.save(expiredTask);
		}
	}
	
	@Scheduled(cron="0 0 5 * * MON-FRI")
	public void weekDayTaskCreator(){
		ArrayList<ScheduledTask> scheduledTasks = new ArrayList<>(scheduledTaskRepository.findAll());
		for(ScheduledTask sTask : scheduledTasks) {
			Task t = new Task();
			t.setTitle(sTask.getTitle());
			t.setOwner(sTask.getOwner());
			t.setDescriptionRequired(true);
			t.setDescription(sTask.getDescription());
			t.setDueDate(new Date(new Date().getTime()+sTask.getDueTime()));
			t.setCompleted(false);
			t.setCreationDate(new Date());
			t.setExpires(true);
			t.setExpired(false);
			t.setExpirationDate(new Date(new Date().getTime()+sTask.getExpirationTime()));
			
			taskRepository.insert(t);
		}
	}
	
	
}
