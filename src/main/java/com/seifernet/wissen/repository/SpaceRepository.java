package com.seifernet.wissen.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.rpg.Space;

public interface SpaceRepository extends MongoRepository<Space, String> {

}
