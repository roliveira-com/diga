import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { ChatsService, Chat } from '../core'
import { Message } from '../core/models/message.model';

@Component({
  moduleId: module.id,
  selector: 'ns-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {

  public chatIndex: number;
  public chat: Chat;
  public unread: Number;
  public messages: Message[];

  constructor(private route: ActivatedRoute, private chatsService: ChatsService, public router: RouterExtensions, @Inject('platform') public platform) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.chatIndex = +params['index'];
      this.chat = this.chatsService.chats[this.chatIndex];
    });
    this.route.queryParams.subscribe(params => {
      this.unread = +params['unread'];
    });
    this.getMessages();
  }


  getMessages() {
    this.messages = this.chatsService.getMessages(this.chat);
  }

  goBack(){
    this.router.back();
  }
}
