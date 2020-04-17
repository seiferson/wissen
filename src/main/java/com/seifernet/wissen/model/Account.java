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

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@JsonInclude(Include.NON_NULL)
@Document
public class Account {
	
	@Id
	private String id;
	
	@Indexed(unique=true)
	@NotBlank
	@Size(max=25)
	private String nickname;

	@Indexed(unique=true)
	@Email
	@NotBlank
	private String email;

	@NotBlank
	private String avatarSeed;

	@NotBlank
	private String password;

	private Boolean enabled;
	private List<String> authorities;
	private String validationToken;
	private Date validationTokenExpiration;
	private Date creationDate;
	private Date lastUpdate;

	@JsonIgnore
	public List<GrantedAuthority> getGrantedAuthorities() {
		ArrayList<GrantedAuthority> grantedAuthorities = new ArrayList<>();

		for(String authority : this.authorities){
			grantedAuthorities.add(new AccountGrantedAuthority(authority));
		}

		return grantedAuthorities;
	}

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