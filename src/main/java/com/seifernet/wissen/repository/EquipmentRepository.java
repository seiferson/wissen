package com.seifernet.wissen.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.rpg.Equipment;

public interface EquipmentRepository extends MongoRepository<Equipment, String> {

}
