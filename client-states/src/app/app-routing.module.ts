import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatesListComponent } from './states-list/states-list.component';
import { StateDetailComponent } from './state-detail/state-detail.component';
 

const routes: Routes = [
  {path: '', redirectTo: 'states', pathMatch: 'full' },
  {path: 'states', component: StatesListComponent },
  {path: 'states/:id', component: StateDetailComponent },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
