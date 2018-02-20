package com.seifernet.wissen.rpg;

import java.util.Random;

public class Dice {
	
	private static Random dice = new Random();
	
	public static int rollDice(int faces){
		return 1 + dice.nextInt(faces);
	}
}
