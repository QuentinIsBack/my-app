import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HostDatas from "../data/Host.data";

type PageType = {
    hosts: HostDatas,
}
export const Stepper = ({
    hosts,
}: PageType) => {
    const navigate = useNavigate();
    const step = useState()

    if (hosts.getStructure() == undefined) {
        return navigate(`/${hosts.getId()}/structure`);
    }
    if (hosts.getPropertyType() == undefined) {
        return navigate(`/${hosts.getId()}/property-type`);
    }
    if (hosts.getPrivacyType() == undefined) {
        return navigate(`/${hosts.getId()}/privacy-type`);
    }
    return navigate(`/${hosts.getId()}/amenities`);
}