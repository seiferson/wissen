package com.seifernet.wissen.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
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
public interface FlashcardRepository extends MongoRepository<Flashcard, String> {
	
	public Page<Flashcard> findByAuthor( @Param( "author" ) String author, Pageable pageable );
	
	public Page<Flashcard> findByQuestion( @Param( "question" ) String author, Pageable pageable );
	
	public Page<Flashcard> findDistictFlashcardsByQuestionRegexIgnoreCaseOrderByIdAsc( @Param( "question" ) String author, Pageable pageable );
	
	public Page<Flashcard> findDistictFlashcardsByQuestionLikeIgnoreCaseOrderByIdAsc( @Param( "question" ) String author, Pageable pageable );
}
