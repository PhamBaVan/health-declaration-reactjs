export interface VietnamProvince{
    [key: string] : {
        name: string;
        cities: {
            [key: string]: string;
        }
    }
}