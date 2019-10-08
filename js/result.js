var resultData = Array;

function getYear() {
    const value = window.location.href.match(new RegExp("[?&]year=(.*?)(&|$|#)"));
    if (value == null) return '';
    return decodeURIComponent(value[1]);
}

function makeResultTable(){
    var year = getYear();
    var tbody = document.getElementById('resultTablebody');
    var elementList = ["date","competition","main","url"];
    for (var i=0; i < resultData[year].length; i++){
        var tr = document.createElement('tr');
        var td = [];
        for(var j=0; j<elementList.length; j++){
            td.push(document.createElement('td'));
            if(elementList[j] == "main"){
                td[j].innerHTML = "";
                for(var k=0; k<resultData[year][i][elementList[j]].length; k++){
                    td[j].innerHTML += '<p>'+resultData[year][i][elementList[j]][k].prize+'：'+resultData[year][i][elementList[j]][k].name+'</p>';
                }
            } else if(elementList[j] == "url"){
                td[j].innerHTML = '<a href="'+resultData[year][i][elementList[j]]+'"><div class="ui circular icon button"><i class="file alternate icon"></i></div></a>';
            } else {
                td[j].innerHTML = resultData[year][i][elementList[j]];
            }
            tbody.appendChild(td[j]);
        }
        tbody.appendChild(tr);
    }
}

function makeResultTitle(){
    document.write('<div class="tableTitle">'+getYear()+'年度リザルト</div>');
    document.write('<script type="text/javascript" src="./data/result/result'+getYear()+'data.js"></script>');
}

window.onload = function(){
    makeResultTable();
}
