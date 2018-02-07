package com.seifernet.wissen.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;

/**
 * OAuth2 resource server configuration
 * 
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@Configuration
@EnableResourceServer
public class OAuth2ResourceServerConfiguration extends ResourceServerConfigurerAdapter{

	@Override
	public void configure(ResourceServerSecurityConfigurer resources) {
		resources.resourceId("restservice");
	}

	@Override
	public void configure(HttpSecurity http) throws Exception {
		http
			.authorizeRequests()
				.antMatchers(HttpMethod.GET, "/api/irrigationRecords/*", "/api/irrigationRecords")
					.anonymous()
				.antMatchers(HttpMethod.POST, "/api/irrigationRecords/*", "/api/irrigationRecords")
					.authenticated()
				.antMatchers(HttpMethod.PUT, "/api/irrigationRecords/*", "/api/irrigationRecords")
					.authenticated()
				.antMatchers(HttpMethod.DELETE, "/api/irrigationRecords/*", "/api/irrigationRecords")
					.authenticated()
				.antMatchers(HttpMethod.GET, "/api/tasks/*", "/api/tasks")
					.anonymous()
				.antMatchers(HttpMethod.POST, "/api/tasks/*", "/api/tasks")
					.authenticated()
				.antMatchers(HttpMethod.PUT, "/api/tasks/*", "/api/tasks")
					.authenticated()
				.antMatchers(HttpMethod.DELETE, "/api/tasks/*", "/api/tasks")
					.authenticated();
	}
}
