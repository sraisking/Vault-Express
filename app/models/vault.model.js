var mongoose=require('mongoose');
var vaultEntry=mongoose.Schema({
    id:String,
    site:String
},{
    timestamps: true
});
module.exports=mongoose.model('vault',vaultEntry)