import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConverterComponent } from './components/converter/converter.component';
import { EuroGbpComponent } from './components/euro-gbp/euro-gbp.component';
import { EuroComponent } from './components/euro/euro.component';
import { HistoryComponent } from './components/history/history.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/converter',
    pathMatch: 'full',
  },
  { path: 'converter', component: ConverterComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'EUR-USD', component: EuroComponent },
  { path: 'EUR-GBP', component: EuroGbpComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
