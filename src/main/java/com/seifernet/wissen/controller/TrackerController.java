package com.seifernet.wissen.controller;

import com.seifernet.wissen.model.tracker.Task;
import com.seifernet.wissen.util.HashGen;
import com.seifernet.wissen.util.Utils;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

@Controller
public class TrackerController {

    @PostMapping("/task")
    @ResponseBody
    public ResponseEntity<String> createTask(@RequestBody Task task, Authentication authentication){

        if(Utils.isNotNullOrEmpty(task.getTitle())){
            task.setCompleted(false);
            task.setCompletionDate(null);
            task.setCreationDate(new Date());
            task.setOwner(HashGen.md5gen(authentication.getName()));
        }

        return null;
    }
}
