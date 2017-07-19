package com.seifernet.wissen.controller;

//import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import com.seifernet.wissen.configuration.CustomProperties;
import com.seifernet.wissen.util.ModelAttributes;
import com.seifernet.wissen.util.ResponseToken;
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
	
	@Autowired
	private CustomProperties properties;
	
	/*
	private String generateToken(Authentication auth){
		MultiValueMap<String, String> headers = new LinkedMultiValueMap<String, String>();
		headers.add("Authorization", "Basic "+Base64.encodeBase64String(properties.getMainClientAppId().getBytes()));
		headers.add("Accept", "application/json");
		headers.add("Content-type", "application/x-www-form-urlencoded");
		
		MultiValueMap<String, String> body = new LinkedMultiValueMap<String, String>();
		body.add("client_id", properties.getMainClientAppId());
		body.add("client_secret", properties.getMainClientAppSecret());
		body.add("username", (String)auth.getPrincipal());
		body.add("password", (String)auth.getCredentials());
		body.add("grant_type", "password");
		body.add("scope", "read,write");
		
		
		HttpEntity<?> request = new HttpEntity<Object>(body, headers);
		
		RestTemplate restTemplate = new RestTemplate();
		ResponseToken token = restTemplate.postForObject("http://localhost:8080/oauth/token", request, ResponseToken.class );
		
		System.out.println(auth.getPrincipal());
		System.out.println(auth.getCredentials());
		System.out.println(properties.getMainClientAppId());
		System.out.println(properties.getMainClientAppSecret());
		System.out.println(token.getAccessToken());
		
		return token.getAccessToken();
	}
	
	/**
	 * Index page
	 * 
	 * @param model
	 * @param auth
	 * @return
	 *//*
	@RequestMapping(URL.INDEX)
	public String indexPage(Model model, Authentication auth){
		model.addAttribute(ModelAttributes.MENU_SOURCE, WebResources.MENU);
		model.addAttribute(ModelAttributes.HEADER_SOURCE, WebResources.HEADER);
		model.addAttribute(ModelAttributes.CONTENT_SOURCE, WebResources.CONTENT);
		model.addAttribute(ModelAttributes.CUSTOM_JS_SOURCE, WebResources.CUSTOM_JS);
		
		if(auth != null && auth.isAuthenticated()){
			model.addAttribute(ModelAttributes.MENU_FRAGMENT, "topMenuUser");
			model.addAttribute(ModelAttributes.USER_NICKNAME, ((User)auth.getPrincipal()).getUsername());
			generateToken(auth);
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
	 *//*
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
		System.out.println(properties.getMainClientAppId());
		System.out.println(properties.getMainClientAppSecret());
		return "login";
	}*/
	
}
