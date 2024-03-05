import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  role = 'admin';

  constructor(@Optional() private loggerService: LoggerService) {

  }

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    this.loggerService?.log('App component initialized');
    this.name.nativeElement.innetText = 'Hotel Inventory App';
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.noOfRooms = 20;
  // }

}
