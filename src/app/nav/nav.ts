import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  navigate(section: string) {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.isOpen.set(false);
  }
}

