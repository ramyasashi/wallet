import { Component, OnInit } from '@angular/core';
import { slideFadeIn, slideFadeOut, useSlideFadeInAnimation, useSlideFadeOutAnimation } from '../animations';
import { bounceInAndOut, enterAndLeaveFromLeft, enterAndLeaveFromRight, fadeInAndOut,
  fadeInThenOut, growInShrinkOut, swingInAndOut } from '../triggers';
import { trigger, transition, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations: [
  //   // The following are pre-built triggers - Use these to add animations with the least work
  //   growInShrinkOut, fadeInThenOut, swingInAndOut, fadeInAndOut,
  //   enterAndLeaveFromLeft, enterAndLeaveFromRight, bounceInAndOut,

  //   // The following is a custom trigger using animations from the package
  //   // Use this approach if you need to customize the animation or use your own states
  //   trigger('enterFromLeftLeaveToRight', [
  //     // this transition uses a function that returns an animation with custom parameters
  //     transition(':enter', useSlideFadeInAnimation('300ms', '20px')),
  //     // This transition uses useAnimation and passes the parameters directly - accomplishing the same thing as the above function
  //     transition(':leave', useAnimation(slideFadeOut, {params: {time: '2000ms', endPos: '100px'}})),
  //   ]),
  // ]
  
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
