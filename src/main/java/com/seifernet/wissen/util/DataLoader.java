package com.seifernet.wissen.util;

import java.util.ArrayList;
import java.util.Date;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.seifernet.wissen.model.rpg.Equipment;
import com.seifernet.wissen.model.rpg.Space;
import com.seifernet.wissen.model.rpg.Equipment.EquipmentType;
import com.seifernet.wissen.model.rpg.Player;
import com.seifernet.wissen.repository.AccountRepository;
import com.seifernet.wissen.repository.EquipmentRepository;
import com.seifernet.wissen.repository.PlayerRepository;
import com.seifernet.wissen.repository.SpaceRepository;
import com.seifernet.wissen.rpg.Element;
import com.seifernet.wissen.rpg.StatsEngine;

@Component
public class DataLoader implements ApplicationRunner{
	
	@Autowired
	private AccountRepository repository;
	
	@Autowired
	private SpaceRepository spaceRep;
	
	@Autowired
	private EquipmentRepository equipRep;
	
	@Autowired
	private PlayerRepository pRep;
	
	
	public  class Location{
		public int x;
		public int y;
	}
	
	
	public ArrayList<Location> getNext(Location l){
		ArrayList<Location> ll = new ArrayList<>();
		
		Location n = new Location();
		if( l.x - 1 >= 0 ) {
			n.x = l.x - 1;
			n.y = l.y;
		}
		ll.add(n);
		
		n = new Location();
		if( l.y - 1 >= 0 ) {
			n.x = l.x;
			n.y = l.y - 1;
		}
		ll.add(n);
		
		n = new Location();
		if( l.x + 1 < 80 ) {
			n.x = l.x + 1;
			n.y = l.y;
		}
		ll.add(n);
		
		n = new Location();
		if( l.y + 1 < 80 ) {
			n.x = l.x;
			n.y = l.y + 1;
		}
		ll.add(n);
		
		n = new Location();
		if( l.x - 1 >= 0 && l.y - 1 >= 0 ) {
			n.x = l.x - 1;
			n.y = l.y - 1;
		}
		ll.add(n);
		
		
		n = new Location();
		if( l.x - 1 >= 0 && l.y + 1 < 80 ) {
			n.x = l.x - 1;
			n.y = l.y + 1;
		}
		ll.add(n);
		
		n = new Location();
		if( l.x + 1 < 80  && l.y - 1 >= 0) {
			n.x = l.x + 1;
			n.y = l.y - 1;
		}
		ll.add(n);
		
		n = new Location();
		if( l.x + 1 < 80 && l.y + 1 < 80 ) {
			n.x = l.x + 1;
			n.y = l.y + 1;
		}
		ll.add(n);
		
		return ll;
	}
	
	public ArrayList<Location> getNextCross(Location l){
		ArrayList<Location> ll = new ArrayList<>();
		
		Location n = new Location();
		if( l.x - 1 >= 0 ) {
			n.x = l.x - 1;
			n.y = l.y;
		}
		ll.add(n);
		
		n = new Location();
		if( l.y - 1 >= 0 ) {
			n.x = l.x;
			n.y = l.y - 1;
		}
		ll.add(n);
		
		n = new Location();
		if( l.x + 1 < 80 ) {
			n.x = l.x + 1;
			n.y = l.y;
		}
		ll.add(n);
		
		n = new Location();
		if( l.y + 1 < 80 ) {
			n.x = l.x;
			n.y = l.y + 1;
		}
		ll.add(n);
		
		return ll;
	}
	
	public void printMap( int[][] map ) {
		for(int i  = 0; i < 80; i++) {
			System.out.println();
			for(int j = 0 ; j < 80; j++) {
				if(map[i][j] == 0)
				System.out.print(". ");
				else if(map[i][j] == 1) 
				System.out.print("# ");
				else
				System.out.print("~ ");
			}
		}
	}
	
	public void checkLand(int[][] map, ArrayList<Location> pos) {
		for(Location l : pos) {
			if(map[l.x][l.y]==0) {
				map[l.x][l.y] = 2;
			}
		}
	}
	
