package com.seifernet.wissen.rpg;

import com.seifernet.wissen.model.rpg.Player;

public class StatsEngine {

	
	public static int calculateMaxHitPoints(Player p) {
		return (((Reference.MAX_HP/2)/Reference.MAX_LVL)*p.getLevel()) + (((Reference.MAX_HP/2)/Reference.MAX_ATR)*p.getVitality());
	}
	
	public static int calculateMaxSkillPoints(Player p) {
		return 10;
	}
}
