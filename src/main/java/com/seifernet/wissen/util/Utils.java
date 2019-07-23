package com.seifernet.wissen.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import com.seifernet.wissen.model.Account;

public class Utils {

	private static Random random = new Random();
	
	private static char[] CHARACTERS = {
		'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '@', '#', '!', '*',
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
		'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B',
		'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
		'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	};

	public static Date getDateFromString(String date, String pattern) throws Exception{
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		
		return simpleDateFormat.parse(date);
	}
	
	public static boolean isNotNullOrEmpty(String a){
		return (a != null && !a.trim().equals(""));
	}
	
	public static Account getRandomAccount(){
		Account randomAccount = new Account();
		
		randomAccount.setEmail(getRandomEmail());
		randomAccount.setNickname(getRandomNickname());
		randomAccount.setPassword(getRandomPassword());
		return randomAccount;
	}
	
	public static String getRandomEmail(){
		String[] names = {
			"randomdude",
			"anonymous",
			"greatoak"
		};
		String domain = "@seifernet.com";
		return names[random.nextInt(names.length)] + domain;
	}
	
	public static String getRandomNickname(){
		String[] names = {
			"randomdude",
			"anonymous",
			"greatoak",
			"bulletguy"
		};
		return names[random.nextInt(names.length)];
	}
	
	public static String getRandomPassword(){
		StringBuilder buffer = new StringBuilder(8);
		
		for (int i = 0; i < 8; i++) {
			buffer.append(CHARACTERS[random.nextInt(CHARACTERS.length)]);				
		}

		return buffer.toString();
	}
}
