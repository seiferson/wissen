var wHistory = [];
var wHistoryIndex = -1;
var wLocation = "/shared";
var wOutput = "Welcome to wissen console \n";
var wPrompt = "[anonymous@wissen] # "
var wEditor = false;
var wEditorFile = "";

document.getElementById("cmd").focus();

document.addEventListener("keydown", function (event) {
    if(event.keyCode === 27 && wEditor){
        document.getElementById("content").style.display = "block";
        document.getElementById("winput").style.display = "flex";
        document.getElementById("editor").style.display = "none";
        document.getElementById("editorheader").style.display = "none";
        wEditor = false;
    } else if(event.keyCode === 35 && wEditor){
        saveEditor();
    }
});

function lastCMD(event) {
    if(event.keyCode === 40 && wHistoryIndex > 0){
        wHistoryIndex = wHistoryIndex - 1;
        document.getElementById("cmd").value = wHistory[wHistoryIndex];
    } else if(event.keyCode === 38 && wHistoryIndex < (wHistory.length -1)){
        wHistoryIndex = wHistoryIndex + 1;
        document.getElementById("cmd").value = wHistory[wHistoryIndex];
    } else if(event.keyCode === 40){
        document.getElementById("cmd").value = "";
        wHistoryIndex = -1;
    }
}

var commands = {
    "time" : time,
    "history" : showHistory,
    "clear" : clear,
    "ls": ls,
    "touch": touch,
    "pwd": pwd,
    "rm": rm,
    "mkdir": mkdir,
    "echo": echo,
    "cat": cat,
    "cd": cd,
    "edit": edit
};



function pushText(text) {
wOutput = wOutput + text + "\n";
document.getElementById("content").innerHTML = wOutput;
}

function time(params) {
pushText(new Date());
}

function showHistory(params) {
wHistory.forEach(function(element) {
  pushText(element);
});
}

function clear(params) {
wOutput = "\n";
document.getElementById("content").innerHTML = wOutput;
}

function ls(params) {
fetch("/api/v1/data/search/in?path=" + wLocation, {
  method: 'GET',
  headers: {
    'Authorization' : 'Basic bWFzdGVyOjEyMzQ1Ng==',
    'Accept' : 'application/json'
  }
})
.then(response => response.json())
.then(function (data){
  data.content.forEach(function(file) {
    if(file.name === ".")
      pushText("[" + file.fullPath.replace(file.path + "/", "") + "]");
  });
  data.content.forEach(function(file) {
    if(file.name != ".")
      pushText("[" + new Date(file.date) + "] " + (2*file.text.length) + " bytes                 " + file.name);
  });
});
pushText("[.]");
}

function touch(params) {
if(params[0].trim() === "."){
  pushText("Files cannot be named .");
} else {
  var fileBody = {
    text: "",
    path: wLocation,
    date: new Date(),
    name: params[0],
    fullPath: wLocation + "/" + params[0]
  };
  fetch("/api/v1/data", {
    method: 'POST',
    headers: {
      'Authorization' : 'Basic bWFzdGVyOjEyMzQ1Ng==',
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fileBody)
  })
  .then(function(res){console.log(res)})
  .catch(function(res){console.log(res)});
}
}

function pwd(params) {
pushText(wLocation);
}

function rm(params) {
fetch("/api/v1/data/search/byFullPath?fullPath=" + wLocation + "/" + params[0], {
  method: 'GET',
  headers: {
    'Authorization' : 'Basic bWFzdGVyOjEyMzQ1Ng==',
    'Accept' : 'application/json',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(function(data){
  fetch(data.content[0].links[0].href, {
    method: 'delete',
    headers: {
      'Authorization' : 'Basic bWFzdGVyOjEyMzQ1Ng==',
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(function(res){console.log(res)})
  .catch(function(res){console.log(res)})
  })
.catch(function(res){console.log(res)})
}

function cat(params) {
fetch("/api/v1/data/search/byFullPath?fullPath=" + wLocation + "/" + params[0], {
  method: 'GET',
  headers: {
    'Authorization' : 'Basic bWFzdGVyOjEyMzQ1Ng==',
    'Accept' : 'application/json',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(function(data){
  pushText(data.content[0].text);
});
}

function mkdir(params) {
var fileBody = {
  text: "",
  "path": wLocation,
  date: new Date(),
  name: ".",
  fullPath: wLocation + "/" + params[0]
};
fetch("/api/v1/data", {
  method: 'post',
  headers: {
    'Authorization' : 'Basic bWFzdGVyOjEyMzQ1Ng==',
    'Accept' : 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(fileBody)
})
.then(function(res){console.log(res)})
.catch(function(res){console.log(res)});
}

function echo(params) {
pushText(params.join(" "));
}

function cd(params) {
var newPath = "";
if(params[0].trim().startsWith("/")) {
  newPath = params[0].trim();
} else {
  newPath = wLocation + "/" + params[0].trim();
}

fetch("/api/v1/data/search/byFullPath?fullPath=" + newPath, {
  method: 'GET',
  headers: {
    'Authorization' : 'Basic bWFzdGVyOjEyMzQ1Ng==',
    'Accept' : 'application/json',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(function(data){
  var newLocation = data.content[0].fullPath;
  if(newLocation != undefined){
    wLocation = newLocation;
  } else {
    pushText(params[0] + ":  No such file or directory");
  }
});
}

function edit(params) {
    document.getElementById("content").style.display = "none";
    document.getElementById("winput").style.display = "none";
    document.getElementById("editor").style.display = "block";
    document.getElementById("editorheader").style.display = "block";
    document.getElementById("editor").focus();
    wEditor = true;
    wEditorFile = params[0];
}

function saveEditor() {
    fetch("/api/v1/data/search/byFullPath?fullPath=" + wLocation + "/" + wEditorFile, {
        method: 'GET',
        headers: {
            'Authorization' : 'Basic bWFzdGVyOjEyMzQ1Ng==',
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(function(data){
        fetch(data.content[0].links[0].href, {
            method: 'PATCH',
            headers: {
                'Authorization' : 'Basic bWFzdGVyOjEyMzQ1Ng==',
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"text": document.getElementById("editor").value, "date": new Date()})
        })
        .then(function(res){console.log(res)})
        .catch(function(res){console.log(res)})
    })
    .catch(function(res){console.log(res)})
}

function processCommand(event){
    if(event.key === "Enter"){
  var line = document.getElementById("cmd").value;
  wHistory.push(line);
  var params = line.split(/\s+/);
  var command = params[0];

  if(commands[command]){
    pushText(wPrompt + line);
    commands[command](params.slice(1));
  } else {
    if(line.trim() === ""){
      pushText(wPrompt + line);
      pushText(wPrompt);
    } else {
      pushText(wPrompt + line);
      pushText("command [" + command  + "] not found");
    }
  }
  document.getElementById("cmd").value = "";
}
}