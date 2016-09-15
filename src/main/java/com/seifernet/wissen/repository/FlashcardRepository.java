package com.seifernet.wissen.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import com.seifernet.wissen.model.Flashcard;

/**
 * 
 * @author Seifer ( Cuauhtemoc Herrera )
 * @version 0.0.1
 * @since 0.0.1
 *
 */
public interface FlashcardRepository extends MongoRepository<Flashcard, String> {
	
	public Page<Flashcard> findByAuthor(  @Param( "author" ) String author, Pageable pageable );
	
	public Page<Flashcard> findByQuestion(  @Param( "question" ) String question, Pageable pageable );
	
	public Page<Flashcard> findByQuestionRegexIgnoreCase( @Param( "question" ) String question, Pageable pageable );
	
	public Page<Flashcard> findByQuestionLikeIgnoreCase( @Param( "question" ) String question, Pageable pageable );
}
