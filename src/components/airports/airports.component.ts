import { Component, OnInit } from '@angular/core';
import { Airport } from './../../shared/entities/Airport';
import { AirportService } from './../../services/airports-service';

@Component({
    selector: 'app-airports',
    providers: [AirportService],
    templateUrl: './airports.component.html',
})
export class AirportsComponent implements OnInit {

    airportList: Airport[];
    errorMessage: any;
    countries: any[];
    selectedCountry = 'PL';

    constructor(private airportService: AirportService) {
    }

    ngOnInit(): void {
        this.loadAirportList('PL');

        this.countries = [
            { code: 'AD' },
            { code: 'AE' },
            { code: 'AF' },
            { code: 'AG' },
            { code: 'AI' },
            { code: 'AL' },
            { code: 'AM' },
            { code: 'AN' },
            { code: 'PL' },
        ];
    }

    selectCountry(isoCode: any) {
        this.loadAirportList(isoCode.code);
    }

    loadAirportList(isoCode: string) {
        this.airportList = null;
        this.airportService.loadAirportListByIso(isoCode)
            .subscribe(airports => {
                this.airportList = airports;
            },
                error => {
                    this.errorMessage = error;
                });
    }
}
