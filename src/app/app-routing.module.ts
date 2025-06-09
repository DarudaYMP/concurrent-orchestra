import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthComponent } from './auth/auth.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

export const routes: Routes = [
  // Your existing routes
  { path: '', component: AboutUsComponent, pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contacts', component: ContactsComponent },
  
  // --- NEW AUTHENTICATION ROUTES ---
  // We use the same component for both, but with different data flags
  // We also add a data property to tell the AppComponent to hide the header/footer.
  {
    path: 'login',
    component: AuthComponent,
    data: { hideHeaderFooter: true, isLoginMode: true }
  },
  {
    path: 'signup',
    component: AuthComponent,
    data: { hideHeaderFooter: true, isLoginMode: false }
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
    data: { hideHeaderFooter: true }
  },
  
  // A wildcard route is good practice
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
