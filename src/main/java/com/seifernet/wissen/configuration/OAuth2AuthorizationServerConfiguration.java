package com.seifernet.wissen.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.security.oauth2.provider.token.DefaultTokenServices;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.InMemoryTokenStore;

/**
 * OAuth2 authorization server configuration
 * 
 * @author Seifer (Cuauhtemoc Herrera)
 * @version 0.0.1
 *
 */
@Configuration
@EnableAuthorizationServer
public class OAuth2AuthorizationServerConfiguration extends AuthorizationServerConfigurerAdapter{
	private TokenStore tokenStore = new InMemoryTokenStore();

	@Autowired
	@Qualifier("authenticationManagerBean")
	private AuthenticationManager authenticationManager;

	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private ClientDetailsService clientDetailsService;

	@Override
	public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
		endpoints
			.tokenStore(this.tokenStore)
			.authenticationManager(this.authenticationManager)
			.userDetailsService(userDetailsService);
	}
	
	@Override
	public void configure(ClientDetailsServiceConfigurer clients ) throws Exception {
		clients
			.withClientDetails(clientDetailsService);
	}

	@Bean
	@Primary
	public DefaultTokenServices tokenServices() {
		DefaultTokenServices tokenServices = new DefaultTokenServices();
		tokenServices.setSupportRefreshToken(true);
		tokenServices.setTokenStore(this.tokenStore);
		return tokenServices;
	}
}
