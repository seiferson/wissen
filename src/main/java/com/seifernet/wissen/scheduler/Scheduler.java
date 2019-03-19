package com.seifernet.wissen.scheduler;

import java.util.ArrayList;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.seifernet.wissen.model.scheduler.ScheduledActivity;
import com.seifernet.wissen.model.scheduler.SchedulerLog;
import com.seifernet.wissen.repository.scheduler.ScheduledActivityRepository;
import com.seifernet.wissen.repository.scheduler.SchedulerLogRepository;

@Component
public class Scheduler {
	
	private static final Logger logger = LoggerFactory.getLogger(Scheduler.class);
	private static final String LOG_DATA = "logData";
	
	@Autowired
	private ScheduledActivityRepository repo;
	
	@Autowired
	private SchedulerLogRepository logRepo;
	
	@Scheduled(fixedRate = 10000)
	public void manager() {
		logger.info("Starting scheduler execution");
		ArrayList<ScheduledActivity> itinerary = new ArrayList<ScheduledActivity>(repo.findAllByOrderByPriorityDesc());
		
		logger.info("Activities on itinerary: " + itinerary.size());
		for(ScheduledActivity activity : itinerary) {
			logger.info("Executing activity " + activity.getName());
			switch(activity.getActivityId()) {
				case LOG_DATA:
					SchedulerLog executionData = getLog(LOG_DATA);
					TaskPerformer.logData(executionData, activity);
					saveLog(executionData);
					break;
				default:
					
			}
		}
	}
	
	private SchedulerLog getLog(String activityId) {
		SchedulerLog executionData = null;
		Optional<SchedulerLog> optData = logRepo.findByActivityId(LOG_DATA);
		if(!optData.isPresent()) {
			executionData = new SchedulerLog();
			executionData.setActivityId(activityId);
			executionData.setGlobalCount(0);
			executionData.setErrorCount(0);
			executionData = logRepo.insert(executionData);
		} else {
			executionData = optData.get();
		}
		return executionData;
	}
	
	private void saveLog(SchedulerLog executionData) {
		logRepo.save(executionData);
	}
	
}
