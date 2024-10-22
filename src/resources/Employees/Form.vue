<template>
  <va-form 
    :id="id" 
    :item="item" 
    v-model="model"
  >
    <v-row no-gutters>
      <v-col sm="3" class="mr-3">
        <va-text-input
          source="name"
          :error-messages="nameErrors"
        ></va-text-input>
      </v-col>
      <v-col sm="3" class="mr-3">
        <va-text-input
          source="surname"
          :error-messages="surnameErrors"
        ></va-text-input>
      </v-col>
      <v-col sm="3" class="mr-3">
        <va-text-input
          source="employeeNumber"
        ></va-text-input>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col sm="3" class="mr-3">
        <va-date-input
          source="employmentStartDate"
          :error-messages="employmentStartDateErrors"
        ></va-date-input>
      </v-col>
      <v-col sm="3" class="mr-3">
        <va-date-input
          source="employmentEndDate"
        ></va-date-input>
      </v-col>
      <v-col sm="3" class="mr-3">
        <va-select-input
          source="companyId"
          reference="companies"
          :error-messages="companyIdErrors"
        ></va-select-input>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col sm="3" class="mr-3">
        <va-select-input
          source="departmentId"
          :key="model.companyId"
          :filter="{ companyId: model.companyId }"
          v-model="model.departmentId"
          reference="departments"
        ></va-select-input>
      </v-col>
      <v-col sm="3" class="mr-3">
        <va-select-input
          source="jobTitleId"
          reference="jobtitles"
        ></va-select-input>
      </v-col>
      <v-col sm="3" class="mr-3">
        <va-select-input
          source="gradeId"
          reference="employee-grades"
        ></va-select-input>
      </v-col>
      <v-col sm="3" class="mr-3">
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col lg="8" md="12" sm="12">
        <va-array-table-input
          source="employeeChildren"
          :title="$t('resources.employees.fields.employeeChildren')"
          primary-key="childId"
          :headers="headers"
          :fields="fields"
          :create-id="true"
        >
          <template v-slot:[`input.childName`]="{ field }">
            <va-text-input
              :key="field.source"
              v-model="employeeChildrenForm.childName"
              variant="outlined"
              :error-messages="childNameErrors"
              clearable
            >
            </va-text-input>
          </template>
          <template v-slot:[`input.childBirthdate`]="{ field }">
            <va-date-input
              :key="field.source"
              v-model="employeeChildrenForm.childBirthdate"
              variant="outlined"
              :error-messages="childBirthdateErrors"
            >
            </va-date-input>
          </template>
        </va-array-table-input>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col sm="3" class="mr-3">
        <va-file-field 
          source="files" 
          :item="model" 
          action-type="download"
          table-name="employeeFiles"
        ></va-file-field>

        <!-- Display images 
          <va-image-field 
          source="files" 
          :item="model" 
          table-name="employeeFiles"
        ></va-image-field> -->
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col sm="3" class="mr-3">
        <va-file-input
          source="files"
          table-name="employeeFiles"
        ></va-file-input>
      </v-col>
    </v-row>

    <va-save-button></va-save-button>
  </va-form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength, numeric } from "@vuelidate/validators";
import Utils from "olobase-admin/src/mixins/utils";
import Resource from "olobase-admin/src/mixins/resource";
import { provide } from 'vue'

export default {
  props: ["id", "item"],
  mixins: [Utils, Resource],
  setup() {
    let vuelidate = useVuelidate();
    provide('v$', vuelidate)
    return { v$: vuelidate }
  },
  data() {
    return {
      model: {
        id: null,
        name: null,
        surname: null,
        companyId: null,
        departmentId: null,
        jobTitleId: null,
        employeeNumber: null,
        gradeId: null,
        employmentStartDate: null,
        employmentEndDate: null,
        employeeChildren: null,
        files: [],
      },
      headers: [
        { key: "childName", width: "40%" },
        { key: "childBirthdate", width: "40%" },
        { key: "actions" },
      ],
      fields: [
        {
          source: "childName",
          type: "text",
        },
        {
          source: "childBirthdate",
          type: "date",
        },
      ]
    };
  },
  validations() {
    return {
      model: {
        name: {
          required
        },
        surname: {
          required
        },
        companyId: {
          id: {
            required
          }
        },
        employmentStartDate: {
          required
        }
      },
      employeeChildrenForm: {
        childName: {
          required,
        },
        childBirthdate: {
          required,
        }
      }
    }
  },
  created() {
    this.model.id = this.generateId(this);
  },
  computed: {
    employeeChildrenForm: {
      get() {
        return this.$store.getters[`${this.resource}/getRow`];
      },
      set(val) {
        this.$store.commit(`${this.resource}/setRow`, val);
      } 
    },
    nameErrors() {
      const errors = [];
      const field = "name";
      if (!this.v$['model'][field].$dirty) return errors;
      this.v$['model'][field].required.$invalid && errors.push(this.$t("v.text.required"));
      return errors;
    },
    surnameErrors() {
      const errors = [];
      const field = "surname";
      if (!this.v$['model'][field].$dirty) return errors;
      this.v$['model'][field].required.$invalid && errors.push(this.$t("v.text.required"));
      return errors;
    },
    companyIdErrors() {
      const errors = [];
      const field = "companyId";
      if (!this.v$['model'][field].id.$dirty) return errors;
      this.v$['model'][field].id.required.$invalid && errors.push(this.$t("v.text.required"));
      return errors;
    },
    employmentStartDateErrors() {
      const errors = [];
      const field = "employmentStartDate";
      if (!this.v$['model'][field].$dirty) return errors;
      this.v$['model'][field].required.$invalid && errors.push(this.$t("v.text.required"));
      return errors;
    },
    childNameErrors() {
      const errors = [];
      const field = "childName";
      if (!this.v$["employeeChildrenForm"][field].$dirty) return errors;
      this.v$["employeeChildrenForm"][field].required.$invalid &&
        errors.push(this.$t("v.text.required"));
      return errors;
    },
    childBirthdateErrors() {
      const errors = [];
      const field = "childBirthdate";
      if (!this.v$["employeeChildrenForm"][field].$dirty) return errors;
      this.v$["employeeChildrenForm"][field].required.$invalid &&
        errors.push(this.$t("v.text.required"));
      return errors;
    },
  },
}
</script>
