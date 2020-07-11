
function profilef(){
  document.getElementsByClassName("contents")[0].style.display="none";
  document.getElementById("profile").style.display="block";

}

function musics(){
  document.getElementsByClassName("contents")[0].style.display="none";

  document.getElementById("music").style.display="block";


     }
     function search(){
       document.getElementsByClassName("contents")[0].style.display="none";
       document.getElementById("profile").style.display="none";

       document.getElementById("bing").style.display="block";


          }
          function font(){
            document.getElementsByClassName("contents")[0].style.display="none";

            document.getElementById("fonts").style.display="block";


               }
               function talk(){
                 document.getElementsByClassName("contents")[0].style.display="none";

                 document.getElementById("message").style.display="block";


                    }
               function phone(){
                 document.getElementsByClassName("contents")[0].style.display="none";

                 document.getElementById("phoneb").style.display="block";


                    }
     function hom(){
       document.getElementsByClassName("contents")[0].style.display="block";
        document.getElementById("phoneb").style.display="none";
        document.getElementById("message").style.display="none";
        document.getElementById("fonts").style.display="none";
        document.getElementById("heart").style.display="none";
        document.getElementById("walp").style.display="none";
        document.getElementById("bing").style.display="none";
        document.getElementById("profile").style.display="none";
        document.getElementById("music").style.display="none";

          window.navigator.vibrate(200);


          }





function heartb(){
  document.getElementsByClassName("contents")[0].style.display="none";

  document.getElementById("heart").style.display="block";


     }
     function setPic(src){

       document.getElementsByClassName("contents")[0].style.backgroundImage="url("+src+")";
       document.getElementById("walp").style.display="none";

         document.getElementsByClassName("contents")[0].style.display="block";





          }
     function wallpaper(){
       document.getElementsByClassName("contents")[0].style.display="none";

       document.getElementById("walp").style.display="block";


          }

          function nothing(){
           alert("sorry Contact Sainty to peform your requested action");

          }
