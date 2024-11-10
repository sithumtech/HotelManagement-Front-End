import { Routes } from '@angular/router';
import { AddguestComponent } from './guest/addguest/addguest.component';
import { ManageGuestComponent } from './guest/manage-guest/manage-guest.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { NavbarComponent } from './commaan/navbar/navbar.component';
import { DashbordComponent } from './page/dashbord/dashbord.component';

export const routes: Routes = [
    {
        path:"add-guest",
        component:AddguestComponent
    },
    {
        path:"manage-customer",
        component:ManageGuestComponent
    },
    {
        path:"",
        component:LoginComponent
    },
    {
        path:"dashbord",
        component:NavbarComponent,
    },
    {
        path:"dashbord",
        component:DashbordComponent,
        children:[
            {
                path:"addguest",
                component:AddguestComponent
            },{
                path:"manage-guset",
                component:ManageGuestComponent
            }
        ]
    }
];
