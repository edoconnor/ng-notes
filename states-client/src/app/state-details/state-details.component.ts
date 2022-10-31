import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { State } from '../state';
import { StateService } from '../state.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.css'],
})
export class StateDetailsComponent implements OnInit {
  state!: State;
  constructor(
    private route: ActivatedRoute,
    private stateService: StateService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getState();
  }
  getState() {
    const id = this.route.snapshot.paramMap.get('id');
    id && this.stateService.getState(id).subscribe((state) => (this.state = state));
  }
}