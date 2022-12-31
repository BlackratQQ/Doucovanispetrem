class VerticalMenu extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div class="menu-btn">
    <i class="fas fa-bars"></i>
  </div>
  <div class="side-bar">
    <header>
      <div class="close-btn">
        <i class="fas fa-times"></i>
      </div>
      <img
        src="https://www.doucovanispetrem.cz/wp-content/uploads/2022/06/cropped-cropped-Doucovani-Matika-Statistika-Ekonomicke-metody-IKONA.png"
        alt="Logo"
      />
      <h1>Logo</h1>
      <div class="menu">
        <div class="item">
          <a href="#" 
          id="statistika"
          onClick="reply_click(this.id)>
          <i class="fas fa-desktop"></i>
          Statistika</a>

          <div class="item">
            <a class="sub-btn">
            Matematika
            <i class="fas fa-angle-right dropdown"></i></a>
            <div class="sub-menu">
              <a href="/pages/Matematika1.html" id="Matematika1" onClick="reply_click(this.id)"class="sub-item">Matematika#1</a>
              <a href="/pages/Matematika2.html" id="Matematika2" onClick="reply_click(this.id)"class="sub-item">Matematika#2</a>
            </div>
          </div>
          <div class="item">
            <a href="#" 
            id="ekonomy"onClick="reply_click(this.id)>
            <i class="fas fa-th"></i>
            Ekonomy</a>
          </div>
        </div>
      </div>
    </header>
  </div>
  `;
  }
}

window.customElements.define('vertical-menu', VerticalMenu);

$(document).ready(function () {
  //jquery for toggle sub menus
  $('.sub-btn').click(function () {
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });

  //jquery for expand and collapse the sidebar
  $('.menu-btn').click(function () {
    $('.side-bar').addClass('active');
    $('.menu-btn').css('visibility', 'hidden');
  });

  $('.close-btn').click(function () {
    $('.side-bar').removeClass('active');
    $('.menu-btn').css('visibility', 'visible');
  });
});

let selection = document.querySelector('sub-menu');
let result = document.querySelector('h2');

function reply_click(clicked_id) {
  localStorage.setItem('page-value', clicked_id);
  console.log(clicked_id);
  //window.location.href = "/pages/" + clicked_id + ".html";
}
