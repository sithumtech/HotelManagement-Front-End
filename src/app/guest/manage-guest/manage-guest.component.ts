import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-guest',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule,RouterLink],
  templateUrl: './manage-guest.component.html',
  styleUrl: './manage-guest.component.css'
})
export class ManageGuestComponent {
  public customerlist: any = [];

  constructor(private http: HttpClient) {
    this.loadTable();
  }
  loadTable() {
    this.http.get("http://localhost:8080/guest/getall-guest").subscribe(data => {
      this.customerlist = data;
      console.log(data);

    })
  }

  deletecustomer(id: any) {

    this.http.delete(`http://localhost:8080/guest/delete-guest/${id}`).subscribe(data => {
      this.loadTable();
      console.log("customer Deleted");

    })

  }
public selectedCustomer:any={};
  selectUpdateCustomer(customer: any) {
    console.log(customer);
    this.selectedCustomer=customer;

  }
  saveCustomer(){
    this.http.put("http://localhost:8080/guest/update-guest",this.selectedCustomer).subscribe(data=>{
      alert("customer Updated");
      this.loadTable();
    })
  }

}
