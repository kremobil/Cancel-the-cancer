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
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
