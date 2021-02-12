import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrutasListComponent } from './components/frutas-list/frutas-list.component';
import { FrutaDetailsComponent } from './components/fruta-details/fruta-details.component';
import { AddFrutaComponent } from './components/add-fruta/add-fruta.component';


const routes: Routes = [
  { path: '', redirectTo: 'frutas', pathMatch: 'full' },
  { path: 'frutas', component: FrutasListComponent },
  { path: 'frutas/:id', component: FrutaDetailsComponent },
  { path: 'add', component: AddFrutaComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
