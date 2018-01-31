package com.seifernet.wissen.configuration;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.seifernet.wissen.model.Account;
import com.seifernet.wissen.model.SubTask;
import com.seifernet.wissen.model.Task;
import com.seifernet.wissen.repository.AccountRepository;
import com.seifernet.wissen.repository.TaskRepository;


/**
 * Web security configuration
 * 
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private AccountRepository repository;
	
	@Autowired
	private TaskRepository trepository;
	
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		ArrayList<String> authorities = new ArrayList<String>();
		authorities.add("ADMIN");
		Account account = new Account();
		account.setNickname("seiferson");
		account.setEmail("seifer.ch@gmail.com");
		account.setEnabled(true);
		account.setPassword("testpasswd");
		account.setAuthorities(authorities);
		
		ArrayList<SubTask> subtasklist = new ArrayList<SubTask>();
		SubTask stask = new SubTask();
		stask.setCompleted(false);
		stask.setOrderIndex(1L);
		stask.setTitle("Wake up at 07:30:00");
		subtasklist.add(stask);
		
		stask = new SubTask();
		stask.setCompleted(false);
		stask.setOrderIndex(2L);
		stask.setTitle("Take breakfast");
		subtasklist.add(stask);
		
		stask = new SubTask();
		stask.setCompleted(false);
		stask.setOrderIndex(3L);
		stask.setTitle("Take a shower and brush your teeth");
		subtasklist.add(stask);
		
		stask = new SubTask();
		stask.setCompleted(false);
		stask.setOrderIndex(4L);
		stask.setTitle("Take a shower");
		subtasklist.add(stask);
		
		stask = new SubTask();
		stask.setCompleted(false);
		stask.setOrderIndex(5L);
		stask.setTitle("Take the dirty clothes to the basket");
		subtasklist.add(stask);
		
		stask = new SubTask();
		stask.setCompleted(false);
		stask.setOrderIndex(6L);
		stask.setTitle("Deodorant");
		subtasklist.add(stask);
		
		stask = new SubTask();
		stask.setCompleted(false);
		stask.setOrderIndex(7L);
		stask.setTitle("Hang the towel");
		subtasklist.add(stask);
		
		stask = new SubTask();
		stask.setCompleted(false);
		stask.setOrderIndex(8L);
		stask.setTitle("Clean up the room");
		subtasklist.add(stask);
		
		stask = new SubTask();
		stask.setCompleted(false);
		stask.setOrderIndex(9L);
		stask.setTitle("Check the trash, take out if needed");
		subtasklist.add(stask);
		
		stask = new SubTask();
		stask.setCompleted(false);
		stask.setOrderIndex(10L);
		stask.setTitle("Cellphone charger, amdocs badge, wallet, water bottle");
		subtasklist.add(stask);
		
		stask = new SubTask();
		stask.setCompleted(false);
		stask.setOrderIndex(11L);
		stask.setTitle("Walk to office");
		subtasklist.add(stask);
		
		stask = new SubTask();
		stask.setCompleted(false);
		stask.setOrderIndex(12L);
		stask.setTitle("Check plant status");
		subtasklist.add(stask);
		
		Task task = new Task();
		
		task.setActive(true);
		task.setCompleted(false);
		task.setContainsSubTasks(true);
		task.setCreationDate(new Date());
		task.setDescriptionRequired(false);
		task.setDueDate(new Date(new Date().getTime() + 300000L));
		task.setExpirationDate(new Date(new Date().getTime() + 600000L));
		task.setExpires(true);
		task.setOrderedSubTasks(true);
		task.setSubTaskList(subtasklist);
		task.setTitle("Morning checklist");
		
		trepository.insert(task);
		repository.insert(account);
		return super.authenticationManagerBean();
	}
}
