import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/blog', label: 'Blog' },
    { path: '/contacts', label: 'Contact' }
  ];

  // Social media links
  socialLinks = [
    { href: 'https://instagram.com', icon: 'instagram.svg', alt: 'Instagram' },
    { href: 'https://telegram.org', icon: 'telegram.svg', alt: 'Telegram' },
    { href: 'https://facebook.com', icon: 'facebook.svg', alt: 'Facebook' },
    { href: 'mailto:coorchestra@gmail.com', icon: 'mail.svg', alt: 'Email' },
    { href: 'tel:+380964587845', icon: 'phone.svg', alt: 'Phone' }
  ];

  // Legal links
  legalLinks = [
    { path: '/privacy-policy', label: 'Privacy policy' },
    { path: '/terms', label: 'Terms and Conditions' }
  ];
}
