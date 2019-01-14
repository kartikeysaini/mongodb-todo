const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to server');
    }
   console.log('connected to mongodb');
   
   db.collection('todos').insertOne({name:'kartikey',
    completed: false},(err,res)=>{
        if(err){
            return console.log(`unable to insert`);
        }
        return console.log(JSON.stringify(res,undefined,2));
    });
    db.close();
    
      
});

