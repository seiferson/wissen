package com.seifernet.wissen.model;

import org.springframework.data.annotation.Id;

public class FoodInventory {
    
    @Id
    private String id;
    
    private FoodItem item;
    
    private String measure;
    
    private Long amount;
}
