package com.seifernet.wissen.util;

public class ResponseMessage<T> {

    public enum ResponseStatus {
        SUCCESS,
        ERROR
    }

    public ResponseMessage(ResponseStatus responseStatus, String message, T data){
        this.message = message;
        this.responseStatus = responseStatus;
        this.data = data;
    }

    private ResponseStatus responseStatus;
    private String message;
    private T data;

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

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
