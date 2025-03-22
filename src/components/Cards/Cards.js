import "./cards.css";
import visa from "../../pic/visa.svg";
import mastercard from "../../pic/master.svg";
import americanexpress from "../../pic/amex.svg";
import mir from "../../pic/mir.svg";
import unionpay from "../../pic/union.svg";

export default class Cards {
  constructor() {
    this.element = document.createElement("ul");
    this.element.classList.add("cards");
    this.cardImages = [];

    const cardItems = [
      { type: "visa", src: visa, alt: "Visa" },
      { type: "mastercard", src: mastercard, alt: "MasterCard" },
      { type: "americanexpress", src: americanexpress, alt: "AmericanExpress" },
      { type: "unionpay", src: unionpay, alt: "UnionPay" },
      { type: "mir", src: mir, alt: "MIR" },
    ];

    cardItems.forEach((cardItem) => {
      const item = document.createElement("li");
      item.classList.add("cards__item");

      const image = document.createElement("img");
      image.classList.add("cards__img", cardItem.type);
      image.src = cardItem.src;
      image.alt = cardItem.alt;

      this.cardImages.push(image);

      item.append(image);

      this.element.append(item);
    });
  }

  activateCards() {
    this.cardImages.forEach((image) => image.classList.remove("with-opacity"));
  }

  deActivateCards(cardType) {
    this.cardImages.forEach((image) => {
      if (!image.classList.contains(cardType.toLowerCase())) {
        image.classList.add("with-opacity");
      }
    });
  }
}
