import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { EventItem } from '../Models/EventItem';



@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient
  ) {}

  getEvents(): Observable<EventItem[]> {
    return this.http.get<EventItem[]>(`${environment.apiBaseUrl}event/EventList`);
  }

  uploadEventImage(payload: FormData): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}ServiceProviders/documents`, payload);
  }
}