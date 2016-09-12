package com.seifernet.wissen.controller;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.seifernet.wissen.util.WebResources;

/**
 * Application controller
 * 
 * @author Seifer( Cuauhtemoc Herrera )
 * @version 0.0.1
 *
 */
@Controller
public class WissenController {
	
	/**
	 * Index page
	 * 
	 * @param auth User authentication
	 * @return String template name
	 */
	@RequestMapping( "/" )
	public String index( Model model ){
		
		return WebResources.INDEX_TEMPLATE;
	}
	
	@RequestMapping( "/login" )
	public String loginPage( Authentication auth ){
		if( auth != null && auth.isAuthenticated( ) ){
			return "redirect:/";
		}
		return "login";
	}
	@RequestMapping( "/flashcardslist" )
	public String flashcard( ){
		return "flashcard_list_no_style";
	}
}
