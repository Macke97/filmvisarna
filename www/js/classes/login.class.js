class LogIn extends Base {
  constructor(app) {
    super();
    this.app = app;
    this.checkClickLogin();
    this.load();
  }

  click(event) {
    if ($(event.target).hasClass('skapa-konto')) {
      this.register = new Register(this.app);
      this.register.drawRegisterModal();
    }
  }

  async load() {
    //This makes sure that we always have the json file loaded
    this.users = await JSON._load('users.json');
  }

  /* Method that runs when login instance is made. Purpose of this method is
  to watch for click event */
  checkClickLogin() {
    let that = this;
    $(document).on('submit', '#loginForm', function(e) {
      e.preventDefault();
      let loginName = $('#userLogin').val();
      let loginPW = $('#userPW').val();

      //Iterate through this.users array
      for (let obj of that.users) {

        /* If the the object's username corresponds with our input value,
        check if the password is also correct and if so re-render navbar */
        if (loginName == obj.username && loginPW == obj.password) {
          $('header').empty();
          that.app.userPage.setLogin(obj); //Sends the login to the User Page class
          that.app.popState.renderCorrectNav();
          break;
        } else {
          $('.errorMessageLogin').removeClass('d-none');
        }
      }
    });
  }

}
