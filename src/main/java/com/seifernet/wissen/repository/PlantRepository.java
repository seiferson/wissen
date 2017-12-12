package com.seifernet.wissen.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.Plant;

public interface PlantRepository extends MongoRepository<Plant, String>{
    
    public Page<Plant> findTop1ByOrderByLastWaterDesc(Pageable pageable);
}
