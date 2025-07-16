const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const db = "test1";


 var usersList = [];

 const run=async()=>{
     try{
          await client.connect();
          console.log("MongoDB connected");
          const myDatabase = client.db(db);
          const usersCollection = myDatabase.collection("users");
          const usersData = await usersCollection.find({}).toArray();
          console.log("Document Fonud",usersData);
          usersList = [...usersData];
          usersData.forEach((user)=>{
               console.log(user.name);
          });
          client.close();
     }
     catch(error){
        console.log(error);
     }
}
run();