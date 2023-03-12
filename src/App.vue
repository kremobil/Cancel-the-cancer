<template>
  <div class="app-wrapper">
    <nav>
      <header>
        <img src="./assets/logo.svg" alt="Cancel the cancer logo" />
      </header>
      <div class="routers">
        <router-link to="/">Strona główna</router-link>
        <router-link to="/about">O nas</router-link>
        <router-link to="/try">Przetestuj</router-link>
      </div>
    </nav>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <footer>
      <h3>
        Wiktor Fajkowski i Paweł Gołata &copy; 2023 | Model przygotowany na konkurs
        <a href="https://ai4youth.edu.pl/" target="_blank">AI&nbsp;for&nbsp;youth</a>
      </h3>
    </footer>
  </div>
</template>
<script></script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Work+Sans:ital,wght@0,400;0,500;1,600&display=swap');

body {
  background-color: #28353b;
  overflow-x: hidden;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}

h1 {
  font-size: 9.6rem;
  font-weight: 600;
  color: white;
}

h2 {
  font-size: 4.8rem;
  color: #bbb;
  font-weight: 500;
}

html {
  font-size: 50%;

  @media (max-width: 1024px) {
    font-size: 36.5%;
  }

  @media (max-width: 768px) {
    font-size: 28%;
    text-align: center;
  }
}

footer {
  margin-top: 5rem;
  width: 100%;
  padding: 3rem;
  text-align: center;

  h3 {
    font-size: 2.8rem;

    a {
      color: #fe6152;
      text-decoration: none;
      transition: color 0.25s linear;

      &:hover {
        color: #b9000f;
      }
    }
  }

  background-color: #1e1e1e;
  color: white;
}

button {
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
}

nav {
  padding: 1rem;
  width: 90%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  user-select: none;

  @media (max-width: 768px) {
    min-height: 15vh;
  }

  img {
    width: 50%;
  }

  header {
    flex: 2 1 61rem;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .routers {
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 1.2rem 0;
    flex: 1 1 61rem;

    a {
      font-size: 4.2rem;
      font-family: 'Anton', sans-serif;
      color: white;
      text-decoration: none;
      position: relative;

      &:last-child {
        border: 0.2rem solid #fe6152;
        padding: 0.6rem 2rem;
        border-radius: 1rem;
      }

      @media (max-width: 768px) {
        &:nth-child(3) {
          order: 2;
        }

        &:nth-child(1) {
          order: 1;
        }

        &:nth-child(2) {
          order: 3;
        }
      }

      &::after {
        width: 0%;
        transition: width 0.5s;
        height: 0.3rem;
        content: '';
        position: absolute;
        bottom: -10%;
        left: 50%;
        transform: translate(-50%);
        background-color: #fe6152;
      }

      &:hover::after {
        width: 130%;
      }

      &:last-child::after {
        position: absolute;
        transition-property: transform, background-color;
        transition-duration: 0.5s;
        width: 100%;
        content: '';
        height: 100%;
        border-radius: 0.4rem;
        top: 0;
        left: 0;
        transform: scaleX(0);
        z-index: -1;
      }

      &:last-child:hover::after {
        transform: scaleX(1);
        background-color: #fe6152;
      }
    }
  }
}

.app-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  position: absolute;
  transition: transform 0.5s ease, opacity 0.5s ease;
  left: 0%;
  top: 12%;
  transform: scale(0);
}

.fade-enter-active~footer,
.fade-leave-active~footer {
  display: none;
}

.fade-enter-from,
.fade-leave-to {
  transform: scale(0);
  opacity: 0;
}

.line {
  width: 50%;
  height: 0.4rem;
  background-color: #fe6152;
  border: none;
  margin: 2rem 0;
}

.fade-enter-to,
.fade-leave-from {
  transform: scale(1);
  opacity: 1;
}
</style>
