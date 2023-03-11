<template lang="html">
  <div class='wrapper'>
    <div class="cointainer">
      <h1>Krok {{ stage }}</h1>
      <div class="progressBar">
        <div class="line">
          <div class="fill"
            :style='{ width: this.stage == 1 ? "0%" : this.stage == 2 ? "50%" : "100%" }'></div>
          <div class="circle c1"></div>
          <div class="circle c2" :class='{ active: this.stage >= 2 }'></div>
          <div class="circle c3" :class='{ active: this.stage == 3 }'></div>
        </div>
      </div>
    </div>
    <div class="check" v-if='this.stage == 1'>
      <svg width="400" height="" viewBox="0 0 135 207" fill="none"
        xmlns="http://www.w3.org/2000/svg" class='image'>
        <path d="M91.719 92.2426H51.043V137.79H91.719V92.2426Z" fill="#CCCCCC" />
        <path d="M30.3353 206.297H9.62748L7.40878 188.523H32.554L30.3353 206.297Z"
          fill="#E6E6E6" />
        <path
          d="M71.9174 193.423L71.2186 202.99C71.1869 203.423 71.2481 203.857 71.398 204.265C71.548 204.672 71.7831 205.043 72.0878 205.352C72.3925 205.661 72.7596 205.901 73.1645 206.056C73.5694 206.211 74.0028 206.278 74.4356 206.252L79.3426 205.954C79.57 205.94 79.7915 205.876 79.9915 205.767C80.1914 205.658 80.3649 205.506 80.4996 205.322C80.6342 205.138 80.7268 204.927 80.7707 204.703C80.8146 204.479 80.8087 204.248 80.7534 204.027L78.0296 193.117L71.9174 193.423Z"
          fill="#E6E6E6" />
        <path
          d="M112.962 199.08C118.737 200.433 122.862 202.356 125.572 204.958C126.537 205.878 127.8 206.42 129.131 206.486C130.831 206.575 132.22 206.385 133.265 205.918C133.532 205.799 133.764 205.612 133.934 205.374C134.105 205.136 134.209 204.857 134.236 204.566C134.267 204.269 134.219 203.97 134.096 203.699C133.974 203.427 133.781 203.194 133.537 203.023L119.841 193.263L114.023 195.594L112.666 196.953C112.519 197.1 112.408 197.28 112.342 197.477C112.276 197.674 112.256 197.884 112.285 198.09C112.314 198.296 112.39 198.493 112.507 198.665C112.625 198.836 112.78 198.979 112.962 199.08Z"
          fill="#E6E6E6" />
        <path
          d="M95.1889 42.8785L56.0388 42.5155C56.1373 36.8051 57.464 31.1976 60.3641 26.1798C62.2687 22.8842 62.2276 19.2977 61.7686 16.2761C61.0602 11.6132 62.7074 6.84233 66.3676 3.87405C69.1647 1.60171 72.695 0.431999 76.2935 0.585222L77.0537 0.616938C79.5299 0.719992 81.9406 1.44436 84.0644 2.72353C86.1883 4.00271 87.9571 5.79569 89.2087 7.93787C90.4807 10.2247 90.9937 12.8574 90.6735 15.4554C90.4254 17.8999 91.0191 20.3693 92.408 22.8622C94.8042 28.3363 95.3231 35.3412 95.1889 42.8785Z"
          fill="#2F2E41" />
        <path
          d="M121.382 193.772L113.699 195.78L76.2828 114.15L78.6213 193.772H70.9377C62.7272 156.312 47.9037 113.08 54.5682 99.4304L94.3226 97.0886L121.382 193.772Z"
          fill="#FE6152" />
        <path
          d="M75.9487 29.1758C81.6683 29.1758 86.3049 24.5326 86.3049 18.8049C86.3049 13.0772 81.6683 8.43402 75.9487 8.43402C70.2292 8.43402 65.5925 13.0772 65.5925 18.8049C65.5925 24.5326 70.2292 29.1758 75.9487 29.1758Z"
          fill="#FFB9B9" />
        <path
          d="M84.9686 37.874L67.931 36.8704C69.6007 33.0326 70.2677 29.337 69.6014 25.8304H82.2961C82.2673 28.5227 83.6052 33.18 84.9686 37.874Z"
          fill="#FFB9B9" />
        <path
          d="M95.6589 100.099L58.2432 102.776L62.0848 36.3686L68.5993 34.5286L75.9487 36.2012L83.2981 32.5211L87.9751 34.1942L95.6589 100.099Z"
          fill="#FE6152" />
        <path
          d="M64.5903 147.94L39.0339 142.085C46.6332 116.849 60.3236 59.117 55.9045 38.5431L69.2673 32.5213L64.5903 147.94Z"
          fill="#E6E6E6" />
        <path
          d="M52.2297 75.0086L42.5417 68.9868L50.8038 44.754C51.7253 42.2535 53.4904 40.154 55.7938 38.8186L58.577 37.205L56.9067 61.6268L52.2297 75.0086Z"
          fill="#E6E6E6" />
        <path
          d="M117.875 142.42C109.808 147.093 89.6457 149.698 80.7927 146.434C80.1413 123.633 78.8637 59.138 82.9642 31.8522L97.6633 37.8741L96.327 55.9395C89.2997 71.3935 109.706 125.22 117.875 142.42Z"
          fill="#E6E6E6" />
        <path
          d="M116.705 71.9978L107.685 68.9868L95.6588 55.2703L97.6634 37.8739L117.707 65.9759L116.705 71.9978Z"
          fill="#E6E6E6" />
        <path
          d="M88.4371 85.0193C88.5847 85.6679 88.983 86.2314 89.5449 86.5863C90.1067 86.9411 90.7862 87.0584 91.4342 86.9124L99.0909 85.176L97.9843 80.2818L90.3275 82.0179C89.6794 82.1649 89.1161 82.5637 88.7616 83.1266C88.4071 83.6895 88.2904 84.3703 88.4371 85.0193Z"
          fill="#FFB9B9" />
        <path
          d="M84.9686 16.1285C79.2164 13.7599 73.5352 13.5885 67.931 15.794L65.5925 7.43036H86.973L84.9686 16.1285Z"
          fill="#2F2E41" />
        <path
          d="M95.3248 79.3577L99.6677 87.3868C106.972 85.3465 113.303 78.9146 119.378 71.3286L117.708 65.9759L107.351 68.6522L95.3248 79.3577Z"
          fill="#E6E6E6" />
        <path
          d="M92.1512 62.7977H90.8149C90.8149 43.871 86.9235 30.6813 83.1313 30.6813L82.7972 29.3431C86.1981 29.3431 88.3663 34.8326 89.5863 39.4378C91.2403 45.681 92.1512 53.977 92.1512 62.7977Z"
          fill="#3F3D56" />
        <path
          d="M61.4166 58.114H60.0804C60.0804 40.7802 63.9987 30.0122 69.7684 30.0122L69.4343 31.3504C65.4434 31.3504 61.4166 39.626 61.4166 58.114Z"
          fill="#3F3D56" />
        <path
          d="M91.483 66.4777C93.328 66.4777 94.8237 64.9799 94.8237 63.1322C94.8237 61.2846 93.328 59.7868 91.483 59.7868C89.638 59.7868 88.1423 61.2846 88.1423 63.1322C88.1423 64.9799 89.638 66.4777 91.483 66.4777Z"
          fill="#3F3D56" />
        <path
          d="M56.0715 66.1431H54.7352C54.7352 61.3469 57.4328 57.4449 60.7485 57.4449V58.7831C58.1696 58.7831 56.0715 62.0848 56.0715 66.1431Z"
          fill="#3F3D56" />
        <path
          d="M66.7618 66.1431H65.4255C65.4255 62.0848 63.3274 58.7831 60.7485 58.7831V57.4449C64.0643 57.4449 66.7618 61.347 66.7618 66.1431Z"
          fill="#3F3D56" />
        <path
          d="M66.0936 67.8159C66.8316 67.8159 67.4299 67.2167 67.4299 66.4777C67.4299 65.7386 66.8316 65.1395 66.0936 65.1395C65.3556 65.1395 64.7574 65.7386 64.7574 66.4777C64.7574 67.2167 65.3556 67.8159 66.0936 67.8159Z"
          fill="#3F3D56" />
        <path
          d="M55.4034 67.8159C56.1414 67.8159 56.7396 67.2167 56.7396 66.4777C56.7396 65.7386 56.1414 65.1395 55.4034 65.1395C54.6653 65.1395 54.0671 65.7386 54.0671 66.4777C54.0671 67.2167 54.6653 67.8159 55.4034 67.8159Z"
          fill="#3F3D56" />
        <path
          d="M38.6998 54.1723L47.0373 55.6632L66.0936 82.7979L55.9697 80.4123L38.6998 54.1723Z"
          fill="#FE6152" />
        <path
          d="M37.221 53.8401C37.0939 53.842 36.9697 53.8781 36.8614 53.9445C36.753 54.011 36.6645 54.1053 36.605 54.2178C36.5455 54.3302 36.5173 54.4566 36.5233 54.5837C36.5293 54.7108 36.5693 54.834 36.6391 54.9403L54.452 82.0053C54.5514 82.1566 54.705 82.264 54.8811 82.3054L63.1689 84.2581C63.3086 84.291 63.455 84.2807 63.5887 84.2283C63.7224 84.176 63.8371 84.0842 63.9175 83.9651C63.9979 83.846 64.0403 83.7053 64.0389 83.5615C64.0376 83.4177 63.9927 83.2778 63.9101 83.1602L44.3526 55.3124C44.2996 55.2365 44.2321 55.1719 44.1541 55.1221C44.0761 55.0724 43.9891 55.0385 43.898 55.0224L37.3546 53.8522C37.3105 53.8443 37.2658 53.8402 37.221 53.8401Z"
          fill="#3F3D56" />
        <path
          d="M48.3328 73.1913L48.8278 78.185L56.64 77.4084C57.3013 77.3427 57.9094 77.0166 58.3305 76.5019C58.7517 75.9871 58.9515 75.326 58.8858 74.6637C58.8202 74.0015 58.4946 73.3926 57.9806 72.9708C57.4666 72.549 56.8064 72.349 56.1451 72.4147L48.3328 73.1913Z"
          fill="#FFB9B9" />
        <path
          d="M41.5396 72.6129C41.551 74.3156 42.2339 75.9448 43.4395 77.1456C44.6451 78.3463 46.2758 79.0212 47.9762 79.0231H49.2607L50.1959 71.2187L42.4528 68.4271L41.5396 72.6129Z"
          fill="#E6E6E6" />
        <path
          d="M4.30979 181.947C9.64192 189.098 20.7104 189.851 20.7104 189.851C20.7104 189.851 23.1338 179.009 17.8016 171.858C12.4695 164.707 1.40104 163.955 1.40104 163.955C1.40104 163.955 -1.02234 174.796 4.30979 181.947Z"
          fill="#E6E6E6" />
        <path
          d="M31.4728 184.635C27.9543 189.354 20.6505 189.851 20.6505 189.851C20.6505 189.851 19.0514 182.697 22.5699 177.978C26.0884 173.259 33.3922 172.763 33.3922 172.763C33.3922 172.763 34.9913 179.917 31.4728 184.635Z"
          fill="#E6E6E6" />
      </svg>
      <div class="main">
        <img src="../assets/Undraw_board.svg" alt="Zdjęcie">
        <h2>Szybko i sprawnie sprawdź swoje znamiona by spać w spokoju o swoje zdrowie</h2>
        <label for='btn'>Prześlij zdjęcie znamienia</label>
        <input type="file" accept="image/*" capture @change="cropImg($event)" id='btn'
          name='btn'>
      </div>
    </div>
    <div class="cropImage" v-else-if='this.stage == 2'>
      <div class="cropAll">
        <h2>Przytnij swoje zdjęcie żeby na środku było twoje znamie</h2>
        <div class="markCointainer">
          <img id="chosenImage">
        </div>
        <div class="moveTo">
          <button class="next" @click='changeProgress(3)'>Wytnij</button>
          <button class="back" @click='changeProgress(1)'>Cofnij</button>
        </div>
      </div>
    </div>
    <div class="markResoult" v-else-if='this.stage == 3'>
      <div class="score">
        <div class="rs">
          <h1>Twój wynik to ...</h1>
          <h2>
            Nasze Ai wykryło że .. jednak pamiętaj że zawsze może się pomylić dlatego warto iść
            do
            lekarza oraz na regularne wizyty
          </h2>
        </div>
        <button @click='changeProgress(1)'>Sprawdz swoje znamię</button>
        <img src='' id="output">
      </div>
    </div>
  </div>
