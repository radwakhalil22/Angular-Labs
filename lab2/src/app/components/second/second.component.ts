import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  Images = [
    { url: 'assets/Images/image1.jpg', title: 'image1' },
    { url: 'assets/Images/image2.jpg', title: 'image2' },
    { url: 'assets/Images/image3.jpg', title: 'image3' },
    { url: 'assets/Images/image4.jpg', title: 'image4' },
  ];
  imgSrc: string = this.Images[0].url;
  intervalId: any = null;

  next() {
    const currentIndex = this.Images.findIndex(
      (image) => image.url === this.imgSrc
    );

    if (currentIndex < this.Images.length - 1) {
      this.imgSrc = this.Images[currentIndex + 1].url;
    }
  }
  prev() {
    const currentIndex = this.Images.findIndex(
      (image) => image.url === this.imgSrc
    );

    if (currentIndex > 0) {
      this.imgSrc = this.Images[currentIndex - 1].url;
    }
  }

  play() {
    if (!this.intervalId) {
      let currentIndex = this.Images.findIndex(image => image.url === this.imgSrc);

      this.intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % this.Images.length;
        this.imgSrc = this.Images[currentIndex].url;
      }, 1000);
    }
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

