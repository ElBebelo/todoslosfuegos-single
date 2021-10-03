function mostrarImagen(image){
    var img = document.getElementById(image);
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("modal-img");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.style.maxWidht="650px";
      modalImg.style.marginTop="0%";
      modalImg.style.transform="scale(1)";
      modalImg.style.animationName="zoom";
      modalImg.src = img.src; 
    }
    var span = document.getElementsByClassName("close")[0];
    
    span.onclick = function() { 
      modal.style.display = "none";
    }
    
  }
  function mostrarImagenHeight(image){
    var img = document.getElementById(image);
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("modal-img");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.style.maxWidht="250px";
      modalImg.style.marginTop="-18%";
      modalImg.style.animationName="zoom2"
      modalImg.style.transform="scale(0.5)"
      modalImg.src = img.src;
    }
    var span = document.getElementsByClassName("close")[0];
    
    span.onclick = function() { 
      modal.style.display = "none";
    }
    
  }