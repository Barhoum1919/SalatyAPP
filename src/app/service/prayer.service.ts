import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrayerService {

  private baseUrl = 'http://api.aladhan.com/v1/timingsByCity';

  constructor(private http: HttpClient) { }

  getPrayer(cityName: string, countryName: string,date:string): Observable<any> {
    const url = `${this.baseUrl}/${date}?city=${cityName}&country=${countryName}`;
    return this.http.get(url);
  }
}
