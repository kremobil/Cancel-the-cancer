<template lang="html">
  <div class="site-wrapper">
    <div class="text">
      <h1>Sprawdź swoje znamiona</h1>
      <h2>
        Wystarczy, że dodasz zdjęcie swojego znamienia, a nasz model sprawdzi,
        czy stanowi ono zagrożenie rakowe.
      </h2>
    </div>
    <div class="image">
      <img src="../assets/try.svg" alt="man looking at files" />
    </div>
    <form action="" @submit.prevent="predict">
      <button type="submit">Sprawdź!</button>
      <div class="img-upload">
        <div class="main">
          <input
            type="file"
            name="filw"
            id="file"
            @change="upload"
            accept="image/*"
            :class="{ upload: this.name != '' }"
          />
          <label for="file">Dodaj zdjęcie</label>
          <h2 id="text">{{ name }}</h2>
        </div>
        <img
          src="../assets/hero_img.svg"
          alt=""
          id="image"
          v-show="name != ''"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    upload() {
      const input = document.querySelector('#file');
      const image = document.querySelector('#image');
      let reader = new FileReader();
      reader.readAsDataURL(input.files[0]);
      reader.onload = () => {
        image.setAttribute('src', reader.result);
      };
      this.name = input.files[0].name;
    },
    predict() {
      const input = document.querySelector('#file');
      if (input.files[0] == undefined) {
        alert('Musisz dodać zdjęcie');
      } else {
        alert(
          'Przykro nam ale ze względu obecnej dokładności modelu nie chcieliśmy wprowadzić nikogo w błąd dlatego wyłączyliśmy tę opcję. Przepraszamy za utrudnienia i zachęcamy do pobrania plików projektu'
        );
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.site-wrapper {
  width: 90%;
  min-height: 85vh;
  display: grid;
  grid-template-areas:
    'img img txt'
    'img img txt'
    'frm frm frm';
  grid-template-columns: 2fr 2fr 3fr;
  grid-template-rows: 1fr 2fr 1fr;
  grid-gap: 8rem;
  @media screen and (max-width: 768px) {
    grid-template-areas:
      'txt txt txt'
      'img img img'
      'frm frm frm';
    grid-template-rows: 1fr 1fr 1fr;
  }
  .image {
    grid-area: img;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 100%;
    img {
      max-width: 80%;
      max-height: 80%;
    }
    background-color: rgba($color: #000000, $alpha: 0.1);
  }
  .text {
    grid-area: txt;
    background-color: rgba($color: #000000, $alpha: 0.1);
    border: #fe6152 solid 0.6rem;
    padding: 5rem;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 6.4rem;
    }
    h2 {
      font-size: 4.8rem;
    }
  }
  form {
    grid-area: frm;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 6rem;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 3fr;
      grid-row-gap: 6rem;
    }
    .img-upload {
      border: 0.6rem solid #fe6152;
      width: 100%;
      height: 100%;
      display: flex;
      padding: 3rem;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        text-align: center;
      }
      h2 {
        font-size: 3.6rem;
        margin: 2.4rem 0;
      }
      .main {
        height: 80%;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;
        align-items: flex-end;
        @media screen and (max-width: 768px) {
          align-items: center;
          height: auto;
        }
        input {
          display: none;
        }
        label {
          background-color: #fe6152;
          color: #1e1e1e;
          border: none;
          padding: 1.5rem 3rem;
          border-radius: 1rem;
          font-size: 3.6rem;
          font-weight: 700;
          transition-property: background-color, box-shadow;
          transition-duration: 0.5s;
          cursor: pointer;
          text-align: center;
          span {
          }
          &:hover {
            box-shadow: (1rem 0.8rem rgba($color: #fff, $alpha: 0.1)),
              (2rem 1.6rem rgba($color: #fff, $alpha: 0.03)),
              (0 0 1rem rgba($color: #fff, $alpha: 0.05));
          }
        }
      }
    }
  }
}
form img {
  @media screen and (min-width: 768px) {
    height: 80%;
    border-left: #fe6152 solid 0.5rem;
    padding-left: 4rem;
    max-height: 30rem;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    border-top: #fe6152 solid 0.5rem;
    padding-top: 4rem;
    max-width: 30rem;
  }
}
</style>
