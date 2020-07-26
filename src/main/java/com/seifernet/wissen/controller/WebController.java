package com.seifernet.wissen.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class WebController {

	private static final Logger logger = LoggerFactory.getLogger(WebController.class);

    @GetMapping("/content/{id}")
	public String serveContent(@PathVariable String id, Model model) {

		model.addAttribute("title", "Guadalajara under attack");
		return "content";
	}
}
