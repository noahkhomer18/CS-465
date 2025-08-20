import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TripService } from "../trip.service";
import { Trip } from "../trip.model";

@Component({
  selector: "app-trip-form",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./trip-form.html",
  styleUrls: ["./trip-form.css"]
})
export class TripFormComponent implements OnInit {
  form!: FormGroup;   // declare only

  editingId?: string;

  constructor(
    private fb: FormBuilder,
    private svc: TripService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // initialize the form here (fb is available now)
    this.form = this.fb.group({
      code: [''],
      name: [''],
      length: [0],
      start: [''],
      resort: [''],
      perPerson: [0],
      image: [''],
      description: ['']
    });

    this.editingId = this.route.snapshot.paramMap.get("id") ?? undefined;
    if (this.editingId) {
      this.svc.getOne(this.editingId).subscribe(t => this.form.patchValue(t));
    }
  }

  save() {
    const dto = this.form.value as Trip;
    const req = this.editingId
      ? this.svc.update(this.editingId, dto)
      : this.svc.create(dto);

    req.subscribe(() => this.router.navigate(["/trips"]));
  }
}
