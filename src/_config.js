export default {
  //
  // va-form component global settings
  // 
  form: {
    disableExitWithoutSave: false,
  },
  dateFormat: "shortFormat",
  //
  // va-list provider global settings
  // 
  list: {
    disableGlobalSearch: false,
    disableItemsPerPage: true,
    itemsPerPage: 10,
    itemsPerPageOptions: [100],
  },
  //
  // va-messages layout global settings
  // 
  snackbar: {
    error: {
      color: "error",
      icon: "mdi-close-circle",
      mode: "multi-line",
      position: "top",
      timeout: 7500,
      title: "va.messages.error",
      visible: true 
    },
    info: {
      color: "blue",
      icon: "mdi-information",
      mode: "multi-line",
      position: "top",
      timeout: 7500,
      title: "va.messages.info",
      visible: true
    },
    success: {
      color: "success",
      icon: "mdi-checkbox-marked-circle",
      mode: "multi-line",
      position: "top",
      timeout: 7500,
      title: "va.messages.success",
      visible: true
    },
    warning: {
      color: "warning",
      icon: "mdi-alert-circle",
      mode: "multi-line",
      position: "top",
      timeout: 7500,
      title: "va.messages.warning",
      visible: true
    }
  },
};