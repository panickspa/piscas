<template>
  <div class="d-flex flex-column mt-2 mb-2">
    <v-text-field
      v-model="v"
      type="number"
      v-if="type == 'int' || type == 'float'"
      :label="label"
      outlined
      hide-details
      :disabled="disabled"
    ></v-text-field>
    <d-picker
      v-model="v"
      v-else-if="type == 'date'"
      :disabled="disabled"
      :label="label"
    ></d-picker>
    <yes-no-input
      v-model="v"
      type="number"
      v-else-if="type == 'y/n'"
      :label="label"
      outlined
      :disabled="disabled"
    ></yes-no-input>
    <labels-input
      v-model="v"
      :rincian="rincian"
      type="number"
      v-else-if="type == 'label'"
      :label="label"
      outlined
      :allowOther="Boolean(allowOther)"
      :multiple="Boolean(multiple)"
      :disabled="disabled"
    ></labels-input>
    <v-textarea
      rows="10"
      v-model="v"
      v-else-if="type == 'catatan' || type == 'textarea'"
      :label="label"
      outlined
      hide-details
      :disabled="disabled"
    ></v-textarea>
    <v-text-field
      hide-details
      v-model="v"
      v-else
      :label="label"
      outlined
      :disabled="disabled"
    />
  </div>
</template>

<script>
import YesNoInputVue from '../kuesioner/YesNoInput.vue';
import LabelsInputVue from '../kuesioner/LabelsInput.vue';
import DatePickerVue from './DatePicker.vue';

// var typingTimer;
// const doneTypingInterval = 1750;

export default {
  props: [
    "type",
    "value",
    "rincian",
    "label",
    "multiple",
    "allowOther",
    "disabled",
  ],
  model: {
    prop: "value",
    event: "input",
  },
  components: {
    "yes-no-input": YesNoInputVue,
    "labels-input": LabelsInputVue,
    "d-picker": DatePickerVue
  },
  mounted() {
    // console.log("value", this.value);
    this.v = this.value;
  },
  data() {
    return {
      v: null,
      typingTimer: null,
    };
  },
  watch: {
    v(e) {
      if (!this.disabled)
        this.$emit("input", typeof e == "object" ? e.join(", ") : e);
    },
    value(e) {
      if (!this.disabled) this.v = e;
    },
  },
};
</script>