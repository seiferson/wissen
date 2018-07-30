package com.seifernet.wissen;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;

import com.seifernet.wissen.model.Account;
import com.seifernet.wissen.repository.AccountRepository;
import com.seifernet.wissen.util.DataLoader;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=SpringBoot.class, webEnvironment = WebEnvironment.RANDOM_PORT)	 
public class WissenTest {

	private static final Logger logger = LoggerFactory.getLogger(DataLoader.class);
	
	@LocalServerPort
    private int port;
	
	@Autowired
    private TestRestTemplate client;
	
	@Test
	public void testServerHealth() throws Exception {
		
		String x = client.getForObject("http://localhost:" + port +"/actuator/health", String.class); 
		assertThat(x, containsString("UP"));
	}
	
	@Autowired
	private AccountRepository repository;
	
	@Test
	public void testBaseUser() throws Exception {
		
		Account account = new Account();
		account.setNickname("seifersonx");
		account.setEmail("seifer.chx@gmail.com");
		account.setEnabled(true);
		account.setPassword("testpasswd");
		
		logger.info("Checking base user");
		
		assertThat(repository.insert(account).getIdentifier(), notNullValue());
	}
	
	@Test
	public void testInsert() throws Exception {
		Account account = repository.findByNickname("seifersonx");
		
		assertThat(account, notNullValue());
	}
}
