package com.seifernet.wissen.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.config.JmsListenerContainerFactory;
import org.springframework.jms.config.SimpleJmsListenerContainerFactory;
import org.springframework.jms.core.JmsTemplate;

//@Configuration
public class JmsConfiguration {
//
//	@Bean
//    JmsListenerContainerFactory<?> jmsContainerFactory( ConnectionFactory connectionFactory ) {
//        SimpleJmsListenerContainerFactory factory = new SimpleJmsListenerContainerFactory();
//        factory.setConnectionFactory(connectionFactory);
//        return factory;
//    }
//	
//	@Bean
//	public JmsTemplate jmsTemplate( ConnectionFactory connectionFactory ){
//		JmsTemplate jmsTemplate = new JmsTemplate( );
//		
//		jmsTemplate.setConnectionFactory( connectionFactory );
//		
//		return jmsTemplate;
//	}
//
}
