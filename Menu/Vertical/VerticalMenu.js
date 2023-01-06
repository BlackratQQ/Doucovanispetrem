class VerticalMenu extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `      
    <div class="menu-btn">
        <i class="fas fa-bars vertical"></i>
      </div>
      <div class="side-bar">
        <div class="close-btn">
          <i class="fas fa-times vertical"></i>
        </div>
        <img
          src="https://www.doucovanispetrem.cz/wp-content/uploads/2022/06/cropped-cropped-Doucovani-Matika-Statistika-Ekonomicke-metody-IKONA.png"
          alt="Logo" />
        <h1>Logo</h1>
        <div class="vertical-menu">
          <div class="vertical-menu__item">
            <a href="#">
              <i class="fas fa-desktop"></i>
              Dashboard
            </a>
            <div class="vertical-menu__item">
              <a class="sub-btn">
                <i class="fas fa-table"></i>
                Matematika
                <i class="fas fa-angle-right dropdown"></i>
              </a>
              <div class="sub-menu">
                <a href="/pages/matematika1.html" class="sub-item">
                  Matematika#1
                </a>
                <a href="" class="sub-item">Matematika#2</a>
                <a href="" class="sub-item">Matematika#3</a>
              </div>
            </div>
            <div class="vertical-menu__item">
              <a href="#">
                <i class="fas fa-th"></i>
                Forms
              </a>
            </div>
            <div class="vertical-menu__item"></div>
          </div>
        </div>
      </div>
  `;
  }
}

window.customElements.define("vertical-menu", VerticalMenu);

$(document).ready(function () {
  //jquery for toggle sub menus
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });

  //jquery for expand and collapse the sidebar
  $(".menu-btn").click(function () {
    $(".side-bar").addClass("active");
    $(".menu-btn").css("visibility", "hidden");
  });

  $(".close-btn").click(function () {
    $(".side-bar").removeClass("active");
    $(".menu-btn").css("visibility", "visible");
  });
});

let selection = document.querySelector("sub-menu");
let result = document.querySelector("h2");

function reply_click(clicked_id) {
  localStorage.setItem("page-value", clicked_id);
  console.log(clicked_id);
  //window.location.href = "/pages/" + clicked_id + ".html";
}
