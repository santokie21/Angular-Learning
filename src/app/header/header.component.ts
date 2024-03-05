import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/rooms.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
