import { AfterContentInit, Component, ContentChild, Host, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomService } from '../services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [RoomService]
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(EmployeeComponent,) employee!: EmployeeComponent;

  constructor(@Host() private roomService: RoomService) { }

  ngAfterContentInit(): void {
    // console.log(this.employee);
    this.employee.empName = "Vishwas";

  }

  ngOnInit(): void {
  }

}
