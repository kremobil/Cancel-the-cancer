<template>
  <div class="app-wrapper">
    <Transition name="nested">
      <div class="cover" v-if="showPopup">
        <div class="popup-container">
          <div class="popup-message">
            <h1>{{title}}</h1>
            <h2>{{ message }}</h2>
            <button v-if="privacy" @click="acceptPrivacy()">{{ $t("popup.acceptPrivacy") }}</button>
            <button v-else @click="togglePopup()">OK</button>

          </div>
        </div>
      </div>
    </Transition>
    <nav>
      <header>
        <img src="./assets/logo.svg" alt="Cancel the cancer logo" />
        <ChangeLanguage/>
      </header>
      <div class="routers">
        <router-link to="/"> {{ $t("nav.home") }} </router-link>
        <router-link to="/about"> {{ $t("nav.about") }} </router-link>
        <router-link to="/try" class="borderButton"> {{ $t("nav.try") }} </router-link>
      </div>
    </nav>
    <router-view v-slot="{ Component }" @popUP="togglePopup(); setWarnMsg()" @explainResult="showModelData">
      <Transition name="fade">
        <component :is="Component" />
      </Transition>
    </router-view>
    <footer>
      <div class="patreons">
        <h2>{{ $t("footer.patreons") }}</h2>
        <div class="patreaons-images">
          <a href="https://zwolnienizteorii.pl/" target="_blank">
            <img
              src="./assets/projekt_realizowany_beztla.png"
              alt="Projekt realizwany w ramach Zwolnionych z teorii"
            />
          </a>
          <a href="https://www.youtube.com/@Pasjainformatyki" target="_blank">
            <img
              src="./assets/pasja_informatyki_logo_final_1000x1000px.png"
              alt="Pasja informatyki"
            />
          </a>
          <a href="https://lektoring.pl/" target="_blank">
            <img
              src="./assets/lektoringlogo.png"
              alt="Lektoring.pl"
            />
          </a>
        </div>
      </div>
      <div class="socials">
        <h2>{{ $t("footer.socialMedia") }}</h2>
        <div class="socials-links">
          <a href="https://www.instagram.com/cancelthecancerai/" id="ig" target="_blank" title="Sprawdź naszego insta">
            <!-- image from https://www.flaticon.com/free-icons/instagram-logo -->
            <img src="./assets/instagram-logo.png" alt="instagram logo image from https://www.flaticon.com/free-icons/instagram-logo">
          </a>
          <a href="https://www.facebook.com/profile.php?id=100091365463634" id="fb" target="_blank" title="Zajrzyj na fejsa Cancel the cancer">
            <!-- image from https://www.flaticon.com/free-icons/facebook -->
            <img src="./assets/facebook-app-symbol.png" alt="facebook logo image from https://www.flaticon.com/free-icons/facebook">
          </a>
          <a href="https://www.youtube.com/@CancelTheCancer" id="yt" target="_blank" title="Zobacz nasz kanał na YT">
            <!-- image from https://www.flaticon.com/free-icons/youtube -->
            <img src="./assets/youtube.png" alt="youtube logo image from https://www.flaticon.com/free-icons/youtube">
          </a>
        </div>
      </div>
      <hr />
      <h3>{{ $t("footer.copy") }}</h3>
    </footer>
  </div>
</template>
<script>
import ChangeLanguage from "@/components/ChangeLanguage.vue";

