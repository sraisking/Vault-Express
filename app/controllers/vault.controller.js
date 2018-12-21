const Vault=require('../models/vault.model')
exports.create=(req,res)=>{
    const vault=new Vault(
        {
            id:req.body.id,
            site:req.body.site,
            password:req.body.password
        }
    )
    vault.save().then(data=>{res.send(data);console.log(data)}).catch(err=>res.status.send({
        message:err.message
    }))
}
exports.findAll=(req,res)=>{
   Vault.find().then(vault=>{res.send(vault)}).catch(err=>res.status.send({message:err.message}))
}