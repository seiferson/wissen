package com.seifernet.wissen.model;

import org.springframework.security.core.GrantedAuthority;

/**
 * Model to save granted authorities as string on database
 * 
 * @author Seiferson (Cuauhtemoc Herrera)
 */
public class AccountGrantedAuthority implements GrantedAuthority{

	private static final long serialVersionUID = 1L;
	
	private String authority;
	
	public AccountGrantedAuthority(String authority) {
		this.authority = authority;
	}

	@Override
	public String getAuthority() {
		return authority;
	}
}
