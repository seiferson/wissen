package com.seifernet.wissen.util;

public class ResponseMessage {

    public enum ResponseStatus {
        SUCCESS,
        ERROR
    }

    public ResponseMessage(ResponseStatus responseStatus, String message){
        this.message = message;
        this.responseStatus = responseStatus;
    }

    private ResponseStatus responseStatus;
    private String message;

    public String getMessage() {
        return message;
    }

    public ResponseStatus getResponseStatus() {
        return responseStatus;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setResponseStatus(ResponseStatus responseStatus) {
        this.responseStatus = responseStatus;
    }
}
