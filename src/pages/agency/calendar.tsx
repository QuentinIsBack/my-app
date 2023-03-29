import { PageBuilder } from "../../components/pagebuilder/pagebuilder";
import { NavBar } from '../../components/navbar/navbar-agency'
import { useState } from "react";
import moment from "moment";
import 'moment/locale/fr'  // without this line it didn't work

function App() {
   const [selectDate, setSelectDate] = useState(moment());
   const [selectDateAdd, setSelectDateAdd] = useState(moment().add(1, "days"));
   const [day, setDate] = useState(moment().format("D"));

   const month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septemnbre", "Octobre", "Novembre", "Décembre"]

    return (  
        <PageBuilder title="Calendrier" show={true} navbar={<NavBar />} footer={undefined}>
            <>
               <div className="flex flex-row w-full h-full">
                  <div className="w-20rem h-full border-r">

                  </div>
                  <div className="w-full h-full">
                     <div className="h-3rem w-full grid grid-cols-12 divide-x border-b">
                           {month.map((m)=>(
                              <div className="flex justify-center items-center font-semibold text-base">{m}</div>
                           ))}
                     </div>
                     <div className="">

                     </div>
                  </div>
            </div>
            </>
        </PageBuilder>
    );
}
function strUcFirst(a: string){
   return (a+'').charAt(0).toUpperCase()+a.substr(1);
}

export default App;
