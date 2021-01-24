<template>
  <div class="repeatable-container">
    <FormulateForm>
      <FormulateInput
        type="text"
        label="strength"
        placeholder="strength"
        v-model="formData.strength"
      />
      <FormulateInput
        type="select"
        :options="selectData.quantityOptions"
        label="Quantity"
        placeholder="quantity"
        v-model="formData.quantity"
      />
      <FormulateInput
        type="select"
        :options="selectData.method_of_intake_Options"
        label="Method of intake"
        placeholder="methodof in take"
        v-model="formData.method_of_intake"
      />
      <span class="add-dossage" @click="addDossage">Add Dossage</span>
    </FormulateForm>
    <FormulateForm v-for="(item, index) in dossageTemplate" :key="index">
      <FormulateInput type="text" label="strength" placeholder="strength" />
      <FormulateInput
        type="select"
        :options="selectData.quantityOptions"
        label="Quantity"
        placeholder="strength"
      />
      <FormulateInput
        type="select"
        :options="selectData.method_of_intake_Options"
        label="Method of intake"
        placeholder="strength"
      />
      <span class="add-dossage" @click="removeDossage(index)"
        >Remove Dossage</span
      >
    </FormulateForm>
    <button @click="submitForm" class="theme-btn">Submit</button>
  </div>
</template>

<script>
export default {
  name: "RepeatableGroup",
  data: function () {
    return {
      formData: {
        strength: "",
        quantity: "",
        method_of_intake: "",
      },
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
      dossageTemplate: [],
    };
  },
  methods: {
    addDossage: function () {
      this.dossageTemplate.push(this.formData);
    },
    removeDossage(index) {
      this.dossageTemplate.splice(index, 1);
    },
    submitForm: function () {},
  },
};
</script>

<style lang="scss">
.repeatable-container {
  margin: 1rem 0;
  .formulate-form,
  .formulate-input-wrapper {
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