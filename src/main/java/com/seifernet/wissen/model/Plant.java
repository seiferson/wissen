package com.seifernet.wissen.model;

import java.util.Date;

import org.springframework.data.annotation.Id;

public class Plant {
    
    @Id
    private String id;
    
    private Date lastWater;
    
    public String getId(){
        return id;
    }
    
    public void setId(String id){
        this.id = id;
    }
    
    public Date getLastWater(){
        return lastWater;
    }
    
    public void setLastWater(Date lastWater){
        this.lastWater = lastWater;
    }
}
