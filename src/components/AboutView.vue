<template lang="html">
  <div class="about-wrapper">
    <section class="about-us">
      <header>
        <h1>{{ $t("about.beginingsTitle") }}</h1>
        <hr class="line" />
      </header>

      <h2>
        {{ $t("about.beginingsMessage") }}
        <br />
      </h2>
    </section>
    <section class="persons-wrapper">
      <h1>{{ $t("about.authorsTitle") }}</h1>
      <div class="cards">
        <div class="card">
          <img src="../assets/ja.jpg" alt="" />
          <article>
            <header>
              <h3>Wiktor Fajkowski</h3>
              <hr class="line" />
            </header>
            <p>{{ $t("about.wiktor") }}</p>
          </article>
        </div>
        <div class="card">
          <img src="../assets/pawel.jpg" alt="" />
          <article>
            <header>
              <h3>Paweł Gołata</h3>
              <hr class="line" />
            </header>
            <p>{{ $t("about.pawel") }}</p>
          </article>
        </div>
        <div class="card">
          <img src="../assets/mateusz.png" alt="" />
          <article>
            <header>
              <h3>Mateusz Torzewski</h3>
              <hr class="line" />
            </header>
            <p>{{ $t("about.mateusz") }}</p>
          </article>
        </div>
        <div class="card">
          <img src="../assets/stanislaw.png" alt="" />
          <article>
            <header>
              <h3>Stanisław Fijołek</h3>
              <hr class="line" />
            </header>
            <p>{{ $t("about.stanislaw") }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$i18n.locale)
  }
};
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
