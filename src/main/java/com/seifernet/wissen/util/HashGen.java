package com.seifernet.wissen.util;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.Base64;

import org.springframework.stereotype.Component;

@Component(value="hashgen")
public class HashGen {
	
	public static String md5gen(String input) {
		try {
			MessageDigest md5 = MessageDigest.getInstance("MD5");

			md5.update(input.getBytes());
			byte[] digest = md5.digest();

			BigInteger no = new BigInteger(1, digest);

			String hashtext = no.toString(16);
			while (hashtext.length() < 32) {
				hashtext = "0" + hashtext;
			}
			return hashtext;
		} catch (Exception e){
			//TODO fix this code
			return "";
		}
	}

}
