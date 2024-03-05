import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RoomService } from './../services/rooms.service';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  hotelName: string = "The Grand Hotel";

  noOfRooms: number = 10;

  hideRooms: boolean = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 8,
    bookedRooms: 12
  };

  title: string = "Rooms List";

  selectedRoom!: RoomList;

  roomList: RoomList[] = [];

  // @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(@SkipSelf() private roomService: RoomService) { }

  ngOnInit(): void {
    // this.roomList = this.roomService.getRooms();
    // console.log(this.headerComponent);
    // console.log(this.roomService.getRooms());
    this.roomService.getRooms().subscribe((data: any) => {
      this.roomList = data;
    });
  }

  ngAfterViewInit(): void {
  }

  ngAfterViewChecked(): void {
    // this.headerChildrenComponent.last.title = "Rooms View";
    // console.log(this.headerChildrenComponent.last);
    // this.headerChildrenComponent.get(0).title = "First Title";
    // this.headerComponent.title = "Rooms View";

  }

  ngDoCheck(): void {

    // console.log("On changes is called");
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const add: RoomList = {
      roomNumber: 104,
      roomType: "Standard",
      amenities: "TV, WiFi, Breakfast",
      price: 2500,
      photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SIyWC7gKJIM_rPMXS-LbY5X2V4C8zXXfqw&usqp=CAU",
      checkInTime: new Date('2024-01-30T18:00:17'),
      checkOutTime: new Date('2024-01-31T08:16:48'),
      rating: 3.8
    };
    // this.roomList.push(add);
    this.roomList = [...this.roomList, add];
  }
}
