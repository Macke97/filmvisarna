class Seat extends Base {
  constructor(x, y, seatNumber) {
    super();
    this.x = x;
    this.y = y;
    // this.htmlTemplate = this.htmlSeatTemplate(x, y, seatNumber);
    this.seatNumber = seatNumber;
  }

  // htmlSeatTemplate(x, y, seatNumber) {
  //   return `
  //     <rect x="${x}" y="${y}" rx="7" ry="7" width="40" height="40"
  //     id="${seatNumber}" class="vacant"/>
  //   `
  // }

  click(event) {
    console.log('click in seat', event);
    $(event.target).addClass('mouseentered');
    if ($(event.target).hasClass('vacant')) {
      $(event.target).toggleClass('selected');
    }
    $(event.target).removeClass('vacant');
  }
  mouseenter(event) {
    console.log('mouseenter',event);
  }

  mouseleave(event) {
    console.log('mouseleave',event);
  }
}
