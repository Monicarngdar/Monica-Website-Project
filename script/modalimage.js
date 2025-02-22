
//Modal Content
var currentIndex = 0;
function showModal(img){
    var modal = document.getElementById("myModal");
    document.getElementById("modal_image").src=img.src;
    document.getElementById("modal_image").alt=img.alt;
    document.getElementById("modal_h6").innerHTML=img.alt;
    currentIndex = parseInt(img.id.slice(5));
    modal.style.display = "block";
  
  document.body.classList.add('modal-show');

  }
  function closeModal(){
    var modal = document.getElementById("myModal");
      modal.style.display = "none";

      document.body.classList.remove('modal-show');
  }

// Prev and Next Buttons

function modal(){
  const image = document.querySelectorAll("myModal");
}

function prev(){
  var img = document.getElementById ('image' + (currentIndex - 1));
  if (img != undefined) {
  showModal (img);
  };
}

function next(){

  var img = document.getElementById ('image' + (currentIndex + 1));
  if (img != undefined) {
  showModal (img);
  };
  
}