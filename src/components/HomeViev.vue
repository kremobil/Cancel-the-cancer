<template lang="html">
  <div div="home-wrapper">
    <section id="hero">
      <article class="hero-text">
        <div class="text">
          <h1>Nie daj się zaskoczyć!</h1>
          <h2>
            Dzięki naszemu modelowi sztucznej inteligencji sprawdzisz czy
            znamiona na twojej skórze są zagrożeniem dla zdrowia.
          </h2>
        </div>
        <img id="mobile-img" src="../assets/hero_img.svg" alt="2 odctors ilustration" />
        <router-link to="/try">Sprawdź teraz</router-link>
      </article>
      <img id="desktop-img" src="../assets/hero_img.svg" alt="2 odctors ilustration" />
      <section class="back-deco">
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
      </section>
    </section>
    <section id="who">
      <h1>Dla kogo jest ten projekt?</h1>
      <h2>
        Projekt jest przeznaczony dla wszystkich osób, które chcą sprawdzić swoje znamię skórne i
        zidentyfikować, czy może ono stanowić zagrożenie dla zdrowia. Może on być szczególnie
        przydatny dla osób, które obawiają się, że ich zmiana skórna może być nowotworem lub
        które chcą zwiększyć świadomość swojego stanu zdrowia skóry. Projekt ten jest skierowany
        do osób w każdym wieku i płci, a jego celem jest ułatwienie diagnozowania chorób skóry,
        takich jak czerniak, poprzez wykorzystanie sztucznej inteligencji do analizowania zdjęć
        znamię skórnego. Jednocześnie projekt ma na celu zwiększenie świadomości o konieczności
        regularnych wizyt kontrolnych u dermatologa w celu wczesnego wykrycia i leczenia zmian
        skórnych.
      </h2>
      <router-link to="/try">Sprawdź swoje znamiona</router-link>
    </section>
    <section id="why">
      <h1>Cel naszego projektu.</h1>
      <img src="../assets/rule.svg" alt="dobre zdorwie i jakość życia" />
      <h2>
        Nasz projekt tworzymy z myślą o tym, by ułatwić wczesne wykrycie zmian
        nowotworowych skóry i zapobiegać ich rozwojowi. Rak jest to śmiertelna
        choroba, która atakuje niespodziewanie. Rocznie ok. 100tys. ludzi umiera
        na tę okropną chorobę. Dzięki wczesnemu wykrywaniu niebezpiecznych
        znamion mamy znacznie większe szanse na wyleczenie. Planujemy, aby każdy
        mógł sprawdzić czy jego zmiany skórne stanową zagrożenie, i w razie
        potrzeby podjął leczenie, bądź skonsultował się z lekarzem dermatologiem
        lub onkologiem.
      </h2>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.hero-text {
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 90vh;
}

a {
  background-color: #fe6152;
  color: #1e1e1e;
  border: none;
  padding: 1.5rem 3rem;
  border-radius: 1rem;
  font-size: 4.2rem;
  font-weight: 700;
  transition-property: background-color, box-shadow;
  transition-duration: 0.5s;
  cursor: pointer;

  &:hover {
    box-shadow: (1rem 0.8rem rgba($color: #fff, $alpha: 0.1)),
      (2rem 1.6rem rgba($color: #fff, $alpha: 0.03)),
      (0 0 1rem rgba($color: #fff, $alpha: 0.05));
  }

  text-decoration: none;
}

#desktop-img {
  width: 50%;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
}

#mobile-img {
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
}

#hero {
  width: 90%;
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media screen and (max-width: 768px) {
    padding: 5rem 0;
  }
}

#who {
  width: 100%;
  min-height: 100vh;
  padding: 5rem 5%;
  border-top: 3px solid #fe6152;
  border-bottom: 3px solid #fe6152;
  background: linear-gradient(transparent,
      rgba(black, 0.2),
      rgba(black, 0.2),
      transparent),
    linear-gradient(rgba(#2f130f, 0.45), rgba(#2f130f, 0.9)),
    url('../assets/back-ground.jpg');
  background-size: cover;
  background-position: center;

  h1 {
    font-size: 6.4rem;
  }

  h2 {
    font-size: 4.2rem;
    text-align: center;
    padding: 4rem 0;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

#why {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0;
  text-align: center;

  img {
    width: 50rem;
    user-select: none;
  }

  h2 {
    font-size: 3.6rem;
    width: 90%;
  }

  h1 {
    width: 90%;
  }
}

.x {
  position: absolute;
  width: 5rem;
  height: 0.5rem;
  background-color: #fe6152;
  rotate: 45deg;
  z-index: -1;

  &::after {
    content: '';
    width: 5rem;
    height: 0.5rem;
    background-color: #fe6152;
    rotate: 90deg;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &:nth-child(1) {
    top: 30rem;
    opacity: 0.2;
    left: 20px;
    width: 30rem;
    height: 3rem;
    rotate: 30deg;

    &::after {
      width: 30rem;
      height: 3rem;
    }
  }

  &:nth-child(2) {
    top: 80rem;
    opacity: 0.3;
    right: 10rem;

    @media (min-width: 768px) {
      top: 10rem;
    }

    width: 60rem;
    height: 6rem;
    rotate: 60deg;

    &::after {
      width: 60rem;
      height: 6rem;
    }
  }

  &:nth-child(3) {
    bottom: 30rem;
    opacity: 0.2;
    left: -10rem;
    background: black;
    width: 60rem;
    height: 6rem;
    rotate: 60deg;

    &::after {
      background: black;
      width: 60rem;
      height: 6rem;
    }
  }

  &:nth-child(4) {
    bottom: 15rem;
    opacity: 0.4;
    left: 40rem;
    width: 45rem;
    height: 5rem;
    rotate: 20deg;

    &::after {
      width: 45rem;
      height: 5rem;
    }
  }
}
</style>
