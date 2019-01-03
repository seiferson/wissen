package com.seifernet.wissen.model.scheduler;

import java.util.Date;

import org.springframework.data.annotation.Id;

public class SchedulerLog {

	@Id
	private String id;
	
	private String activityId;
	
	private Integer globalCount;
	
	private Integer errorCount;
	
	private Boolean lastExecutionError;
	
	private Date lastExecution;
	
	private String error;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getActivityId() {
		return activityId;
	}

	public void setActivityId(String activityId) {
		this.activityId = activityId;
	}

	public Integer getGlobalCount() {
		return globalCount;
	}

	public void setGlobalCount(Integer globalCount) {
		this.globalCount = globalCount;
	}

	public Integer getErrorCount() {
		return errorCount;
	}

	public void setErrorCount(Integer errorCount) {
		this.errorCount = errorCount;
	}

	public Boolean getLastExecutionError() {
		return lastExecutionError;
	}

	public void setLastExecutionError(Boolean lastExecutionError) {
		this.lastExecutionError = lastExecutionError;
	}

	public Date getLastExecution() {
		return lastExecution;
	}

	public void setLastExecution(Date lastExecution) {
		this.lastExecution = lastExecution;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}
}
