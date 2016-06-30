package com.seifernet.wissen.controller;

import java.util.Date;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.Session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.core.MessageCreator;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.seifernet.wissen.model.Flashcard;

@Controller
public class JmsController {

	@Autowired
	JmsTemplate jmsTemplate;
	
	@RequestMapping( "/sendmessage" )
	public String sendMessage(  ){
		 
		// Send a message
        MessageCreator messageCreator = new MessageCreator() {
            @Override
            public Message createMessage(Session session) throws JMSException {
            	Flashcard f = new Flashcard( new Date( ), "", "", "", "", "", "s9dos", true, "seddd" );
            	ObjectMapper mapper = new ObjectMapper( );
            	
            	Message m = null;
            	
            	try {
            		m = session.createTextMessage( mapper.writeValueAsString( f ) );
				} catch (Exception e) {
					// TODO: handle exception
				}
            	
                return m;
            }
        };
        
       
        System.out.println("Sending a new message.");
        jmsTemplate.send("my-queue", messageCreator);
		
		return "index";
	}

}
