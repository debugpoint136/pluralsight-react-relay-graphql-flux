import express from 'express';
import { MongoClient } from 'mongodb';

// export MONGO_URL=mongodb://dbuser:dbpassword@ds051913.mongolab.com:51913/playground

let app = express();

app.use(express.static('public'));
app.get('/', (req, res) => res.send("Hello Express!"));


let db;

MongoClient.connect(process.env.MONGO_URL, (error, database) => {
   if ( error ) throw error;

    db = database;
    app.listen(3000, () => {
        console.log("Listening on port 3000 ...");
    });
});

app.get("/data/players", (req, res) => {
        db.collection( "people" ).find({}).toArray((err, players) => {
         if(err) throw err;
         res.json( players );
     });
})