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
        <!-- ----------------------------------------- -->
        <div class="need_link">
          <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-5">
              <label for="validationCustom01" class="form-label"
                >First name</label
              >
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-5">
              <label for="validationCustom02" class="form-label"
                >Last name</label
              >
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>

            <!-- <div class="col-md-6">
              <label for="validationCustomUsername" class="form-label"
                >Username</label
              >
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">@</span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  placeholder="@"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div> -->

<div  class="col-md-5">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>

            <div class="col-md-5">
              <label for="validationCustom03" class="form-label"
                >Enterprise</label
              >
              <input
                type="text"
                class="form-control"
                id="validationCustom03"
                required
              />
              <div class="invalid-feedback">Please choose an enterprise.</div>
            </div>

            <!-- <div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div> -->

            <!-- <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required>
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div> -->
            <!-- <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div> -->
            <div class="col-12">
              <button class="btn btn-primary" type="submit">Register</button>
            </div>
          </form>
        </div>
        <!-- ------------------------------------------------ -->
      </div>
    </div>
  </div>
  <!-- <h4>{{ msg }}</h4> -->
  <h4 class="dots">sign-up</h4>
</template>

<script>
export default {
  name: "FormSignup",
  //   props: {
  //     msg: String,
  //   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
// -----[cadre]---------------------------------

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
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 98%;
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

// =====[Formulaire]==================================

.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
//   height: 800px;
  height: 650px;

  justify-content: center;
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
label.form-label {
  color: #57e597;
}
form.row.g-3.needs-validation {
  display: flex;
  justify-content: center;
}
.btn-primary {
    color: #55e094;
    background-color: black;
    border-color: #55e094;
    border-radius: 0rem;
    // border: 1px solid transparent;
    border: 4px solid #57e597;
}
.g-3, .gy-3 {
    --bs-gutter-y: 0.4rem;
}
.col-md-5 {
    width: 45.6666666667%;
}
// ====================================================
</style>
