function mostrarImagen(image){
    var img = document.getElementsByClassName(image);
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.style.backgroundImage.valueOf = img.style.backgroundImage.valueOf; 
    }
    var span = document.getElementsByClassName("close")[0];
    
    span.onclick = function() { 
      modal.style.display = "none";
    }
    
  }