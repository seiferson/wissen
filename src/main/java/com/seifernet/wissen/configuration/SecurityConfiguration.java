package com.seifernet.wissen.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.seifernet.wissen.model.Author;
import com.seifernet.wissen.repository.AuthorRepository;

/**
 * Application security configuration
 * 
 * @author Seifer (Cuauhtemoc Herrera)
 * @version 0.0.1
 *
 */
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	private AuthorRepository authorRepository;
	
	@Bean
	public UserDetailsService userDetailsService( ) {		
		return new UserDetailsService( ) {
			
			@Override
			public UserDetails loadUserByUsername( String username ) throws UsernameNotFoundException {
				Author account = authorRepository.findByNickname( username );
				if( account != null ) {
					return new User( 
						account.getNickname( ), 
						account.getPassword( ), 
						account.getEnabled( ), 
						account.getEnabled( ), 
						account.getEnabled( ), 
						account.getEnabled( ),
						account.getAuthorities( ) );
				} else {
					throw new UsernameNotFoundException( "User not found: '" + username + "'" );
				}
			}
		};
	}
	
	@Override
	protected void configure( HttpSecurity http ) throws Exception {
		http
			.authorizeRequests( )
				.anyRequest( )
					.permitAll( )
				.and( )
				.formLogin()
					.loginPage( "/login" )
					.permitAll( )
				.and( )
				.logout( )
					.logoutRequestMatcher( new AntPathRequestMatcher( "/logout" ) )
					.logoutSuccessUrl( "/" )
					.permitAll( );
    }

    @Autowired
    public void configureGlobal( AuthenticationManagerBuilder auth, UserDetailsService userDetailsService ) throws Exception {
    	auth
    		.userDetailsService( userDetailsService )
    		.passwordEncoder( new ShaPasswordEncoder( 512 ) );
    }
}
