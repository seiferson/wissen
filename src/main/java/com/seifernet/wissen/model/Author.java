package com.seifernet.wissen.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
//import org.springframework.security.core.GrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Accounts information
 * 
 * @author Seifer (Cuauhtemoc Herrera)
 * @version 0.0.1
 *
 */
public class Author {
	
	@Id
	private String id;
	
	private String nickname;
	private String avatar;
	
	@JsonIgnore
	private Boolean enabled;
	
	@JsonIgnore
	private String email;
	
	@JsonIgnore
	private String password;
	
	@JsonIgnore
	private String clientId;
	
	@JsonIgnore
	private String secret;
	
	@JsonIgnore
	private List<String> authorities;
	
	@JsonIgnore
	private List<String> scopes;
	
	@JsonIgnore
	private List<String> resources;
	
	@JsonIgnore
	private List<String> grantTypes;

	/**
	 * 
	 */
	public Author() {
		super();
		this.enabled = true;
		this.authorities = new ArrayList<>();
		this.scopes = new ArrayList<>();
		this.resources = new ArrayList<>();
		this.grantTypes = new ArrayList<>();
	}

	/**
	 * @param nickname
	 * @param avatar
	 * @param email
	 * @param password
	 * @param secret
	 * @param authorities
	 * @param scopes
	 * @param resources
	 * @param grantTypes
	 */
	public Author(String nickname, String avatar, String email, String password, String secret, String clientId,
			List<String> authorities, List<String> scopes, List<String> resources, List<String> grantTypes) {
		super();
		this.nickname = nickname;
		this.avatar = avatar;
		this.email = email;
		this.password = password;
		this.clientId = clientId;
		this.secret = secret;
		this.authorities = authorities;
		this.scopes = scopes;
		this.resources = resources;
		this.grantTypes = grantTypes;
	}

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * @return the nickname
	 */
	public String getNickname() {
		return nickname;
	}

	/**
	 * @param nickname the nickname to set
	 */
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	/**
	 * @return the enabled
	 */
	public Boolean getEnabled() {
		return enabled;
	}

	/**
	 * @param enabled the enabled to set
	 */
	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return the avatar
	 */
	public String getAvatar() {
		return avatar;
	}

	/**
	 * @param avatar the avatar to set
	 */
	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	/**
	 * @return the secret
	 */
	public String getSecret() {
		return secret;
	}

	/**
	 * @param secret the secret to set
	 */
	public void setSecret(String secret) {
		this.secret = secret;
	}

	/**
	 * @return the authorities
	 */
	public List<String> getAuthorities() {
		return authorities;
	}

	/**
	 * @param authorities the authorities to set
	 */
	public void setAuthorities(List<String> authorities) {
		this.authorities = authorities;
	}

	/**
	 * @return the scopes
	 */
	public List<String> getScopes() {
		return scopes;
	}

	/**
	 * @param scopes the scopes to set
	 */
	public void setScopes(List<String> scopes) {
		this.scopes = scopes;
	}

	/**
	 * @return the resources
	 */
	public List<String> getResources() {
		return resources;
	}

	/**
	 * @param resources the resources to set
	 */
	public void setResources(List<String> resources) {
		this.resources = resources;
	}

	/**
	 * @return the grantTypes
	 */
	public List<String> getGrantTypes() {
		return grantTypes;
	}

	/**
	 * @param grantTypes the grantTypes to set
	 */
	public void setGrantTypes(List<String> grantTypes) {
		this.grantTypes = grantTypes;
	}
	
	/**
	 * @return the clientId
	 */
	public String getClientId() {
		return clientId;
	}

	/**
	 * @param clientId the clientId to set
	 */
	public void setClientId(String clientId) {
		this.clientId = clientId;
	}
	
	/**
	 * 
	 * @return
	 *//*
	@JsonIgnore
	public List<GrantedAuthority> getGrantedAuthorities(){
		ArrayList<GrantedAuthority> grantedAuthorities = new ArrayList<>();
		
		for(String authority : this.authorities){
			grantedAuthorities.add(new AccountGrantedAuthority(authority));
		}
		
		return grantedAuthorities;
	}*/
}
