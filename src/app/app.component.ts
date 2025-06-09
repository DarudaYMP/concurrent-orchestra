import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterOutlet } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'concurrent-orchestra';
  showHeaderFooter = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      // Set the flag based on the route data
      this.showHeaderFooter = !data['hideHeaderFooter'];
    });
  }
}

