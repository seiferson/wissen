package com.seifernet.wissen.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.seifernet.wissen.util.ModelAttributes;
import com.seifernet.wissen.util.URL;
import com.seifernet.wissen.util.WebResources;

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
	private String index( Model model ){
		model.addAttribute(ModelAttributes.CONTENT_SOURCE, WebResources.CONTENT);
		model.addAttribute(ModelAttributes.CONTENT_FRAGMENT, "index");
		
		model.addAttribute(ModelAttributes.CUSTOM_JS_SOURCE, WebResources.CUSTOM_JS);
		model.addAttribute(ModelAttributes.CUSTOM_JS_FRAGMENT, "indexjs");
		
		return WebResources.BASE_LAYOUT;
	}
	
	@RequestMapping(URL.PLANT_STATUS)
	private String plantStatus(Model model){
		model.addAttribute(ModelAttributes.CONTENT_SOURCE, WebResources.CONTENT);
		model.addAttribute(ModelAttributes.CONTENT_FRAGMENT, "plant");
		
		model.addAttribute(ModelAttributes.CUSTOM_JS_SOURCE, WebResources.CUSTOM_JS);
		model.addAttribute(ModelAttributes.CUSTOM_JS_FRAGMENT, "plantjs");
		
		return WebResources.BASE_LAYOUT;
	}
	
		/**Player p1 = new Player("Seifer", 2);
		while(p1.getCurrentHitPoints() > 0){
			Player enemy = new Player("M"+Dice.rollDice(100000), 1);
			System.out.println("New Enemy");
			while(p1.getCurrentHitPoints() > 0 && enemy.getCurrentHitPoints() > 0){
				enemy.takeDamage(p1.performBasicAttack());
				p1.takeDamage(enemy.performBasicAttack());
				System.out.println(p1.getName() + " HP:" + p1.getCurrentHitPoints() + "/" + p1.getMaxHitPoints());
				System.out.println(enemy.getName() + " HP:" + enemy.getCurrentHitPoints() + "/" + enemy.getMaxHitPoints());
			}
		}**/
}
