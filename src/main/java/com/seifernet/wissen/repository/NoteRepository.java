package com.seifernet.wissen.repository;

import com.seifernet.wissen.model.Note;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NoteRepository extends MongoRepository<Note, String> {

    public List<Note> findByOwner(String owner);

    public List<Note> findByTextContainingAndOwner(String text, String owner);

    public Note findByOwnerAndId(String owner, String id);
}
