import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../commaan/navbar/navbar.component";

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {

}
