<template lang="html">
  <div div="home-wrapper">
    <section id="hero">
      <article class="hero-text">
        <div class="text">
          <h1>Nie daj się zaszkoczyć!</h1>
          <h2>
            Dzięki naszemu modelowi sztucznej inteligencji sprawdzisz czy
            zamiana na twojej skórze jest zagrożeniem.
          </h2>
        </div>

        <button>Sprawdź teraz</button>
      </article>
      <img src="../assets/hero_img.svg" alt="2 odctors ilustration" />
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
      <button>Pobierz za darmo</button>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.hero-text {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 90vh;
}
img {
  width: 50%;
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
  background: linear-gradient(rgba(#401914, 0.45), rgba(#401914, 0.9)),
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
</style>
