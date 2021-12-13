const fs = require("fs");

module.exports = {
    userLog: (req, res, next) => {
        fs.appendFileSync("src/data/usersLogs.txt", "El usuario ingresó a la ruta: " + req.url + "\n");
        next();
    },
    log: (req, res, next) => {
        let array = ["Ada", "Greta", "Vim", "Tim"];
        let query = array.find(element => req.query.log.toLowerCase() === element.toLowerCase());
        if(query === undefined){
            res.send("No sos un usuario administrador.");
        }
        next();
    }
}