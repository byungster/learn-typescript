export interface Country {
    Country: string;
    CountryCode: string;
    Date: string;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    Premium: any;
    Slug: string;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
}

export interface Global {
    NewConfirmed: number;
    NewDeath: number;
    NewRecovered: number;
    TotalConfirmed: number;
    TotalDeath: number;
    TotalRecovered: number;
}

export interface CovidSummaryResponse {
    Countries: Country[];
    Date: string;
    Global: Global;
    Message: string;
}
  
export interface CountrySummaryInfo {
    Cases: string;
    City: string;
    CityCode: string;
    Country: string;
    CountryCode: string;
    Date: string;
    Lat: string;
    Lon: string;
    Province: string;
    Status: string;
}

export type CountrySummaryResponse = CountrySummaryInfo[];