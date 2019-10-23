export class Airport {
    public AirportId: number;
    public Iata: string;
    public Lon: number;
    public Lat: number;
    public Iso: string;
    public Status: number;
    public Name: string;
    public Continent: string;
    public Type: string;
    public Size: string;
    public DateCreated: string;
    public DateModified: string;
    public ModifiedBy: string;

    constructor(options?: {
        AirportId?: number;
        Iata?: string;
        Lon?: number;
        Lat?: number;
        Iso?: string;
        Status?: number;
        Name?: string;
        Continent?: string;
        Type?: string;
        Size?: string;
        DateCreated?: string;
        DateModified?: string;
        ModifiedBy?: string;
    }) {
        if (options) {
            this.AirportId = options.AirportId;
            this.Iata = options.Iata;
            this.Lon = options.Lon;
            this.Lat = options.Lat;
            this.Iso = options.Iso;
            this.Status = options.Status;
            this.Name = options.Name;
            this.Continent = options.Continent;
            this.Type = options.Type;
            this.Size = options.Size;
            this.DateCreated = options.DateCreated;
            this.DateModified = options.DateModified;
            this.ModifiedBy = options.ModifiedBy;
        }
    }
}