package com.seifernet.wissen.controller;

import com.seifernet.wissen.model.Content;
import com.seifernet.wissen.repository.ContentRepository;
import com.seifernet.wissen.util.ResponseMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.Valid;

@Controller
public class ContentController {

    @Autowired
    ContentRepository contentRepository;

    private static final Logger logger = LoggerFactory.getLogger(ContentController.class);

    @PostMapping("/api/v1/content")
    public @ResponseBody ResponseEntity<ResponseMessage> postContentService(
        @RequestBody @Valid Content content,
        Authentication authentication
    ) {
        return ResponseEntity.ok(new ResponseMessage(
			ResponseMessage.ResponseStatus.SUCCESS,
			"[ Post " + "" + " created]"
		));
    }

    @GetMapping("/posts/{id}")
    public String x(){
        return "";
    }

}