export default {
  components: {ChangeLanguage},
  data() {
    return {
      showPopup: false,
      message: this.$t("popup.privacyMessage"),
      title: this.$t("popup.privacyTitle"),
      privacy: true,
    };
  },
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    setWarnMsg() {
      this.message = this.$t("popup.warnMessage")
      this.title = this.$t("popup.warnTitle")
    },
    showModelData(bening, malignant, percentage){
      console.log(bening, malignant, percentage)
      this.message = this.$t("popup.modelMessage", [
          this.$i18n.locale == "pl"?
              bening > malignant ? 'nie stanowi zagrożenia' : 'stanowi zagrożenie rakowe':
              bening > malignant ? 'not a threat' : 'a cancer risk',
          Math.round(percentage * 1000) / 10,
          this.$i18n.locale == "pl"?
              bening < malignant ? 'nie stanowi zagrożenia' : 'stanowi zagrożenie rakowe':
              bening < malignant ? 'not a risk' : 'a cancer threat',
          100 - Math.round(percentage * 1000) / 10
      ])
      // `Model przewiduje, że szansa na to, iż znamię ${bening > malignant ? 'nie stanowi zagrożenia' : 'stanowi zagrożenie rakowe'} jest o ${Math.round(percentage * 1000) / 10}% większa niż szansa na to, iż znamię ${bening < malignant ? 'nie stanowi zagrożenia' : 'stanowi zagrożenie rakowe'}. Warto jednak pamiętać, że tylko lekarz może dokonać finalnej diagnozy.`;
      this.title = this.$t("popup.modelTitle")
      this.togglePopup();
    },
    acceptPrivacy() {
      this.privacy = false;
      this.togglePopup()
      document.cookie = "privacypolicy=accepted; expires=Thu, 18 Dec 2030 12:00:00 UTC"; 
    }
  },
  mounted() {
    const cookies = document.cookie.split("=")
    const cookieKeyIndex = cookies.findIndex((cookie) => cookie == "privacypolicy")
    console.log(cookies[cookieKeyIndex + 1], cookies[cookieKeyIndex + 1] == "accepted")
    if (cookies[cookieKeyIndex + 1] != "accepted") {
      this.togglePopup()
    } else {
      this.privacy = false;
    }
    
  }
};
</script>
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
  text-align: center;

  h3 {
    font-size: 2.8rem;
    padding: 3rem;

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
  user-select: none;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  img {
    height: 7rem;
  }

  header {
    display: flex;
    gap: 5rem;
    align-items: center;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .routers {
    justify-content: space-around;
    align-items: center;
    display: flex;
    padding: 1.2rem 0;

    a {
      font-size: 3.6rem;
      font-family: 'Anton', sans-serif;
      color: white;
      text-decoration: none;
      position: relative;

      &.borderButton {
        border: 0.2rem solid #fe6152;
        padding: 0.6rem 2rem;
        border-radius: 1rem;
      }

      @media (max-width: 768px) {
        font-size: 4.2rem;
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

      &.borderButton::after {
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

      &.borderButton:hover::after {
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

.fade-enter-active ~ footer,
.fade-leave-active ~ footer {
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

.cover {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  .popup-container {
    width: 750px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #28353b;
    box-shadow: 2.5px 2.5px 7.5px 2.5px rgba($color: #000, $alpha: 0.5);
    padding: 20px;
    z-index: 10000;
    text-align: center;
    border-radius: 6px;

    h1 {
      color: #fe6152;
    }

    @media screen and (max-width: 1024px) {
      width: 600px;
    }

    @media screen and (max-width: 768px) {
      width: 280px;
    }
  }
  .popup-message h1 {
    font-size: 6.4rem;
  }

  .popup-message h2 {
    font-size: 4.2rem;
  }

  .popup-message button {
    margin-top: 20px;
  }
  .popup-message a {
    font-size: 3.6rem;
    color: #fe6152;
    text-decoration: underline;
    font-weight: 700;
    transition: color .5s ease-in-out;
    &:hover{
      color: #b9000f;
    }
  }
  .popup-message h2{
    margin-bottom: 20px;
  }
}

.nested-enter-active,
.nested-leave-active {
  transition: opacity 0.5s ease;
}

.nested-enter-from,
.nested-leave-to {
  opacity: 0;
}

.nested-enter-active .popup-container,
.nested-leave-active .popup-container {
  transition: left 0.5s ease 0.25s, opacity 0.5s ease 0.25s;
}

.nested-enter-from .popup-container {
  opacity: 0;
  left: 25%;
}

.nested-leave-to .popup-container {
  opacity: 0;
  left: 75%;
}
.patreons, .socials {
  width: 100%;
  padding: 3rem;
  h2 {
    padding-bottom: 2rem;
    color: #fff;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .patreaons-images {
    display: grid;
    grid-template-columns: repeat(3, 300px);
    gap: 2rem;
    @media screen and (max-width: 1024px) {
      grid-template-columns: 500px;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 300px;
    }
      
    }
    a{
      width: 100%;
      height: 150px;
      @media screen and (max-width: 1024px) and (min-width: 768px) {
        height: 200px;
      }
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
      img {
        max-height: 90%;
        max-width: 90%;
        object-fit: cover;
      }
    }
    
  }
  .socials-links{
    padding: 1rem;
    display: flex;
    justify-content: center;
    a{
      width: 75px;
      height: 75px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 50%;
      margin: 0 1.5rem;
      &#ig{
        background:linear-gradient(45deg, #f1a900, #f24d1a, #f20077, #7a09ef);
      }
      &#fb{
        background: #395495;
      }
      &#yt{
        background: #ff0000;
      }
      img{
        width: 60%;
        height: 60%;
        object-fit: cover;
      }
    }
  }
</style>
