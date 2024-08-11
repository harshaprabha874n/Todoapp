var ulist=document.getElementById("list-container");
var input=document.getElementById("input");
function add(){
    let trimmedValue = input.value.trim();
    if (trimmedValue) {
        let li = document.createElement("li");
        li.innerHTML = trimmedValue + " <button onclick='deleteItem(this)'>Delete</button>";
        ulist.appendChild(li);
        input.value = ""; 
    }
}
function deleteItem(button) {
    ulist.removeChild(button.parentElement);}