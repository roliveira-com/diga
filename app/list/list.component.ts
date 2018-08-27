import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'ns-list-view',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor(public router: RouterExtensions){}

  ngOnInit(): void {
  }

  goBack() {
    this.router.back();
  }

}