import "./mainTitle.css";

export default class MainTitle {
  constructor() {
    this.element = this.createTitleElement();
  }

  createTitleElement() {
    const title = document.createElement("h1");
    title.textContent = "Check your credit card number";
    title.classList.add("main-title");
    return title;
  }
}
