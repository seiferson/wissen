package com.seifernet.wissen.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.Author;

/**
 * 
 * @author Seifer( Cuauhtemoc Herrera )
 *
 */
public interface AuthorRepository extends MongoRepository<Author, String>{
	
	public Author findByNickname( String nickname );
	
}
