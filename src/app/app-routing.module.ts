import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { FormComponentComponent } from './form-component/form-component.component';

const routes: Routes = [
  { path: '', redirectTo:'/home' , pathMatch:'full' },
  { path: 'home',      component: FormComponentComponent },
  { path: 'details',      component: DetailsComponent },
  { path: '**', redirectTo:'/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
