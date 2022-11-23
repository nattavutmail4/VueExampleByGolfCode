<script setup>
  import { ref } from 'vue'

  const text = ref('Edit me')
  const checked  = ref(true)
  const checkedNames = ref(['Jack'])
  const picked = ref('One')
  const selected = ref('A')
  const multiSelected = ref(['A'])
</script>

<template>
  <div class="container">
     <div class="row">
        <div class="col-sm-4 card my-5 mx-auto">
          <div class="card-body">
            <h2>Text Input</h2><hr>
            <div class="mb-3">
              <label  class="form-label">{{text}}</label>
              <input type="text" class="form-control" v-model="text">
            </div>
            <div class="mb-3">
              <label  class="form-label">Multi Checkbox</label><br>
              <input type="checkbox" id="Jack" class="form-check-input " value="Jack" v-model="checkedNames"><label for="jack">&nbsp;Jack</label>&nbsp;
              <input type="checkbox" id="John" class="form-check-input " value="John" v-model="checkedNames"><label for="John">&nbsp;John</label>&nbsp;
              <input type="checkbox" id="Mike" class="form-check-input " value="Mike" v-model="checkedNames"><label for="Mike">&nbsp;Mike</label>&nbsp;
              <p class="mt-3">Checked names: <pre>{{ checkedNames }}</pre></p><hr>
            </div>

            <div class="mb-3">
              <label  class="form-label">Radio</label><br>
              <input type="radio" id="one" value="One" v-model="picked" class="form-check-input " ><label for="One">&nbsp;One</label>&nbsp;
              <input type="radio" id="two" value="Two" v-model="picked" class="form-check-input " ><label for="One">&nbsp;Two</label>&nbsp;
              <p class="mt-3"> Picked:{{ picked }}</p>
            </div>

            <div class="mb-3">
              <label  class="form-label">Select</label><br>
              <select v-model="selected" class="form-select" >
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <p class="mt-3"> Selected:{{ selected }}</p>
            </div>

            <div class="mb-3">
              <h2>Multi Select</h2>
              <select v-model="multiSelected" multiple style="width:100px">
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <span>Selected: {{ multiSelected }}</span>
            </div>
          </div>
        </div>

     </div>
  </div>
</template>
