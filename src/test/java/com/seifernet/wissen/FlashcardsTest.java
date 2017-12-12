package com.seifernet.wissen;

import static org.assertj.core.api.Assertions.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.seifernet.wissen.model.Account;
import com.seifernet.wissen.repository.AccountRepository;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=SpringBoot.class)
public class FlashcardsTest {
	
	@Autowired
	private AccountRepository repository;
	
	@Test
	public void testBaseUser() throws Exception {
		Account account = new Account();
		account.setNickname("seiferson");
		account.setEmail("seifer.ch@gmail.com");
		account.setEnabled(true);
		account.setPassword("testpasswd");
		
		repository.insert(account);
		assertThat(true).isTrue();
	}
	
	@Test
	public void testInsert() throws Exception {
		Account account = repository.findByNickname("seiferson");
		
		assertThat(account).isNotNull();
	}
}
