import React, { useState } from "react";
import AgencyDataServices from "../services/AgencyData.services";

export default class AgencyDatas {  

    uid: any | undefined;

    title: string | undefined;
    description: any | undefined;

    members: string[] | undefined;


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

}
