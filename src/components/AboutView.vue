<template lang="html">
  <div class="about-wrapper">
    <section class="about-us">
      <header>
        <h1>Początek projektu</h1>
        <hr class="line" />
      </header>

      <h2>
        Pomysł na projekt zrodził się podczas kursu
        "AI&nbsp;for&nbsp;youth" organizowanego w naszej szkole przez firmę
        Intel. Naszym opiekunem, a zarazem prowadzącym szkolenie na etapie
        szkolnym był pan&nbsp;wicedyrektor&nbsp;Paweł Sankowski, któremu
        chcieliśmy z tego miejsca podziękować za opiekę nad projektem.
        Wraz z naszym projektem zostaliśmy finalistami przedsięwzięcia
        ale nie poprzestaliśmy na tym i dalej roziwjamy projekt.
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
              Jestem uczniem klasy drugiej technikum i pasjonuję się programowaniem.
              Skupiam się głównie na front end developmentcie z wykorzystaniem frameworka Vue.
              Moim drugim ulubionym językiem programowania jest Python, który wykorzystuję do
              tworzenia różnego rodzaju API oraz do projektowania sztucznej inteligencji, jak
              chociażby ten projekt.
              W wolnym czasie lubię majsterkować i eksperymentować z prostą elektroniką. Mam trzy
              psy i jednego kota, które dają mi mi wiele radości i pozytywnej energii.
              Programowanie to
              dla mnie pasja i jestem bardzo zadowolony, że mogę rozwijać swoje umiejętności w
              tej dziedzinie.
            </p>
          </article>
        </div>
        <div class="card">
          <img src="../assets/pawel.jpg" alt="" />
          <article>
            <header>
              <h3>Paweł Gołata</h3>
              <hr class="line" />
            </header>
            <p>
              Jestem Paweł, moim hobby jest tworzenie stron internetowych w
              frameworku Vue.
              Uwielbiam projektować estetyczne strony internetowe, które
              są łatwe w obsłudze i dostarczają użytkownikom wartościowe treści.
              Poza Vue, moim drugim ulubionym językiem programowania jest Python. Uwielbiam jego
              prostotę i wszechstronność. Interesuję się również drukiem 3D i nowinkami
              technologicznymi. Fascynuje mnie, jak
              nowoczesne technologie mogą wpłynąć na nasze życie i jak można je wykorzystać do
              rozwiązywania problemów w różnych dziedzinach.
              Poza pracą nad projektami informatycznymi, lubię spotykać się z przyjaciółmi. Cenię
              sobie dobre relacje z innymi ludźmi i uważam, że czas spędzony z przyjaciółmi jest
              niezwykle ważny.
            </p>
          </article>
        </div>
        <div class="card">
          <img src="../assets/mateusz.png" alt="" />
          <article>
            <header>
              <h3>Mateusz Torzewski</h3>
              <hr class="line" />
            </header>
            <p>
              Jestem uczniem klasy drugiej technikum o profilu programista. Wybrałem
              programowanie ze względu na to, że lubię tworzyć a ono pozwala mi właśnie na to w
              bardzo ciekawy sposób, a poza tym daje mi ogromną satysfakcję. W wolnym czasie
              rysuje, tworze gry i inne raczej proste programy, głównie w języku Python. Lubię
              pogłębiać swoją wiedzę z zakresu programowania a ten projekt jest na to idealną
              szansą.
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
      user-select: none;
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
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10rem;

  @media screen and (min-width: 1248px) {
    grid-column-gap: 20rem;
  }

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
    linear-gradient(transparent,
      rgba(black, 0.5),
      rgba(black, 0.5),
      transparent),
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
