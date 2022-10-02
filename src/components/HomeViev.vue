<template lang="html">
  <div div="home-wrapper">
    <section id="hero">
      <article class="hero-text">
        <div class="text">
          <h1>Nie daj się zaskoczyć!</h1>
          <h2>
            Dzięki naszemu modelowi sztucznej inteligencji sprawdzisz czy
            zamiana na twojej skórze jest zagrożeniem.
          </h2>
        </div>
        <img
          id="mobile-img"
          src="../assets/hero_img.svg"
          alt="2 odctors ilustration"
        />
        <button>Sprawdź teraz</button>
      </article>
      <img
        id="desktop-img"
        src="../assets/hero_img.svg"
        alt="2 odctors ilustration"
      />
      <section class="back-deco">
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
      </section>
    </section>
    <section id="who">
      <h1>Dla Kogo jest Ten projekt?</h1>
      <h2>
        Nasz projekt kierujemy głównie dla lekarzy i medyków ze względu na to że
        nasz model trenowany jest głownie na zdjęciach robionych w
        profesjonalnych warunkach. Z tego też powodu wyniki modelu na zdjęciach
        robionych w warunkach domowych mogą być gorsze. mimo wszystko w
        przyszłości zamierzamy ulepszać nasz projekt aby każdy mógł sprawdzić
        swoje zmiany skórne na codzień. należy jednak pamiętać że wciąż ważne są
        kontrole naszych zmian skórnych.
      </h2>
      <button>
        Pobierz za darmo
        <span class="material-symbols-outlined"> file_download </span>
      </button>
    </section>
    <section id="why">
      <h1>Cel naszego projektu.</h1>
      <img src="../assets/rule.png" alt="dobre zdorwie i jakość życia" />
      <h2>
        Nasz projekt tworzymy z myślą o tym by ułatwić wczesne wykrycie raka
        skóry i zapobieganie zanim się rozwinie. rak jest to okropna choroba
        która atakuje z niencacka rocznie ok 100tys. osób umiera na tą okropną
        chorobę. dzięki wczesnemu wykryciu mamy niemal stuprocentowe szanse na
        jego wyleczenie. planujemy aby każdy mógł sprawdzić czy jego zmiany
        skórne stanową zagrożenie i zaczą się leczyć jeśli jest to knieczne.
        Nasz projekt tworzymy z myślą o tym by ułatwić wczesne wykrycie raka
        skóry i zapobieganie zanim się rozwinie. rak jest to okropna choroba
        która atakuje z niencacka rocznie ok 100tys. osób umiera na tą okropną
        chorobę. dzięki wczesnemu wykryciu mamy niemal stuprocentowe szanse na
        jego wyleczenie. planujemy aby każdy mógł sprawdzić czy jego zmiany
        skórne stanową zagrożenie i zaczą się leczyć jeśli jest to knieczne.
      </h2>
    </section>
    <!-- <section class="back-deco">
      <div class="x"></div>
      <div class="x"></div>
      <div class="x"></div>
      <div class="x"></div>
    </section> -->
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
}
#who {
  width: 100%;
  height: 100vh;
  padding: 3rem 5%;
  border-top: 3px solid #fe6152;
  border-bottom: 3px solid #fe6152;
  background: linear-gradient(rgba(#2f130f, 0.45), rgba(#2f130f, 0.9)),
    url('../assets/back-ground.jpg');
  background-size: cover;
  background-position: center;
  h1 {
    font-size: 6.4rem;
  }
  h2 {
    font-size: 4.2rem;
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
#why {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;
  img {
    width: 50rem;
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
