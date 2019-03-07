import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },   
<<<<<<< HEAD
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/app-flight-a320', title: 'A320',  icon:'dashboard', class: '' },
    { path: '/app-flight-a330', title: 'A330',  icon:'dashboard', class: '' },
    { path: '/app-flight-a350', title: 'A350',  icon:'dashboard', class: '' },
    //{ path: '/app-user-profile', title: 'Edit Flight',  icon:'content_paste', class: '' },
=======
    { path: '/table-list', title: 'Flight Catalogue',  icon:'content_paste', class: '' },
    { path: '/app-flight-a320', title: 'Flight A',  icon:'dashboard', class: '' },
    { path: '/app-user-profile', title: 'Edit Flight',  icon:'content_paste', class: '' },
>>>>>>> 58c69c3a436749ac840ed7ca28ad14cfa4c9c2c2



   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
