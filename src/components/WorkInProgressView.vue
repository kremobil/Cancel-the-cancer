<script>
export default {
  name: "WorkInProgressView",
  data(){
    return{
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>{{ $t("work.title") }}</h1>
    <h2> {{ $t("work.content") }}</h2>
    <img src="@/assets/workProgress.svg" :alt="$t('work.alt')">
    <router-link to="/">{{ $t("work.back") }}</router-link>
  </div>
</template>

<style scoped lang="scss">
  h1 {
    font-size: 8rem;
    font-weight: 600;
    color: white;
  }

  h2 {
    font-size: 4rem;
    color: #bbb;
    font-weight: 500;
  }
  .container {
    text-align: center;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  img{
    width: min(90%, 50rem);
  }
  a {
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
    text-decoration: none;

    &:hover {
      box-shadow: (1rem 0.8rem rgba($color: #fff, $alpha: 0.1)),
          (2rem 1.6rem rgba($color: #fff, $alpha: 0.03)),
          (0 0 1rem rgba($color: #fff, $alpha: 0.05));
    }
  }
</style>