import { Address } from "./address.model";
import { Gender } from "./gender.model";


export interface Student {
    id: string,
    firstName: string,
    lastName: string,
    mobile: number,
    email: string,
    dateOfBirth: string,
    profileImgUrl: string,
    genderId: string,
    address: Address,
    gender: Gender
}