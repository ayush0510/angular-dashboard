import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  _sidebar = [];
  constructor(private _data: SidebarService) { }

  ngOnInit() {
    this._data.sidebar.subscribe(res => this._sidebar = res);
  }

}
