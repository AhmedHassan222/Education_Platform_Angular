import { Component, signal, WritableSignal } from '@angular/core';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { TeacherNavbarComponent } from '../teacher-navbar/teacher-navbar.component';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { GuestNavbarComponent } from '../guest-navbar/guest-navbar.component';

@Component({
  selector: 'app-navbar',
  imports: [UserNavbarComponent,TeacherNavbarComponent,AdminNavbarComponent,GuestNavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  role: WritableSignal<string> = signal("User");
}
