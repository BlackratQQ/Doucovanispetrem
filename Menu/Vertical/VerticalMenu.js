class verticalmenu extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `      
    <div class="menu-btn">
        <i class="fas fa-bars vertical"></i>
      </div>
      <div class="side-bar">
        <section>
          <div class="close-btn">
            <i class="fas fa-times vertical"></i>
          </div>
          <div class="logo">
            <img
              src="https://www.doucovanispetrem.cz/wp-content/uploads/2022/06/cropped-cropped-Doucovani-Matika-Statistika-Ekonomicke-metody-IKONA.png"
              alt="Logo" />
          </div>
          <h1>Logo</h1>
          <div class="menu">
            <div class="item">
              <a href="#">
                <i class="fas fa-desktop"></i>
                Dashboard
              </a>
              <div class="item">
                <a class="sub-btn">
                  <i class="fas fa-table"></i>
                  Matice
                  <i class="fas fa-angle-right dropdown"></i>
                </a>
                <div class="sub-menu">
                  <a
                    href="/pages/zakladni-operace.html"
                    id="zakladni-operace"
                    onClick="reply_click(this.id)"
                    class="sub-item">
                    Základní operace
                  </a>
                  <a
                    href="/pages/hodnost.html"
                    id="hodnost"
                    onClick="reply_click(this.id)"
                    class="sub-item">
                    Hodnost
                  </a>
                  <a
                    href="/pages/determinanty.html"
                    id="determinanty"
                    onClick="reply_click(this.id)"
                    class="sub-item">
                    Determinanty
                  </a>
                  <a
                    href="/pages/inverzni-matice.html"
                    id="inverzni-matice"
                    onClick="reply_click(this.id)"
                    class="sub-item">
                    Inverzní matice
                  </a>
                  <a
                    href="/pages/maticove-rovnice.html"
                    id="maticove-rovnice"
                    onClick="reply_click(this.id)"
                    class="sub-item">
                    Maticové rovnice
                  </a>
                  <a
                    href="/pages/vlastni-cisla-a-vektory.html"
                    id="vlastni-cisla-a-vektory"
                    onClick="reply_click(this.id)"
                    class="sub-item">
                    Vlastní čísla a vektory
                  </a>
                </div>
              </div>
              <div class="item">
                <a href="#">
                  <i class="fas fa-th"></i>
                  Forms
                </a>
              </div>
              <div class="item"></div>
            </div>
          </div>
        </section>
      </div>
  `;
  }
}

window.customElements.define("vertical-menu", verticalmenu);

$(document).ready(function () {
  //jquery for toggle sub menus
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });

  //jquery for expand and collapse the sidebar

  if (window.innerWidth > 850) {
    $(".close-btn").click(function () {
      $(".side-bar").addClass("non-active");
      $(".menu-btn").css("visibility", "visible");
    });

    $(".menu-btn").click(function () {
      $(".side-bar").removeClass("non-active");
      $(".menu-btn").css("visibility", "hidden");
    });
  } else {
    $(".side-bar").addClass("non-active");
    $(".menu-btn").click(function () {
      $(".side-bar").removeClass("non-active");
      $(".menu-btn").css("visibility", "hidden");
    });
    $(".close-btn").click(function () {
      $(".side-bar").addClass("non-active");
      $(".menu-btn").css("visibility", "visible");
    });
  }
});

function reply_click(clicked_id) {
  localStorage.setItem("page-value", clicked_id);
  // console.log(clicked_id);
  // alert(clicked_id);
  //window.location.href = "/pages/" + clicked_id + ".html";
}
