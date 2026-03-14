import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

import {
  bounceInOnEnterAnimation
 } from 'angular-animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    bounceInOnEnterAnimation({ delay: 900}),
    trigger('bounceInUpTrigger', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('1s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1s ease-in', style({ transform: 'translateY(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  public restart: boolean = true;
  public states: 'wait'|'showLeft'|'showRight'|'none' = 'none';
  
  constructor(private toast: ToastrService) {
    
  }

  ngOnInit(): void {
    if(window.innerWidth < 1101)
      this.states = 'showLeft';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
   
    
    if(event.target.innerWidth < 1101) {
      this.states = 'showLeft'
      console.log("x<1100");
    }
    else {
      this.states = 'none'
      console.log("x>1100");
    }
  }

 
  next(){
    this.states = 'wait';
    this.restart = false;
  }

  hindLeft(){
    if(this.restart) return;
    this.states = 'showRight';
    this.restart = true;
  }

  hindRight(){
    if(this.restart) return;
    this.states = 'showLeft';
    this.restart = true;
  }


  todo(){
    this.toast.warning('Development is underway');
  }

}
