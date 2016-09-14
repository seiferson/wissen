package com.seifernet.wissen.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
public interface FlashcardRepository extends MongoRepository<Flashcard, String> {
	
	public Page<Flashcard> findByAuthor( String author, Pageable pageable );
	
	public Page<Flashcard> findByQuestion( String author, Pageable pageable );
	
	public Page<Flashcard> findDistictFlashcardsByQuestionRegexIgnoreCaseOrderByIdAsc( String author, Pageable pageable );
	
	public Page<Flashcard> findDistictFlashcardsByQuestionLikeIgnoreCaseOrderByIdAsc( String author, Pageable pageable );
}
