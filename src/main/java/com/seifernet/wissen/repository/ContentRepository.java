package com.seifernet.wissen.repository;

import com.seifernet.wissen.model.Content;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContentRepository extends MongoRepository<Content, String> {

}
