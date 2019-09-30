package com.seifernet.wissen.util;

import java.security.MessageDigest;

import org.springframework.stereotype.Component;

@Component(value="hashgen")
public class HashGen {
	
	public static String md5gen(String input) throws Exception{
		MessageDigest md5 = MessageDigest.getInstance("MD5");
		
		md5.update(input.getBytes());
		byte[] digest = md5.digest();
		
		return new String(digest);
	}

}
