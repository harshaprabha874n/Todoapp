var ulist=document.getElementById("list-container");
var input=document.getElementById("input");
function add(){
    let li=document.createElement("li");
    li.innerHTML=input.value +"<button>Delete</button>";
    ulist.append(li);

}