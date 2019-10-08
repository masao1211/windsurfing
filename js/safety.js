function makeManualTable(){
    var tbody = document.getElementById('manualTablebody');
    for (var i=0; i<manualData.length; i++){
        var tr = document.createElement('tr');
        var td = [];
        td.push(document.createElement('td'));
        td[0].innerHTML = manualData[i].purpose;
        tbody.appendChild(td[0]);
        td.push(document.createElement('td'));
        td[1].innerHTML = "";
        for(var j=0; j<manualData[i].manuals.length; j++){
            td[1].innerHTML += '<a href="./src/manual/'+manualData[i].manuals[j].url+'" class="link"><div class="ui circular icon button"><i class="file alternate icon"></i></div></a>'+manualData[i].manuals[j].name+'<br>';
        }
        tbody.appendChild(td[1]);
        tbody.appendChild(tr);
    }
}



document.write('<script type="text/javascript" src="./data/manual-data.js"></script>');
window.onload = function(){
    makeManualTable();
}
