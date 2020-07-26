function patchTask(task, callback) {
    $.ajax({
        type: 'PATCH',
        url: '/api/v1/tasks/' + task.id,
        headers: {
            'Authorization' : 'Bearer ' + $.cookie('authtoken'),
            'Accept' : 'application/json'
        },
        contentType: 'application/json',
        data: JSON.stringify(task),
        error: function(XMLHttpRequest) {
            console.log('something went wrong');
        },
        success: function(resultData) {
            getToDoList(callback);
        }
    });
}

function getRandomColor() {
    var index = Math.floor((Math.random() * 7) + 1);
    switch(index) {
        case 1:
            return 'orange';
        case 2:
            return 'teal';
        case 3:
            return 'olive';
        case 4:
            return 'violet';
        case 5:
            return 'purple';
        case 6:
            return 'pink';
        case 7:
            return 'brown';
    }
}

function checkTokenFromCookies(stateCallback, controlCallback){
	if($.cookie('authuser') != 'anonymous' && $.cookie('authtoken') != undefined) {
		$.ajax({
			type: 'GET',
			url: '/oauth/check_token?token=' + $.cookie('authtoken'),
			headers: {
				'Authorization' : 'Basic bWFzdGVyOjEyMzQ1Ng==',
				'Accept' : 'application/json'
			},
			error: function(XMLHttpRequest) {
				$.removeCookie('authuser');
				$.removeCookie('authtoken');
				$.cookie('authuser', 'anonymous');
				$.cookie('avatar', md5(Math.random().toString()))
				stateCallback('user', $.cookie('authuser'));
                stateCallback('avatar', $.cookie('avatar'));
                controlCallback();
			},
			success: function(data){
			    getToDoList(stateCallback);
			}
		});
	} else {
	    controlCallback();
	}
}

function login(user, passwd, callback){
	$.ajax({
		type: 'POST',
		url: '/oauth/token',
		headers: {
			'Authorization' : 'Basic bWFzdGVyOjEyMzQ1Ng==',
			'Accept' : 'application/json'
		},
		contentType: 'application/x-www-form-urlencoded',
		data: {
			password : passwd,
			username : user,
			grant_type : 'password'
		},
		error: function(XMLHttpRequest) {
            $('[name="loginerror"]').val('');
            $('#authform').form('validate form');
            $('[name="loginerror"]').val('value');
		},
		success: function(data) {
			$.cookie('authtoken', data.access_token);
			$.cookie('authuser', user);
            $('#authmodal').modal('hide');
            callback('user', user);
            getUserInfo(callback);
            getToDoList(callback);
		}
	});
}

function getUserInfo(callback) {
    $.ajax({
        type: 'GET',
        url: '/api/v1/accounts/' + $.cookie('authuser'),
        headers: {
            'Authorization' : 'Bearer ' + $.cookie('authtoken'),
            'Accept' : 'application/json'
        },
        success: function(data) {
            $.cookie('avatar', data.avatarSeed);
            callback('avatar', data.avatarSeed);
        }
    });
}

