package com.seifernet.wissen.rpg;

public enum DamageType {
    
    //TODO Desc
    PHYSICAL("");
    
    private final String type;
    
    private DamageType(String type){
        this.type = type;
    }
    
    public String getType(){
        return type;
    }
}
