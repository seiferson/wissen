/**
 * Utility function to pad numbers
 */
Number.prototype.pad = function(size) {
	var s = String(this);
	while (s.length < (size || 2)) {s = "0" + s;}
	return s;
};

/**
 *  Utility function to format date values to compact 3 digit time difference from current date
 */
function dateToStringCompact(a,b){
	var milis = a.getTime() - b.getTime();
	
	if(milis > 31536000000) {
		return (Math.trunc(milis/31536000000)).pad(2) + "y";
	} else if(milis > 2592000000) {
		return (Math.trunc(milis/2592000000)).pad(2) + "M";
	} else if(milis > 86400000) {
		return (Math.trunc(milis/86400000)).pad(2) + "d";
	} else if(milis > 3600000){
		return (Math.trunc(milis/3600000)).pad(2) + "h";
	} else if(milis > 60000){
		return (Math.trunc(milis/60000)).pad(2) + "m";
	} else {
		return "ovd";
	}
}

/**
 *  Utility function to format date values to compact 3 digit time difference from current date
 */
function dateToString(a,b){
	var milis = a.getTime() - b.getTime();
	
	if(milis > 31536000000) {
		if(Math.trunc(milis/31536000000) > 1){
			return  (Math.trunc(milis/31536000000)) + " years"
		} else {
			return "1 year";
		}
	} else if(milis > 2592000000) {
		if(Math.trunc(milis/2592000000) > 1){
			return  (Math.trunc(milis/2592000000)) + " months"
		} else {
			return "1 month";
		}
	} else if(milis > 86400000) {
		if(Math.trunc(milis/86400000) > 1){
			return  (Math.trunc(milis/86400000)) + " days"
		} else {
			return "1 day";
		}
	} else if(milis > 3600000){
		if(Math.trunc(milis/3600000) > 1){
			return  (Math.trunc(milis/3600000)) + " hours"
		} else {
			return "1 hour";
		}
	} else if(milis > 60000){
		if(Math.trunc(milis/60000) > 1){
			return  (Math.trunc(milis/60000)) + " minutes"
		} else {
			return "1 minute";
		}
	} else {
		return "seconds";
	}
}

/**
 * Utility function to format date values
 * 
 * @param fdate
 * @returns
 */
function formatDate(fdate){
	var providedDate = new Date(fdate);
	return (providedDate.getMonth()+1).pad(2) + "/"+(providedDate.getDate()).pad(2)+"/"+providedDate.getFullYear() + " " + (providedDate.getHours()).pad(2) + ":"+(providedDate.getMinutes()).pad(2);
}