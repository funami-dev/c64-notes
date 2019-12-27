import Vue from "vue";
import Editor from "@/views/Editor";

describe("Editor.vue", () => {
  it("should render correct contents", () => {
    const vm = new Vue({
      el: document.createElement("div"),
      render: h => h(Editor)
    }).$mount();

    expect(vm.$el.querySelector(".title").textContent).to.contain(
      "Welcome to your new project!"
    );
  });
});
