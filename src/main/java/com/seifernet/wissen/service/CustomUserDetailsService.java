package com.seifernet.wissen.service;

/**
 * 
 * @author Seiferson (Cuauhtemoc Herrera)
 */
@Service
public class CustomUserDetailsService implements UserDetailsService{

	@Autowired
	private AuthorRepository authorRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Author account = authorRepository.findByNickname(username);
		if(account != null) {
			System.out.println(account.getNickname());
			System.out.println(account.getPassword());
			return new User( 
					account.getNickname(),
					account.getPassword(),
					account.getEnabled(),
					account.getEnabled(),
					account.getEnabled(),
					account.getEnabled(),
					account.getGrantedAuthorities()
				);
		} else {
			throw new UsernameNotFoundException("User not found: '" + username + "'");
		}
	}*/

}
