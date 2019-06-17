class Carousel {
  constructor({ leftBtn, rightBtn, cardNumber }) {
    this.leftBtn = leftBtn;
    this.rightBtn = rightBtn;
    this.cardNumber = cardNumber;
    this.currentIndex = 0;
    this.selectedDirection = undefined;
  }

  addStyleToItem(i) {
    const convertedIndex =
      this.currentIndex + ((i + (this.cardNumber - 1)) % this.cardNumber);
    const nthChildNumb = (convertedIndex % this.cardNumber) + 1;

    let currentItemStyle = document.querySelector(
      `.item:nth-child(${nthChildNumb})`
    ).style;

    currentItemStyle.transform = `translateX(${-150 + i * 100}%)`;
    currentItemStyle.opacity = "0";
    if (i === 1) {
      currentItemStyle.opacity = "1";
    }
  }

  moveCurrentIndex(direction) {
    let index =
      direction === "left" ? this.currentIndex - 1 : this.currentIndex + 1;
    if (index < 0) index += this.cardNumber;
    this.currentIndex = index % this.cardNumber;
  }

  drawCardPosition() {
    for (let i = 0; i < this.cardNumber; i++) {
      this.addStyleToItem(i);
    }
  }

  onClickHandler(event) {
    this.selectedDirection = event.target.id;
    event.preventDefault();
    this.moveCurrentIndex(this.selectedDirection);
    this.drawCardPosition();
  }

  registerEvents() {
    this.leftBtn.addEventListener("click", this.onClickHandler.bind(this));
    this.rightBtn.addEventListener("click", this.onClickHandler.bind(this));
  }

  init() {
    this.registerEvents();
    this.drawCardPosition();
  }
}

const leftBtn = document.querySelector(".contents__button_left");
const rightBtn = document.querySelector(".contents__button_right");
const cardNumber = document.querySelectorAll(".contents__item").length;
const carousel = new Carousel({ leftBtn, rightBtn, cardNumber });
carousel.init();
