import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportsComponent } from './../components/airports/airports.component';
// admin panel


const routes: Routes = [
    // matching path
    { path: 'home', component: AirportsComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '/home' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
