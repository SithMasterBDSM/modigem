Template.goToPanelBut.events({ 
    'click button': function(e) { 
        setTimeout(function(){
            if (Meteor.user()) {
                if (user2Role.find({rol: userRole.findOne({nameC: 'ADMINISTRATOR'})._id, user: Meteor.user()._id}).count() +1> 1){
                    Router.go('adminPanel');
                }else{
                    Router.go('userPanel');
                }
            }
        },800);
        return false; 
    }
});
Template.goToPanelBut.helpers({
	fBook: function() {
        if (Meteor.user().services.facebook) {
            return true;
	}else{
		    return false;
	}
    },
	twiTT: function() {
        if (Meteor.user().services.twitter) {
            return true;
	}else{
		    return false;
	}
    },
	usPass: function() {
        if (Meteor.user().username) {
            return true;
	}else{
		    return false;
	}
    },
	fbName: function() {
        if (Meteor.user().services.facebook) {
            return Meteor.user().services.facebook.name;
        }
    },
	twName: function() {
        if (Meteor.user().services.twitter) {
            return Meteor.user().profile.name;
        }
    },
	username: function() {
        if (Meteor.user().username) {
            return Meteor.user().username;
        }
    },
	twPic: function() {
        if (Meteor.user().services.twitter) {
            return Meteor.user().services.twitter.profile_image_url;
        }
    },
    fbPic: function() {
        if (Meteor.user().services.facebook) {
            return "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large";
        }
    }
	
});