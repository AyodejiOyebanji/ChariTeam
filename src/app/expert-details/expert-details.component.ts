import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expert-details',
  templateUrl: './expert-details.component.html',
  styleUrls: ['./expert-details.component.css']
})
export class ExpertDetailsComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  setPassword(){
    this.router.navigate(["/signup/setpassword"])
  }
}
