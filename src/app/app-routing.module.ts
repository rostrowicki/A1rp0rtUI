import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportsComponent } from './../components/airports/airports.component';
import { AirportsEditComponent } from './../components/airports/airports-edit.component';
// admin panel


const routes: Routes = [
    // matching path
    { path: 'home', component: AirportsComponent },
    { path: 'home/:iso', component: AirportsComponent },
    { path: 'add', component: AirportsEditComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '/home' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
