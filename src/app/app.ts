import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./nav/nav";
import { Footer } from "./footer/footer";
import { Header } from './header/header';
import { About } from './about/about';
import { Experience } from './experience/experience';
import { Skills } from './skills/skills';
import { Languages } from './languages/languages';
import { Contact } from './contact/contact';
import { CommonModule } from '@angular/common';
import { Studies } from "./studies/studies";

@Component({
  selector: 'app-root',
  imports: [Nav, Header, Footer, Experience, About, Studies, Skills, Contact, Languages],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'CVRevilla';
}
