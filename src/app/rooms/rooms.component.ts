import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName: string = "The Grand Hotel";

  noOfRooms: number = 10;

  hideRooms: boolean = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 8,
    bookedRooms: 12
  };

  roomList: RoomList[] = [
    {
      roomNumber: 101,
      roomType: "Deluxe",
      amenities: "AC, TV, WiFi, Breakfast",
      price: 5000,
      photos: "https://www.parkregisgoa.in/wp-content/uploads/2021/04/Deluxe-Garden-View-2-2520x1400.jpg",
      checkInTime: new Date('2024-02-14T20:00:17'),
      checkOutTime: new Date('2024-02-15T06:16:48'),
      rating: 4.5
    },
    {
      roomNumber: 102,
      roomType: "Standard",
      amenities: "TV, WiFi, Breakfast",
      price: 3000,
      photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SIyWC7gKJIM_rPMXS-LbY5X2V4C8zXXfqw&usqp=CAU",
      checkInTime: new Date('2024-01-30T18:00:17'),
      checkOutTime: new Date('2024-01-31T08:16:48'),
      rating: 3.8
    },
    {
      roomNumber: 103,
      roomType: "Private Suite",
      amenities: "AC, TV, WiFi, Breakfast, Dinner",
      price: 8000,
      photos: "https://www.parkregisgoa.in/wp-content/uploads/2021/04/Suite-Sea-View-2-2520x1400.jpg",
      checkInTime: new Date('2024-03-20T22:00:17'),
      checkOutTime: new Date('2024-03-21T10:16:48'),
      rating: 5
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
