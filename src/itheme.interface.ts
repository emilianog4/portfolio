export interface IthemeProperties {
    lightColor: string;
    lightText: string;
}

export interface Itheme{
    default: IthemeProperties;
    dark?: IthemeProperties;
}