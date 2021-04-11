<template>
  <!-- <h1>{{ msg }}</h1> -->
  <div class="hello">
    <div class="card" style="width: 30rem; height: 15rem">
      <div class="card-body">
        <div class="all_line">
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
          <div class="line" style="width: rem; height: 3px"></div>
        </div>
        <div class="need_link">
          <div class="need_link1">
            <router-link to="/about">NEED A PLACE FOR WORKING</router-link>
          </div>
          <div class="need_link2">
            <router-link to="/about">NEED WORK MATERIAL</router-link>
          </div>
          <div class="need_link2">
            <router-link to="/about">NEED A CO-WORKER</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <h4>{{ msg }}</h4> -->
  <h4 class="loading">Welcome</h4>

  <!-- <svg width="500" height="200">
    <rect width="500" height="200" x="0" fill="#251c1b" />  
  </svg> -->
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// -----[cadre acceuil]---------------------------------
// rect {
//     fill: none;
//     stroke: white;
//     stroke-width: 10px;
// }
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #4f4645;
  background-clip: border-box;
  border: 8px solid rgb(255, 255, 255);
  border-radius: 0.25rem;
  // --------------
  background: padding-box;
}
.card-body {
  flex: 1 1 auto;
  padding: 0rem 0rem;
  position: relative;
}
.line {
  // background-color: #6d6b6b;
  background-color: #6d6b6b69;
  margin-bottom: 3px;
}
.need_link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
a {
  text-decoration: none;
  color: #57e597;
  font-size: x-large;
}
h4 {
  color: #57e597;
}

// ---------------------------------------

// =====[dots animation ]========================
.loading:after {
  display: inline-block;
  animation: dotty steps(1, end) 1s infinite;
  content: "";
}

@keyframes dotty {
  0% {
    content: "";
  }
  25% {
    content: ".";
  }
  50% {
    content: "..";
  }
  75% {
    content: "...";
  }
  100% {
    content: "";
  }
}
// ==============================================

.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  justify-content: center;
}

h3 {
  margin: 40px 0 0;
}
</style>
