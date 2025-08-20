import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Trip } from "./trip.model";

@Injectable({ providedIn: "root" })
export class TripService {
  private base = "/api/trips";   // proxied to backend

  constructor(private http: HttpClient) {}

  getAll(): Observable<Trip[]> { return this.http.get<Trip[]>(this.base); }
  getOne(id: string): Observable<Trip> { return this.http.get<Trip>(`${this.base}/${id}`); }
  create(trip: Trip): Observable<Trip> { return this.http.post<Trip>(this.base, trip); }
  update(id: string, trip: Trip): Observable<Trip> { return this.http.put<Trip>(`${this.base}/${id}`, trip); }
  remove(id: string): Observable<void> { return this.http.delete<void>(`${this.base}/${id}`); }
}
