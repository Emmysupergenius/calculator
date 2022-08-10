var result = document.getElementById("input-text");
var calculate=(number)=>{
    result.value+=number;

}

var Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Enter the valid result Input");
    }
}

function clr(){
    result.value= " "
}

function del(){
    result.value=result.value.slice(0,-1);
}