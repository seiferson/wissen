package com.seifernet.wissen.model;

import org.springframework.data.annotation.Id;

/**
 * 
 */
public class ScheduledTask {
    
    @Id
    private String id;
    
    private String title;
	
	private Boolean descriptionRequired;
	
	private String description;
	
	private Long dueTime;
	
	private Boolean completed;
	
	private Long completionTime;
	
	private Boolean expires;
	
	private Long expirationTime;
    
}