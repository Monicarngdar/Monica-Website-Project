
//Modal Content
var currentIndex = 0;
function showModal(img){
  if (window.innerWidth <= 640 ) return //disabled modal on small screens
    var modal = document.getElementById("myModal");
    document.getElementById("modal_image").src=img.src; //replacing the image source of the modal img
    document.getElementById("modal_image").alt=img.alt; // placing the alt tag for the modal tag
   // document.getElementById("modal_h6").innerHTML=img.alt;
    currentIndex = parseInt(img.id.slice(5));
    modal.style.display = "block";
  
  document.body.classList.add('modal-show');

  }

  function showModallandscape(img){
    if (window.innerWidth <= 640 ) return //disabled modal on small screens
      var modal = document.getElementById("myModal");
      document.getElementById("modal_image").src=img.src; //replacing the image source of the modal img
      document.getElementById("modal_image").alt=img.alt; // placing the alt tag for the modal tag
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

function prev(){ //prev button 
  var img = document.getElementById ('image' + (currentIndex - 1));
  if (img != undefined) {
  showModal (img);
  };
}

function next(){ //next button

  var img = document.getElementById ('image' + (currentIndex + 1));
  if (img != undefined) {
  showModal (img);
  };
  
}