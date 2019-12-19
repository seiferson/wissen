package com.seifernet.wissen.controller;

import com.seifernet.wissen.model.tracker.Task;
import com.seifernet.wissen.repository.tracker.TaskRepository;
import com.seifernet.wissen.util.HashGen;
import com.seifernet.wissen.util.ResponseMessage;
import com.seifernet.wissen.util.ResponseMessage.ResponseStatus;
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

    @PatchMapping("/api/v1/tasks/{id}")
    @ResponseBody
    public ResponseEntity<ResponseMessage> updateTaskService(
            @RequestBody @Valid Task task,
            @PathVariable String id,
            Authentication authentication
    ) {
        Optional<Task> optional = repo.findById(id);
        if(optional.isPresent()){
            Task base = optional.get();

            if(HashGen.md5gen(authentication.getName()).equals(base.getOwner())) {
                base.setCategory(task.getCategory());
                if(!base.getCompleted() && task.getCompleted()) {
                    base.setCompleted(task.getCompleted());
                    base.setCompletionDate(new Date());
                } else if(base.getCompleted() && !task.getCompleted()) {
                    base.setCompleted(task.getCompleted());
                    base.setCompletionDate(null);
                }
                base.setDescription(task.getDescription());
                base.setDueDate(task.getDueDate());
                base.setLastUpdate(new Date());
                base.setTitle(task.getTitle());
                base.setCategory(task.getCategory());
                base.setUpdates(task.getUpdates());

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
