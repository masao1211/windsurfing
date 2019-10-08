function createSupport(){
    writeStr = '<div class="item"><div class="content"><div class="header">関連団体</div></div></div>';
    for(var i=0; i<supportData.length; i++){
        writeStr += '<hr align="center" width="95%" size="1px" color="#1b435d">';
        writeStr += '<div class="item">';
        writeStr += '<div class="image"><a href="'+supportData[i].url+'"><img src="./src/support/'+supportData[i].picture+'"></a></div>';
        writeStr += '<div class="content">';
        writeStr += '<div class="header">'+supportData[i].name+'</div>';
        writeStr += '<div class="description">'+supportData[i].description+'</div>';
        writeStr += '</div></div>';
    }
    document.write(writeStr);
}