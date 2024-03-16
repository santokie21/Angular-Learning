import { HttpEventType } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
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

  hideRooms: boolean = true;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 8,
    bookedRooms: 12
  };

  title: string = "Rooms List";

  selectedRoom!: RoomList;

  roomList: RoomList[] = [];

  stream = new Observable<string>((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();

  })

  // @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(@SkipSelf() private roomService: RoomService) { }

  totalBytes: number = 0;

  ngOnInit(): void {
    this.stream.subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log("Completed")
    });
    this.stream.subscribe((data) => { console.log(data) });
    // this.roomList = this.roomService.getRooms();
    // console.log(this.headerComponent);
    // console.log(this.roomService.getRooms());
    this.roomService.getRooms$.subscribe((data) => {
      this.roomList = data;
    });

    this.roomService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received');
          break;
        case HttpEventType.DownloadProgress:
          this.totalBytes += event.loaded;
          console.log('Download in progress');
          break;
        case HttpEventType.Response:
          console.log(event.body);
          break;
        default:
          break;
      }
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
  editRoomNumber: number = 4;

  editRoom() {
    const edit: RoomList = {
      roomNumber: 3,
      roomType: "deluxe",
      amenities: "TV, WiFi, Breakfast",
      price: 4500,
      photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SIyWC7gKJIM_rPMXS-LbY5X2V4C8zXXfqw&usqp=CAU",
      checkInTime: new Date('2024-01-30T18:00:17'),
      checkOutTime: new Date('2024-01-31T08:16:48'),
      rating: 3.8
    };


    this.roomService.editRoom(edit, this.editRoomNumber).subscribe((data) => {
      console.log(data);
    });
  }

  addRoom() {
    const add: RoomList = {
      roomType: "Standard",
      amenities: "TV, WiFi, Breakfast",
      price: 2500,
      photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SIyWC7gKJIM_rPMXS-LbY5X2V4C8zXXfqw&usqp=CAU",
      checkInTime: new Date('2024-01-30T18:00:17'),
      checkOutTime: new Date('2024-01-31T08:16:48'),
      rating: 3.8
    };
    // this.roomList.push(add);
    // this.roomList = [...this.roomList, add];
    this.roomService.addRoom(add).subscribe((data) => {
      console.log(data);
    });
  }
}
