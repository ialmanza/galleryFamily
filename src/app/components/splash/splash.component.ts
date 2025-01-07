import { Component, ElementRef, ViewChild } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-splash',
  imports: [ CommonModule ],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.css'
})
export class SplashComponent {
  showSplash = true;
  @ViewChild('confettiCanvas') confettiCanvas!: ElementRef;

  constructor(private platform: Platform) {}

  ngOnInit() {
    if (this.platform.isBrowser) {

      window.addEventListener('load', () => {
        setTimeout(() => {
          const splashElement = document.querySelector('.splash-screen');
          if (splashElement) {
            splashElement.classList.add('fade-out');
          }
          setTimeout(() => {
            this.showSplash = false;
          }, 1000);
        }, 2000);
      });
    }
  }

}
