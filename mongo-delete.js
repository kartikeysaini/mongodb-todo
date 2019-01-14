const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect');
    }
    console.log('connected to mongodb');

    db.collection('todos').deleteMany({text:'eat lunch'}).then((res)=>{
        console.log(res);
    });
    db.close();
})