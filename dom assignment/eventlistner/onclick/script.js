const button=document.getElementById("one");
function colorchanghe(){
    let val = "0123456789ABCDEF";
    let cons = "#";

    for (let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
}
function changeRandomColor() {
    document.body.style.backgroundColor= colorchanghe();
}

button.addEventListener("click",changeRandomColor);