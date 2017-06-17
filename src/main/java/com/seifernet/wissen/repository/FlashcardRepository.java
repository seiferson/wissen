package com.seifernet.wissen.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

import com.seifernet.wissen.model.Flashcard;

/**
 * Flashcard repository interface
 * 
 * @author Seifer (Cuauhtemoc Herrera)
 * @version 0.0.1
 *
 */
public interface FlashcardRepository extends MongoRepository<Flashcard, String> {
	
	public Page<Flashcard> findByAuthor(@Param("author") String author, Pageable pageable);
	
	public Page<Flashcard> findByCategory(@Param("category") String category, Pageable pageable);
		
	public Page<Flashcard> findByQuestionLikeIgnoreCase(@Param("question") String question, Pageable pageable);
	
	@PreAuthorize("hasRole('ADMIN') and authentication.name == #flashcard.author")
	@Override
	void delete(Flashcard flashcard);
	
}
