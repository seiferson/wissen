package com.seifernet.wissen;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import com.seifernet.wissen.model.finance.Transaction;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.seifernet.wissen.model.Account;
import com.seifernet.wissen.util.Utils;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = SpringBoot.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class WissenTest {

	private static final Logger logger = LoggerFactory.getLogger(WissenTest.class);
	
	@LocalServerPort
    private int port;
    
    @Autowired
    private Environment env;

    private static final ObjectMapper mapper = new ObjectMapper();
    
    private static final String HOST = "http://localhost:";
	
	@Autowired
    private TestRestTemplate client;

	private void testServerHealth() throws Exception {
		logger.info("[SRV0-UP] Testing that server is UP...");
		ResponseEntity<String> response = client.getForEntity(HOST + port + "/actuator/health", String.class);

		assertThat(response.getStatusCode(), is(HttpStatus.OK));
		JsonNode node = mapper.readTree(response.getBody());
		assertThat(node.get("status").asText(), is("UP"));
	}

	private Account testAccountCreation() throws Exception {
		logger.info("[ACC0-CR] Testing account creation...");

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);

		Account account = Utils.getRandomAccount();

		String body = mapper.writeValueAsString(account);
		logger.info("[ACC0-CR] request body" + body);

		HttpEntity<String> request = new HttpEntity<>(body, headers);

		ResponseEntity<String> response = client.postForEntity(
			HOST + port + "/api/v1/accounts",
			request,
			String.class
		);

		logger.info("[ACC0-CR] response" + response.getBody());

		JsonNode node = mapper.readTree(response.getBody());
		assertThat(node.get("responseStatus").asText(), is("SUCCESS"));

		return account;
	}

	private void testAccountCreationFailure(Account account) throws Exception{
		logger.info("[ACCF-CR] Testing account creation failure...");

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);

		Account wrongAccount = Utils.getRandomAccount();
		wrongAccount.setNickname("verywrong");
		wrongAccount.setEmail(account.getEmail());

		String body = mapper.writeValueAsString(wrongAccount);
		logger.info("[ACCF-CR] request body" + body);

		HttpEntity<String> request = new HttpEntity<>(body, headers);

		ResponseEntity<String> response = client.postForEntity(
			HOST + port + "/api/v1/accounts",
			request,
			String.class
		);

		logger.info("[ACCF-CR] response" + response.getBody());
		JsonNode node = mapper.readTree(response.getBody());
		logger.info("[ACCF-CR] response " + node.toPrettyString());

		assertThat(node.get("responseStatus").asText(), is("ERROR"));
		assertThat(node.get("message").asText(), is("[Error creating account. Email or nickname not available]"));

		wrongAccount.setNickname(account.getNickname());
		wrongAccount.setEmail("thisiswrong@wrongmail.com");

		body = mapper.writeValueAsString(wrongAccount);
		logger.info("[ACCF-CR] request body" + body);

		request = new HttpEntity<>(body, headers);

		response = client.postForEntity(
			HOST + port + "/api/v1/accounts",
			request,
			String.class
		);

		logger.info("[ACCF-CR] response" + response.getBody());
		node = mapper.readTree(response.getBody());
		logger.info("[ACCF-CR] response " + node.toPrettyString());

		assertThat(node.get("responseStatus").asText(), is("ERROR"));
		assertThat(node.get("message").asText(), is("[Error creating account. Email or nickname not available]"));

		wrongAccount.setNickname("verywrongddddddddddddddddddddd");
		wrongAccount.setEmail("thisiswrong@wrongmail.com");

		body = mapper.writeValueAsString(wrongAccount);
		logger.info("[ACCF-CR] request body" + body);

		request = new HttpEntity<>(body, headers);

		response = client.postForEntity(
			HOST + port + "/api/v1/accounts",
			request,
			String.class
		);

		logger.info("[ACCF-CR] response" + response.getBody());
		node = mapper.readTree(response.getBody());
		logger.info("[ACCF-CR] response " + node.toPrettyString());

		assertThat(node.get("responseStatus").asText(), is("ERROR"));
		assertThat(node.get("message").asText(), is("[nickname size must be between 0 and 25]"));

		wrongAccount.setNickname("verywrong");
		wrongAccount.setEmail(null);

		body = mapper.writeValueAsString(wrongAccount);
		logger.info("[ACCF-CR] request body" + body);

		request = new HttpEntity<>(body, headers);

		response = client.postForEntity(
			HOST + port + "/api/v1/accounts",
			request,
			String.class
		);

		logger.info("[ACCF-CR] response" + response.getBody());
		node = mapper.readTree(response.getBody());

		assertThat(node.get("responseStatus").asText(), is("ERROR"));
		assertThat(node.get("message").asText(), is("[email must not be blank]"));

		wrongAccount.setNickname("verywrong");
		wrongAccount.setEmail("anystring");

		body = mapper.writeValueAsString(wrongAccount);
		logger.info("[ACCF-CR] request body" + body);

		request = new HttpEntity<>(body, headers);

		response = client.postForEntity(
			HOST + port + "/api/v1/accounts",
			request,
			String.class
		);

		logger.info("[ACCF-CR] response" + response.getBody());
		node = mapper.readTree(response.getBody());

		assertThat(node.get("responseStatus").asText(), is("ERROR"));
		//assertThat(node.get("message").asText(), is("[email must not be blank]"));
	}

	private String testOauthSignIn(
			Account account,
			List<MediaType> acceptTypes,
			String serverClientId,
			String serverSecret
	) throws Exception {

		logger.info("[3 Testing oauth authentication with user " + account.getNickname() + "...]");

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		headers.set("Authorization", Utils.getEncodedBasicAuth(serverClientId, serverSecret));
		headers.setAccept(acceptTypes);

		MultiValueMap<String, String> map= new LinkedMultiValueMap<>();
		map.add("password", account.getPassword());
		map.add("username", account.getNickname());
		map.add("grant_type", "password");

		HttpEntity<MultiValueMap<String, String>> formRequest = new HttpEntity<>(map, headers);

		ResponseEntity<String> response = client.postForEntity(HOST + port + "/oauth/token", formRequest, String.class);

		logger.info(response.getBody());

		assertThat(response.getBody(), containsString("access_token"));

		JsonNode jsonObject = mapper.readTree(response.getBody());

		return jsonObject.get("access_token").asText();
	}

	private void testGetFullAccountInfo(Account account, String authToken, List<MediaType> acceptTypes) throws Exception {
		logger.info("[4 Testing retrieve user info...]");

		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", "Bearer " + authToken);
		headers.setAccept(acceptTypes);

		HttpEntity<String> request = new HttpEntity<>(headers);

		ResponseEntity<String> response = client.exchange(
				HOST + port + "/api/v1/accounts/" + account.getNickname(),
				HttpMethod.GET,
				request,
				String.class
		);
		logger.info(response.getBody());

		JsonNode jsonObject = mapper.readTree(response.getBody());
	}

	private void testTransactionCreation(
			String description,
			Transaction.TransactionType type,
			Double amount,
			List<MediaType> acceptTypes,
			String authToken,
			Account account
	) throws Exception {

		logger.info("[Testing transaction creation]");

		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", "Bearer " + authToken);
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setAccept(acceptTypes);

		Transaction t = new Transaction(
				new Date(),
				account.getNickname(),
				amount,
				description,
				type
		);

		String body = mapper.writeValueAsString(t);

		HttpEntity<String> request = new HttpEntity<>(body, headers);

		ResponseEntity<String> response = client.postForEntity(
				HOST + port + "/api/v1/finance/transactions",
				request,
				String.class
		);

		logger.info(response.getBody());
	}

	private void testBalance(List<MediaType> acceptTypes, String authToken, Account account) throws Exception{
		logger.info("[Testing balance calculation]");

		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", "Bearer " + authToken);
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setAccept(acceptTypes);

		HttpEntity<String> request = new HttpEntity<>(headers);
		Date current = new Date();
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(current);
		logger.info(Integer.toString(calendar.get(Calendar.YEAR)));
		logger.info(Integer.toString(calendar.get(Calendar.MONTH)));


		ResponseEntity<String> response = client.exchange(
				HOST + port + "/api/v1/finance/balance?year=" + calendar.get(Calendar.YEAR) + "&month=" + (calendar.get(Calendar.MONTH)+1),
				HttpMethod.GET,
				request,
				String.class);

		logger.info("raw: " + response.getBody());
		JsonNode node = mapper.readTree(response.getBody());
		logger.info(node.toPrettyString());

		assertThat(node.get("balance").asDouble(), is(25601.35));
		assertThat(node.get("incomeAmount").asDouble(), is(34500.55));
		assertThat(node.get("expensesAmount").asDouble(), is(8899.2));
	}
	
	@Test
	public void testAPI() throws Exception {
		String serverClientId = env.getProperty("WISSEN_CLIENT_ID");
		String serverSecret = env.getProperty("WISSEN_CLIENT_SECRET");

		ArrayList<MediaType> acceptTypes = new ArrayList<>();
		acceptTypes.add(MediaType.APPLICATION_JSON);


		testServerHealth();

		Account account = testAccountCreation();
		testAccountCreationFailure(account);
		String authToken = testOauthSignIn(account, acceptTypes, serverClientId, serverSecret);
		testGetFullAccountInfo(account, authToken, acceptTypes);
		testTransactionCreation(
			"Dinner @ Uncle beef",
			Transaction.TransactionType.EXPENSE,
			137.50,
			acceptTypes,
			authToken,
			account
		);
		testTransactionCreation(
			"Gas @ PEMEX Patria",
			Transaction.TransactionType.EXPENSE,
			670.00,
			acceptTypes,
			authToken,
			account
		);
		testTransactionCreation(
			"Rent",
			Transaction.TransactionType.EXPENSE,
			6825.00,
			acceptTypes,
			authToken,
			account
		);
		testTransactionCreation(
			"Grocery @ Mega",
			Transaction.TransactionType.EXPENSE,
			1266.70,
			acceptTypes,
			authToken,
			account
		);
		testTransactionCreation(
			"Salary",
			Transaction.TransactionType.INCOME,
			34500.55,
			acceptTypes,
			authToken,
			account
		);
		testBalance(acceptTypes, authToken, account);
	}
}