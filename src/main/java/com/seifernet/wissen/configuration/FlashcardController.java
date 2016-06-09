package com.seifernet.wissen.configuration;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 
 * @author Seifer( Cuauhtemoc Herrera )
 *
 */
@Controller
public class FlashcardController {

	@RequestMapping( "/" )
	public String index( ){
		return "index";
	}
}
