package com.seifernet.wissen.graph;

import java.util.ArrayList;

import org.springframework.web.client.RestTemplate;

public class Alchemy {
	public static final String ENDPOINT = "https://gateway-a.watsonplatform.net/calls/url/URLGetRelations";
	public static final String API_KEY = "apikey=38c3db41a8f3f2f0da82e491df06165f0b78f28c";
	public static final String OUTPUT_MODE = "outputMode=json";
	
	
	public static ArrayList<Relation> getRelations( String url ){
		RestTemplate client = new RestTemplate();
		
		Wrapper w = client.getForObject(ENDPOINT+"?"+API_KEY+"&"+OUTPUT_MODE+"&url="+url, Wrapper.class);
		
		return w.getRelations();
	}
}
