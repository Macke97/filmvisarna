class Modal{
  constructor(id, title, body, btn = 'Stäng'){
    this.id = id;
    this.title = title;
    this.body = body;
    this.btn = btn;
    this.drawModal();
  }

  drawModal(){
   /* $('main #main-modal').remove();*/
    $('main').append(`
      <div class="modal fade" id="${this.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title text-danger">${this.title}</h2>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              &times;
            </button>
            </div>
            <div class="modal-body mx-4">
              ${this.body}
            </div>
            <div class="modal-footer">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">${this.btn}</button>
            </div>
          </div>
        </div>
      </div>
    `);
   $(`#${this.id}`).modal();
  }
}