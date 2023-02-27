import React, { useState } from "react";
import AgencyDataServices from "../services/AgencyData.services";
import UserDatas from "./User.data";

interface IStructure {
    structure: any[],

}

export default class HostDatas {  
    structure!: IStructure;
}
