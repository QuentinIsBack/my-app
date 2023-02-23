import { useState } from "react";

export default class AgencyDatas { 
    uid: any | undefined;

    title: string | undefined;
    description: string | undefined;


    setUID = (newUID: any) => { this.uid = newUID }
    getUID = () => { return this.uid }
    
    setTitle = (newTitle: any) => { this.title = newTitle }
    getTitle = () => { return this.title }

    setDescription = (newDescription: any) => { this.description = newDescription }
    getDescription = () => { return this.description }
}
