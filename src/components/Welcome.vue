<template>
  <h1>{{ msg }}</h1>
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
            <router-link to="/Place">NEED A PLACE TO WORK</router-link>
          </div>
          <div class="need_link2">
            <router-link to="/Material">NEED WORK MATERIAL</router-link>
          </div>
          <div class="need_link3">
            <router-link to="/Worker">NEED A CO-WORKER</router-link>
          </div>
           <div class="need_link4">
            <router-link to="/Inscription">SIGN-UP...</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <h4>{{ msg }}</h4> -->
  <h4 class="dots">Welcome</h4>

 
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


.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #4f4645;
  background-clip: border-box;
  border: 8px solid rgb(255, 255, 255);
  // border-radius: 0.25rem;
  border-radius: 1.3rem;
  // --------------
  background: padding-box;

  box-shadow: 0px 0px 20px 1px rgb(250 250 250 / 56%);
  -webkit-box-shadow: 0px 0px 20px 1px rgb(250 250 250 / 56%);
  -moz-box-shadow: 0px 0px 20px 1px rgba(250 250 250 /0.56);
}
.card-body {
  flex: 1 1 auto;
  padding: 0rem 0rem;
  position: relative;
}
.line {
  // background-color: #6d6b6b;
  background-color: #6d6b6b4a;
  margin-bottom: 3px;
  // width: 102%;
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
  // text-shadow: #55e094 1px 0 5px;
}
a:hover {
  text-shadow: #55e094 1px 0 10px;
}
h4 {
  color: #57e597;
  text-shadow: #55e094 1px 0 10px;
}

// ---------------------------------------

// =====[dots animation ]========================
.dots:after {
  display: inline-block;
  animation: dotty steps(1, end) 2s infinite;
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

</style>
