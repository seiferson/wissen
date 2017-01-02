package com.seifernet.wissen.util;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResponseToken {
	
	@JsonProperty("access_token")
	private String accessToken;
/*
 * {
"access_token": "bb494681-d556-4426-9fb9-ca8c356ec9c8",
"token_type": "bearer",
"refresh_token": "0ba74446-7235-4687-9592-cf36ad7c2a21",
"expires_in": 599,
"scope": "read write"
}
 */

	/**
	 * @return the accessToken
	 */
	public String getAccessToken() {
		return accessToken;
	}

	/**
	 * @param accessToken the accessToken to set
	 */
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
}
