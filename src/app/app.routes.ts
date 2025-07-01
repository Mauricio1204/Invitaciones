import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'boda-1/:cliente',
    loadChildren: () =>
      import('./templates/boda-1/boda-1/boda-1.module').then(m => m.Boda1Module)
  },
  { path: '', redirectTo: 'boda-1/default', pathMatch: 'full' },
  { path: '**', redirectTo: 'boda-1/default' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
