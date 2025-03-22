import MainTitle from "../components/MainTitle/MainTitle";
import Cards from "../components/Cards/Cards";
import Form from "../components/Form/Form";
import { cardValidation } from "./cardValidation";
import { luhnAlgorithm } from "./luhnAlgorithm";

class App {
  constructor() {
    this.mainTitle = new MainTitle();
    this.cards = new Cards();
    this.form = new Form();
    this.init();
  }

  init() {
    this.createContainer();
    this.render();
    this.addEventListeners();
  }

  createContainer() {
    this.container = document.createElement("div");
    this.container.classList.add("container");
    document.body.append(this.container);
  }

  render() {
    this.container.append(this.mainTitle.element);
    this.container.append(this.cards.element);
    this.container.append(this.form.element);
  }

  addEventListeners() {
    this.form.submitEventListener(this.onFormSubmit.bind(this));
    this.form.inputEventListener(this.onInput.bind(this));
  }

  rerender() {
    this.cards.activateCards();
    this.form.renderInitialState();
  }

  onInput() {
    this.rerender();
    this.form.validateInput();
  }

  onFormSubmit(event) {
    event.preventDefault();
    const cardNumber = this.form.getCardNumber();
    const inputLength = cardNumber.length;
    let text = "";

    if (!inputLength) {
      text = "Please enter card number";
    } else if (inputLength < 12 || inputLength > 19) {
      text = "Please enter a number between 12 and 19";
    } else if (luhnAlgorithm(cardNumber)) {
      const result = cardValidation(cardNumber);
      if (result) {
        text = result;
        this.cards.deActivateCards(result);
        this.form.setValidInput();
        this.form.setValidTooltip();
      } else {
        this.form.setInValidInput();
        text = "Payment method is not defined";
      }
    } else {
      text = "Card number is incorrect";
      this.form.setInValidInput();
    }

    this.form.setTooltipText(text);
    this.form.showTooltip();
  }
}

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    new App();
  });
})();
