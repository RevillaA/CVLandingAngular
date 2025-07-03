import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  title: string;
  icon: string;   
  url:  string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})

export class Header {
  redes = signal<SocialLink[]>([]);

  private readonly links: SocialLink[] = [
    { title: 'GitHub',   icon: 'fab fa-github',   url: 'https://github.com/RevillaA' },
    { title: 'Instagram',icon: 'fab fa-instagram',url: 'https://www.instagram.com/antonio.adr_2005/' },
    { title: 'Facebook', icon: 'fab fa-facebook', url: 'https://www.facebook.com/antonio.revilla.2025' }
  ];

  toggleRedes() {
    this.redes.update(arr => arr.length ? [] : this.links);
  }
}
