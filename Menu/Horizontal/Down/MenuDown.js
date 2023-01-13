class menudown extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `    
    <div class="container">
    <nav>
      <div class="menu-icons">
        <i class="fas fa-bars horiozontal"></i>
        <i class="fas fa-times horiozontal"></i>
      </div>
      <!-- <a href="/menu/horizontal/horizontalmenu.html" class="logo">
          <i class="fa fa-shopping-bag"></i>
        </a> -->
      <ul class="nav-list">
        <li>
          <a href="#">
            Videokurzy
            <i class="fas fa-angle-right dropdown arrow-down"></i>
          </a>
          <ul class="sub-menu-ver">
            <li>
              <a href="https://www.doucovanispetrem.cz/czu/">
                ČZU
                <i class="fas fa-angle-right dropdown"></i>
                </a>
              <ul class="sub-menu-ver">
                <li>
                  <a href="https://www.doucovanispetrem.cz/czu/paa/">
                    PAA
                    <i class="fas fa-angle-right dropdown"></i>
                  </a>
                  <ul class="sub-menu-ver">
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/paa/matematika/">
                        Matematika
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/paa/ekonomicko-matematicke-metody-1/">
                        Ekonomicko matematické metody I
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/paa/ekonomicko-matematicke-metody-2/">
                        Ekonomicko matematické metody II
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://www.doucovanispetrem.cz/czu/pae/">
                    EAE (PAE)
                    <i class="fas fa-angle-right dropdown"></i>
                  </a>
                  <ul class="sub-menu-ver">
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/pae/matematicke-metody-pro-statistiky/">
                        Matematické metody pro statistiky..
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/pae/matematika/">
                        Matematika
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/pae/ekonomicko-matematicke-metody-1/">
                        Ekonomicko matematické metody I
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/pae/ekonomicko-matematicke-metody-2/">
                        Ekonomicko matematické metody II
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/pae/statistika-1/">
                        Statistika I
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/pae/statistika-2/">
                        Statistika II
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://www.doucovanispetrem.cz/czu/vsrr/">
                    VSRR
                    <i class="fas fa-angle-right dropdown"></i>
                  </a>
                  <ul class="sub-menu-ver">
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/vsrr/matematicke-metody-v-ekonomii-a-managementu/">
                        Matematické metody v ekonomii a managementu
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/vsrr/rozhodovaci-modely/">
                        Rozhodovací modely
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/vsrr/zaklady-statistiky/">
                        Základy statistiky
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/vsrr/hospodarska-statistika/">
                        Hospodářská statistika
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://www.doucovanispetrem.cz/czu/navazujici-studium-vsrr/">
                    Navazující studium VSRR
                    <i class="fas fa-angle-right dropdown"></i>
                  </a>
                  <ul class="sub-menu-ver">
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/navazujici-studium-vsrr/aplikovana-statistika/">
                        Aplikovaná statistika
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://www.doucovanispetrem.cz/czu/info/">
                    INFO
                    <i class="fas fa-angle-right dropdown"></i>
                  </a>
                  <ul class="sub-menu-ver">
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/info/matematika/">
                        Matematika
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/info/uzita-matematika-pro-informatiky/">
                        Užitá matematika pro informatiky (UMI)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/czu/info/statistika/">
                        Statistika
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://www.doucovanispetrem.cz/zcu/">
                ZČU
                <i class="fas fa-angle-right dropdown"></i>
              </a>
              <ul class="sub-menu-ver">
                <li>
                  <a href="https://www.doucovanispetrem.cz/zcu/fek/">
                    FEK
                    <i class="fas fa-angle-right dropdown"></i>
                  </a>
                  <ul class="sub-menu-ver">
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/zcu/fek/zaklady-matematiky-1/">
                        Základy matematiky 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/zcu/fek/zaklady-matematiky-2/">
                        Základy matematiky 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/zcu/fek/statistika/">
                        Statistika
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/zcu/fek/statisticke-zpracovani-dat/">
                        Statistické zpracování dat (SZD)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/zcu/fek/operacni-vyzkum/">
                        Operační výzkum
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/zcu/fek/analyza-dat-modelu/">
                        Analýza dat a modelů (ADM)
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://www.doucovanispetrem.cz/ujep/">
                UJEP
                <i class="fas fa-angle-right dropdown"></i>
              </a>
              <ul class="sub-menu-ver">
                <li>
                  <a href="https://www.doucovanispetrem.cz/ujep/fse/">
                    FSE
                    <i class="fas fa-angle-right dropdown"></i>
                  </a>
                  <ul class="sub-menu-ver">
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/ujep/fse/matematika/">
                        Matematika
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/ujep/fse/data-rozhodovani/">
                        Data a rozhodování
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/ujep/fse/statistika/">
                        Statistika
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://www.doucovanispetrem.cz/matematika-obecne/">
                Matematika obecně
                <i class="fas fa-angle-right dropdown"></i>
              </a>
              <ul class="sub-menu-ver">
                <li>
                  <a
                    href="https://www.doucovanispetrem.cz/matematika-obecne/matice/">
                    Matice
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.doucovanispetrem.cz/matematika-obecne/posloupnosti/">
                    Posloupnosti
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.doucovanispetrem.cz/matematika-obecne/funkce/">
                    Funkce
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://www.doucovanispetrem.cz/statistika-obecne/">
                Statistika obecně
                <i class="fas fa-angle-right dropdown"></i>
              </a>
              <ul class="sub-menu-ver">
                <li>
                  <a
                    href="https://www.doucovanispetrem.cz/statistika-obecne/popisna-statistika/">
                    Popisná statistika
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.doucovanispetrem.cz/statistika-obecne/pravdepodobnost/">
                    Pravděpodobnost
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.doucovanispetrem.cz/statistika-obecne/nahodne-veliciny/">
                    Náhodné veličiny
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.doucovanispetrem.cz/statistika-obecne/rozdeleni-pravdepodobnosti-nahodnych-velicin/">
                    Rozdělení pravděpodobnosti náhodných veličin
                    <i class="fas fa-angle-right dropdown"></i>
                    <ul class="sub-menu-ver">
                      <li>
                        <a
                          href="https://www.doucovanispetrem.cz/statistika-obecne/rozdeleni-pravdepodobnosti-nahodnych-velicin/spojite/">
                          Spojité
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.doucovanispetrem.cz/statistika-obecne/rozdeleni-pravdepodobnosti-nahodnych-velicin/diskretni">
                          Diskrétní
                        </a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.doucovanispetrem.cz/statistika-obecne/teorie-odhadu/">
                    Teorie dohadu
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.doucovanispetrem.cz/statistika-obecne/hypotezy/">
                    Hypotézy
                    <i class="fas fa-angle-right dropdown"></i>
                  </a>
                  <ul class="sub-menu-ver">
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/statistika-obecne/hypotezy/jednovyberove-testy/">
                        Jednovýběrové testy
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/statistika-obecne/hypotezy/dvouvyberove-testy/">
                        Dvouvýběrové testy
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/statistika-obecne/hypotezy/vicevyberove-testy/">
                        Vícevýběrové testy
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://www.doucovanispetrem.cz/statistika-obecne/regrese-korelace/">
                    Regrese a korelace
                    <i class="fas fa-angle-right dropdown"></i>
                  </a>
                  <ul class="sub-menu-ver">
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/statistika-obecne/hypotezy/regrese-korelace/linearni-jednoducha/">
                        Jednoduchá lineární
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/statistika-obecne/hypotezy/regrese-korelace/nelinearni-jednoducha/">
                        Jednoduchá nelineární
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.doucovanispetrem.cz/statistika-obecne/hypotezy/regrese-korelace/linearni-vicenasobna/">
                        Vícenásobná lineární
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://www.doucovanispetrem.cz/statistika-obecne/casove-rady/">
                    Časové řády
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.doucovanispetrem.cz/statistika-obecne/indexni-analyza/">
                    Indexní analýza
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Osobní doučování</a>
        </li>
        <li>
          <a href="#">
            Připoj se na Facebooku
            <i class="fas fa-angle-right dropdown arrow-down"></i>
            <ul class="sub-menu-ver">
              <li>
                <a href="https://www.facebook.com/groups/1239833489830622">
                  Česká zemědělská univerzita
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/groups/572193144106485">
                  Univerzita J. E. Purkyně
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/groups/380551680219051/">
                  Západočeská univerzitza
                </a>
              </li>
            </ul>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  `;
  }
}

window.customElements.define("menu-down", menudown);

const selectElement = (element) => document.querySelector(element);

selectElement(".menu-icons").addEventListener("click", () => {
  selectElement("nav").classList.toggle("active");
});
