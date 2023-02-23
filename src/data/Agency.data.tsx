import { useState } from "react";

export default class AgencyDatas { 
    uid: any | undefined;

    title: string | undefined;


    setUID = (newUID: any) => { this.uid = newUID }
    getUID = () => { return this.uid }
    
    setTitle = (newTitle: any) => { this.title = newTitle }
    getTitle = () => { return this.title }
}
