export interface Movies {
    docs:  Doc[];
    total: number;
    limit: number;
    page:  number;
    pages: number;
}

export interface Doc {
    id:               number;
    type:             Type;
    externalId:       ExternalID;
    name:             string;
    rating:           Rating;
    description:      string;
    votes:            Rating;
    year:             number;
    poster:           Poster;
    genres:           Country[];
    countries:        Country[];
    alternativeName:  null | string;
    enName:           null | string;
    movieLength:      null;
    names:            Name[];
    shortDescription: null | string;
    logo:             Logo;
    watchability:     Watchability;
    releaseYears:     ReleaseYear[];
    color?:           string;
}

export interface Country {
    name: string;
}

export interface ExternalID {
    kpHD: null | string;
    imdb: string;
    tmdb: number;
}

export interface Logo {
    url: null | string;
}

export interface Name {
    name:      string;
    language?: string;
    type?:     null | string;
}

export interface Poster {
    url:        string;
    previewUrl: string;
}

export interface Rating {
    kp:                 number;
    imdb:               number;
    filmCritics:        number;
    russianFilmCritics: number;
    await:              number | null;
}

export interface ReleaseYear {
    start: number;
    end:   number | null;
}

export enum Type {
    TvSeries = "tv-series",
}

export interface Watchability {
    items: Item[] | null;
}

export interface Item {
    name: string;
    logo: Logo;
    url:  string;
}
