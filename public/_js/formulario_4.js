// const remote = require('electron').remote
// const electron = require('electron')
// const ipcRenderer = electron.ipcRenderer;
// const main = remote.require('./main.js')
// const db = require('electron-db');

let sel = document.getElementById("nDisp");
let tb2 = document.getElementById("tb2");
let tb3 = document.getElementById("tb3");
let btnp = document.getElementById("btnp");
let btnc = document.getElementById("btnc");

let data = {};
let data2 = {};
let data3 = {};
// let data2 = {
//     decliv:[],
//     tipo:[],
//     angulo:[],
//     proporcao:[]
// };
// let data3 = {
//     decliv:[],
//     tipo:[],
//     angulo:[],
//     proporcao:[]
// };
let obs;
let title;

sel.addEventListener('change', function(){
    let num = sel.value;
    console.log(num);
    
    if(num == 1){
        tb2.style.visibility = "hidden";
        tb3.style.visibility = "hidden";
    } else if(num == 2){
        tb2.style.visibility = "visible";
        tb3.style.visibility = "hidden";
    } else if(num == 3){
        tb2.style.visibility = "visible";
        tb3.style.visibility = "visible";
    }
});

btnc.addEventListener('click', () => {
    fechaJanela();
});

btnp.addEventListener('click', ()=>{
    let num = sel.value;
    
    if(num == 1){
        data["decliv"] = geraObj(0, 19, "");
        data["angulo"] = geraArr(20, 29, "");
        data["proporcao"] = geraArr(29, 39, "");
        console.log(data);
    } else if(num == 2){
        data["decliv"] = geraObj(0, 19, "");
        data["angulo"] = geraArr(20, 29, "");
        data["proporcao"] = geraArr(29, 39, "");
        data2["decliv"] = geraObj(0, 19, "s");
        data2["angulo"] = geraArr(20, 29, "s");
        data2["proporcao"] = geraArr(29, 39, "s");
    } else if(num == 3){
        data["decliv"] = geraObj(0, 19, "");
        data["angulo"] = geraArr(20, 29, "");
        data["proporcao"] = geraArr(29, 39, "");
        data2["decliv"] = geraObj(0, 19, "s");
        data2["angulo"] = geraArr(20, 29, "s");
        data2["proporcao"] = geraArr(29, 39, "s");
        data3["decliv"] = geraObj(0, 19, "t");
        data3["angulo"] = geraArr(20, 29, "t");
        data3["proporcao"] = geraArr(29, 39, "t");
    }
    //add ao objeto do rio
    obs = document.getElementById("obs").value;

    axios.post('/add/f4', data)
        .then(function (response) {
          console.log(response);
          this.document.location.href = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
})


function geraArr(ini, end, cod){
    var arr = [];
    var count = 0;
    for(var i = ini;i<=end;i++){
        arr[count] = document.getElementById(cod+i).value;
        count++;
    }
    return arr;
}
function geraObj(ini, end, cod){
    var obj = {};
    var arr = [];
    var arr2 = [];
    var count = 0;
    for(var i = ini; i<end; i = i+2){
        arr[count] = document.getElementById(cod+i).value;
        arr2[count] = document.getElementById(cod+(i+1)).value;
        count++;
    }
    obj["decliv"] = arr;
    obj["tipo"] = arr2;
    return obj;
}