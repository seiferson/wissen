package com.seifernet.wissen.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Utils {

	public static Date getDateFromString(String date, String pattern) throws Exception{
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		
		return simpleDateFormat.parse(date);
	}
}
