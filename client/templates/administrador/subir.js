Template.subir.events({
  "change input[type='file']": function (e, template) {
    var fsFile = new FS.File(e.target.files[0]);
    fsFile.metadata = {owner: Meteor.userId()} 
    images.insert(fsFile, function (err) {
        if (err) 
            throw err;
        else
            console.log('Success')
    });
	var actualImages = images.find();
	imageClon.insert(actualImages);
}
});
