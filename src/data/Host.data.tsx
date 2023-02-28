import { Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import AgencyDataServices from "../services/AgencyData.services";
import UserDatas from "./User.data";

function GoTo(url: string){
    const navigate = useNavigate();
    return navigate("/")
}

export default class HostDatas {  

    title: string | undefined;
    id: string | undefined;
    structure: string | undefined;
    
    date: Timestamp | undefined

    setTitle = (newData: string) => { this.title = newData }
    getTitle = () => { return this.title }

    setId = (newData: string) => { this.id = newData }
    getId = () => { return this.id }

    setStructure = (newData: string) => { this.structure = newData }
    getStructure = () => { return this.structure }

    setDate = (newData: Timestamp) => { this.date = newData }
    getDate = () => { return this.date }

    getForgetInformations = (navigate: NavigateFunction) => {
        if (this.structure == null || this.structure == "") {
            return navigate(`/agency/become-a-host/${this.getId()}/structure`);
        }
    }

}