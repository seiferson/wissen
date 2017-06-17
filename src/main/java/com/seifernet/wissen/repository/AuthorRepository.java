package com.seifernet.wissen.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seifernet.wissen.model.Author;

/**
 * 
 * @author Seifer( Cuauhtemoc Herrera )
 * @version 0.0.1
 *
 */
public interface AuthorRepository extends MongoRepository<Author, String>{
	
	public Author findByNickname(String nickname);
	
	public Author findByClientId(String cliendId);
	
}
