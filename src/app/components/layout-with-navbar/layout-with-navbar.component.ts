import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-layout-with-navbar',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './layout-with-navbar.component.html',
  styleUrl: './layout-with-navbar.component.scss'
})
export class LayoutWithNavbarComponent {

}
