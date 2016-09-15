package com.seifernet.wissen.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.security.core.GrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * 
 * @author ( Seifer )Cuauhtemoc Herrera
 *
 */
public class Author {
	
	@Id
	private String id;
	
	private String nickname;
	
	@JsonIgnore
	private Boolean enabled;
	
	@JsonIgnore
	private String email;
	
	@JsonIgnore
	private String password;
	
	private String avatar;
	
	@JsonIgnore
	private List<Flashcard> bookmarks;
	
	@JsonIgnore
	private List<GrantedAuthority> authorities;
	
	@JsonIgnore
	private List<String> activityLog;
	
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
	 * @return the bookmarks
	 */
	public List<Flashcard> getBookmarks() {
		return bookmarks;
	}
	/**
	 * @param bookmarks the bookmarks to set
	 */
	public void setBookmarks(List<Flashcard> bookmarks) {
		this.bookmarks = bookmarks;
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
	 * @return the authorities
	 */
	public List<GrantedAuthority> getAuthorities() {
		return authorities;
	}
	/**
	 * @param authorities the authorities to set
	 */
	public void setAuthorities(List<GrantedAuthority> authorities) {
		this.authorities = authorities;
	}
	/**
	 * @return the activityLog
	 */
	public List<String> getActivityLog() {
		return activityLog;
	}
	/**
	 * @param activityLog the activityLog to set
	 */
	public void setActivityLog(List<String> activityLog) {
		this.activityLog = activityLog;
	}
}
