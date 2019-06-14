class Carousel {
  constructor({ leftBtn, rightBtn, cardNumber }) {
    this.leftBtn = leftBtn;
    this.rightBtn = rightBtn;
    this.cardNumber = cardNumber;
    this.currentIndex = 0;
  }

  init() {
    this.registerEvents();
  }

  onClickHandler(event) {
    event.preventDefault();
    this.currentIndex = (this.currentIndex + 1) % this.cardNumber;
    console.log(this.currentIndex);
    // for (let i; i < this.cardNumber; i++) {
    //   document.querySelector(
    //     `.item:nth-child(${((this.currentIndex + ((i + 3) % 4)) % 4) + 1})`
    //   ).style.transform = `translateX(${toString(-150 + i * 100)}%)`;
    // }
    document.querySelector(
      `.item:nth-child(${((this.currentIndex + 3) % 4) + 1})`
    ).style.transform = `translateX(-150%)`;
    document.querySelector(
      `.item:nth-child(${(this.currentIndex % 4) + 1})`
    ).style.transform = `translateX(-50%)`;
    document.querySelector(
      `.item:nth-child(${((this.currentIndex + 1) % 4) + 1})`
    ).style.transform = `translateX(50%)`;
    document.querySelector(
      `.item:nth-child(${((this.currentIndex + 2) % 4) + 1})`
    ).style.transform = `translateX(150%)`;

    document.querySelector(
      `.item:nth-child(${(this.currentIndex % 4) + 1})`
    ).style.opacity = `1`;
    document.querySelector(
      `.item:nth-child(${((this.currentIndex + 1) % 4) + 1})`
    ).style.opacity = `0`;
    document.querySelector(
      `.item:nth-child(${((this.currentIndex + 2) % 4) + 1})`
    ).style.opacity = `0`;
    document.querySelector(
      `.item:nth-child(${((this.currentIndex + 3) % 4) + 1})`
    ).style.opacity = `0`;
  }
  registerEvents() {
    this.rightBtn.addEventListener("click", this.onClickHandler.bind(this));
  }
}

const leftBtn = document.querySelector(".contents__button_left");
const rightBtn = document.querySelector(".contents__button_right");
const cardNumber = 4;
const carousel = new Carousel({ leftBtn, rightBtn, cardNumber });
carousel.init();
