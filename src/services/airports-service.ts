import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Airport } from './../shared/entities/Airport';

@Injectable()
export class AirportService {
    constructor(private _httpClient: HttpClient) {

    }

    addAirport(airport: Airport): Observable<any> {
        const url = 'https://localhost:5001/api/airports/';
        const options = this.getHttpOptions(true);
        const Result$ = this._httpClient
            .put<Airport>(url, JSON.stringify(airport), options)
            .catch(this.handleError);
        return Result$;
    }

    updateAirport(airport: Airport): Observable<any> {
        const url = 'https://localhost:5001/api/airports/';
        const options = this.getHttpOptions(true);
        const Result$ = this._httpClient
            .post<Airport>(url, JSON.stringify(airport), options)
            .catch(this.handleError);
        return Result$;
    }

    loadAirportListByIso(iso: string): Observable<any[]> {
        const url = 'https://localhost:5001/api/airports/' + iso;
        const options = this.getHttpOptions();
        const Result$ = this._httpClient
            .get<Airport[]>(url, options)
            .catch(this.handleError);
        return Result$;
    }

    refreshAirportList(): Observable<any> {
        const url = 'https://localhost:5001/api/airports/refresh';
        const options = this.getHttpOptions();
        const Result$ = this._httpClient
            .get<number>(url, options)
            .map(mapAirport)
            .catch(this.handleError);
        return Result$;
    }

    private handleError(error: any) {
        const errorMsg = error.message || 'Unexpected error!';
        return Observable.throw(errorMsg);
    }

    private getHttpOptions(post?: boolean) {
        const headers = (post) ? this.getHttpPostHeaders() : this.getHttpHeaders();
        const options = {
            headers: headers
        };
        return options;
    }

    private getHttpHeaders() {
        return new HttpHeaders({
            'Accept': 'application/json; charset=UTF-8',
        });
    }

    private getHttpPostHeaders() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
        });
    }
}

function mapAirport(response: any): Airport[] {
    return response.map(toAirport);
}

function toAirport(r: any): Airport {
    const s = <Airport>{
        AirportId: r.airportId,
        Iata: r.iata,
        Lon: r.lon,
        Lat: r.lat,
        Iso: r.iso,
        Status: r.status,
        Name: r.name,
        Continent: r.continent,
        Type: r.type,
        Size: r.size,
        DateCreated: r.dateCreated,
        DateModified: r.dateModified,
        ModifiedBy: r.modifiedBy,
    };
    return s;
}