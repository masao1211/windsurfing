function createHead(){
    var writeStr = '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">';
    writeStr += '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">';
    writeStr += '<title>京都大学ウインドサーフィン部</title>';
    writeStr += '<link rel="stylesheet" type="text/css" href="'+rootDir+'/load/Semantic-UI/semantic.min.css">';
    writeStr += '<link rel="stylesheet" type="text/css" href="'+rootDir+'/css/header.css">';
    writeStr += '<link rel="stylesheet" href="'+rootDir+'/css/sp-menu.css">';
    writeStr += '<link rel="stylesheet" type="text/css" href="'+rootDir+'/css/footer.css">';
    writeStr += '<script type="text/javascript" src="'+rootDir+'/load/jquery/jquery-3.3.1.slim.js"></script>';
    writeStr += '<script src="'+rootDir+'/load/jquery/jquery.min.js"></script>';
    writeStr += '<script type="text/javascript" src="'+rootDir+'/load/Semantic-UI/semantic.js"></script>';
    writeStr += '<script type="text/javascript" src="'+rootDir+'/data/sponsers-data.js"></script>';
    writeStr += '<script type="text/javascript" src="'+rootDir+'/data/year-data.js"></script>';
    document.write(writeStr);
}

function createHeader(){
    var writeStr = "";
    if(window.innerWidth>750){
        writeStr += '<div class="ui fixed inverted menu" id="header">';
        writeStr += '<a href="'+rootDir+'/index.html""><div class="linkButton">Kyoto&nbsp;University Windsurfing&nbsp;Club</div></a>';
        writeStr += '<a href="'+rootDir+'/race.html"><div class="linkButton">Race</div></a>';
        writeStr += '<a href="'+rootDir+'/member.html"><div class="linkButton">Member</div></a>';
        writeStr += '<a href="'+rootDir+'/safety.html"><div class="linkButton">Safety</div></a>';
        writeStr += '<a href="'+rootDir+'/support.html"><div class="linkButton">Support</div></a>';
        writeStr += '<a href="https://6243.teacup.com/wind12/bbs"><div class="linkButton">BBS</div></a>';
        writeStr += '<div id="snsPageLink">';
        writeStr += '<a href="https://www.facebook.com/kyoto.windsurfing/"><div class="linkButton"><i class="facebook big icon"></i></div></a>';
        writeStr += '<a href="https://twitter.com/kuwind_2019"><div class="linkButton"><i class="twitter big icon"></i></div></a>';
        writeStr += '<a href="https://www.instagram.com/kyodai.wind_12/"><div class="linkButton"><i class="instagram big icon"></i></div></a>';
        writeStr += '</div></div>';
    } else {
        writeStr += '<div class="ui fixed inverted menu" id="header">';
        writeStr += '<div id="dropdown">';
        writeStr += '<div id="sp-icon" class="sp-close"><span></span></div>';
        writeStr += '<ul id="dropdownMenu">';
        writeStr += '<li><a href="'+rootDir+'/race.html">Race</a></li>';
        writeStr += '<li><a href="'+rootDir+'/member.html">Member</a></li>';
        writeStr += '<li><a href="'+rootDir+'/safety.html">Safety</a></li>';
        writeStr += '<li><a href="'+rootDir+'/support.html">Support</a></li>';
        writeStr += '<li><a href="https://6243.teacup.com/wind12/bbs">BBS</a></li>';
        writeStr += '</ul></div>';
        writeStr += '<a href="'+rootDir+'/index.html"><div class="linkButton">Kyoto&nbsp;University<br>Windsurfing&nbsp;Club</div></a>';
        writeStr += '<a href="https://www.facebook.com/kyoto.windsurfing/"><div class="linkButton" style="padding: 10px 0px;"><i class="facebook big icon"></i></div></a>';
        writeStr += '<a href="https://twitter.com/kuwind_2019"><div class="linkButton" style="padding: 10px 0px;"><i class="twitter big icon"></i></div></a>';
        writeStr += '<a href="https://www.instagram.com/kyodai.wind_12/"><div class="linkButton" style="padding: 10px 0px;"><i class="instagram big icon"></i></div></a>';
        writeStr += '</div><script src="'+rootDir+'/js/sp-menu.js"></script>';
    }
    document.write(writeStr);
}

function createFooter(){
    var writeStr = '';
    writeStr += '<div id="sponser"><div id="sponserText">スポンサー</div><div id="sponserImages">'
    for(var i=0; i<sponsers.length; i++){
        writeStr += '<a href="'+sponsers[i].url+'"><img class="sponserImage" src="'+rootDir+'/src/sponser/'+sponsers[i].name+'.png"></a>';
    }
    writeStr += '</div><div id="sponserApplyText"><a href="'+rootDir+'/inquiry">ご支援頂ける企業様はこちら</a></div></div>';
    writeStr += '<div id="copyright">Copyright © 京都大学ウインドサーフィン部 All Rights Reserved.</div>';
    document.write(writeStr);
}

createHead();