import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TripService {
  private apiUrl = "http://localhost:3000/api/trips";

  constructor(private http: HttpClient) {}

  getTrips(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
