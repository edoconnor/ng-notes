import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../state';
import { StateService } from '../state.service';

@Component({
  selector: 'app-states-list',
  templateUrl: './states-list.component.html',
  styleUrls: ['./states-list.component.css']
})

export class StatesListComponent implements OnInit {
  states$: Observable<State[]> = new Observable();

  constructor(private statesService: StateService) {}

  ngOnInit(): void {
    this.fetchStates();
  }

  deleteState(id: string): void {
    this.statesService.deleteState(id).subscribe({
      next: () => this.fetchStates(),
    });
  }

  private fetchStates(): void {
    this.states$ = this.statesService.getStates();
  }
}
