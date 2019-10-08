package com.seifernet.wissen.util;

import java.security.MessageDigest;
import java.util.Base64;

import org.springframework.stereotype.Component;

@Component(value="hashgen")
public class HashGen {
	
	public static String md5gen(String input) {
		try {
			StringBuffer hexString = new StringBuffer();
			MessageDigest md5 = MessageDigest.getInstance("MD5");

			md5.update(input.getBytes());
			byte[] digest = md5.digest();

			for (int i = 0; i < digest.length; i++) {
				if ((0xff & digest[i]) < 0x10) {
					hexString.append("0" + Integer.toHexString((0xFF & digest[i])));
				} else {
					hexString.append(Integer.toHexString(0xFF & digest[i]));
				}
			}
			return Base64.getEncoder().encodeToString(digest);
		} catch (Exception e){
			//TODO fix this code
			return "";
		}
	}

}
