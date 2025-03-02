const sect = document.getElementById("but-sec");
const buttons = sect.querySelectorAll("button");
  for(let button of buttons){
    button.addEventListener("click" ,function(event){
      event.preventDefault();      
      alerts = alert('Board Updated successfully');
      button.disabled=true;
      const allButton = [...buttons].every(button => button.disabled);
      if (allButton) {
      alert("Congratulations You Have Completed All The Task!");
    }
  })}

 
 

