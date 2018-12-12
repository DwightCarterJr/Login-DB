module.exports = function createRole(app) {
    var Role = app.models.Role;    
    //create the admin role
    Role.create({
        name: 'admin',

      }, function(err, role) {
        if (err) throw err;
        console.log('Created role:', role);
      });
    };