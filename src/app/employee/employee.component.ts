import { Component, OnInit, Self } from '@angular/core';
import { RoomService } from '../services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  // providers: [RoomService]
})
export class EmployeeComponent implements OnInit {

  empName!: string;

  constructor(private eoomService: RoomService) { }

  ngOnInit(): void {
  }

}
