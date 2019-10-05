package com.seifernet.wissen;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**`
 * Spring boot main class and annotation configuration
 * 
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@Configuration
@ComponentScan
@EnableAutoConfiguration
@EnableScheduling
@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableSwagger2
public class SpringBoot {

	/**
	 * Main method
	 * 
	 * @param args Console arguments
	 * @throws Exception
	 */
	public static void main(String[] args) throws Exception {
		SpringApplication.run( SpringBoot.class );
	}
}
