import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<div><img src="../../assets/images/error-404-not-found.jpg"></div>`,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
