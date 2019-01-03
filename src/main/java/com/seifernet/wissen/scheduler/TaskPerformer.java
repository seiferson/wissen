package com.seifernet.wissen.scheduler;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.seifernet.wissen.model.scheduler.ScheduledActivity;
import com.seifernet.wissen.model.scheduler.SchedulerLog;
import com.seifernet.wissen.util.GlobalDefinitions;

public class TaskPerformer {
	
	private static final Logger logger = LoggerFactory.getLogger(TaskPerformer.class);
	
	public static void logData(SchedulerLog executionData, ScheduledActivity activity) {
		executionData.setGlobalCount(executionData.getGlobalCount()+1);
		executionData.setLastExecution(new Date());
		
		if(activity.getData() != null && !activity.getData().trim().equals(GlobalDefinitions.EMPTY_STRING)) {
			logger.error(GlobalDefinitions.LOG_ACTIVITY_MESSAGE + activity.getData());
			executionData.setErrorCount(0);
			executionData.setLastExecutionError(false);
			executionData.setError("");
		} else {
			executionData.setErrorCount(executionData.getErrorCount()+1);
			executionData.setLastExecutionError(true);
			executionData.setError(GlobalDefinitions.LOG_ACTIVITY_ERROR);
		}
	}
}
