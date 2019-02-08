package com.seifernet.wissen.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.seifernet.wissen.util.URL;

/**
 * Application controller
 * 
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@Controller
public class WissenController {
	
	/**
	 * None
	 * 
	 * @param model
	 * @return
	 */
	@RequestMapping(URL.NONE)
	private String index(Model model) {
		return "index";
	}
	
	
}
