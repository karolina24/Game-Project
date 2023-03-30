document.addEventListener("DOMContentLoaded", () => {
       const sterowanyObiekt = document.querySelector('#sterowanyObiekt');
       const pokazSterowanie = document.querySelector('#pokazSterowanie');
       const gra = document.querySelector('#gra');
       const ziemia = document.querySelector('#ziemia');
       var liczby = document.querySelector(".liczby");
       var zle = document.querySelector(".zle");
       var koniecGry = document.querySelector(".koniecGry");
       const punkty = document.querySelector('#punkty');
       var wysObiektu = document.getElementById("sterowanyObiekt").offsetHeight;
       var szerObiektu = document.getElementById("sterowanyObiekt").offsetWidth;
       var wysZiemi = document.getElementById("ziemia").offsetHeight;
       var kolizje = 0;



       var x = document.getElementById("myAudio"); 

       function playAudio() { 
         x.play(); 
       } 

       function pauseAudio() { 
              x.pause(); 
            } 

       var y = document.getElementById("myBackAudio"); 


       function playBackAudio() { 
          
              y.play(); 
       } 

       function pauseBackAudio() { 
              y.pause(); 
            } 

            
           
           
function projektSterowanie() 
       {
              const ruch = (e) => 
              {
                     switch (e.keyCode) 
                     {
                            case 37:
                                   if(sterowanyObiekt.offsetLeft >= 0)
                                   {
                                   playBackAudio(); 
                                   sterowanyObiekt.style.left = sterowanyObiekt.offsetLeft - 10 + "px"; //ruch w lewo
                                   }
                                  break;
                                   
                            case 39:
                                   if(pokazSterowanie.offsetWidth == 1000) //ZABEZEPIECZENIA - RESPONSYWNOŚĆ
                                   {
                                          if(sterowanyObiekt.offsetLeft <= 900)
                                          {
                                          playBackAudio();
                                          sterowanyObiekt.style.left = sterowanyObiekt.offsetLeft + 10 + "px"; //ruch w prawo
                                          }
                                          break;
                                   }
                                   if(pokazSterowanie.offsetWidth == 700) //ZABEZEPIECZENIA - RESPONSYWNOŚĆ
                                   {
                                          if(sterowanyObiekt.offsetLeft <= 600)
                                          {
                                          playBackAudio();
                                          sterowanyObiekt.style.left = sterowanyObiekt.offsetLeft + 10 + "px"; //ruch w prawo
                                          }
                                          break;
                                   }
                                   if(pokazSterowanie.offsetWidth == 500) //ZABEZEPIECZENIA - RESPONSYWNOŚĆ
                                   {
                                          if(sterowanyObiekt.offsetLeft <= 400)
                                          {
                                          playBackAudio();
                                          sterowanyObiekt.style.left = sterowanyObiekt.offsetLeft + 10 + "px"; //ruch w prawo
                                          }
                                          break;
                                   }
                                   
                            default:
                                   console.log(':)');
                     }
              }
              document.addEventListener("keydown", ruch)
       }

function alert()
       {
              window.location.href = 'koncowymenu.html';
              document.getElementById("liczby").style.display = "none";  
              document.getElementById("zle").style.display = "none"; 
              koniecGry.append(koniec); 
       }

function generujLiczbe() 
       {
              var liczbaBottom = 550; //zaczyna lecieć od wysokosci div "pokazSterowanie"
              if(pokazSterowanie.offsetWidth == 1000) //ZABEZEPIECZENIA - RESPONSYWNOŚĆ
              {
                     var liczbaLeft = Math.floor(Math.random() * 920 ); //losowane miejsce z wymiaru div "pokazSterowanie"
              }
              if(pokazSterowanie.offsetWidth == 700)
              {
                     var liczbaLeft = Math.floor(Math.random() * 620 );
              }
              if(pokazSterowanie.offsetWidth == 500)
              {
                     var liczbaLeft = Math.floor(Math.random() * 420 );
              }
            
              var liczba = document.createElement('div'); //div na spadanie
              liczba.setAttribute("class", "liczba"); //tworzenie atrybutów - style do liczba w main.css
              liczby.appendChild(liczba); //dodanie elementu liczba do div liczba
              function spadajacaLiczba() 
              {
                     
                     liczbaBottom -= 5; //prędkość spadania - więcej = szybciej
                     liczba.style.bottom = liczbaBottom + 'px';
                     liczba.style.left = liczbaLeft + 'px';
                     liczba.style.display="block"; //ukrycie wyświetlania elementów przy ich generowaniu 
                     
                     if((liczba.offsetTop == ziemia.offsetTop + wysZiemi - 30)) //usunięcie obiektu spadającego w miejscu ziemii, żeby nie spadał poza ekran
                     {
                            liczby.removeChild(liczba);
                     }
                     if((liczba.offsetLeft >= sterowanyObiekt.offsetLeft - szerObiektu ) && (liczba.offsetLeft  <= sterowanyObiekt.offsetLeft + szerObiektu ) && (liczba.offsetTop >= sterowanyObiekt.offsetTop + wysObiektu - 100 ))
                     {   
                            kolizje++;
                            punkty.textContent = `punkty: ${kolizje}`; //liczenie punktów, gdy złapie się obiekt 
                            localStorage.setItem('pkt', kolizje); 
                            liczby.removeChild(liczba);
                            playAudio();
                          
                     }
                    else if((liczba.offsetTop >= sterowanyObiekt.offsetTop + wysObiektu ))
                     {
                            alert(); // nie złapanie obiektu - koniec gry
                            pauseAudio();
                            pauseBackAudio();
                     }   
                     
              }   
              setInterval(spadajacaLiczba, 60); //prędkość spadania - więcej = wolniej 
              setTimeout(generujLiczbe, 2000); //ilość spadających elementów - więcej = rzadziej       
       };
      
function inne() 
       {
              var kamienBottom = 540; //zaczyna lecieć od wysokosci div "pokazSterowanie"
              if(pokazSterowanie.offsetWidth == 1000) //ZABEZEPIECZENIA - RESPONSYWNOŚĆ
              {
                     var kamienLeft = Math.floor(Math.random() * 920 ); //losowane miejsce z wymiaru div "pokazSterowanie"
              }
              if(pokazSterowanie.offsetWidth == 700)
              {
                     var kamienLeft = Math.floor(Math.random() * 620 );
              }
              if(pokazSterowanie.offsetWidth == 500)
              {
                     var kamienLeft = Math.floor(Math.random() * 420 );
              }
              var kamien = document.createElement('div'); //div na spadanie
              kamien.setAttribute("class", "kamien"); //tworzenie atrybutów - style do liczba w main.css
              zle.appendChild(kamien); //dodanie elementu liczba do div liczba
              function spadajacyK() 
              {
                     kamienBottom -= 5; //prędkość spadania - więcej = szybciej
                     kamien.style.bottom = kamienBottom + 'px';
                     kamien.style.left = kamienLeft + 'px';
                     kamien.style.display="block";
                     if((kamien.offsetTop == ziemia.offsetTop + wysZiemi - 30)) //usunięcie obiektu spadającego w miejscu ziemii, żeby nie spadał poza ekran
                     {
                            zle.removeChild(kamien);
                     }
                     if((kamien.offsetLeft >= sterowanyObiekt.offsetLeft - szerObiektu ) && (kamien.offsetLeft  <= sterowanyObiekt.offsetLeft + szerObiektu ) && (kamien.offsetTop >= sterowanyObiekt.offsetTop + wysObiektu - 100 ))
                     {   
                            alert(); // nie złapanie obiektu - koniec gry
                            pauseAudio();
                            pauseBackAudio();
                     }      
              }
              setInterval(spadajacyK, 80); //prędkość spadania - więcej = wolniej 
              setTimeout(inne, 5000); //ilość spadających elementów - więcej = rzadziej       
       };
       inne();
       generujLiczbe();
       projektSterowanie();
});

