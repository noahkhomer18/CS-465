import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NgIf } from "@angular/common";
import { Trip } from "../trip.model";
import { TripService } from "../trip.service";

@Component({
  selector: "app-trip-card",
  standalone: true,
  imports: [NgIf],
  templateUrl: "./trip-card.html",
  styleUrls: ["./trip-card.css"]
})
export class TripCardComponent {
  @Input() trip!: Trip;
  @Output() edit = new EventEmitter<void>();
  @Output() deleted = new EventEmitter<void>();

  constructor(private svc: TripService) {}

  onEdit() { this.edit.emit(); }

  onDelete() {
    if (this.trip._id && confirm("Delete this trip?")) {
      this.svc.remove(this.trip._id).subscribe(() => this.deleted.emit());
    }
  }
}
