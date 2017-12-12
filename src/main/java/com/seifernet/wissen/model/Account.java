package com.seifernet.wissen.model;

/**
 * @author Seiferson (Cuauhtemoc Herrera)
 */
public class Account {
	
	@Id
	private String id;
	
	private String nickname;
	
	@JsonIgnore
	private Boolean enabled;
	
	@JsonIgnore
	private String email;
	
	@JsonIgnore
	private String password;
	
	@JsonIgnore
	private List<String> authorities;
	
	@JsonIgnore
	public List<GrantedAuthority> getGrantedAuthorities(){
		ArrayList<GrantedAuthority> grantedAuthorities = new ArrayList<>();
		
		for(String authority : this.authorities){
			grantedAuthorities.add(new AccountGrantedAuthority(authority));
		}
		
		return grantedAuthorities;
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
}
