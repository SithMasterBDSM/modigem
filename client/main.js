console.log("ATENCIÓN: EL SISTEMA NO DEBE TENER SUBSCRIPCIONES GLOBALES EN MAIN.JS, ESTO DEBE MOVERSE A LOS MÉTODOS DATA O WAITON DE LAS RUTAS DONDE SE UTILICEN");

Meteor.subscribe('allPiece');
Meteor.subscribe('allImageClons');
Meteor.subscribe('allImages');
Meteor.subscribe('allRegistered');
Meteor.subscribe('allLandingTexts');
Meteor.subscribe('allAdmins');
Meteor.subscribe('allUsers');
Meteor.subscribe('allUserRole');
Meteor.subscribe('allUser2Role');

Template.registerHelper("idFromMongoObject", function(id)
	{
	    if ( !valid(id) ) {
		    return "No hay id";
		}
		if ( !valid(id.valueOf) ) {
	        return "No parece ser un objeto ObjectID";
		}
	    return id.valueOf();
	}
);
