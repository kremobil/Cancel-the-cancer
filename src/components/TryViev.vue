<template lang="html">
  <div class="site-wrapper">
    <div class="text">
      <h1>Sprawdź swoje znamiona</h1>
      <h2>
        wystarczy że dodasz zdjecie sowjego znamienia a nasz model sprawdzi czy
        stanowi on zagrożenie rakowe
      </h2>
    </div>
    <div class="image">
      <img src="../assets/try.svg" alt="man looking at files" />
    </div>
    <form action="">
      <button type="submit">submit</button>
      <div class="img-upload">
        <div class="main">
          <input type="file" name="filw" id="file" />
          <label for="file">Dodaj zdjęcie</label>
          <h2>Zebra.png</h2>
        </div>
        <img src="../assets/hero_img.svg" alt="" />
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.site-wrapper {
  width: 90%;
  height: 85vh;
  display: grid;
  grid-template-areas:
    'img img txt'
    'img img txt'
    'frm frm frm';
  grid-template-columns: 2fr 2fr 3fr;
  grid-template-rows: 1fr 2fr 1fr;
  grid-gap: 8rem;
  .image {
    grid-area: img;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 100%;
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
  }
  form {
    grid-area: frm;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 6rem;
    .img-upload {
      border: 0.6rem solid #fe6152;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
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
        border-right: #fe6152 solid 0.5rem;
        text-align: right;
        margin-right: 2rem;
        align-items: flex-end;
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
img {
  width: 30%;
}
</style>
