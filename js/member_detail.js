var memberData = Array;

function getGeneration() {
    const value = window.location.href.match(new RegExp("[?&]generation=(.*?)(&|$|#)"));
    if (value == null) return '';
    return decodeURIComponent(value[1]);
}

function getSailNumber() {
    const value = window.location.href.match(new RegExp("[?&]sail=(.*?)(&|$|#)"));
    if (value == null) return '';
    return decodeURIComponent(value[1]);
}

function createMemberDetail(){
    var generation = getGeneration()
    var data = memberData[generation];
    var sail = getSailNumber();
    writeStr = (sail!="")?'':('<div class="item"><div class="content"><div class="header">'+generation+'期メンバー</div></div></div>');
    for(var i=0; i<data.length; i++){
        if(sail == "" || sail==data[i].sail){
            if(sail == "") writeStr += '<hr align="center" width="95%" size="1px" color="#1b435d">';
            writeStr += '<div class="item">';
            writeStr += '<div class="image"><img src="./src/member/'+generation+'th/'+data[i].picture+'"></div>';
            writeStr += '<div class="content">';
            writeStr += '<div class="header">'+data[i].name+(data[i].sail!=undefined?' ('+data[i].sail+')':'')+'</div>';
            writeStr += '<div class="meta">'+data[i].subject+'</div>';
            writeStr += '<div class="description">'+data[i].description+'</div>';
            writeStr += '</div></div>';
        }
    }
    document.write(writeStr);
}



document.write('<script type="text/javascript" src="./data/member/member'+getGeneration()+'data.js"></script>');
