class Register extends Base{
	constructor(){
		super();
		this.checkClickCreateUser();
		this.load();
	}

	//loads in the users.json file so we can save data to it
	async load(){
		this.users = await JSON._load('users.json');
	}

	drawRegisterModal(){
		$('main #register-modal').remove();
		$('main').append(this.template());
		$('#register-modal').modal();
	}


	checkClickCreateUser(){
		let that = this;
		//function so pressing enter works to register a new account
		$(document).keyup(function(e){
			if (e.keyCode == 13) {
				$('.register').click();
			}
		});
		$(document).on('click', '.register', function(){
			//makes it possible to take the values from the input fields and adds a random member number
			let username = $('#name').val();
			let password = $('#password').val();
			let memberNumber;
			giveMemberNr();


			function giveMemberNr(){
				memberNumber = Math.floor((Math.random() * 10000000) + 1);

				//If the random number that being generated is already in use,
				//then generate a new. OBS! The odds are very small of two identical numbers.
				for(let obj of that.user){
					if(obj.memberNumber == memberNumber){
						break;
						giveMemberNr();
					}
				}
			}

			console.log($('#password-confirm').val());

			let newUser = {username: username, password: password, memberNumber: memberNumber};
			//fixes for password validation so they have to be the same.
			if(username.length > 2 && password.length > 2){
				if($('#password-confirm').val() !== password){
					alert('Lösenord stämmer inte överrens!');
				} else {that.users.push(newUser);}
			} else {alert('Användarnamn och lösenord måste vara minst 2 tecken långt');}


			JSON._save('users.json', that.users);

			console.log(that.users);
		});


	}

}