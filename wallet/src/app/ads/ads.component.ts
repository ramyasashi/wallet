import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ["/assets/images/543561c64f0d3_thumb900.jpg", 
            "/assets/images/e69275fcdc1400b07d0082f508091c6e.jpg", 
            "/assets/images/micromax-canvas-emi-ad.jpg"];
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
  }

}
