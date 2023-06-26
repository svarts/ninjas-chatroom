import { db } from "./firebase";
import { collection } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
//adding new chat documents
//setting up a real-time listener to get new chats
//updating the username
//updating the room

class Chatroom{
    constructor(room, username){
        this.room = room,
        this.username = username,
        this.chats = collection(db, 'chats');
    }
}
const chatroom = new Chatroom('gaming', 'shaun');
console.log(chatroom);