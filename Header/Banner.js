class BannerImg extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `        <section>
      <div class="text-box">
        <h1 class="heading-primary">
          <span class="heading-primary-main">Outdoors</span>
          <span class="heading-primary-sub">is where life happens</span>
        </h1>
        <a href="#" class="header-btn btn-white btn-animated">Discover out tours</a>
      </div>
    </section>
    `;
  }
}

window.customElements.define("banner-img", BannerImg);

const selectElement = (element) => document.querySelector(element);

selectElement(".menu-icons").addEventListener("click", () => {
  selectElement("nav").classList.toggle("active");
});
