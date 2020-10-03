const table = document.getElementById('table');
tabuada();

function tabuada(){
    var i = 2;
    var j = 1;
    var divCol = [] //document.createElement('div');
    var divLine = [] //document.createElement('p');
    
    for(i; i<=10; i++){
        divCol[i] = document.createElement('div');

        for(j=1; j<=10 ; j++){
            console.log(i + " x " + j + " = " + (i*j));
            divLine[j] = document.createElement('div');
            divLine[j].append(i + " x " + j + " = " + (i*j));
            divCol[i].append(divLine[j]);
        }
        divCol[i].style.color= '#' + (90-(i+j)) + (60-(i+j)) + (30+(i+j)) ;
        divCol[i].style.fontSize=i+j;
        table.append(divCol[i]);
    }

}