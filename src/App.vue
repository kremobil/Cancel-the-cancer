<template>
  <div class="app-wrapper">
    <nav>
      <header>
        <img src="./assets/logo.png" alt="Cancel the cancer logo" />
      </header>
      <div class="routers">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/try">Przetestuj</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script></script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Work+Sans:ital,wght@0,400;0,500;1,600&display=swap');
body {
  background-color: #28353b;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}
html {
  font-size: 62.5%;
}
nav {
  padding: 1rem;
  width: 100%;
  min-height: 8vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  img {
    height: 5vh;
  }
  header {
    flex: 2 1 38rem;
    text-align: center;
  }
  .routers {
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 0.6rem 0;
    flex: 1 1 38rem;
    a {
      font-size: 2.8rem;
      font-family: 'Anton', sans-serif;
      color: white;
      text-decoration: none;
      position: relative;
      &:last-child {
        border: 0.2rem solid #fe6152;
        padding: 0.2rem 1rem;
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
  width: 90%;
  margin: auto;
  height: 180vh;
}
</style>
