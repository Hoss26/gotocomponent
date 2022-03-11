import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-sm',
  templateUrl: './router-sm.component.html',
  styleUrls: ['./router-sm.component.css']
})
export class RouterSMComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
}
  gotoComponent(router : any){
    const link = [router];
    this.router.navigate(link);


  }

}
