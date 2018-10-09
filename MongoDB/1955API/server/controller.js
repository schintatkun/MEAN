const Name = require('./models.js')
module.exports = {
    index: (req, res) => {
        // res.json({message: "success", data: [{name: 'shane'},{name: 'Yong'}]})
        Name.find({}, function (err, names) {
            if (err) {
                console.log('return errors', err);
                res.json({ message: "Error", error: err });
            } else { res.json({ message: "success", data: names }); }
        })
    },
    newName: (req, res) => {
        Name.create({ name: req.params.name }, function (err, names) {
            if (err) { console.log('error while creating new name'); }
            else {
                console.log('Success - it just create a person name', names);
                res.redirect('/');
            }
        })
    },
    removeName: (req, res)=>{
        Name.findOneAndDelete({name:req.params.name}, function(err, name){
            if(err){console.log('error while trying to delete name');}
            else{
                console.log('Success - Given name was deleted');
                res.redirect('/');
            }
        })
    },
    displayName: (req, res)=>{
        Name.findOne({name:req.params.name}, function(err,name){
            if(err){console.log('error while looking for a name');}
            else{
                console.log('Success!! get info of given name');
                res.json({person_info:name});
            }
        })
    }
}