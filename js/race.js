var resultData = Array;

function makeScheduleTable() {
    var tbody = document.getElementById('scheduleTablebody');
    var elementList = ["date","name","place"];
    for (var i=0; i < scheduleData.length; i++){
        var tr = document.createElement('tr');
        for(var j=0; j<elementList.length; j++){
            var td = document.createElement('td');
            td.innerHTML = scheduleData[i][elementList[j]];
            tbody.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

function createPastResult(thisYear){
    var writeStr = '<div class="ui attached tabular menu sub">';
    writeStr += '<a class="item active" data-tab="result'+thisYear+'">本年度</a>';
    writeStr += '<a class="item" data-tab="result'+(thisYear-1)+'">昨年度</a>';
    writeStr += '<a class="item" data-tab="resultList">一覧</a></div>';

    writeStr += '<div class="ui attached tab segment sub active" data-tab="result'+thisYear+'">';
    writeStr += '<table class="ui celled table"><thead><tr><th>日程</th><th>大会名</th><th>主な戦績</th><th>リザルト</th></tr></thead><tbody id="resultTablebody'+thisYear+'" class="resultTable"></tbody></table></div>';
    writeStr += '<script type="text/javascript" src="./data/result/result'+thisYear+'data.js"></script>';
    
    writeStr += '<div class="ui attached tab segment sub" data-tab="result'+(thisYear-1)+'">';
    writeStr += '<table class="ui celled table"><thead><tr><th>日程</th><th>大会名</th><th>主な戦績</th><th>リザルト</th></tr></thead><tbody id="resultTablebody'+(thisYear-1)+'" class="resultTable"></tbody></table></div>';
    writeStr += '<script type="text/javascript" src="./data/result/result'+(thisYear-1)+'data.js"></script>';

    writeStr += '<div class="ui attached tab segment sub" data-tab="resultList">';
    writeStr += '<table class="ui celled table"><thead><tr><th>年度</th><th>主な戦績</th><th>一覧</th></tr></thead><tbody id="resultTableAll" class="resultTable"></tbody></table></div>';
    writeStr += '<script type="text/javascript" src="./data/result/resultListData.js"></script>';
    document.write(writeStr);
}

function makeResultTable(thisYear) {
    for(var year=thisYear; year>=thisYear-1; year--){
        var tbody = document.getElementById('resultTablebody'+year);
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
                    td[j].innerHTML = '<a href="./images/result/'+year+'/'+resultData[year][i][elementList[j]]+'"><div class="ui circular icon button"><i class="file alternate icon"></i></div></a>';
                } else {
                    td[j].innerHTML = resultData[year][i][elementList[j]];
                }
                tbody.appendChild(td[j]);
                
            }
            tbody.appendChild(tr);
        }
    }
    var tbody = document.getElementById('resultTableAll');
    for (var i=0; i < resultList.length; i++){
        var tr = document.createElement('tr');
        var td = [];

        td.push(document.createElement('td'));
        td[0].innerHTML = resultList[i].year;
        tbody.appendChild(td[0]);

        td.push(document.createElement('td'));
        td[1].innerHTML = "";
        for(var j=0; j<resultList[i].main.length; j++){
            td[1].innerHTML += '<p>'+resultList[i].main[j].competition+' '+resultList[i].main[j].prize+'：'+resultList[i].main[j].name+'</p>';
            tbody.appendChild(td[1]);
        }
        tbody.appendChild(td[1]);

        td.push(document.createElement('td'));
        td[2].innerHTML = '<a href="./result.html?year='+resultList[i].year+'"><div class="ui circular icon button"><i class="list alternate outline icon"></i></div></a>';
        tbody.appendChild(td[2]);

        tbody.appendChild(tr);
    }
}

window.onload = function(){
    makeScheduleTable();
    makeResultTable(thisYear);
};
