package com.seifernet.wissen.controller;

import com.seifernet.wissen.model.Note;
import com.seifernet.wissen.repository.NoteRepository;
import com.seifernet.wissen.util.HashGen;
import com.seifernet.wissen.util.ResponseMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@Controller
public class NoteController {

    @Autowired
    private NoteRepository noteRepo;

    private static final Logger logger = LoggerFactory.getLogger(NoteController.class);

    @GetMapping("/api/v1/notes")
    public @ResponseBody ResponseEntity<List<Note>> getNotes(Authentication authentication) {
        return ResponseEntity.ok(noteRepo.findByOwner(HashGen.md5gen(authentication.getName())));
    }

    @GetMapping("/api/v1/notes/search")
    public @ResponseBody ResponseEntity<List<Note>> searchNotes(Authentication authentication, @RequestParam String text) {
        return ResponseEntity.ok(noteRepo.findByTextContainingAndOwner(text, HashGen.md5gen(authentication.getName())));
    }

    @GetMapping("/api/v1/notes/{id}")
    public @ResponseBody ResponseEntity<Note> getNote(Authentication authentication, @PathVariable String id) {
        Note note = noteRepo.findByOwnerAndId(HashGen.md5gen(authentication.getName()), id);
        if(note != null) {
            return ResponseEntity.ok(note);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    @PatchMapping("/api/v1/notes/{id}")
    public @ResponseBody ResponseEntity<ResponseMessage<Note>> updateNote(
        Authentication authentication,
        @PathVariable String id,
        @RequestBody Note updates
    ) {
        Note note = noteRepo.findByOwnerAndId(HashGen.md5gen(authentication.getName()), id);
        if(note != null){
            if(updates.getText() != null) {
                note.setText(updates.getText());
            }

            if(updates.getTitle() != null) {
                note.setTitle(updates.getTitle());
            }

            if(updates.isEncrypted() != null) {
                note.setEncrypted(updates.isEncrypted());
            }

            note.setLastUpdate(new Date());

            noteRepo.save(note);
            return ResponseEntity.ok(new ResponseMessage(
                ResponseMessage.ResponseStatus.SUCCESS,
                "[Note " + id + " updated]",
                note
            ));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseMessage(
            ResponseMessage.ResponseStatus.ERROR,
            "[The note id " + id + " that you are trying to modify, does not exist]",
            null
        ));
    }

    @DeleteMapping("/api/v1/notes/{id}")
    public @ResponseBody ResponseEntity<ResponseMessage> deleteNote(Authentication authentication, @PathVariable String id) {
        Note note = noteRepo.findByOwnerAndId(HashGen.md5gen(authentication.getName()), id);
        if(note != null) {
            noteRepo.delete(note);
            return ResponseEntity.ok(new ResponseMessage(
                ResponseMessage.ResponseStatus.SUCCESS,
                "[Note " + id + " deleted]",
                null
            ));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseMessage(
            ResponseMessage.ResponseStatus.ERROR,
            "[Note with id " + id + " not found]",
            null
        ));
    }

    @PostMapping("/api/v1/notes")
    public @ResponseBody ResponseEntity<ResponseMessage<Note>> createNote(Authentication authentication, @RequestBody @Valid Note note) {
        note.setOwner(HashGen.md5gen(authentication.getName()));
        note = noteRepo.insert(note);
        note.setCreation(new Date());
        note.setDeleted(false);
        note.setLastUpdate(new Date());
        return ResponseEntity.ok(new ResponseMessage<>(
			ResponseMessage.ResponseStatus.SUCCESS,
			"[Note " + note.getId() + " created]",
            note
		));
    }

}
