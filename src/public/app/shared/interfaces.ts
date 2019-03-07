import { ModuleWithProviders } from '@angular/core';

export interface ICustomer {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state?: IState;
    stateId?: number;
    zip: number;
    gender: string;
    orderCount?: number;
    orders?: IOrder[];
    orderTotal?: number;
}

export interface IState {
    abbreviation: string;
    name: string;
}

export interface IOrder {
    product: string;
    price: number;
    quantity: number;
    orderTotal?: number;
}

export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface ICustomerResponse {
    customer: ICustomer;
    status: boolean;
    error: string;
}

export interface INews{
    timestamp: Date;
    headline: string;
    text: string;
}

export interface IFlight{
    model: string;
    MSN: number;
    harnessLen : number;
    grossWt: number;
    atmPress: number;
    roomTemp: number;
    airport: string;
    fuelCapLt: number;
    fuelCapRt: number;
    fuelQtyLt: number;
    fuelQtyRt: number;
    maxAlt: number;
    fltNo: string;
}