	public void run(ApplicationArguments args) {
		
		
		int[][] map = new int[80][80];
		
		//0 will identify water
 		for(int i = 0; i < 80; i++) {
			for(int j = 0; j < 80; j++) {
				map[i][j] = 0;
			}
		}
 		
 		Random r = new Random();
 		ArrayList<Location> land = new ArrayList<Location>();
 		
 		
 		for(int i = 0; i< 50; i++) {
 			int inix = r.nextInt(60)+10;
 	 		int iniy = r.nextInt(60)+10;
 			map[inix][iniy] = 1;
 			
 			Location l = new Location();
 	 		l.x = inix;
 	 		l.y = iniy;
 	 		land.add(l);
 	 		
 		}
 		for(Location l:land) {
 			checkLand(map, getNext(l));
 		}
 		
 		for(int i = 0; i < 3000; i++) {
 			boolean changeinc = true;
 			while(changeinc) {
 				//Get a random piece of land from array
 				Location xm = land.get(r.nextInt(land.size()));
 				
 				ArrayList<Location> sur = getNextCross(xm);
 				
 				for(Location xmm : sur) {
 					if(map[xmm.x][xmm.y] == 2) {
 						map[xmm.x][xmm.y] = 1;
 						checkLand(map, getNext(xmm));
 						land.add(xmm);
 						changeinc = false;
 						break;
 					}
 				}	
 			}
 		}
 		//printMap(map);
 		
 		
 		
		
		
//		ArrayList<Equipment> eq = new ArrayList<>();
//		
//		Equipment a = equipRep.findOne("5ac3da6243bfa53ef83f103b");
//		eq.add(a);
//		
//		Space s = spaceRep.findOne("5ac3da6243bfa53ef83f1037");
//		
//		Player p = new Player();
//		p.setName("Test warrior");
//		p.setDexterity(1);
//		p.setAgility(1);
//		p.setLuck(1);
//		p.setMagic(1);
//		p.setStrength(1);
//		p.setVitality(1);
//		
//		p.setEquipment(eq);
//		
//		p.setLevel(1);
//		p.setExperience(0);
//		p.setGoldCoins(0);
//		
//		p.setMainElement(Element.NEUTRAL);
//		p.setSubElement(Element.NATURE);
//		
//		p.setX(0);
//		p.setY(0);
//		p.setZ(0);
//		p.setSpace(s);
//		
//		p.setCurrentHitPoints(StatsEngine.calculateMaxHitPoints(p));
//		p.setCurrentSkillPoints(StatsEngine.calculateMaxSkillPoints(p));
//		
//		pRep.insert(p);
		
		
		/**Space s = new Space();
		
		s.setName("field_1_map_1");
		s.setLimitx(300);
		s.setLimity(300);
		
		spaceRep.insert(s);
		
		Equipment a = new Equipment();
		a.setName("leather_boots");
		a.setType(EquipmentType.SHOES);
		a.setWeight(1.2);
		a.setBonus(1);
		equipRep.insert(a);
		
		a = new Equipment();
		a.setName("light_armor");
		a.setType(EquipmentType.ARMOR);
		a.setWeight(6);
		a.setBonus(1);
		equipRep.insert(a);
		
		a = new Equipment();
		a.setName("leather_gloves");
		a.setType(EquipmentType.GLOVES);
		a.setWeight(0.3);
		a.setBonus(1);
		equipRep.insert(a);
		
		a = new Equipment();
		a.setName("fabric_cloak");
		a.setType(EquipmentType.GARMENT);
		a.setWeight(0.4);
		a.setBonus(1);
		equipRep.insert(a);
		
		
		a = new Equipment();
		a.setName("silver_ring");
		a.setType(EquipmentType.RING);
		a.setWeight(0.01);
		a.setBonus(0);
		equipRep.insert(a);
		
		a = new Equipment();
		a.setName("silver_necklace");
		a.setType(EquipmentType.NECKLACE);
		a.setWeight(0.03);
		a.setBonus(0);
		equipRep.insert(a);
		
		/**
		repository.deleteAll();
		taskRepository.deleteAll();
		
		ArrayList<String> authorities = new ArrayList<String>();
		authorities.add("USER");
		Account account = new Account();
		account.setNickname("seiferson");
		account.setEmail("seifer.ch@gmail.com");
		account.setEnabled(true);
		account.setPassword("testpasswd");
		account.setAuthorities(authorities);
		
		repository.insert(account);
		
		
		Task t = new Task();
		t.setActive(true);
		t.setCompleted(false);
		t.setCompletionDate(null);
		t.setCreationDate(null);
		t.setCreationDate(new Date());
		t.setDescription("Take care of the dirty dishes, is not good for health to keep them with food more than one day, also it stinks.");
		t.setDescriptionRequired(true);
		t.setDueDate(new Date(new Date().getTime() + 3*24*60*60*1000) );
		t.setExpirationDate(null);
		t.setExpires(false);
		t.setOwner("seiferson");
		t.setTitle("Wash the dishes");
		
		taskRepository.insert(t);
		**/
	}
}
