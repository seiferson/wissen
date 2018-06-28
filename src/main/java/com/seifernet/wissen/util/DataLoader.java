package com.seifernet.wissen.util;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@Component
public class DataLoader implements ApplicationRunner{
	
	public void run(ApplicationArguments args) {
		/**
		repository.deleteAll();
		taskRepository.deleteAll();
		
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
		t.setDueDate(new Date(new Date().getTime() + 3*24*60*60*1000) );
		t.setExpirationDate(null);
		t.setExpires(false);
		t.setOwner("seiferson");
		t.setTitle("Wash the dishes");
		
		taskRepository.insert(t);
		**/
	}
}
