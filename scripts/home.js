document.getElementById("dat").innerText = new Date().toDateString();       

function themecolor(){
    let col = "0123456789abcdef";
    let fixed="#";
    for(let a=0; a<6; a++){
        fixed += col[Math.floor(Math.random() * 16)];
    }
    return fixed;
}

document.getElementById("theme").addEventListener("click",
    function(){
        
        document.body.style.backgroundColor = themecolor();
    })


