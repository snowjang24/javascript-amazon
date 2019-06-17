class Carousel {
  constructor({ leftBtn, rightBtn, cardNumber }) {
    this.leftBtn = leftBtn;
    this.rightBtn = rightBtn;
    this.cardNumber = cardNumber;
    this.currentIndex = 0;
  }

  addStyleToItem(index) {
    let currentItemStyle = document.querySelector(
      `.item:nth-child(${((this.currentIndex +
        ((index + (this.cardNumber - 1)) % this.cardNumber)) %
        this.cardNumber) +
        1})`
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
    console.log(this.currentIndex);
  }

  onClickHandler(event) {
    const direction = event.target.id;
    event.preventDefault();
    this.moveCurrentIndex(direction);
    for (let i = 0; i < this.cardNumber; i++) {
      this.addStyleToItem(i);
    }
  }

  registerEvents() {
    this.leftBtn.addEventListener("click", this.onClickHandler.bind(this));
    this.rightBtn.addEventListener("click", this.onClickHandler.bind(this));
  }
  init() {
    this.registerEvents();
  }
}

const leftBtn = document.querySelector(".contents__button_left");
const rightBtn = document.querySelector(".contents__button_right");
const cardNumber = 4;
const carousel = new Carousel({ leftBtn, rightBtn, cardNumber });
carousel.init();
