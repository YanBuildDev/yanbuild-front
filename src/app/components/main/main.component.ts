import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkScreenSize();
  }
title = 'app';
  isMobile: boolean;
  isOpen: boolean = false;

  isAdmin = false

  constructor() {
    this.checkScreenSize();
  }

  ngOnInit() {
    // Sorry developer for this
    if(localStorage.getItem('jwt')){
      this.isAdmin = true
    }
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
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
