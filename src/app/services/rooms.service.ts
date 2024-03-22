import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { AppConfig } from '../appConfig/appConfig.interface';
import { RoomList } from '../rooms/rooms';
import { appServiceConfig } from './../appConfig/appConfig.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  rooms: RoomList[] = [];


  getRooms$ = this.http.get<RoomList[]>('/api/rooms', {
    // headers: new HttpHeaders({ "token": "aw5d4a3w5d135rdgz3x84" })
  }).pipe(
    shareReplay(1)
  );

  constructor(@Inject(appServiceConfig) private config: AppConfig,
    private http: HttpClient) {
    // console.log(this.config.apiEndPoint);
    0
    // console.log("Room Service is called");
  }

  getRooms() {

    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<string>('/api/rooms', room);
  }

  editRoom(room: RoomList, id: number) {
    return this.http.put<string>(`/api/rooms/${id}`, room);
  }

  getPhotos() {
    const req = new HttpRequest(
      'GET', "https://jsonplaceholder.typicode.com/photos",
      {
        reportProgress: true
      }
    );
    return this.http.request(req);
  }
}
