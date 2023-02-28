import React, { useState } from "react";
import AgencyDataServices from "../services/AgencyData.services";
import HostDataServices from "../services/HostData.services";
import HostDatas from "./Host.data";
import UserDatas from "./User.data";

interface IPerms {
    basic: any[],
    ads: any[],
    guest: any[],
    price: any[],
    finance: any[],
    team: any[],
}

export default class AgencyDatas {  
    uid: any;

    title: string | undefined;
    description: any | undefined;

    members: UserDatas[] | undefined;
    owner: any | undefined;

    permissions!: IPerms;

    hosts!: HostDatas[]

    

    setUID = (newUID: any) => { this.uid = newUID }
    getUID = () => { return this.uid }
    

    setTitle = (newTitle: any) => { this.title = newTitle }
    updateTitle = (newTitle: any) => { AgencyDataServices.update(this.uid, { title: newTitle }) }
    getTitle = () => { return this.title }


    setDescription = (newDescription: any) => { this.description = newDescription }
    updateDescription = (newDescription: any) => { AgencyDataServices.update(this.uid, { description: newDescription }) }
    getDescription = () => { return this.description }


    setMembers = (newMembecrs: any) => { this.members = newMembecrs }
    getMembers = () => { return this.members }


    setOwner = (newOwner: any) => { this.owner = newOwner }
    getOwner = () => { return this.owner }


    setPermissions = (newPermissions: any) => { this.permissions = newPermissions }
    getPermissions = () => { return this.permissions }


    createHost = async (newDoc: any) => { return await HostDataServices.add(newDoc) }
    setHosts = (nenwD: any) => { this.hosts = nenwD }
    getHosts = () => { return this.hosts }
}
