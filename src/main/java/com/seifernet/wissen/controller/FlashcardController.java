package com.seifernet.wissen.controller;

import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.File;
import java.math.BigInteger;
import java.net.URL;
import java.security.SecureRandom;

import javax.imageio.ImageIO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

/**
 * 
 * @author Seifer( Cuauhtemoc Herrera )
 *
 */
@Controller
public class FlashcardController {

	@RequestMapping( "/" )
	public String index( ){
//		try{
//			String data = new BigInteger( 20, new SecureRandom( ) ).toString( 32 );
//		URL url = new URL( "https://api.adorable.io/avatars/50/" + data + ".png" );
//		BufferedImage image = ImageIO.read(url);
//		File outputfile = new File("saved.png");
//		ImageIO.write(image, "png", outputfile);
//		Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
//				  "cloud_name", "seifernet",
//				  "api_key", "144742812481898",
//				  "api_secret", "frvfBJu9pw0Em2FpVuN-FCckd_I"));
//		cloudinary.uploader().upload(outputfile, ObjectUtils.emptyMap());
//		} catch ( Exception e ){
//			
//		}
		return "index";
	}
	
	@RequestMapping( "/createflashcard" )
	public String createFlashcard( ){

		return "create_flashcard";
	}
}
