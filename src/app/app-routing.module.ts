import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/authModule').then((m) => m.AuthModuleModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./auth/authModule').then((m) => m.AuthModuleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
