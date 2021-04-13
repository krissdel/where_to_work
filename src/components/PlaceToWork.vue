<template>
  <div class="hello">
    <div class="navbar">
      <div class="container-fluid">
        <h1 class="navbar-brand">LOCALISATION</h1>
        <div class="navbar-brand-lower">enter the city</div>

        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder=" "
            aria-label="Search"
          />
          <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
        </form>
      </div>
    <!-- </div>

    <div class="navbar"> -->
      <div class="container-fluid">
        <h1 class="navbar-brand">WHAT DO YOU NEED !</h1>
        <div class="navbar-brand-lower">place to work</div>

        <div class="d-flex">
          <!-- <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> -->
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <!-- <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder=" " aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaceToWork",

  // props: {
  //   msg: String,
  // },
};
</script>

<style scoped lang="scss">
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  justify-content: center;
}
a {
  text-decoration: none;
  color: #57e597;
  font-size: x-large;
  // text-shadow: #55e094 1px 0 10px;
}
.navbar-brand {
  color: white;
  width: 80%;
  text-align: left;
  font-size: 2rem;
  padding-left: 60px;

}
.navbar-brand-lower {
  color: #57e597;
  text-shadow: #55e094 1px 0 10px;
  font-size: 1.5rem;
}
.container-fluid {
  flex-direction: column;
  padding-bottom: 50px;
}
// a.navbar-brand {
//     width: 100%;
//     text-align: left;
// }
// .navbar-light .navbar-brand {
//     color: white ;
// }
.d-flex {
    // display: flex!important;
    width: 300px;
}
.form-control {
  color: #57e597;
  background-color: black;
  background-clip: padding-box;
  border: 4px solid #57e597;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  text-shadow: #55e094 1px 0 10px;
}
textarea.form-control {
    // width: 14pc;
    margin-right: .5rem!important;
}

// ========================================
</style>