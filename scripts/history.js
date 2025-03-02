document.getElementById("a1").addEventListener("click",
    function(event){
        event.preventDefault();
        const Task1= document.getElementById("task-1").innerText;
        const times = new Date();
        const container = document.getElementById("history");
        const div = document.createElement("div");
        div.innerHTML=`<h1 class="bg-slate-100 p-2 rounded-lg mt-3"> You Have Successfully Completed <br> The <span class="font-bold">${Task1}</span> <br> at ${times}</h1>`;
        container.appendChild(div);
    })
document.getElementById("a2").addEventListener("click",
    function(event){
        event.preventDefault();
        const Task2= document.getElementById("task-2").innerText;
        const times = new Date();
        const container = document.getElementById("history");
        const div = document.createElement("div");
        div.innerHTML=`<h1 class="bg-slate-100 p-2 rounded-lg mt-3"> You Have Successfully Completed <br> The <span class="font-bold">${Task2}</span> <br> at ${times}</h1>`;
        container.appendChild(div);
    })
document.getElementById("a3").addEventListener("click",
    function(event){
        event.preventDefault();
        const Task3= document.getElementById("task-3").innerText;
        const times = new Date();
        const container = document.getElementById("history");
        const div = document.createElement("div");
        div.innerHTML=`<h1 class="bg-slate-100 p-2 rounded-lg mt-3"> You Have Successfully Completed <br> The <span class="font-bold">${Task3}</span> <br> at ${times}</h1>`;
        container.appendChild(div);
    })
document.getElementById("a4").addEventListener("click",
    function(event){
        event.preventDefault();
        const Task4= document.getElementById("task-4").innerText;
        const times = new Date();
        const container = document.getElementById("history");
        const div = document.createElement("div");
        div.innerHTML=`<h1 class="bg-slate-100 p-2 rounded-lg mt-3"> You Have Successfully Completed <br> The <span class="font-bold">${Task4}</span> <br> at ${times}</h1>`;
        container.appendChild(div);
    })
document.getElementById("a5").addEventListener("click",
    function(event){
        event.preventDefault();
        const Task5= document.getElementById("task-5").innerText;
        const times = new Date();
        const container = document.getElementById("history");
        const div = document.createElement("div");
        div.innerHTML=`<h1 class="bg-slate-100 p-2 rounded-lg mt-3"> You Have Successfully Completed <br> The <span class="font-bold">${Task5}</span> <br> at ${times}</h1>`;
        container.appendChild(div);
    })
document.getElementById("a6").addEventListener("click",
    function(event){
        event.preventDefault();
        const Task6= document.getElementById("task-6").innerText;
        const times = new Date();
        const container = document.getElementById("history");
        const div = document.createElement("div");
        div.innerHTML=`<h1 class="bg-slate-100 p-2 rounded-lg mt-3"> You Have Successfully Completed <br> The <span class="font-bold">${Task6}</span> <br> at ${times}</h1>`;
        container.appendChild(div);
    })

    





