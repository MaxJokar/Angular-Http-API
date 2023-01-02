import { Address } from "./address";
import { Company } from "./company";


export interface User {
    id? : number; //whenever we map some data to this shape we dont have an id , just to solve issue
    name: string;
    username: string;
    email: string;
    address?: Address;
    image?: string;
    phone: string;
    website?: string;
    company?: Company;

}  //6
