package com.seifernet.wissen.configuration;

import java.util.Arrays;

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
		String[] array = { "", "", "" };
		System.out.println( Arrays.toString( array ) );
		return "index";
	}
}
