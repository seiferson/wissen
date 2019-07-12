package com.seifernet.wissen.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@Component
public class DataLoader implements ApplicationRunner{
	
	private static final Logger logger = LoggerFactory.getLogger(DataLoader.class);
	
	public void run(ApplicationArguments args) {
		logger.info("Loading data from application runner");
	}
}