function getToDoList(callback){
    $.ajax({
        type: 'GET',
        url: '/api/v1/tasks/search/todo?owner=' + md5($.cookie('authuser')),
        headers: {
            'Authorization' : 'Bearer ' + $.cookie('authtoken'),
            'Accept' : 'application/json'
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function(data) {

            data.forEach(function(element){
                element.viewAction = function() {
                    callback('currentTask', element);
                }
                element.completeAction = function() {
                    element.completed = true;
                    patchTask(element, callback);
                }
                element.patchAction = function() {
                    patchTask(element, callback);
                }
            });
            callback('tasks', data);
        }
    });
}

function getTaskIconClass(completed, dueDate){
    var currentDate = new Date();
    if(completed) {
        return 'green check square';
    } else if(dueDate != undefined) {
        var dueDateObj = new Date(dueDate);

        if(currentDate > dueDateObj) {
            return 'red square outline';
        } else if((dueDateObj.getTime() - currentDate.getTime()) < 86400000) {
           return 'yellow square outline';
        }
    }
    return 'teal square outline';
}

function createTask(title, description, duedate, category, callback){
    $.ajax({
        type: 'POST',
        url: '/api/v1/tasks',
        headers: {
            'Authorization' : 'Bearer ' + $.cookie('authtoken'),
            'Accept' : 'application/json'
        },
        contentType: 'application/json',
        data: JSON.stringify({
            'title' : title,
            'dueDate' : duedate,
            'description' : description,
            'category' : category,
            'updates' : []
        }),
        error: function(XMLHttpRequest) {
        },
        success: function(resultData) {
            getToDoList(callback);
            setTimeout(function() {
                $('#createtaskmodal').modal('hide');
            }, 300);
        }
    });
}

function createUser(user, password, email, avatar, callback){
    $.ajax({
        type: 'POST',
        url: '/api/v1/accounts',
        headers: {
            'Accept' : 'application/json'
        },
        contentType: 'application/json',
        data: JSON.stringify({
            'password' : password,
            'nickname' : user,
            'email' : email,
            'avatarSeed' : avatar
        }),
        error: function(XMLHttpRequest) {

        },
        success: function(resultData) {
            $('#regdisplayerrors').empty();
            $('#regform').form('clear');
            $('#regform').removeClass('error');
            $('#regform').addClass('success');
            setTimeout(function() {
                $('#regmodal').modal('hide');
            }, 1500);
        }
    });
}

/**
 *  Utility function to format date values to compact 3 digit time difference from current date
 */
function dateDiffFormat(a,b){
	var milis = a.getTime() - b.getTime();

	if(milis > 31536000000) {
		if(Math.trunc(milis/31536000000) > 1){
			return  (Math.trunc(milis/31536000000)) + " years";
		} else {
			return "1 year";
		}
	} else if(milis > 2592000000) {
		if(Math.trunc(milis/2592000000) > 1){
			return  (Math.trunc(milis/2592000000)) + " months";
		} else {
			return "1 month";
		}
	} else if(milis > 86400000) {
		if(Math.trunc(milis/86400000) > 1){
			return  (Math.trunc(milis/86400000)) + " days";
		} else {
			return "1 day";
		}
	} else if(milis > 3600000){
		if(Math.trunc(milis/3600000) > 1){
			return  (Math.trunc(milis/3600000)) + " hours";
		} else {
			return "1 hour";
		}
	} else if(milis > 60000){
		if(Math.trunc(milis/60000) > 1){
			return  (Math.trunc(milis/60000)) + " minutes";
		} else {
			return "1 minute";
		}
	} else {
		return "Seconds";
	}
}








function getGoalColor(goal){
	let color;
	
	if (goal.priority == 0){
		return 'purple';
	} else if(goal.priority == 1){
		return 'olive';
	} else if(goal.priority == 2){
		return 'blue';
	} else if(goal.priority == 3){
		return 'teal'
	}	
	return color;
}

function calculateGoalProgress(goal){
	return 10;
}



function githubAPIRepoQuery(callback){
	$.ajax({
		url : "https://api.github.com/repos/Seiferxx/wissen",
		dataType : "jsonp",
		success : function ( data ) {
			
		}
	});
}

/**
 * Utility function to pad numbers
 */
Number.prototype.pad = function(size) {
	var s = String(this);
	while (s.length < (size || 2)) {s = "0" + s;}
	return s;
};

/**
 * Utility function to format date object to dd/mm/yyyy HH:MM
 */
function formatDate(fdate){
	var providedDate = new Date(fdate);
	return (providedDate.getMonth()+1).pad(2) + "/"+(providedDate.getDate()).pad(2)+"/"+providedDate.getFullYear() + " " + (providedDate.getHours()).pad(2) + ":"+(providedDate.getMinutes()).pad(2);
}

function md5cycle(x, k) {
var a = x[0], b = x[1], c = x[2], d = x[3];

a = ff(a, b, c, d, k[0], 7, -680876936);
d = ff(d, a, b, c, k[1], 12, -389564586);
c = ff(c, d, a, b, k[2], 17,  606105819);
b = ff(b, c, d, a, k[3], 22, -1044525330);
a = ff(a, b, c, d, k[4], 7, -176418897);
d = ff(d, a, b, c, k[5], 12,  1200080426);
c = ff(c, d, a, b, k[6], 17, -1473231341);
b = ff(b, c, d, a, k[7], 22, -45705983);
a = ff(a, b, c, d, k[8], 7,  1770035416);
d = ff(d, a, b, c, k[9], 12, -1958414417);
c = ff(c, d, a, b, k[10], 17, -42063);
b = ff(b, c, d, a, k[11], 22, -1990404162);
a = ff(a, b, c, d, k[12], 7,  1804603682);
d = ff(d, a, b, c, k[13], 12, -40341101);
c = ff(c, d, a, b, k[14], 17, -1502002290);
b = ff(b, c, d, a, k[15], 22,  1236535329);

a = gg(a, b, c, d, k[1], 5, -165796510);
d = gg(d, a, b, c, k[6], 9, -1069501632);
c = gg(c, d, a, b, k[11], 14,  643717713);
b = gg(b, c, d, a, k[0], 20, -373897302);
a = gg(a, b, c, d, k[5], 5, -701558691);
d = gg(d, a, b, c, k[10], 9,  38016083);
c = gg(c, d, a, b, k[15], 14, -660478335);
b = gg(b, c, d, a, k[4], 20, -405537848);
a = gg(a, b, c, d, k[9], 5,  568446438);
d = gg(d, a, b, c, k[14], 9, -1019803690);
c = gg(c, d, a, b, k[3], 14, -187363961);
b = gg(b, c, d, a, k[8], 20,  1163531501);
a = gg(a, b, c, d, k[13], 5, -1444681467);
d = gg(d, a, b, c, k[2], 9, -51403784);
c = gg(c, d, a, b, k[7], 14,  1735328473);
b = gg(b, c, d, a, k[12], 20, -1926607734);

a = hh(a, b, c, d, k[5], 4, -378558);
d = hh(d, a, b, c, k[8], 11, -2022574463);
c = hh(c, d, a, b, k[11], 16,  1839030562);
b = hh(b, c, d, a, k[14], 23, -35309556);
a = hh(a, b, c, d, k[1], 4, -1530992060);
d = hh(d, a, b, c, k[4], 11,  1272893353);
c = hh(c, d, a, b, k[7], 16, -155497632);
b = hh(b, c, d, a, k[10], 23, -1094730640);
a = hh(a, b, c, d, k[13], 4,  681279174);
d = hh(d, a, b, c, k[0], 11, -358537222);
c = hh(c, d, a, b, k[3], 16, -722521979);
b = hh(b, c, d, a, k[6], 23,  76029189);
a = hh(a, b, c, d, k[9], 4, -640364487);
d = hh(d, a, b, c, k[12], 11, -421815835);
c = hh(c, d, a, b, k[15], 16,  530742520);
b = hh(b, c, d, a, k[2], 23, -995338651);

a = ii(a, b, c, d, k[0], 6, -198630844);
d = ii(d, a, b, c, k[7], 10,  1126891415);
c = ii(c, d, a, b, k[14], 15, -1416354905);
b = ii(b, c, d, a, k[5], 21, -57434055);
a = ii(a, b, c, d, k[12], 6,  1700485571);
d = ii(d, a, b, c, k[3], 10, -1894986606);
c = ii(c, d, a, b, k[10], 15, -1051523);
b = ii(b, c, d, a, k[1], 21, -2054922799);
a = ii(a, b, c, d, k[8], 6,  1873313359);
d = ii(d, a, b, c, k[15], 10, -30611744);
c = ii(c, d, a, b, k[6], 15, -1560198380);
b = ii(b, c, d, a, k[13], 21,  1309151649);
a = ii(a, b, c, d, k[4], 6, -145523070);
d = ii(d, a, b, c, k[11], 10, -1120210379);
c = ii(c, d, a, b, k[2], 15,  718787259);
b = ii(b, c, d, a, k[9], 21, -343485551);

x[0] = add32(a, x[0]);
x[1] = add32(b, x[1]);
x[2] = add32(c, x[2]);
x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
a = add32(add32(a, q), add32(x, t));
return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
txt = '';
var n = s.length,
state = [1732584193, -271733879, -1732584194, 271733878], i;
for (i=64; i<=s.length; i+=64) {
md5cycle(state, md5blk(s.substring(i-64, i)));
}
s = s.substring(i-64);
var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
for (i=0; i<s.length; i++)
tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
tail[i>>2] |= 0x80 << ((i%4) << 3);
if (i > 55) {
md5cycle(state, tail);
for (i=0; i<16; i++) tail[i] = 0;
}
tail[14] = n*8;
md5cycle(state, tail);
return state;
}

/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */
function md5blk(s) { /* I figured global was faster.   */
var md5blks = [], i; /* Andy King said do it this way. */
for (i=0; i<64; i+=4) {
md5blks[i>>2] = s.charCodeAt(i)
+ (s.charCodeAt(i+1) << 8)
+ (s.charCodeAt(i+2) << 16)
+ (s.charCodeAt(i+3) << 24);
}
return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n)
{
var s='', j=0;
for(; j<4; j++)
s += hex_chr[(n >> (j * 8 + 4)) & 0x0F]
+ hex_chr[(n >> (j * 8)) & 0x0F];
return s;
}

function hex(x) {
for (var i=0; i<x.length; i++)
x[i] = rhex(x[i]);
return x.join('');
}

function md5(s) {
return hex(md51(s));
}

/* this function is much faster,
so if possible we use it. Some IEs
are the only ones I know of that
need the idiotic second function,
generated by an if clause.  */

function add32(a, b) {
return (a + b) & 0xFFFFFFFF;
}

if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
function add32(x, y) {
var lsw = (x & 0xFFFF) + (y & 0xFFFF),
msw = (x >> 16) + (y >> 16) + (lsw >> 16);
return (msw << 16) | (lsw & 0xFFFF);
}
}