<template>
  <div class="yes-no-input">
    <v-select
      hide-details
      outlined
      :label="label"
      v-model="v"
      :items="vs"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: 'yes-no-input',
  props: ["value", "blokType", "label", "disabled"],
  methods: {
    clickChip(e) {
      if (!this.disabled) this.v = e;
      // this.$emit('input', e)
    },
  },
  model: {
    prop: "value",
    event: "input",
  },
  data() {
    return {
      v: this.value,
      vs: ["Ya", "Tidak"],
    };
  },
  watch: {
    v: function (e) {
      this.$emit("input", e);
    },
  },
  errorCaptured(e){
    console.log(e)
  },
};
</script>
<style>
.yes-no-input {
  display: flex;
  flex-direction: row;
  /* overflow-x: auto; */
  /* overflow-y: hidden; */
}

.chip {
  cursor: pointer;
  border-radius: 6px;
  padding: 0.5em;
  border-color: black;
  border-width: 1px;
  border-style: solid;
  margin-right: 0.5em;
}

.active-chip {
  background-color: black;
  color: white;
}
</style>
