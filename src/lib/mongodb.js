const { MongoClient } = require("mongodb");

let mongoClient;
let clientPromise;

if (!clientPromise) {
    mongoClient = new MongoClient("mongodb+srv://fadymalak7716:Kmrh2JUWqjJgttcp@blogs.yrj8f.mongodb.net/?retryWrites=true&w=majority&appName=blogs");
    clientPromise = mongoClient.connect();
    clientPromise.then()
}

export default clientPromise;
