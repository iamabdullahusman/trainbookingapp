import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user = { // Hardcoded user details
    id: 1,
    name: 'Miss Maira',
    email: 'maira@gmail.com',
    contact:'123456',
    address:'alpha'
  };
}
