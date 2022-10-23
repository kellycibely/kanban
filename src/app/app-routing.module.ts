import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardContainerComponent } from './pages/board-container/board-container.component';

const routes: Routes = [
  { path:'', component:BoardContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
