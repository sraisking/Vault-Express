module.exports=(app)=>{
    const vault=require("../controllers/vault.controller")
    app.post('/save',vault.create)
    app.get('/getSites',vault.findAll)
}