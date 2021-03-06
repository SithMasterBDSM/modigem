Router.configure({
    layoutTemplate: 'layout',
        notFoundTemplate: 'paginaNoExiste'
});

Router.route('/',{name: 'home'});
Router.route('/aboutUs',{name: 'aboutUs'});
Router.route('/contactUs',{name: 'contactUs'});
Router.route('/signUp',{name: 'signUpForm'});
Router.route('/login',{name: 'loginForm'});
Router.route('/adminPanel',{name: 'adminPanel',
    data: function(){
		return true;
	}
});
Router.route('/usersModule',{name: 'usersModule'});
Router.route('/userPanel',{name: 'userPanel'});
Router.route('/formularioPieza1',{name: 'formularioPieza1',
    data: function() {
        formEditId = Session.get("formEditId");
	}
});