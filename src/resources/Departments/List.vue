<template>
  <div>
    <va-list 
        disable-create
        hide-bulk-copy
        :filters="filters"
        :fields="fields"
        :items-per-page="50"
      >
        <va-data-table-server
          row-create
          row-clone
          row-edit
          disable-edit
          disable-show
          disable-clone
          disable-create-redirect
        >
        </va-data-table-server>
    </va-list>
    
    <v-tabs
      class="mt-3"
      v-model="tab"
      variant="outlined"
      bg-color="transparent"
      color="primary"
      align-tabs="left"
    >
      <v-tab value="1">Template</v-tab>
      <v-tab value="2">Script</v-tab>
      <v-tab value="3">Handler</v-tab>
      <v-tab value="4">Model</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item eager value="1">
        <v-card>
          <v-card-text>
            <v-btn class="btn-copy">{{ $t("va.actions.copy") }}</v-btn>
            <pre><code class="language-html">{{ template }}</code></pre>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item eager value="2">
        <v-card>
          <v-card-text>
            <v-btn class="btn-copy">{{ $t("va.actions.copy") }}</v-btn>
            <pre><code class="language-javascript">{{ script }}</code></pre>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item eager value="3">
        <v-card>
          <v-card-text>
            <v-btn class="btn-copy">{{ $t("va.actions.copy") }}</v-btn>
            <pre><code class="language-php">{{ handler }}</code></pre>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item eager value="4">
        <v-card>
          <v-card-text>
            <v-btn class="btn-copy">{{ $t("va.actions.copy") }}</v-btn>
            <pre><code class="language-php">{{ model }}</code></pre>
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
import { required } from "@vuelidate/validators";
import Clipboard from "olobase-admin/src/mixins/clipboard"

export default {
  props: ["resource"],
  mixins: [Clipboard],
  created() {
    this.template = ``;
    this.handler = ``;
    this.model = ``;
  },
  provide() {
    return {
      validations: {
        form: {
          companyId: {
            required
          },
          departmentName: {
            required
          }
        }
      },
      errors: {
        companyIdErrors: (v$) => {
          const errors = [];
          if (!v$['form'].companyId.$dirty) return errors;
          v$['form'].companyId.required.$invalid &&
            errors.push(this.$t("v.text.required"));
          return errors;
        },
        departmentNameErrors: (v$) => {
          const errors = [];
          if (!v$['form'].departmentName.$dirty) return errors;
          v$['form'].departmentName.required.$invalid &&
            errors.push(this.$t("v.text.required"));
          return errors;
        }
      }
    };
  },
  data() {
    return {
      tab: null,
      template: null,
      script: null,
      handler: null,
      model: null,
      filters: [
        {
          source: "companyId",
          type: "select",
          attributes: {
            multiple: true,
            reference: "companies",
          }
        },
      ],
      fields: [
        {
          source: "companyId",
          type: "select",
          attributes: {
          	multiple: false,
          	reference: "companies", 
          },
          sortable: true,
        },
        {
          source: "departmentName",
          sortable: true,
        },
      ],
    };
  },
  watch: {
    tab(value) {
      if (value > 0) {
        Prism.highlightAll(); // highlight code
      }
    }
  }
};
</script>