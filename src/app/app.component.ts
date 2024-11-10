import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./page/login/login.component";
import { AddguestComponent } from "./guest/addguest/addguest.component";
import { HomeComponent } from './page/home/home.component';
import { NavbarComponent } from "./commaan/navbar/navbar.component";
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddguestComponent, HomeComponent, NavbarComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'hotel-managemnt-frontend';
  ngOnInit(): void {
    initFlowbite();
  }
}
