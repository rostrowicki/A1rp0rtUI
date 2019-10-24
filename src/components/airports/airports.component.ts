import { Component, OnInit } from '@angular/core';
import { Airport } from './../../shared/entities/Airport';
import { AirportService } from './../../services/airports-service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

    constructor(private airportService: AirportService, private router: Router, private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit(): void {
        this.selectedCountry = this.route.snapshot.paramMap.get('iso') || 'PL';
        this.loadAirportList();

        // TODO init as DISTINCT from database
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
        // update URL
        const url = this
            .router
            .createUrlTree([isoCode.code], { relativeTo: this.route })
            .toString();
        this.location.go(url);
        // switch view
        this.selectedCountry = isoCode.code;
        this.loadAirportList();
    }

    loadAirportList() {
        this.airportList = null;
        this.airportService.loadAirportListByIso(this.selectedCountry)
            .subscribe(airports => {
                this.airportList = airports;
            },
                error => {
                    this.errorMessage = error;
                });
    }

    onNew() {
        this.router.navigateByUrl('/add');
    }
}
