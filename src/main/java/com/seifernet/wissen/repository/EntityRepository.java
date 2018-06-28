package com.seifernet.wissen.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.rpg.Entity;

public interface EntityRepository extends MongoRepository<Entity, String> {

}
