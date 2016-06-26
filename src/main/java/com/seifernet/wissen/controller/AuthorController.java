package com.seifernet.wissen.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AuthorController {
	
	@RequestMapping( "/login" )
	public String loginPage(  ){
		return "login";
	}
}
