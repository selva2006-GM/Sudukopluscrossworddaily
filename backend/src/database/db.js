import "dotenv/config";

import { MongoClient } from "mongodb";


const url = process.env.MONGODB_URI;


if(!url){

    throw new Error("MONGODB_URI is missing from .env");
}


const client = new MongoClient(url);


let db;

export async function  connectDB() {
    
    try{
        await client.connect();

        db = client.db("sudoku_crossword");

        console.log("mongodb connected successfully!");
        return db;

    }catch(error){
        console.error("mongodb connection failed: ", error.message);
        throw error;
    }
}



export function getDB(){
    if(!db){
        throw new Error("Database not initalized. Call connectDB() first");
    }

    return db;
}



export async function closeDB() {
    await client.close();
    console.log("MongoDB connection closed.");
}