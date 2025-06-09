import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/blog', label: 'Blog' },
    { path: '/contacts', label: 'Contact' }
  ];
}
