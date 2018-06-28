package com.seifernet.wissen.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.rpg.Player;

public interface PlayerRepository extends MongoRepository<Player, String>{

}
