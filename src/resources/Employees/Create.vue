<template>
  <div>  
    <va-create-layout :title="title">
      <employees-form :item="item"></employees-form>
    </va-create-layout>
  
    <v-tabs
      class="mt-3"
      v-model="tab"
      variant="outlined"
      bg-color="transparent"
      color="primary"
      align-tabs="left"
    >
      <v-tab value="1">Create</v-tab>
      <v-tab value="2">Form</v-tab>
      <v-tab value="3">Handler</v-tab>
      <v-tab value="4">Model</v-tab>
    </v-tabs>

     <v-window v-model="tab">
      <v-window-item eager value="1">
        <v-card>
          <v-card-text>
            <v-btn class="btn-copy">{{ $t("va.actions.copy") }}</v-btn>
            <pre><code class="language-js">{{ create }}</code></pre>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item eager value="2">
        <v-card>
          <v-card-text>
            <v-btn class="btn-copy">{{ $t("va.actions.copy") }}</v-btn>
            <pre><code class="language-js">{{ form }}</code></pre>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item eager value="3">
        <v-card>
          <v-card-text>
            <v-btn class="btn-copy">{{ $t("va.actions.copy") }}</v-btn>
            <pre><code class="language-js">{{ handler }}</code></pre>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item eager value="4">
        <v-card>
          <v-card-text>
            <v-btn class="btn-copy">{{ $t("va.actions.copy") }}</v-btn>
            <pre><code class="language-js">{{ model }}</code></pre>
          </v-card-text>
        </v-card>
      </v-window-item>

    </v-window>
  </div>
</template>

<script>
import Clipboard from "olobase-admin/src/mixins/clipboard"

export default {
  props: ["title", "item"],
  mixins: [Clipboard],
  inheritAttrs: false, // https://stackoverflow.com/questions/72246939/extraneous-non-props-attributes-title-were-passed-to-component-but-could-not-b
  created() {
    this.create = ``;
    this.handler = ``;
  },
  data() {
    return {
      tab: null,
      create: null,
      form: null,
      handler: null,
      model: null,
    }
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

