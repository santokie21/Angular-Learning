import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LocalStorageToken } from "./services/localStorage.token";
import { LoggerService } from './services/logger.service';
import { InitService } from './services/init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  role = 'admin';

  constructor(@Optional() private loggerService: LoggerService,
    @Inject(LocalStorageToken) private localStorage: Storage,
    private initservice: InitService,
  ) {
    console.log(initservice.config);

  }

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    this.loggerService?.log('App component initialized');
    this.name.nativeElement.innetText = 'Hotel Inventory App';
    this.localStorage.setItem('name', 'santokie');
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.noOfRooms = 20;
  // }

}
