import { useState } from "react";

export default class UserDatas { 
    uid: string | undefined;

    firstname: any | undefined;
    lastname: any | undefined;

    email: any | undefined;

    agency: any | undefined
    
    setUID = (newUID: string) => { this.uid = newUID }
    getUID = () => { return this.uid }
    
    setFirstname = (newFirstname: any) => { this.firstname = newFirstname }
    getFirstname = () => { return this.firstname }

    setLastname = (newLastname: any) => { this.lastname = newLastname }
    getLastname = () => { return this.lastname }

    setEmail = (newEmail: any) => { this.email = newEmail }
    getEmail = () => { return this.email }

    setAgency = (newAgency: any) => { this.agency = newAgency }
    getAgency = () => { return this.agency }

}
