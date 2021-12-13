module.exports = {
    main : (req, res)=>{
        res.render("index");
    },
    design : (req, res)=> {
        res.render("design");
    },
    services : (req,res)=>{
        res.render("services");
    },
    admin : (req, res)=>{
        let logger = req.query.log;
        res.render("admin", {logger});
    }
}