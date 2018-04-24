import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public _users;
  constructor(private _data: UsersService) { }

  ngOnInit() {
    this._data.getUsers().subscribe(
      data => { this._users = data},
      err => console.error(err),
      () => console.log(this._users)
    );
  }
  
}
