<template>
  <div class="label-input">
    <!-- {{labels}} -->
    <v-combobox
      :items="cLabels"
      hide-details
      outlined
      v-model="v"
      item-text="nama"
      item-label="label"
      no-data-text="Pilihan Tidak Ada"
      :label="label"
      v-if="allowOthers"
      :multiple="multiple"
      chips
      :disabled="disabled"
      :return-object="false"
    ></v-combobox>
    <v-autocomplete
      :items="cLabels"
      hide-details
      outlined
      v-model="v"
      item-text="nama"
      item-label="label"
      no-data-text="Pilihan Tidak Ada"
      :label="label"
      :multiple="multiple"
      chips
      :disabled="disabled"
      v-else
    ></v-autocomplete>
  </div>
</template>

<script>
// import kuesioner from "../helper/template";
export default {
  name: 'labels-input',
  props: [
    "value",
    "rincian",
    "label",
    "multiple",
    "allowOther",
    "disabled",
  ],
  computed:{
    allowOthers(){
      return this.labels.find(e => e.nama == "Lainnya") ? true : false
    },
    cLabels(){
      console.log(this.labels.filter(e => e.name == "Lainnya"))
      return this.labels.filter(e => e.nama != "Lainnya")
    }
  },
  model: {
    prop: "value",
    event: "input",
  },
  created() {
    // console.log(
    //   this.$store.state.skd.labels.filter((e) => e.id_rincian == this.rincian)
    // );
    this.labels = this.$store.state.kuesioner.labels.filter(
      (e) => e.id_rincian == this.rincian
    );
  },
  methods: {
    clickChip(e) {
      this.v = e;
      this.$emit("input", e);
    },
    setLabels(e, labels) {
      this.labels = labels;
    },
  },
  // mounted() {
  //   window.ipcRenderer.send("getLabels", {
  //     id_blok: this.blok,
  //     id_rincian: this.rincian,
  //   });
  // },
  data() {
    return {
      v: this.value,
      labels: [],
      // labelListener: null,
    };
  },
  beforeDestroy() {
    this.labelListener = null;
  },
  watch: {
    v(e) {
      // console.log("label change", e);
      this.$emit("input", e);
    },
    // value(e) {
    //   console.log("label change", e);
    // },
  },
  errorCaptured(e){
    console.log(e)
  },
};
</script>
<style>
.container-input {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  align-self: center;
  align-content: center;
  justify-self: center;
}
.label-input {
  /* display: flex; */
  /* flex-direction: column; */
  /* flex-wrap: wrap; */
  width: 100%;
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
  margin-top: 0.5em;
}

.active-chip {
  background-color: black;
  color: white;
}
</style>
