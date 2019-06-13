class Carousel {
  constructor({ leftBtn, rightBtn }) {
    this.leftBtn = leftBtn;
    this.rightBtn = rightBtn;
  }
  init() {
    this.registerEvensts();
  }
  onClickHandler() {
    document.querySelector("");
  }
  registerEvents() {
    this.leftBtn.addEventListner("onclick", this.onClickHandler());
  }
}

const leftBtn = documnet.querySelector(".contents__button");
const carousel = new Carousel({ leftBtn, rightBtn });

carousel.init();
