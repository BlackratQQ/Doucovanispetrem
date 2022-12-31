class HorizontalMenu extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `    <header>
    <div class="container">
      <nav>
        <div class="menu-icons">
          <i class="fas fa-bars"></i>
          <i class="fas fa-times"></i>
        </div>
        <ul class="nav-list">
          <li>
            <a href="/menu/Horizontal/HorizontalMenu.html">HOME</a>
          </li>
          <li>
            <a href="#"
              >Menu
              <i class="fas fa-angle-right dropdown"></i>
            </a>
            <ul class="sub-menu-ver">
              <li>
                <a href="#">Breakfast</a>
              </li>
              <li>
                <a href="#"
                  >Lunch
                  <i class="fas fa-angle-right dropdown"></i>
                </a>
                <ul class="sub-menu-ver">
                  <li>
                    <a href="#">Food</a>
                  </li>
                  <li>
                    <a href="#">Drink</a>
                  </li>
                  <li>
                    <a href="#"
                      >More..
                      <i class="fas fa-angle-right dropdown"></i>
                    </a>
                    <ul class="sub-menu-ver">
                      <li>
                        <a href="#">Food..</a>
                      </li>
                      <li>
                        <a href="#">Food..</a>
                      </li>
                      <li>
                        <a href="#">Food..</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Dinner</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Our chefs</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li class="move-right btn">
            <a href="#">Book a table</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  `;
  }
}

window.customElements.define('horizontal-menu', HorizontalMenu);

const selectElement = (element) => document.querySelector(element);

selectElement('.menu-icons').addEventListener('click', () => {
  selectElement('nav').classList.toggle('active');
});
