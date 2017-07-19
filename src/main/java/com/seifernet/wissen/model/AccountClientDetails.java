package com.seifernet.wissen.model;

import java.util.Collection;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.oauth2.provider.ClientDetails;

/**
 * 
 * @author cuauhteh
 *
 */
public class AccountClientDetails { //implements ClientDetails{

	private static final long serialVersionUID = 1L;
	private Author account;
	
	/**
	 * 
	 * @param account
	 */
	public AccountClientDetails(Author account) {
		this.account = account;
	}

	//@Override
	public Integer getAccessTokenValiditySeconds() {
		return 600;
	}

	//@Override
	public Map<String, Object> getAdditionalInformation() {
		return null;
	}

	//@Override
	/*public Collection<GrantedAuthority> getAuthorities() {
		return account.getGrantedAuthorities();
	}

	@Override
	public Set<String> getAuthorizedGrantTypes() {
		return new HashSet<>(account.getGrantTypes());
	}*/

	//@Override
	public String getClientId() {
		return account.getClientId();
	}

	//@Override
	public String getClientSecret() {
		return account.getSecret();
	}

	//@Override
	public Integer getRefreshTokenValiditySeconds() {
		return 600;
	}

	//@Override
	public Set<String> getRegisteredRedirectUri() {
		return null;
	}

	//@Override
	public Set<String> getResourceIds() {
		return new HashSet<>(account.getResources());
	}

	//@Override
	public Set<String> getScope() {
		return new HashSet<>(account.getScopes());
	}

	//@Override
	public boolean isAutoApprove(String arg0) {
		return true;
	}

	//@Override
	public boolean isScoped() {
		return true;
	}

	//@Override
	public boolean isSecretRequired() {
		return true;
	}

}
