package com.seifernet.wissen.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.seifernet.wissen.graph.Alchemy;
import com.seifernet.wissen.graph.Relation;

/**
 * 
 * @author Seifer( Cuauhtemoc Herrera )
 *
 */
@Controller
public class FlashcardController {

	@RequestMapping( "/" )
	public String index( Authentication auth ){
//		
//		Set<String> entities = new HashSet<>();
//		HashMap<String, Concept> c = new HashMap<>();
//		for( Relation r : Alchemy.getRelations("https://es.wikipedia.org/wiki/B%C3%B3lido_de_Tunguska") ){
//			try{
////				System.out.println( r.getSubject().getText() + " | " + r.getAction().getText() + " | " + r.getObject( ).getText() );
//				String x = r.getSubject().getText().split("\\(")[0].trim();
////				if( x.equals(principal) || x.equals( "su" ) || x.equals("sus") || x.equals(sub1) || x.equals(sub2) ){
//					entities.add(x);
////					System.out.println( r.getAction().getText() + " " + r.getObject().getText() );
////					
////				}
//				
//			} catch( Exception e){
//				
//			}
//			
//		}
//		System.out.println( entities );
		return "simple";
	}
	
	@RequestMapping( "/process" )
	public String process( Model model, @RequestParam("xurl") String url, HttpServletRequest request ){ 
		HttpSession session = request.getSession( );
		
		ArrayList<Relation> relations = Alchemy.getRelations( url );
		
		ArrayList<Relation> toDelete = new ArrayList<>();
		
		for( Relation r : relations ){
			if( r.getSubject().getText().split(" ").length >5 ){
				toDelete.add(r);
			}
			if( r.getSubject().getText().trim().equals("Wikipedia®") ||
				r.getSubject().getText().trim().equals("usted") ||
				r.getSubject().getText().trim().contains( "«" ) ||
				r.getSubject().getText().trim().contains( "↑" ) ||
				r.getSubject().getText().trim().equals( "Esto" ) ||
				r.getSubject().getText().trim().equals( "A ello" ) ||
				r.getSubject().getText().trim().equals( "Nos" ) ||
				r.getSubject().getText().trim().equals( "Un ejemplo" ) ||
				r.getSubject().getText().trim().equals( "le" ) ||
				r.getSubject().getText().trim().contains( "muchas" ) ||
				r.getSubject().getText().trim().contains( "un" ) ||
				r.getSubject().getText().trim().equals( "ya" ) ||
				r.getSubject().getText().trim().contains( "que" ) ||
				r.getOther().getText().trim().equals( "" ) ||
				r.getSubject().getText().trim().contains( "Estas" ) ||
				r.getSubject().getText().trim().contains( "Estos" ) ||
				r.getSubject().getText().trim().contains( "Este" )
				
				){
				toDelete.add(r);
			}
		}
		
		
		
		for( Relation r: toDelete ){
			relations.remove( r );
		}
		
		Collections.sort(relations);
		session.setAttribute( "relations" , relations  );
		
		model.addAttribute( "relations" , relations );
		return "relations";
	}
	
	@RequestMapping( "/indetify" )
	public String identify( Model model, HttpServletRequest request ){
		ArrayList<Relation> relations = (ArrayList<Relation>)request.getSession().getAttribute( "relations" );
		HashSet<String> subjects = new HashSet<>();
		int x = 0;
		int y = 0;
		int minHitCount = 3;
		
		HashMap<String, Integer> hitCount = new HashMap<>();
		
		for( Relation r : relations ){
			if( !subjects.contains( r.getSubject().getText().trim() ) ){
				hitCount.put(  r.getSubject().getText().trim() , 1);
			} else {
				hitCount.put( r.getSubject().getText().trim(), hitCount.get(r.getSubject().getText().trim()) + 1 );
			}
			
			subjects.add( r.getSubject().getText().trim() );
			r.getObject().setId("mvertex" + y++);
		}
		
		HashMap<String, String> map = new HashMap<>();
		
		for( String s : subjects ){
			map.put(s, "vertex" + x++);
		}
		
		
		ArrayList<Relation> toDelete = new ArrayList<>();
		for( Relation r : relations ){
			r.setId( map.get(r.getSubject().getText().trim()) );
			if( hitCount.get(r.getSubject().getText().trim()) < minHitCount ){
				toDelete.add(r);
			}
		}
		
		for( Relation r : toDelete ){
			relations.remove(r);
		}
		
		ArrayList<String> toDeleteS = new ArrayList<>();
		for( String s : subjects ){
			if( hitCount.get(s) < minHitCount ){
				toDeleteS.add(s);
			}
		}
		
		for( String s: toDeleteS ){
			subjects.remove(s);
		}
		System.out.println(subjects);
		System.out.println(hitCount);
		model.addAttribute( "concepts", new ArrayList<String>( subjects ) );
		model.addAttribute( "map", map );
		model.addAttribute( "relations" , relations);
		
		return "identify";
	}
	
	@RequestMapping( "/createflashcard" )
	public String createFlashcard( ){

		return "create_flashcard";
	}
	
	@RequestMapping( "/flashcardslist" )
	public String flashcard( ){
		return "flashcard_list";
		
//		try{
//		String data = new BigInteger( 20, new SecureRandom( ) ).toString( 32 );
//	URL url = new URL( "https://api.adorable.io/avatars/50/" + data + ".png" );
//	BufferedImage image = ImageIO.read(url);
//	File outputfile = new File("saved.png");
//	ImageIO.write(image, "png", outputfile);
//	Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
//			  "cloud_name", "seifernet",
//			  "api_key", "144742812481898",
//			  "api_secret", "frvfBJu9pw0Em2FpVuN-FCckd_I"));
//	cloudinary.uploader().upload(outputfile, ObjectUtils.emptyMap());
//	} catch ( Exception e ){
//		
//	}
//	System.out.println( auth.isAuthenticated( ) );
//	System.out.println( auth.getPrincipal( ) );
	}
}
