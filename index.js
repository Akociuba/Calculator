let nums = "";
let equations;
let currIndex = 0;


function add(val){
    document.getElementById("displayNum").value += val;
}

function ret(){
    let k = document.getElementById("displayNum").value;
    document.getElementById("displayOutput").innerText = eval(k);
    equations.push(k);
    currIndex++;
    sessionStorage.setItem("nums", equations);
    k= "";
    // document.getElementById("displayNum").value = k;
}

function arrow(direction){

    let k = document.getElementById("displayNum").value;
    // if(equations[currIndex] !== k){
    //
    // }

    document.getElementById("displayOutput").innerText = "";
    if(direction === "forward"){
        if(currIndex === 0){
            document.getElementById("displayNum").value = equations[currIndex];
        }
        else {
            currIndex--;
            document.getElementById("displayNum").value = equations[currIndex];
        }
    }
    else{
        if(currIndex === equations.length-1){
            k = "";
            document.getElementById("displayNum").value = k;
        }
        else{
            currIndex++;
            document.getElementById("displayNum").value = equations[currIndex];
        }
    }
}




function hist(){

    const stored = sessionStorage.getItem("stored");
    if (stored){
        equations = JSON.parse(stored);
    }
    else{
        equations = [];
        sessionStorage.setItem("stored", equations);
    }
}




function del(){
    let k = document.getElementById("displayNum").value;
    k = k.substring(0,k.length-1);
    document.getElementById("displayNum").value = k;
}
