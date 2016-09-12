package com.seifernet.wissen;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

/**
 * Spring boot main class and annotation configuration
 * 
 * @author Seifer( Cuauhtemoc Herrera )
 * @version 0.0.1
 *
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan
@EnableWebSecurity
public class SpringBoot {

	/**
	 * Main method
	 * 
	 * @param args Console arguments
	 * @throws Exception
	 */
	public static void main( String[] args ) throws Exception {
		SpringApplication.run( SpringBoot.class );
	}

}
