import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isBgDark = false;
  isTop = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event:any) {
    if (window.innerWidth < 992) {
      if (window.pageYOffset > 45) {
        this.isBgDark = true;
      } else {
        this.isBgDark = false;
      }
    } else {
      if (window.pageYOffset > 45) {
        this.isBgDark = true;
        this.isTop = -49;
      } else {
        this.isBgDark = false;
        this.isTop = 0;
      }
    }
  }
  constructor() { }

  ngOnInit(): void {

  }


}
