package com.seifernet.wissen.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.seifernet.wissen.model.Flashcard;

/**
 * 
 * @author Seifer ( Cuauhtemoc Herrera )
 * @version 0.0.1
 * @since 0.0.1
 *
 */
@RepositoryRestResource( collectionResourceRel = "flashcard", path = "flashcard" )
public interface FlashcardRepository extends MongoRepository<Flashcard, String>{
	
}
