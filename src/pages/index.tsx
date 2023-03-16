import { PageBuilder } from "../components/pagebuilder/pagebuilder";

import {NavBar} from '../components/navbar/navbar-home'
import { useEffect, useState } from "react";
import HostDataServices from "../services/HostData.services";
import { where } from "firebase/firestore";
import HostDatas from "../data/Host.data";

function App() { 
  const [show, setShow] = useState(false);

  const [homes, setHomes] = useState<HostDatas[]>()

  useEffect(() => {
      HostDataServices.getAll(where("status", "==", "publish"))
          .then((querySnapshot) => {
            const hosts: HostDatas[] = []
              querySnapshot.docs.map(async (docH) => {
                const newHost = new HostDatas();
                newHost.setTitle(docH.data().title)
                newHost.setStructure(docH.data().structure)
                newHost.setPropertyType(docH.data().property_type)
                newHost.setPrivacyType(docH.data().privacy_type)
                newHost.setId(docH.id)
                newHost.setPrice(docH.data().price)
                newHost.setAgency(docH.data().agency)
                hosts.push(newHost)
              })
              setHomes(hosts)
              setShow(true)
          })
  }, [])

  return (
    <PageBuilder title="Accueil" show={true} navbar={<NavBar />} footer={undefined} >
      {show ? 
        <>
          {homes && homes.map((plan: HostDatas) => (
            <button className="overflow-hidden w-20rem">
                <button className="rounded-2xl aspect-square bg-gray-100 w-full bg-center bg-cover" style={{ backgroundImage: `url(${""})` }} />
                <div className="pt-2.5 text-left">
                    <div className="font-medium text-base">{plan.getPropertyType()?.title} - {plan.getStructure()?.title}</div>
                  <div className="font-normal text-sm text-stone-500">{plan.getAgency() ? "Agence" : "Particulié"}</div>
                    <div className="font-normal text-sm text-stone-500">12-16 févr.</div>
                    <div className="pt-1 flex flex-row space-x-1.5">
                        <div className="font-medium text-sm text-supergray">{plan.getPrice()} €</div>
                        <div className="font-normal text-sm text-supergray">par mois</div>
                    </div>
                </div>
            </button>
          ))}
        </>
      :
        <>
          Aucuns logements disponibles
        </>  
      }
    </PageBuilder>
  );
}

export default App;
