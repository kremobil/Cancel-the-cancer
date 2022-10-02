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
      <input type="file" name="filw" id="file" />
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
    input {
      width: 100%;
      height: 100%;
      background-color: #00000010;
      &::after {
        background: none;
      }
      border: 0.5rem solid #fe6152;
      text-align: center;
      padding: auto;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
