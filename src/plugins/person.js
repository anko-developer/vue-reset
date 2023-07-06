export default {
  install(app, options) {
    const person = {
      name: options.name,
      say() {
        alert(this.name);
      },
    };
    app.config.globalProperties.$person = person;
    app.provide('person', person);
  },
};
