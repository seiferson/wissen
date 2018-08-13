package com.seifernet.wissen.repository.finance;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.finance.Asset;

public interface AssetRepository extends MongoRepository<Asset, String>{

}
