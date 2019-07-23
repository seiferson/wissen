package com.seifernet.wissen;

import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.assertThat;

import java.nio.charset.Charset;
import java.util.ArrayList;

import org.apache.commons.codec.binary.Base64;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.seifernet.wissen.model.Account;
import com.seifernet.wissen.util.DataLoader;
import com.seifernet.wissen.util.Utils;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=SpringBoot.class, webEnvironment = WebEnvironment.RANDOM_PORT)
public class WissenTest {

	private static final Logger logger = LoggerFactory.getLogger(DataLoader.class);
	
	@LocalServerPort
    private int port;
    
    @Autowired
    private Environment env;
    
    private static final String HOST = "http://localhost:";
    
    private ObjectMapper objectMapper = new ObjectMapper();
	
	@Autowired
    private TestRestTemplate client;
    
    private Account testAccount;
	
	@Test
	public void testServerHealth() throws Exception {
		logger.info("Testing that server is UP...");
		String response = client.getForObject(HOST + port + "/actuator/health", String.class); 
		assertThat(response, containsString("UP"));
	}
	
	@Test
	public void testEmailAPI() throws Exception{
		HttpHeaders headers = new HttpHeaders();
		
		String auth = env.getProperty("MJ_APIKEY_PUBLIC") + ":" + env.getProperty("MJ_APIKEY_PRIVATE");
		byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
		String authHeader = "Basic " + new String(encodedAuth);
		
		headers = new HttpHeaders();
		headers.set("Authorization", authHeader);
		headers.setContentType(MediaType.APPLICATION_JSON);
		
		String body = "{\"Messages\":[{\"From\": {\"Email\": \"noreply@seiferson.com\",\"Name\": \"Mailjet Pilot\"},\"To\": [{\"Email\": \"seifer.ch@gmail.com\",\"Name\": \"passenger 1\"}],\"Subject\": \"Your email flight plan!\",\"TextPart\": \"Dear passenger 1, welcome to Mailjet! May the delivery force be with you!\",\"HTMLPart\": \"<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!\"}]}";		
		HttpEntity<String> entity = new HttpEntity<String>(body, headers);
		ResponseEntity<String> response = client.postForEntity("https://api.mailjet.com/v3.1/send", entity, String.class);
	}
	
	@Test
	public void testOauthToken() throws Exception {
		/**logger.info("Testing account creation");
		
		testAccount = Utils.getRandomAccount();
		
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		
		String body = objectMapper.writeValueAsString(testAccount);
		
		HttpEntity<String> entity = new HttpEntity<String>(body, headers);
		ResponseEntity<String> response = client.postForEntity(HOST + port + "/accounts/create", entity, String.class);
		
		//assertThat(response.getBody(), containsString("Success"));
		
		logger.info("Testing oauth authentication");
		
		String auth = env.getProperty("wissen.main-client-app-id") + ":" + env.getProperty("wissen.main-client-app-secret");
		byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
		String authHeader = "Basic " + new String(encodedAuth);
		
		headers = new HttpHeaders();
		headers.set("Authorization", authHeader);
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		
		ArrayList<MediaType> acceptTypes = new ArrayList<MediaType>();
		acceptTypes.add(MediaType.APPLICATION_JSON);
		headers.setAccept(acceptTypes);
		
		MultiValueMap<String, String> map= new LinkedMultiValueMap<String, String>();
		map.add("password", testAccount.getPassword());
		map.add("username", testAccount.getNickname());
		map.add("grant_type", "password");

		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(map, headers);
		
		response = client.postForEntity(HOST + port + "/oauth/token", request, String.class);
		logger.info(response.getBody());
		//assertThat(response.getBody(), containsString("access_token"));
		
		JsonNode jsonNode = objectMapper.readTree(response.getBody());
		logger.info(jsonNode.get("access_token").asText());**/
	}
}
