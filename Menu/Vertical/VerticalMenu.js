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
          <a href="https://priklady.doucovanispetrem.cz/">
            <img
              src="../../../../Doucovani-Matika-Statistika-Ekonomicke-metody-IKONA.png"
              alt="Logo" />
          </a>
        </div>
        <h1>Doučování</h1>
        <div class="menu">
          <div class="item">
            <a class="sub-btn">
              Matice
              <i class="fas fa-angle-right dropdown"></i>
            </a>
            <div class="sub-menu">
              <a
                href="/pages/matice/zakladni-operace.html"
                id="matice/zakladni-operace"
                onClick="reply_click(this.id)"
                class="sub-item">
                Základní operace
              </a>
              <a
                href="/pages/matice/hodnosti.html"
                id="matice/hodnosti"
                onClick="reply_click(this.id)"
                class="sub-item">
                Hodnost
              </a>
              <a
                href="/pages/matice/determinanty.html"
                id="matice/determinanty"
                onClick="reply_click(this.id)"
                class="sub-item">
                Determinanty
              </a>
              <a
                href="/pages/matice/inverzni-matice.html"
                id="matice/inverzni-matice"
                onClick="reply_click(this.id)"
                class="sub-item">
                Inverzní matice
              </a>
              <a
                href="/pages/matice/maticove-rovnice.html"
                id="matice/maticove-rovnice"
                onClick="reply_click(this.id)"
                class="sub-item">
                Maticové rovnice
              </a>
              <a
                href="/pages/matice/vlastni-cisla-a-vektory.html"
                id="matice/vlastni-cisla-a-vektory"
                onClick="reply_click(this.id)"
                class="sub-item">
                Vlastní čísla a vektory
              </a>
            </div>
          </div>
          <div class="item">
            <a class="sub-btn">
              Soustavy lineárních rovnic
              <i class="fas fa-angle-right dropdown"></i>
            </a>
            <div class="sub-menu">
              <a
                href="/pages/soustavy-linearnich-rovnic/homogenni.html"
                id="soustavy-linearnich-rovnic/homogenni"
                onClick="reply_click(this.id)"
                class="sub-item">
                Homogenní
              </a>
              <a
                href="/pages/soustavy-linearnich-rovnic/nehomogenni.html"
                id="soustavy-linearnich-rovnic/nehomogenni"
                onClick="reply_click(this.id)"
                class="sub-item">
                Nehomogenní
              </a>
              <a
                href="/pages/soustavy-linearnich-rovnic/cramerovo-pravidlo.html"
                id="soustavy-linearnich-rovnic/cramerovo-pravidlo"
                onClick="reply_click(this.id)"
                class="sub-item">
                Cramerovo pravidlo
              </a>
            </div>
          </div>
          <div class="item">
            <a class="sub-btn">
              Funkce
              <i class="fas fa-angle-right dropdown"></i>
            </a>
            <div class="sub-menu">
              <a
                href="/pages/funkce/linearni.html"
                id="funkce/linearni"
                onClick="reply_click(this.id)"
                class="sub-item">
                Lineární
              </a>
              <a
                href="/pages/funkce/kvadraticke.html"
                id="funkce/kvadraticke"
                onClick="reply_click(this.id)"
                class="sub-item">
                Kvadratické
              </a>
              <a
                href="/pages/funkce/mocninne.html"
                id="funkce/mocninne"
                onClick="reply_click(this.id)"
                class="sub-item">
                Mocninné
              </a>
              <a
                href="/pages/funkce/n-ta-odmocnina.html"
                id="funkce/n-ta-odmocnina"
                onClick="reply_click(this.id)"
                class="sub-item">
                N-tá odmocnina
              </a>
              <a
                href="/pages/funkce/linearne-lomena.html"
                id="funkce/linearne-lomena"
                onClick="reply_click(this.id)"
                class="sub-item">
                Lineárně lomená
              </a>
              <a
                href="/pages/funkce/exponencionalni.html"
                id="funkce/exponencionalni"
                onClick="reply_click(this.id)"
                class="sub-item">
                Exponenciální
              </a>
              <a
                href="/pages/funkce/logaritmicka.html"
                id="funkce/logaritmicka"
                onClick="reply_click(this.id)"
                class="sub-item">
                Logaritmická
              </a>
              <a
                href="/pages/funkce/goniometricka.html"
                id="funkce/goniometricka"
                onClick="reply_click(this.id)"
                class="sub-item">
                Goniometrická
              </a>
              <a
                href="/pages/funkce/cyklometricka.html"
                id="funkce/cyklometricka"
                onClick="reply_click(this.id)"
                class="sub-item">
                Cyklometrická
              </a>
            </div>
          </div>
          <div class="item">
            <a href="/pages/definicni-obor.html" onClick="reply_click(this.id)">Definiční obor</a>
          </div>
          <div class="item">
            <a class="sub-btn">
              Limity funkcí
              <i class="fas fa-angle-right dropdown"></i>
            </a>
            <div class="sub-menu">
              <a
                href="/pages/limity-funkci/zakladni.html"
                id="limity-funkci/zakladni"
                onClick="reply_click(this.id)"
                class="sub-item">
                Základní
              </a>
              <a
                href="/pages/limity-funkci/deleni-nulou.html"
                id="limity-funkci/deleni-nulou"
                onClick="reply_click(this.id)"
                class="sub-item">
                Dělení nulou
              </a>
              <a
                href="/pages/limity-funkci/pouziti-vzorcu.html"
                id="limity-funkci/pouziti-vzorcu"
                onClick="reply_click(this.id)"
                class="sub-item">
                Použití vzorců
              </a>
              <a
                href="/pages/limity-funkci/v-nevlastnim-bode.html"
                id="limity-funkci/v-nevlastnim-bode"
                onClick="reply_click(this.id)"
                class="sub-item">
                V nevlastním bodě
              </a>
              <a
                href="/pages/limity-funkci/l-hospitalovo-pravidlo.html"
                id="limity-funkci/l-hospitalovo-pravidlo"
                onClick="reply_click(this.id)"
                class="sub-item">
                L'Hospitalovo pravidlo
              </a>
            </div>
          </div>
          <div class="item">
            <a href="/pages/body-nespojitosti.html" id="body-nespojitosti" onClick="reply_click(this.id)">
              Body nespojitosti
            </a>
          </div>
          <div class="item">
            <a href="/pages/asymptoty-funkce.html" id="asymptoty-funkce" onClick="reply_click(this.id)">
              Asymptoty funkce
            </a>
          </div>
          <div class="item">
            <a class="sub-btn">Derivace<i class="fas fa-angle-right dropdown"></i></a>
            <div class="sub-menu">
              <a
                href="/pages/derivace/soucet-a-rozdil.html"
                id="derivace/soucet-a-rozdil"
                onClick="reply_click(this.id)"
                class="sub-item">
                Součet a rozdíl
              </a>
              <a
                href="/pages/derivace/soucin.html"
                id="derivace/soucin"
                onClick="reply_click(this.id)"
                class="sub-item">
                Součin
              </a>
              <a
                href="/pages/derivace/podil.html"
                id="derivace/podil"
                onClick="reply_click(this.id)"
                class="sub-item">
                Podíl
              </a>
              <a
                href="/pages/derivace/slozena-funkce.html"
                id="derivace/slozena-funkce"
                onClick="reply_click(this.id)"
                class="sub-item">
                Složená funkce
              </a>
            </div>
          </div>
          <div class="item">
            <a href="/pages/tecny-a-normaly.html" id="tecmy-a-normaly" onClick="reply_click(this.id)">
              Tečny a normály
            </a>
          </div>
          <div class="item">
            <a href="/pages/tayloruv-polynom.html" id="tayloruv-polynom" onClick="reply_click(this.id)">
              Taylorův polynom
            </a>
          </div>
          <div class="item">
            <a href="/pages/monotonie.html" id="monotonie" onClick="reply_click(this.id)">Monotonie</a>
          </div>
          <div class="item">
            <a href="/pages/extremy.html" id="extremy" onClick="reply_click(this.id)">Extrémy</a>
          </div>
          <div class="item">
            <a
              href="/pages/zakrivenost-a-inflexni-body.html"
              id="zakrivenost-a-inflexní-body">
              Zakřivenost a inflexní body
            </a>
          </div>
          <div class="item">
            <a href="/pages/prubeh-funkce.html">Průběh funkce</a>
          </div>
          <div class="item">
            <a class="sub-btn">Integrály<i class="fas fa-angle-right dropdown"></i></a>
            <div class="sub-menu">
              <a
                href="/pages/integraly/neurcite.html"
                id="integraly/neurcite"
                onClick="reply_click(this.id)"
                class="sub-item">
                Neurčité
              </a>
              <a
                href="/pages/integraly/urcite.html"
                id="integraly/urcite"
                onClick="reply_click(this.id)"
                class="sub-item">
                Určité
              </a>
              <a
                href="/pages/integraly/obsahy-ploch.html"
                id="integraly/obsahy-ploch"
                onClick="reply_click(this.id)"
                class="sub-item">
                Obsahy ploch
              </a>
            </div>
          </div>
          <div class="item">
            <a class="sub-btn">Diferenciální rovnice<i class="fas fa-angle-right dropdown"></i></a>
            <div class="sub-menu">
              <a
                href="/pages/diferencialni-rovnice/prvniho-radu.html"
                id="diferencialni-rovnice/prvniho-radu"
                onClick="reply_click(this.id)"
                class="sub-item">
                1. řádu
              </a>
              <a
                href="/pages/diferencialni-rovnice/druheho-radu.html"
                id="diferencialni-rovnice/druheho-radu"
                onClick="reply_click(this.id)"
                class="sub-item">
                2. řádu
              </a>
            </div>
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
