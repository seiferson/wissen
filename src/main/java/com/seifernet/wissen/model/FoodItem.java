package com.seifernet.wissen.model;

import org.springframework.data.annotation.Id;

public class FoodItem {
    
    @Id
	private String id;
	
	private String name;
}
