var modal = document.getElementById('buymodal');


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*function changeimg() {
if (document.getElementById("pic1").src.match("nifa2.png")) 
        {
document.getElementById("hiddenimg").src = "nifa.png";
document.getElementById("hiddenimg2").src = "nifaqr.png";
}

}*/

/*function nifanothing() {

       
            document.getElementById("pic1").src = "nifa2.png";
        /*document.getElementById("dtbn").innerHTML = "Poster";*/
          
         /*document.getElementById("dtbn").innerHTML = "Poster";

     }*/
             




function changetonposter() {

        if (document.getElementById("pic1").src.match("nifa2.png")) 

        {
            document.getElementById("pic1").src = "nifa2.png";
        document.getElementById("p").innerHTML = "Try it!";
        document.getElementById("price").innerHTML = "$9.99";
        /*document.getElementById("dtbn").innerHTML = "Poster";*/
         document.getElementById("hiddenimg").src = "nifaqr.png";
             




        }
  else if (document.getElementById("pic1").src.match("nifasweatshirt.png")) 

        {
            document.getElementById("pic1").src = "nifa2.png";
        document.getElementById("p").innerHTML = "Try it!";
        document.getElementById("price").innerHTML = "$9.99";
        /*document.getElementById("dtbn").innerHTML = "Poster";*/
         document.getElementById("hiddenimg").src = "nifaqr.png";
             




        }

        /*else 
        {
            document.getElementById("pic1").src = "nifa2.png";
        document.getElementById("p").innerHTML = "";
          document.getElementById("price").innerHTML = "";
          document.getElementById('hiddenimg').style.display='hidden';
        }*/
    }


function changetonsweatshirt() {

        if (document.getElementById("pic1").src.match("nifa2.png")) 
        	

        	 {
            document.getElementById("pic1").src = "nifasweatshirt.png";
        document.getElementById("p").innerHTML = "Try it!";
        document.getElementById("price").innerHTML = "$14.99";
        /*document.getElementById("dtbn").innerHTML = "Poster";*/
         document.getElementById("hiddenimg").src = "nifasweatshirtqr.png";
             




        }
       /* else 
        {
            document.getElementById("pic1").src = "nifasweatshirt.png";
        document.getElementById("p").innerHTML = "";
          document.getElementById("price").innerHTML = "";
        }*/
    }



function hrtChange() {

        if (document.getElementById("hrt").src.match("hrt1.png")) 
        {
            document.getElementById("hrt").src = "hrt2.png";
        }
        else 
        {
            document.getElementById("hrt").src = "hrt1.png";
        }
    }