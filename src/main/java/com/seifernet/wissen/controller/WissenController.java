package com.seifernet.wissen.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.seifernet.wissen.model.rpg.Player;
import com.seifernet.wissen.rpg.Dice;
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
    
    
    @RequestMapping(URL.PLANT_STATUS)
    private String plantStatus(Model model){
        model.addAttribute(ModelAttributes.MENU_SOURCE, WebResources.MENU);
        model.addAttribute(ModelAttributes.MENU_FRAGMENT, "topMenuAnonymous");
        
		model.addAttribute(ModelAttributes.CONTENT_SOURCE, WebResources.CONTENT);
		model.addAttribute(ModelAttributes.CONTENT_FRAGMENT, "plant");
        
        return WebResources.BASE_LAYOUT;
    }
	
	/**
	 * Home
	 * 
	 * @param model
	 * @return
	 */
	@RequestMapping(URL.INDEX)
	private String index( Model model ){
		model.addAttribute(ModelAttributes.MENU_SOURCE, WebResources.MENU);
		model.addAttribute(ModelAttributes.CONTENT_SOURCE, WebResources.CONTENT);
		
		model.addAttribute(ModelAttributes.MENU_FRAGMENT, "topMenuAnonymous");
		model.addAttribute(ModelAttributes.CONTENT_FRAGMENT, "todo");
		
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
		
		return WebResources.BASE_LAYOUT;
	}
	
	/**
	 * 
	 * @param model
	 * @return
	 */
	@RequestMapping(URL.TASK)
	private String task( Model model ){
		model.addAttribute(ModelAttributes.MENU_SOURCE, WebResources.MENU);
		model.addAttribute(ModelAttributes.CONTENT_SOURCE, WebResources.CONTENT);
		
		model.addAttribute(ModelAttributes.MENU_FRAGMENT, "topMenuAnonymous");
		model.addAttribute(ModelAttributes.CONTENT_FRAGMENT, "task");
		
		return WebResources.BASE_LAYOUT;
	}
	
}
