const sec = document.getElementById("but-sec");
const tons = sec.querySelectorAll("button");
  for(let buts of tons){
    buts.addEventListener("click", function(event){
    event.preventDefault();
    const mainTask=document.getElementById("checkbox").innerText;
    const conTask= parseInt(mainTask);
    const allTask=document.getElementById("task").innerText;
    const contask= parseInt(allTask);
    const sum= conTask + 1;
    const deduct =contask -1;
    document.getElementById("checkbox").innerText= sum;
    document.getElementById("task").innerText= deduct;
}

)}
  