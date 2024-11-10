import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-addguest',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterLink],
  templateUrl: './addguest.component.html',
  styleUrl: './addguest.component.css'
})
export class AddguestComponent {

  constructor(private http:HttpClient){}

  public guest:any={
    name:"",
    email:"",
    address:"",
    phoneNumber:"",
    bookingHistory:"",
    paymentDetail:"",
    currentBookingDetail:""
  }


  addGuest(){
    console.log(this.guest);
    this.http.post("http://localhost:8080/guest/add-guest",this.guest).subscribe(data=>{
      alert("Guest Added!!!")
    })
    this.guest.name="";
    this.guest.email="";
    this.guest.address="";
    this.guest.phoneNumber="";
    this.guest.bookingHistory="";
    this.guest.paymentDetail="";
    this.guest.currentBookingDetail="";

  

  }
  
}
