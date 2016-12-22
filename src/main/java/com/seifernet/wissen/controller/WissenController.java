package com.seifernet.wissen.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.seifernet.wissen.util.ModelAttributes;
import com.seifernet.wissen.util.URL;
import com.seifernet.wissen.util.WebResources;

/**
 * Application controller
 * 
 * @author Seifer(Cuauhtemoc Herrera)
 * @version 0.0.1
 *
 */
@Controller
public class WissenController {
	
	/**
	 * Index page
	 * 
	 * @param model
	 * @param auth
	 * @return
	 */
	@RequestMapping(URL.INDEX)
	public String indexPage(Model model, Authentication auth){
		model.addAttribute(ModelAttributes.MENU_SOURCE, WebResources.MENU);
		model.addAttribute(ModelAttributes.HEADER_SOURCE, WebResources.HEADER);
		model.addAttribute(ModelAttributes.CONTENT_SOURCE, WebResources.CONTENT);
		model.addAttribute(ModelAttributes.CUSTOM_JS_SOURCE, WebResources.CUSTOM_JS);
		
		if(auth != null && auth.isAuthenticated()){
			model.addAttribute(ModelAttributes.MENU_FRAGMENT, "topMenuUser");
			model.addAttribute(ModelAttributes.USER_NICKNAME, ((User)auth.getPrincipal()).getUsername());
		} else {
			model.addAttribute(ModelAttributes.MENU_FRAGMENT, "topMenuAnonymous");
		}
		
		model.addAttribute(ModelAttributes.HEADER_FRAGMENT, "indexHeader");
		model.addAttribute(ModelAttributes.CONTENT_FRAGMENT, "index");
		model.addAttribute(ModelAttributes.CUSTOM_JS_FRAGMENT, "indexCustomjs");
		
		return WebResources.BASE_LAYOUT;
	}
	
	/**
	 * New user page
	 * 
	 * @param model
	 * @param auth
	 * @return
	 */
	@RequestMapping(URL.NEW_USER)
	public String newUserPage(Model model, Authentication auth){
		if(auth != null && auth.isAuthenticated()){
			return "redirect:" + URL.INDEX;
		}
		
		model.addAttribute(ModelAttributes.MENU_SOURCE, WebResources.MENU);
		model.addAttribute(ModelAttributes.HEADER_SOURCE, WebResources.VOID);
		model.addAttribute(ModelAttributes.CONTENT_SOURCE, WebResources.CONTENT);
		model.addAttribute(ModelAttributes.CUSTOM_JS_SOURCE, WebResources.CUSTOM_JS);
		
		
		return WebResources.BASE_LAYOUT;
	}
	
	@RequestMapping("/login")
	public String loginPage(Authentication auth){
		if(auth != null && auth.isAuthenticated()){
			return "redirect:/";
		}
		return "login";
	}
	
}
