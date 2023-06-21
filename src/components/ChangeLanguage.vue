
<template>
  <div class="LanguageWrapper">
    <button @click="switchLanguages">
      <img src="../assets/language.png" alt="Change Language">
    </button>
    <Transition name="fade-langs">
      <ul v-if="showLanguages">
        <li v-for="lang in languages" :key="lang.short" @click="setLang(lang.short); switchLanguages()" >
          <p>{{ lang.name }}</p> <img src="../assets/tick.png" alt="choosed" v-if="lang.short.toLowerCase() == $i18n.locale">
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        languages: [
          {
            name: "Polski",
            short: "PL",
          },
          {
            name: "English",
            short: "EN"
          }
        ],
        showLanguages: false
      }
    },
    methods: {
      setLang(lang) {
        this.$i18n.locale = lang.toLowerCase()
      }, switchLanguages() {
        this.showLanguages = !this.showLanguages
      }
    }
  }
</script>

<style scoped lang="scss">
  .LanguageWrapper{
    min-width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media screen and (max-width: 768px){
      position: static;
    }
  }
  button{
    background: none;
    &:hover{
      box-shadow: none;
    }
    img {
      width: 7rem;
      height: 7rem;
      margin-right: 0.5rem;
      object-fit: cover;
    }
  }
  ul {
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    z-index: 100;
    left: 50%;
    top: 100%;
    border: 1px solid white;
    transform: translate(-50%);
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    li{
      width: 100%;
      display: flex;
      padding: 0.5rem;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid white;
      gap: 3rem;
      cursor: pointer;
      &:last-child{
        border: none;
      }
      p{
        font-size: 3.2rem;
        color: white;
        font-family: 'Anton', sans-serif;
        transition: color 0.5s ease-in-out;

      }
      &:hover p{
        color: #fe6152;
      }
      img{
        object-fit: cover;
        height: 100%;
        width: 3.2rem;
      }
    }
    @media screen and (max-width: 768px){
      width: 50%;
      position: fixed;
      top: 50vh;
      left: 50%;
      li p{
        font-size: 6.4rem;
      }
      li img{
        width: 6.4rem
      }
    }
  }
  .fade-langs-enter-active,
  .fade-langs-leave-active {
    transition: opacity 0.3s ease-in, transform 0.3s ease-in;
  }

  .fade-langs-enter-from,
  .fade-langs-leave-to {
    opacity: 0;
    transform: translateY(-20%) translateX(-50%);
  }
</style>