package com.seifernet.wissen.controller;

import com.seifernet.wissen.model.tracker.Task;
import com.seifernet.wissen.repository.tracker.TaskRepository;
import com.seifernet.wissen.util.HashGen;
import com.seifernet.wissen.util.ResponseMessage;
import com.seifernet.wissen.util.ResponseMessage.ResponseStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

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
}
