import { Component, OnInit, ViewChild } from '@angular/core';
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { View } from 'tns-core-modules/ui/core/view';
import { RouterExtensions } from 'nativescript-angular/router';

import { ChatsService, Chat } from '../../core';

@Component({
  moduleId: module.id,
  selector: 'ns-list-area',
  templateUrl: './list-area.component.html',
  styleUrls: ['./list-area.component.scss'],
})
export class ListAreaComponent implements OnInit {
  public chats: Chat[];
  public dados: any[]

  constructor(public chatsService: ChatsService, private router: RouterExtensions) {
    this.chats = this.chatsService.chats;
  }

  @ViewChild("myListView") listViewComponent: RadListViewComponent;

  ngOnInit(): void {
  }

  get listagem(){
    return this.dados;
  }

  public onCellSwiping(args: ListViewEventData) {
    const swipeLimits = args.data.swipeLimits;
    const currentItemView = args.object;

    if (args.data.x > 200) {
      console.log("Notify perform left action");
    } else if (args.data.x < -200) {
      console.log("Notify perform right action");
    }
  }

  public onSwipeCellStarted(args: ListViewEventData) {
    const swipeLimits = args.data.swipeLimits;
    const swipeView = args.object;
    const leftItem = swipeView.getViewById<View>('mark-view');
    const rightItem = swipeView.getViewById<View>('delete-view');
    swipeLimits.left = leftItem.getMeasuredWidth();
    swipeLimits.right = rightItem.getMeasuredWidth();
    swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
  }

  public onSwipeCellFinished(args: ListViewEventData) {

  }

  public onLeftSwipeClick(args: ListViewEventData) {
    console.log("Left swipe click");
    this.listViewComponent.listView.notifySwipeToExecuteFinished();
  }

  public onRightSwipeClick(args) {
    console.log("Right swipe click");
    this.chats.splice(this.chats.indexOf(args.object.bindingContext), 1);
  }

  public goBack() {
    this.router.back();
  }

}