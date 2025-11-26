var mongoose=require('mongoose');
//var dbURI='mongodb://localhost/mekanbul';
var dbURI = 'mongodb+srv://FatihSahin:fatih123@cluster0.tlrc7d6.mongodb.net/?appName=Cluster0';
mongoose.connect(dbURI);
mongoose.connection.on("connected",function (){
    console.log(dbURI+" adresindeki veritabanına bağlanıldı!\n");
});
mongoose.connection.on("disconnected",function(){
    console.log("Bağlantı kesildi!\n");
});
//Uygulama kapandığında kapat.
process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("Bağlantı kapatıldı");
    process.exit(0);
});
require("./venue");