package com.seifernet.wissen.controller;

import com.seifernet.wissen.model.tracker.Task;
import com.seifernet.wissen.repository.tracker.TaskRepository;
import com.seifernet.wissen.util.HashGen;
import com.seifernet.wissen.util.ResponseMessage;
import com.seifernet.wissen.util.ResponseMessage.ResponseStatus;
import io.swagger.models.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * Account controller
 *
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@Controller
public class TaskController {

    @Autowired
    private TaskRepository repo;

    @PostMapping("/api/v1/tasks")
    @ResponseBody
    public ResponseEntity<ResponseMessage> createTaskService(@RequestBody @Valid Task task, Authentication authentication) {
        task.setCompleted(false);
        task.setCompletionDate(null);
        task.setCreationDate(new Date());
        task.setLastUpdate(new Date());
        task.setOwner(HashGen.md5gen(authentication.getName()));

        repo.insert(task);

        return ResponseEntity.ok(new ResponseMessage(ResponseStatus.SUCCESS, "Created task"));
    }

    @GetMapping("/api/v1/tasks/search/todo")
    @ResponseBody
    public ResponseEntity<List<Task>> getIncompleteTasks(Authentication authentication) {
        List<Task> result = repo.findByOwnerAndCompletedFalseOrderByCreationDate(HashGen.md5gen(authentication.getName()));
        return ResponseEntity.ok(result);
    }

    @GetMapping("/api/v1/tasks/search/completed")
    public ResponseEntity<List<Task>> getCompletedTasks(Authentication authentication) {
        List<Task> result = repo.findByOwnerAndCompletedTrueOrderByCompletionDate(HashGen.md5gen(authentication.getName()));
        return ResponseEntity.ok(result);
    }

    @GetMapping("/api/v1/tasks/search/pastdue")
    public ResponseEntity<List<Task>> getPastDueTasks(Authentication authentication) {
        List<Task> result = repo.findByOwnerAndCompletedFalseAndDueDateLessThanOrderByCompletionDate(HashGen.md5gen(authentication.getName()), new Date());
        return ResponseEntity.ok(result);
    }

    @PatchMapping("/api/v1/tasks/{id}")
    @ResponseBody
    public ResponseEntity<ResponseMessage> updateTaskService(
            @RequestBody Task task,
            @PathVariable String id,
            Authentication authentication
    ) {
        Optional<Task> optional = repo.findById(id);
        if(optional.isPresent()){
            Task base = optional.get();

            if(HashGen.md5gen(authentication.getName()).equals(base.getOwner())) {
                if(task.getCompleted() != null){
                    base.setCompleted(task.getCompleted());
                }

                if(!base.getCompleted()) {
                    base.setCompletionDate(null);
                } else {
                    base.setCompletionDate(new Date());
                }

                if(task.getCategory() != null) {
                    base.setCategory(task.getCategory());
                }

                if(task.getDescription() != null){
                    base.setDescription(task.getDescription());
                }

                if(task.getDueDate() != null) {
                    base.setDueDate(task.getDueDate());
                }

                if(task.getTitle() != null && !task.getTitle().trim().equals("") && task.getTitle().length() <= 70) {
                    base.setTitle(task.getTitle());
                }

                if(task.getCategory() != null) {
                    base.setCategory(task.getCategory());
                }

                if(task.getUpdates() != null){
                    base.setUpdates(task.getUpdates());
                }

                base.setLastUpdate(new Date());

                repo.save(base);

                return ResponseEntity.ok(new ResponseMessage(
                    ResponseStatus.SUCCESS,
                    "[Task succesfully updated]"
                ));
            } else {
                return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(new ResponseMessage(
                            ResponseStatus.ERROR,
                            "[Access denied]"
                    ));
            }
        } else {
            return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(null);
        }
    }
}
