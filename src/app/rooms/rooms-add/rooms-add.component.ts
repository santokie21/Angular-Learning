import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css']
})
export class RoomsAddComponent implements OnInit {

  room: RoomList = {
    roomNumber: 0,
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkInTime: new Date(),
    checkOutTime: new Date(),
    rating: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
