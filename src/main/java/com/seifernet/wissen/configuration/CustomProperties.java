package com.seifernet.wissen.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("wissen")
public class CustomProperties {
	
	private String mainClientAppId;
	private String mainClientAppSecret;

	/**
	 * @return the mainClientAppId
	 */
	public String getMainClientAppId() {
		return mainClientAppId;
	}

	/**
	 * @param mainClientAppId the mainClientAppId to set
	 */
	public void setMainClientAppId(String mainClientAppId) {
		this.mainClientAppId = mainClientAppId;
	}

	/**
	 * @return the mainClientAppSecret
	 */
	public String getMainClientAppSecret() {
		return mainClientAppSecret;
	}

	/**
	 * @param mainClientAppSecret the mainClientAppSecret to set
	 */
	public void setMainClientAppSecret(String mainClientAppSecret) {
		this.mainClientAppSecret = mainClientAppSecret;
	}
	
}
