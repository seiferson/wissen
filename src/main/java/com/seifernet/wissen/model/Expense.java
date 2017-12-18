package com.seifernet.wissen.model;

import org.springframework.data.annotation.Id;

/**
 * 
 * @author Seiferson (Cuauhtemoc Herrera)
 */
public class Expense {
	
	@Id
	private String id;
	
	private String detail;
	
	private Double amount;
	
}
