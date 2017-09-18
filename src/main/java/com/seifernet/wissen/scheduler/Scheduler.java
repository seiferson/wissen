package com.seifernet.wissen.scheduler;

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

	//@Scheduled(cron="0 0 7 * * MON-FRI")
	@Scheduled(fixedRate = 10000)
	public void createTasks() {
		Task t = new Task();
		
		t.setTitle("Test task generated " + new Date());
		t.setCompleted(false);
		t.setDescription("Does not matter");
		t.setExpires(false);
		t.setDescriptionRequired(true);
		t.setDueDate(new Date((new Date()).getTime()+(1000*60*60*24*3)));
		
		taskRepository.insert(t);
	}
}
