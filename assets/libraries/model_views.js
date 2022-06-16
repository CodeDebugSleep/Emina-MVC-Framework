const fs = require("fs")

//START OF CLASS
class Model_File {
    watch_controller() {
        fs.watch('./controllers', function(event, filename) {
            if(filename) {
                let file_name = filename.slice(0, -3);
                //this will create a model file in the models directory.
                fs.open("./models/" + file_name.slice(0, -1) + ".js", "w", function(err, file) {
                    if(err) throw err;
                });

                //this will create a Directory in the views directory.
                if(!fs.existsSync("./views/" + file_name)) {
                    fs.mkdirSync("./views/" + file_name);
                }
            }
        });
    }
}
//END OF CLASS

let create = new Model_File();
module.exports = create;
