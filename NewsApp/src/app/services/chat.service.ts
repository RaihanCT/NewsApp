import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: Socket;

  chatMessages: BehaviorSubject<any> = new BehaviorSubject([]);
  totalUsers: BehaviorSubject<any> = new BehaviorSubject(0);

  constructor() {
    this.socket = io('http://localhost:3223');
    this.recieve();
  }

  login(username: string): void {
    this.socket.emit('login', username);
  }

  // method to send message to friends.
  send(message: any): void {
    let messageToSent = { timestamp : new Date(), self: true, ...message };
    this.socket.emit('chat', messageToSent);
    this.chatMessages.next([...this.chatMessages.value, messageToSent]);
  }

  recieve(): void {

    // listens for an event tagged as 'messages" that contains the messages from other users.
    this.socket.on('messages', (message) => {
      this.chatMessages.next([...this.chatMessages.value, { ...message, self: false, }]);
    });

    // listens for an event tagged as 'totalUser" that contains the number of logged users.
    this.socket.on('totalUsers', (message) => {
      this.totalUsers.next(message);
    });

  }

}
