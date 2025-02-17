function bomboclat(){
    var elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }

    const musica = document.getElementById("musica")
    const videodiv = document.getElementById("surpresa");
    const vidio = document.getElementById("vidio");
    const aviso = document.getElementById("surpresaaviso")
    videodiv.style.backgroundImage = null;
    videodiv.style.display  = "grid";
    musica.pause()
    surpresaaviso.style.display = "grid";
    setTimeout(bomboclat2 , 3000);
}
function bomboclat2(){
    surpresaaviso.style.display = "none";
    vidio.play()
    vidio.style.display = "grid";
    setTimeout(bomboclat3 , 39000);
}
function bomboclat3(){
    const videodiv = document.getElementById("surpresa");
    const vidio = document.getElementById("vidio");
    vidio.style.display = "none";
    videodiv.style.backgroundImage = "url('https://steamuserimages-a.akamaihd.net/ugc/47948470153342461/8CF9921C12992A4864533EDE3488A64555CF5879/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')"
    videodiv.style.background
    setTimeout(bomboclat4 , 5000);
}
function bomboclat4(){
    const videodiv = document.getElementById("surpresa");
    videodiv.style.display = "none";
    const musica = document.getElementById("musica")
    musica.play()
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
}