import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SidebarService {

  private _sidebar = new BehaviorSubject<any>([
    {
      'name': 'Dashboard',
      'icon': 'ti-home',
      'url' : ''
    },
    {
      'name': 'Application',
      'icon': 'ti-package',
      'url' : 'dashboard'
    },
    {
      'name': 'UI Element',
      'icon': 'ti-palette',
      'url' : 'dashboard'
    },
    {
      'name': 'Table',
      'icon': 'ti-layout-media-overlay',
      'url' : 'dashboard'
    },
    {
      'name': 'Maps',
      'icon': 'ti-map-alt',
      'url' : 'dashboard'
    },
    {
      'name': 'Application',
      'icon': 'ti-package',
      'url' : 'dashboard'
    },
    {
      'name': 'Users',
      'icon': 'ti-user',
      'url' : 'users'
    }
  ]);
  sidebar = this._sidebar.asObservable();
  constructor() { }

}
