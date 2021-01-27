<template>
  <div class="repeatable-container">
    <FormulateForm>
      <div
        class="content"
        v-for="(item, index) in formData.dossage"
        :key="index"
      >
        <FormulateInput
          type="text"
          label="strength"
          placeholder="strength"
          v-model="formData.dossage.strength"
        />
        <FormulateInput
          type="select"
          :options="selectData.quantityOptions"
          label="Quantity"
          placeholder="quantity"
          v-model="formData.dossage.quantity"
        />
        <FormulateInput
          type="select"
          :options="selectData.method_of_intake_Options"
          label="Method of intake"
          placeholder="methodof in take"
          v-model="formData.dossage.method_of_intake"
        />
        <span v-if="index == 0" class="add-dossage" @click="addDossage"
          >Add Dossage</span
        >
        <span class="add-dossage" @click="removeDossage" v-if="index != 0"
          >Remove Dossage</span
        >
      </div>
    </FormulateForm>
    <button @click="submitForm" class="theme-btn">Submit</button>
    {{ getIndexOfArr() }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RepeatableGroup",
  data: function () {
    return {
      formData: {
        dossage: [
          {
            strength: "",
            quantity: "",
            method_of_intake: "",
          },
        ],
      },
      counter: [{ name: "srijan" }],
      selectData: {
        quantityOptions: {
          mcg: "mcg",
          mmg: "mmg",
        },
        method_of_intake_Options: {
          Orally: "Orally",
          Suppository: "Suppository",
          AffectedArea: "Apply on Affected Area",
          InEar: "In Ear",
          InEye: "In Eye",
          Inhaled: "Inhaled",
          Intravenous: "Intravenous",
          Tropical: "Tropical",
          UnderTongue: "Under Tongue",
          Subcutaneous: "Subcutaneous",
          Rectal: "Rectal",
          Intradermal: "Intradermal",
        },
      },
      dossageTemplate: {
        strength: "",
        quantity: "",
        method_of_intake: "",
      },
      arrCounter: 0,
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    addDossage: function () {
      this.formData.dossage.push(this.formData);
    },
    removeDossage(index) {
      this.formData.dossage.splice(index, 1);
    },
    DossageArrLength() {
      this.arrCounter = this.formData.dossage.length;
    },
    getIndexOfArr() {
      // return this.formData.dossage;
    },
    submitForm: function () {},
  },
};
</script>

<style lang="scss">
.repeatable-container {
  margin: 1rem 0;

  .formulate-input-wrapper,
  .content {
    display: flex !important;
    margin-right: 1rem;
    label {
      margin-right: 0.5rem;
    }
  }
}
.add-dossage {
  color: red;
  cursor: pointer;
}
.theme-btn {
  margin-top: 0.5rem;
}
</style>