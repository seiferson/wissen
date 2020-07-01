package com.seifernet.wissen.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class WebController {

    @GetMapping("/content/{id}")
	public String serveContent(@PathVariable String id, Model model) {

		model.addAttribute("title", "Guadalajara under attack");
		return "content";
	}
}
