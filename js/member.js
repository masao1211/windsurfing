var memberData = Array;

function loadMemberData(startYear,thisYear){
    writeStr = "";
    for(var i=startYear-1975; i<thisYear-1975; i++){
        writeStr += '<script type="text/javascript" src="./data/member/member'+i+'data.js"></script>'
    }
    document.write(writeStr);
}

function createActiveTable(thisYear){
    writeStr = '<table class="ui celled table"><thead><tr>';
    for(var i=4; i>0; i--){
        writeStr += '<th>'+i+'回生 <a href="./member_detail.html?generation='+(thisYear-1975-i)+'" style="margin-left: 10%;"><div class="ui circular icon button"><i class="zoom-in icon"></i></div></a></th>';
    }
    writeStr += '</tr></thead><tbody id="activeTablebody"></tbody></table>';
    document.write(writeStr);
}

function makeActiveTable(thisYear) {
    var tbody = document.getElementById('activeTablebody');
    var tr = document.createElement('tr');
    for (var generation=thisYear-1975-4; generation < thisYear-1975; generation++){
        var td = document.createElement('td');
        td.innerHTML = "";
        for(var i=0; i<memberData[generation].length; i++){
            td.innerHTML += '<p>'+memberData[generation][i].name 
                + ((memberData[generation][i].sail != undefined) ? ' ('+memberData[generation][i].sail+')' : '')
                + '</p>';
        }
        tbody.appendChild(td);
    }
    tbody.appendChild(tr);
}

function makeObogTable(startYear,thisYear){
    var tbody = document.getElementById('obogTablebody');
    for (var generation=startYear-1975; generation < thisYear-1975-4; generation++){
        var tr = document.createElement('tr');
        td = [];

        td.push(document.createElement('td'));
        td[0].innerHTML = generation+"期";
        tbody.appendChild(td[0]);

        td.push(document.createElement('td'));
        td[1].innerHTML = "";
        for(var i=0; i<memberData[generation].length; i++){
            td[1].innerHTML += memberData[generation][i].name + ((i<memberData[generation].length-1) ? ", " : "");
        }
        tbody.appendChild(td[1]);

        td.push(document.createElement('td'));
        td[2].innerHTML = '<a href="./member_detail.html?generation='+generation+'"><div class="ui circular icon button"><i class="zoom-in icon"></i></div></a>';
        tbody.appendChild(td[2]);

        tbody.appendChild(tr);
    }
}

function makeSailNumberTable(thisYear){
    var tbody = document.getElementById('sailTablebody');
    var listSailName = [];
    for (var generation=thisYear-1975-4; generation < thisYear-1975; generation++){
        for(var i=0; i<memberData[generation].length; i++){
            if(memberData[generation][i].sail != undefined){
                listSailName.push({
                    "sail": memberData[generation][i].sail,
                    "name": memberData[generation][i].name,
                    "number": parseInt(memberData[generation][i].sail.substr(3),10),
                    "generation": generation
                });
            }
        }
    }
    listSailName.sort(function(a,b){return a.number - b.number;});

    for (var i=0; i < listSailName.length; i++){
        var tr = document.createElement('tr');
        td = [];

        td.push(document.createElement('td'));
        td[0].innerHTML = listSailName[i].sail;
        tbody.appendChild(td[0]);

        td.push(document.createElement('td'));
        td[1].innerHTML = listSailName[i].name;
        tbody.appendChild(td[1]);

        td.push(document.createElement('td'));
        td[1].innerHTML = listSailName[i].name;
        tbody.appendChild(td[1]);

        td.push(document.createElement('td'));
        td[2].innerHTML = '<a href="./member_detail.html?generation='+listSailName[i].generation+'&sail='+listSailName[i].sail+'"><div class="ui circular icon button"><i class="zoom-in icon"></i></div></a>';
        tbody.appendChild(td[2]);

        tbody.appendChild(tr);
    }
}

window.onload = function(){
    makeActiveTable(thisYear);
    makeObogTable(startYear,thisYear);
    makeSailNumberTable(thisYear);
};