</template>
<script>
import Cropper from 'cropperjs';
export default {
  methods: {
    changeProgress(stage) {
      this.stage = stage

      if (stage == 1) {
        window.location.reload(false);
      }
    },

    cropImg(input) {
      let reader = new FileReader();
      reader.readAsDataURL(input.target.files[0]);
      console.log(input.target.files[0]);
      reader.onload = () => {
        this.changeProgress(2);
        setTimeout(() => {

          let chosenImage = document.querySelector('#chosenImage');
          chosenImage.setAttribute("src", reader.result);

          const cropper = new Cropper(chosenImage, {
            aspectRatio: 1,
            viewMode: 2,
            zoomable: false,
            scalable: false,
            responsive: false,
          });

          document.querySelector('.next').addEventListener('click', function () {
            let croppedImage = cropper.getCroppedCanvas({ width: 256, height: 256 }).toDataURL("image/png");

            document.querySelector('#output').src = croppedImage;
            alert('Ta strona jest w rozwoju i funkcja sprawdzajacą twoję znamię niedługo bedzie wprowadzona')
          });

        }, 5);
      }
    },
  },
  data() {
    return {
      stage: 1,
    }
  },
}
</script>
<style lang="scss" scoped>
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

.wrapper {
  min-height: 90vh;
}

.cointainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
}

.check {
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  margin: 5rem auto 0 auto;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
  }

  width: 50%;
}

.image {
  width: 45%;
  margin-right: 5rem;
}

.main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 55%;
  height: 100%;

  h2 {
    width: 100%;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    margin-bottom: 3rem;
    display: block;
  }

  label {
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
  }

  #btn {
    display: none;
  }
}

.line {
  width: 400px;
  height: 6px;
  position: relative;
  background: white;

  .circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .c1 {
    background: #fe6152;
  }

  .c2 {
    left: calc(50% - 15px);
  }

  .c3 {
    right: 0;
  }

  .fill {
    position: absolute;
    width: 0%;
    height: 100%;
    background: #fe6152;
    content: '';
    transition: width 1s linear;
  }

  .active {
    animation: active .5s 1s ease-in-out forwards;
  }

  @keyframes active {
    from {
      background: #ffffff;
    }

    to {
      background: #fe6152;
    }
  }
}

.cropAll {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .markCointainer {
    width: fit-content;
    height: fit-content;
    border: 4px solid #fe6152;
    margin: 4rem;
  }

  .moveTo {
    display: flex;
    align-items: center;
    flex-direction: row;

    button {
      margin: 0 2rem;
    }
  }

  #chosenImage {
    height: 512px;
    width: 512px;
  }
}

#output {
  display: block;
  width: 256px;
  height: 256px;
  max-width: 100%;
  max-height: 100%;
}

.score {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 4rem;

  .rs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      width: 60%;
      margin: 4rem 0;
      text-align: center;
    }
  }

  button {
    margin: 4rem;
  }
}
</style>