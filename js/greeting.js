function getPosition() {
    const value = window.location.href.match(new RegExp("[?&]position=(.*?)(&|$|#)"));
    if (value == null) return '';
    return decodeURIComponent(value[1]);
}

function createIndexGreetingImage(){
    writeStr = "";
    for(var i=0; i<2; i++){
        writeStr += '<div class="greetingImage"><img class="ui image" src="./src/greeting/'+greetingData[i].picture+'"></div>';
        writeStr += '<a href="./greeting.html?position='+greetingData[i].position+'"><button class="ui button" id="'+greetingData[i].position+'Button">'+greetingData[i].positionJp+'挨拶</button></a>';
    }
    document.write(writeStr);
}

document.write('<script type="text/javascript" src="./js/.greeting.js"></script>');

function createGreetingMessage(){
    var position = getPosition();
    var data = undefined;
    for(var i=0; i<greetingData.length; i++){
        if(greetingData[i].position == position) data = greetingData[i]
    }
    if (data == undefined) return;
    writeStr = '<div class="item">';
    writeStr += '<div class="ui medium image"><img src="./src/greeting/'+data.picture+'"></div>';
    writeStr += '<div class="content">';
    writeStr += '<div class="header">'+data.name+'</div>';
    writeStr += '<div class="description">'+data.positionJp+'</div>';
    writeStr += '</div></div><div class="item"><div class="content">';
    writeStr += '<div class="header">ご挨拶</div>';
    writeStr += '<div class="description">'+data.greeting+'</div>';
    writeStr += '</div></div>';
    document.write(writeStr);
}


