package com.seifernet.wissen.jms;

import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

/**
 * 
 * @author Seifer( Cuauhtemoc Herrera )
 *
 */
@Component
public class Listener {

    /**
     * When you receive a message, print it out, then shut down the application.
     * Finally, clean up any ActiveMQ server stuff.
     */
    @JmsListener( destination = "my-queue", containerFactory = "jmsContainerFactory" )
    public void receiveMessage( String message ) {
        System.out.println("Received <" + message + ">");
    }
}
