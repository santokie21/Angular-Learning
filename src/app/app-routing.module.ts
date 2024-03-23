import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: "rooms/add", component: RoomsAddComponent },
  { path: 'rooms/:id', component: RoomsBookingComponent },
  { path: 'nf', component: NotfoundComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: '**', redirectTo: '/nf', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
