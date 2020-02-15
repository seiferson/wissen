package com.seifernet.wissen.controller;

import com.seifernet.wissen.model.ChartData;
import com.seifernet.wissen.model.tracker.Task;
import com.seifernet.wissen.repository.tracker.TaskRepository;
import com.seifernet.wissen.util.HashGen;
import com.seifernet.wissen.util.ResponseMessage;
import com.seifernet.wissen.util.ResponseMessage.ResponseStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
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

    @DeleteMapping("/api/v1/tasks/{id}")
    @ResponseBody
    public ResponseEntity<ResponseMessage> deleteTaskService(@PathVariable String id, Authentication authentication) {
        Optional<Task> optional = repo.findById(id);

        if(optional.isPresent()){
            Task base = optional.get();

            if(HashGen.md5gen(authentication.getName()).equals(base.getOwner())) {
                repo.delete(base);
                return ResponseEntity.ok(new ResponseMessage(
                        ResponseStatus.SUCCESS,
                        "[Task successfully deleted]"
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
    public ResponseEntity<Page<Task>> getIncompleteTasks(Authentication authentication, @RequestParam int page, @RequestParam int size) {
        Pageable pageData = PageRequest.of(page,size);
        Page<Task> result = repo.findByOwnerAndCompletedFalseOrderByCreationDate(HashGen.md5gen(authentication.getName()), pageData);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/api/v1/tasks/search/completed")
    public ResponseEntity<Page<Task>> getCompletedTasks(Authentication authentication, @RequestParam int page, @RequestParam int size) {
        Pageable pageData = PageRequest.of(page,size);
        Page<Task> result = repo.findByOwnerAndCompletedTrueOrderByCompletionDate(HashGen.md5gen(authentication.getName()), pageData);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/api/v1/tasks/search/pastdue")
    public ResponseEntity<Page<Task>> getPastDueTasks(Authentication authentication, @RequestParam int page, @RequestParam int size) {
        Pageable pageData = PageRequest.of(page,size);
        Page<Task> result = repo.findByOwnerAndCompletedFalseAndDueDateLessThanOrderByCompletionDate(HashGen.md5gen(authentication.getName()), new Date(), pageData);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/api/v1/tasks/search/chartdata")
    public ResponseEntity<ChartData> getTasksChartData(Authentication authentication) {
        ChartData result = new ChartData();

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

                if(task.getDescription() != null){
                    base.setDescription(task.getDescription());
                }

                if(task.getDueDate() != null) {
                    base.setDueDate(task.getDueDate());
                }

                if(task.getTitle() != null && !task.getTitle().trim().equals("") && task.getTitle().length() <= 70) {
                    base.setTitle(task.getTitle());
                }

                if(task.getTags() != null) {
                    base.setTags(task.getTags());
                }

                base.setLastUpdate(new Date());

                repo.save(base);

                return ResponseEntity.ok(new ResponseMessage(
                    ResponseStatus.SUCCESS,
                    "[Task successfully updated]"
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
