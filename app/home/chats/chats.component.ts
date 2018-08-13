import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { ChatsService, Chat } from '../../core';

@Component({
  moduleId: module.id,
  selector: 'ns-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {
  public chats: Chat[] = [];

  constructor(private chatsService: ChatsService, private routerExtensions: RouterExtensions) {
    this.chats = this.chatsService.chats;
  }

  ngOnInit(): void {
  }

  goToChat(args){
    const extras: NavigationExtras = {
      queryParams :{ unread : 2 }
    }
    this.routerExtensions.navigate(
      [ 'chat', args.index ],
      extras
    )
  }
}
