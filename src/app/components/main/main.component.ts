import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
title = 'app';
  isMobile: boolean;
  isOpen: boolean = false;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkScreenSize();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (window.scrollX > 0) { 
      this.isOpen = false;
    }
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 800;
  }

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu(blockId: string) {
    this.isOpen = false;
    const element = document.getElementById(blockId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
