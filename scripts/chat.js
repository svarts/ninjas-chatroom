import { db } from "./firebase";
import { collection, Timestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
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
    async addChat(message){
        //format a chat object 
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        //save the chat document 
        const response = await this.chats.add(chat);
        return response;
    }
}
const chatroom = new Chatroom('gaming', 'shaun');
console.log(chatroom);

chatroom.addChat('hello everyone')
    .then(() => console.log('chat added'))
    .catch(err => console.log(err));