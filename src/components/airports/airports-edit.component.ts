import { Component, OnInit } from '@angular/core';
import { Airport } from './../../shared/entities/Airport';
import { AirportService } from './../../services/airports-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-airports',
    providers: [AirportService],
    templateUrl: './airports-edit.component.html',
})
export class AirportsEditComponent implements OnInit {

    airport: Airport = new Airport();
    errorMessage: any;
    selectedCountry: string;

    statusDropdownValues: any[];

    constructor(private airportService: AirportService, private router: Router) {
    }

    ngOnInit(): void {
        this.statusDropdownValues = [
            {label: 'Inactive', value: '0'},
            {label: 'Active', value: '1'}
        ]
    }

    onBack() {
        this.router.navigateByUrl('/home');
    }

    onSave() {
        if (this.isValid(this.airport)) {
            if (!this.airport.AirportId) {
                this.airportService.addAirport(this.airport).subscribe(data => {
                    console.log('Record has been added to the database.');
                    // redirect to the list
                    this.router.navigateByUrl('/home/' + this.airport.Iso);
                },
                    error => {
                        // TODO display message in UI
                        console.log('Error: ' + error);
                        this.errorMessage = error;
                    });
            } else {
                this.airportService.updateAirport(this.airport).subscribe(data => {
                    // TODO display message in UI
                    console.log('Record updated in the database.');
                },
                    error => {
                        // TODO display message in UI
                        console.log('Error: ' + error);
                        this.errorMessage = error;
                    });
            }
        }
    }

    isValid(airport: Airport): boolean {
        // TODO to be implemented (checks and feedback to the user)
        return true;
    }
}