import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { AccuracyComponent } from './accuracy/accuracy.component';
import { FDNComponent } from './fdn/fdn.component';

const routes: Routes = [
  { path: '', component: AccuracyComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'FDN', component: FDNComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
