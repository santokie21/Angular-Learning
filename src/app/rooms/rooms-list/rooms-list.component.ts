import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

  availableRooms: number = 10;

  @Input() rooms: RoomList[] = [];

  @Input() title: string = "";

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() { }
  ngOnDestroy(): void {
    console.log("On Destroy is called");

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {
  }
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

}
