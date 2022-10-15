<template lang="html">
  <div class="about-wrapper">
    <section class="about-us">
      <header>
        <h1>O nas</h1>
        <hr class="line" />
      </header>

      <h2>
        Jesteśmy uczniami Technikum Mechanicznego nr. 1 im. Franciszka
        Siemiradzkiego w Bydgoszczy. Pomysł na projekt zrodził się podczas kursu
        "AI&nbsp;for&nbsp;youth" organizowanego w naszej szkole przez firmę
        Intel. Naszym opiekunem, a zarazem prowadzącym szkolenie na etapie
        szkolnym był pan&nbsp;wicedyrektor&nbsp;Paweł Sankowski, któremu
        chcieliśmy z tego miejsca podziękować za opiekę nad projektem. Mamy
        szczerą nadzieję, że projekt, który tworzymy pomoże wielu ludziom, i że
        z&nbsp;biegiem czasu uda się go dopracować na tyle, by był on używany na
        codzień, by jak najwcześniej wykrywać raka skóry.
        <br />
      </h2>
    </section>
    <section class="persons-wrapper">
      <h1>Autorzy</h1>
      <div class="cards">
        <div class="card">
          <img src="../assets/ja.jpg" alt="" />
          <article>
            <header>
              <h3>Wiktor Fajkowski</h3>
              <hr class="line" />
            </header>
            <p>
              Jestem uczniem klasy 2 technikum, moją pasją jest programowanie.
              Głównie zajmuję się front end developmentem przy użyciu Vue. Moim
              drugim ulubionym językiem jest Python, w którym piszę między
              innymi API, AI (chociażby ten projekt). W wolnym czasie lubię
              majserkować i zajmowac się prostą elektorniką. Mam trzy psy i
              jednego kota.
            </p>
          </article>
        </div>
        <div class="card">
          <img src="../assets/zuzanna.png" alt="" />
          <article>
            <header>
              <h3>Zuzanna Spychalska</h3>
              <hr class="line" />
            </header>
            <p>
              Jestem uczennicą klasy trzeciej o profilu informatyk. Interesuje
              się programowaniem w języku Python, C#, C++ oraz tworzeniem stron
              internetowych od strony wizualnej. Moją pasją jest również
              majsterkowanie oraz stolarstwo. W wolnych chwilach siedzę w
              warsztacie lub składam LEGO oraz układam puzzle. Trenuję
              rolkarstwo szybkie oraz bardzo lubię bawić się z moimi
              zwierzętami.
            </p>
          </article>
        </div>
        <div class="card">
          <img src="../assets/stanislaw.png" alt="" />
          <article>
            <header>
              <h3>Stanisław Fijołek</h3>
              <hr class="line" />
            </header>
            <p>
              Jestem uczniem klasy czwartej o profilu programista. Najbardziej
              interesuję się technologiami webowymi, głównie TypeScript w Vue i
              React. Poza programowaniem lubię zajmować się muzyką.
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.persons-wrapper {
  min-height: 100vh;
  width: 100%;
  padding: 5rem 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  h1 {
    margin: 5rem 0;
  }
}
.cards {
  .card {
    border: 0.3rem solid #fe6152;
    width: 100%;
    min-height: 75rem;
    transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
    cursor: pointer;
    img {
      width: 100%;
      object-fit: cover;
      border-bottom: 0.3rem solid #fe6152;
    }
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 3rem;
      text-align: center;
      header {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        h3 {
          color: #fe6152;
          font-size: 3.6rem;
        }
      }
      p {
        color: rgb(167, 167, 167);
        font-size: 2.8rem;
      }
    }
    &:hover {
      transform: scale(1.075);
      box-shadow: (1rem 0.8rem rgba($color: #fff, $alpha: 0.1)),
        (2rem 1.6rem rgba($color: #fff, $alpha: 0.03)),
        (0 0 1rem rgba($color: #fff, $alpha: 0.05));
    }
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
.about-us {
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem;
  background-image: linear-gradient(#28353b, transparent, #28353b),
    linear-gradient(
      transparent,
      rgba(black, 0.5),
      rgba(black, 0.5),
      transparent
    ),
    url('../assets/onas.jpg');
  background-size: cover;
  background-position: center;
  header {
    width: 90%;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    width: 85%;
    @media screen and (max-width: 1024px) {
      width: 90%;
    }
    @media screen and (max-width: 768px) {
      width: 95%;
    }
    text-align: center;
    line-height: 1.5;
  }
}
.about-wrapper {
  width: 100%;
}
</style>
