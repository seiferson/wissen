package com.seifernet.wissen.util;

import java.security.MessageDigest;

import javax.xml.bind.DatatypeConverter;

public class HashGen {
	
	public static String md5gen(String input) throws Exception{
		String result = "";
		MessageDigest md5 = MessageDigest.getInstance("MD5");
		
		md5.update(input.getBytes());
		byte[] digest = md5.digest();
		result = DatatypeConverter.printHexBinary(digest).toUpperCase();
		
		return result;
	}

}
