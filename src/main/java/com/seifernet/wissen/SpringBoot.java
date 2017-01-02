package com.seifernet.wissen;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import com.seifernet.wissen.configuration.CustomProperties;

/**
 * Spring boot main class and annotation configuration
 * 
 * @author Seifer( Cuauhtemoc Herrera )
 * @version 0.0.1
 *
 */
@Configuration
@ComponentScan
@EnableAutoConfiguration
@EnableConfigurationProperties(CustomProperties.class)
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
