package com.seifernet.wissen.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Document
public class Content {

    @Id
    private String id;

    private String markdown;



}
