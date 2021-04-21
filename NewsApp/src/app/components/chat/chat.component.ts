import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service'
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public messageToBeSent = '';
  public loggedInUserName = '';
  public username = '';
  public messagesRecieved: any[] = [];
  public userCount: number;


  // public selectedUser = '';

  constructor(private chat: ChatService) {  }

  ngOnInit(): void {
      // observable that reacts when new messages have been sent.
      this.chat.chatMessages.subscribe((messages) => {
          this.messagesRecieved = messages;
      });

      // observable that reacts when new user logs in.
      this.chat.totalUsers.subscribe((userCount) => {
        this.userCount = userCount;
    });
  }

  sendMessage(): void{
    this.chat.send({message : this.messageToBeSent, username : this.loggedInUserName});
  }

  loginUser(): void{
      this.loggedInUserName = this.username;
      this.chat.login(this.loggedInUserName);
  }

}

