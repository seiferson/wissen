package com.seifernet.wissen.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@JsonInclude(Include.NON_NULL)
@Document
public class Account {
	
	@Id
	private String id;
	
	@Indexed(unique=true)
	private String nickname;

	@Indexed(unique=true)
	private String email;

	private Boolean enabled;
	private String password;
	private List<String> authorities;
	private String validationToken;
	private Date validationTokenExpiration;
	private Date creationDate;
	private Date lastUpdate;
	private String avatarSeed;

	public String getAvatarSeed() {
		return avatarSeed;
	}

	public void setAvatarSeed(String avatarSeed){
		this.avatarSeed = avatarSeed;
	}

	public Date getValidationTokenExpiration(){
		return validationTokenExpiration;
	}

	public void setValidationTokenExpiration(Date validationTokenExpiration) {
		this.validationTokenExpiration = validationTokenExpiration;
	}

	public Date getCreationDate(){
		return creationDate;
	}
	
	public Date getLastUpdate(){
		return lastUpdate;
	}
	
	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}
	
	public void setLastUpdate(Date lastUpdate) {
		this.lastUpdate = lastUpdate;
	}
	
	public String getValidationToken(){
		return validationToken;
	}
	
	public void setValidationToken(String validationToken){
		this.validationToken = validationToken;
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	@JsonIgnore
	public List<GrantedAuthority> getGrantedAuthorities(){
		ArrayList<GrantedAuthority> grantedAuthorities = new ArrayList<>();
		
		for(String authority : this.authorities){
			grantedAuthorities.add(new AccountGrantedAuthority(authority));
		}
		
		return grantedAuthorities;
	}
	
	public void setAuthorities(List<String> authorities){
		this.authorities = authorities;
	}
	
	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public Boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
