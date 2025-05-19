import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fp-banner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './fp-banner.component.html',
  styleUrl: './fp-banner.component.scss'
})
export class FpBannerComponent implements OnInit, OnDestroy {
  slides = [
    {
      image: 'https://i.postimg.cc/7hRs5dvX/hotel4.jpg',
      title: 'Welcome to Deluxe Room',
      description: 'Experience the comfort and luxury.'
    },
    {
      image: 'https://i.postimg.cc/vB3SsD3J/hotel1.jpg',
      title: 'Hotel Grand Sultan',
      description: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
      image: 'https://i.postimg.cc/J7YdYDyJ/hotel2.jpg',
      title: 'Pool and Spa Available',
      description: 'Relax and enjoy exclusive services.'
    },
    {
      image: 'https://i.postimg.cc/7hRs5dvX/hotel4.jpg',
      title: 'Luxury Family Room',
      description: 'Perfect comfort for the whole family.'
    },
    {
      image: 'https://i.postimg.cc/jdG3Kp4S/hotel5.jpg',
      title: 'Explore the Duplex Touch',
      description: 'A new level of sophistication.'
    }
  ];

  currentSlide = 0;
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 4000);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
