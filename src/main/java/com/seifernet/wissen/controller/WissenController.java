package com.seifernet.wissen.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.seifernet.wissen.util.ModelAttributes;
import com.seifernet.wissen.util.URL;
import com.seifernet.wissen.util.WebResources;
import com.seifernet.wissen.rpg.Dice;

/**
 * Application controller
 * 
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@Controller
public class WissenController {
	
	/**
	 * Home
	 * 
	 * @param model
	 * @return
	 */
	@RequestMapping(URL.INDEX)
	private String index( Model model ) {
		model.addAttribute(ModelAttributes.CONTENT_SOURCE, WebResources.CONTENT);
		model.addAttribute(ModelAttributes.CONTENT_FRAGMENT, "index");
		
		model.addAttribute(ModelAttributes.CUSTOM_JS_SOURCE, WebResources.CUSTOM_JS);
		model.addAttribute(ModelAttributes.CUSTOM_JS_FRAGMENT, "indexjs");
		
		return WebResources.BASE_LAYOUT;
	}
	
	@RequestMapping("/integrations/dice")
	private Integer dice(Model model){
		return Dice.rollDice(6);
	}
	

	@RequestMapping(URL.KNOWLEDGE)
	private String knowledge( Model model ) {
		model.addAttribute(ModelAttributes.CONTENT_SOURCE, WebResources.CONTENT);
		model.addAttribute(ModelAttributes.CONTENT_FRAGMENT, "knowledge");
		
		model.addAttribute(ModelAttributes.CUSTOM_JS_SOURCE, WebResources.CUSTOM_JS);
		model.addAttribute(ModelAttributes.CUSTOM_JS_FRAGMENT, "knowledgejs");
		
		return WebResources.BASE_LAYOUT;
	}
	
}
