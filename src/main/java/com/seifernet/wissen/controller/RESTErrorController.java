package com.seifernet.wissen.controller;

import com.seifernet.wissen.util.ResponseMessage;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.List;
import java.util.stream.Collectors;

import com.seifernet.wissen.util.ResponseMessage.ResponseStatus;

@ControllerAdvice
public class RESTErrorController extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException ex,
            HttpHeaders headers,
            HttpStatus status, WebRequest request
    ) {

        ResponseMessage body = new ResponseMessage(ResponseStatus.ERROR, "");
        List<String> errors = ex.getBindingResult()
            .getFieldErrors()
            .stream()
            .map(x -> x.getField() + " " +  x.getDefaultMessage())
            .collect(Collectors.toList());

        for(String error : errors) {
            body.setMessage(body.getMessage() + "[" + error + "] ");
        }

        return new ResponseEntity<>(body, headers, status);
    }
}
