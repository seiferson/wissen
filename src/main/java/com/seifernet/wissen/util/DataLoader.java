package com.seifernet.wissen.util;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.seifernet.wissen.model.Account;
import com.seifernet.wissen.model.Task;
import com.seifernet.wissen.repository.AccountRepository;
import com.seifernet.wissen.repository.TaskRepository;

@Component
public class DataLoader implements ApplicationRunner{
	
	
	@Autowired
	private AccountRepository repository;
	
	@Autowired
	private TaskRepository taskRepository; 
	
	public void run(ApplicationArguments args) {
		
		ArrayList<String> authorities = new ArrayList<String>();
		authorities.add("USER");
		Account account = new Account();
		account.setNickname("seiferson");
		account.setEmail("seifer.ch@gmail.com");
		account.setEnabled(true);
		account.setPassword("testpasswd");
		account.setAuthorities(authorities);
		
		repository.insert(account);
		
		
		Task t = new Task();
		t.setActive(true);
		t.setCompleted(false);
		t.setCompletionDate(null);
		t.setCreationDate(null);
		t.setCreationDate(new Date());
		t.setDescription("Take care of the dirty dishes, is not good for health to keep them with food more than one day, also it stinks.");
		t.setDescriptionRequired(true);
		t.setDueDate(new Date());
		t.setExpirationDate(null);
		t.setExpires(false);
		t.setOwner("seiferson");
		t.setTitle("Wash the dishes");
		
		taskRepository.insert(t);
	}
}
