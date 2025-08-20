import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgFor, NgIf } from "@angular/common";
import { TripService } from "../trip.service";
import { Trip } from "../trip.model";
import { TripCardComponent } from "../trip-card/trip-card";

@Component({
  selector: "app-trip-list",
  standalone: true,
  imports: [NgIf, NgFor, TripCardComponent],
  templateUrl: "./trip-list.html",
  styleUrls: ["./trip-list.css"]
})
export class TripListComponent implements OnInit {
  trips: Trip[] = [];
  loading = true;

  constructor(private svc: TripService, private router: Router) {}

  ngOnInit(): void { this.refresh(); }

  refresh() {
    this.svc.getAll().subscribe(data => {
      this.trips = data;
      this.loading = false;
    });
  }

  onAdd() { this.router.navigate(["/trips/add"]); }
  onEdit(id: string) { this.router.navigate(["/trips/edit", id]); }
}
