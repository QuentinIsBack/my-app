import { useCallback, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MapGL, {Layer, MapRef, Marker, Source} from 'react-map-gl';

import { BecomeBuilder } from "../../components/pagebuilder/becomeahost";
import { PageBuilder } from "../../components/pagebuilder/pagebuilder";
import Icon from "../../components/icon/icons";
import HostDataServices from "../../services/HostData.services";

function App() {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
 
    const clickBack = () => { 
        navigate(`/${id}/price`)
    }
    const clickNext = () => {
        HostDataServices.update(id as string, { "basic.location": selected.suggestion.center })
        //navigate(`/${id}/description`)
    } 

    const MAPBOX_TOKEN = 'pk.eyJ1IjoicXVlbnRpbnQiLCJhIjoiY2w4dGM5a3UwMDYwbTNvcXRsbWQyZXRtMSJ9.2IieorABrDO3bK9baO6vvg'

    const [adresse, setAdresse] = useState(false);

    const [selected, setSelected] = useState<any>()

    const address = useInput("");

    const mapRef = useRef<any>();
    const onSelectCity = useCallback(({suggestion}:any) => {
        mapRef.current?.flyTo({center: [suggestion.center[0], suggestion.center[1]+0.00075], zoom: 17, duration: 2000});
        setSelected(suggestion)
    }, []);


    const geojson = {
        type: 'FeatureCollection',
        features: [
          {type: 'Feature', geometry: {type: 'Point', coordinates: selected && selected.suggestion.center}}
        ]
    };

    const geojson2 = {
    type: 'FeatureCollection',
    features: [
        {type: 'Feature', geometry: {type: 'Point', coordinates: selected && selected.suggestion.center}}
    ]
    };

    const layerStyle = {
    id: 'point1',
    type: 'circle',
    paint: {
        'circle-radius': 25,
        'circle-color': '#F08080'
    }
    };

    const layerStyle2 = {
    id: 'point2',
    type: 'circle',
    paint: {
        'circle-radius': 100,
        'circle-color': '#F08080',
        'circle-opacity': 0.3

    },
    };

    return (
        <PageBuilder show={true} title={"À présent, fixez votre prix"} >
            <>
                <BecomeBuilder information={`À présent, fixez votre prix`}
                    clickBack={clickBack}
                    clickNext={clickNext}
                    lockedNext={false}
                    show={show}
                >
                    <>
                        <div className="w-full overflow-hidden relative top-0 bottom-0">

                            <MapGL
                                mapboxAccessToken={MAPBOX_TOKEN}
                                ref={mapRef}
                                initialViewState={{
                                    longitude: 2.333333,
                                    latitude: 48.866667,
                                    zoom: 11,
                                }}
                                dragRotate={false}
                                
                                mapStyle="mapbox://styles/quentint/cl8tcc2h2007o14qgzjwt7f1q"
                            >

                            {selected &&
                                <>
                                    <Source id="my-datia" type="geojson" data={geojson2 as any}>
                                        <Layer {...layerStyle2 as any} />
                                    </Source>

                                    <Source id="my-data" type="geojson" data={geojson as any}>
                                        <Layer {...layerStyle as any} />
                                    </Source>
                                </>
                            }

        
                            </MapGL>

                            <div className="absolute w-full h-fit flex flex-col items-center top-32 duration-150">
                                {!selected ? 
                                    <div className={`shadow-xl ${address.suggestions?.length > 0 ? "bg-white rounded-t-xl" : "bg-transparent rounded-full"} w-3/5 h-fit`}>
                                        <div className={`bg-white relative w-full flex flex-row space-x-6 items-center h-16 px-6 ${address.suggestions?.length > 0 ? "rounded-t-xl ring-2 ring-black rounded-xl" : "rounded-full ring-1 ring-gray-100"} focus-within:rounded-xl focus-within:ring-2 focus-within:ring-black `}>
                                            <div>
                                                <Icon name="FaMapMarkerAlt" size={25} />
                                            </div>
                                            <div className="w-full">
                                                <input {...address} className="w-full focus:outline-none text-base font-medium text-supergray" placeholder="Saissisez votre adresse" />
                                            </div>                         
                                        </div>
                                    </div>
                                :
                                    <div className={`shadow-xl bg-white rounded-xl w-3/5 h-fit`}>
                                        <div className="relative m-auto h-14 w-full">
                                            <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
                                                <button className="rounded-full hover:bg-gray-100 p-1" onClick={()=>{setSelected(''); address.setValue('')}}>
                                                    <Icon name="IoClose" size={20} />
                                                </button>
                                            </div>
                                            <div className="absolute text-center text-base text-supergray font-semibold top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                                Confirmez votre adresse
                                            </div>
                                        </div>
                                        <div className="border-b w-full" />
                                        <div className="flex flex-col space-y-6 p-4">
                                            <div>
                                                <div className="flex flex-row justify-between space-x-6 items-center">
                                                    <div className='font-semibold text-base text-night'>Affichez l'emplacement précis de votre logement</div>
                                                    <div className="flex justify-center items-center">
                                                        <div className="w-14 h-7 flex items-center bg-gray-300 rounded-full mx-3 px-1 bg-blue-500">
                                                            <div className="bg-white w-5 h-5 rounded-full shadow-md transform translate-x-7"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                   
                                                <div className='font-normal text-sm text-stone-500'>Indiquez plus clairement aux voyageurs l'emplacement de votre logement.</div>
                                                <div className='font-normal text-sm text-stone-500 underline'>Nous ne communiquerons jamais votre adresse aux voyageurs avant qu'ils aient réservé</div>
                                            </div> 
                                            <button className="duration-150 hover:bg-black bg-supergray rounded-xl px-6 py-3 font-medium text-base text-white w-fit">Parfait</button>
                                        </div>
                                       
                                    </div>
                                }

                                {address.suggestions?.length > 0 && (
                                    <div className='bg-white shadow-xl w-3/5 h-fit py-4 rounded-b-xl'>
                                        
                                        {address.suggestions.map((suggestion:any, index:any) => {
                                            console.log(suggestion.center)
                                            return (
                                                <button className='px-4 w-full flex items-center h-4rem hover:bg-gray-100' key={index} onClick={() => { address.setValue(suggestion.place_name); onSelectCity({suggestion}); setSelected({suggestion}); address.setSuggestions([]);  }} >
                                                    <div className='flex flex-col'>
                                                        <div className="text-left text-supergray font-medium text-base">{suggestion.address && suggestion.address} {suggestion.text && suggestion.text}</div>
                                                        <div className="text-left text-supergray font-normal text-sm">{getCity(suggestion.context).place}</div>                                                    
                                                    </div>
                                                </button>
                                            );
                                        })}
                                        <div className='px-4 pt-3 underline font-medium text-sm text-black'>Saisissez votre adresse manuellement</div>
                                    </div>
                                    )}

                            </div>

                    
                        </div>
                    </>
                </BecomeBuilder>
            </>
        </PageBuilder>
    );
}
export default App; 

    const getCity = (suggestion: any) => {
        //console.log(suggestion.context)

        let postcode = ""
        let place = ""
        let region = ""
        let country = ""
        let neighborhood = ""

        suggestion.map((o:any)=>{
            if(o.id.includes('postcode')){
                postcode = o.text
            }
            if(o.id.includes('place')){
                place = o.text
            }
            if(o.id.includes('region')){
                region = o.text
            }
            if(o.id.includes('country')){
                country = o.text
            }
            if(o.id.includes('neighborhood')){
                neighborhood = o.text
            }
        })

        return {
            postcode,
            place,
            region,
            country,
            neighborhood
        }
    }
  

const useInput = (initialValue: any) => {
    const [value, setValue] = useState(initialValue);
    const [suggestions, setSuggestions] = useState([]);
  
    const handleChange = async (event: any) => {
      setValue(event.target.value);
  
      try {
        const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=pk.eyJ1IjoicXVlbnRpbnQiLCJhIjoiY2w4dGM5a3UwMDYwbTNvcXRsbWQyZXRtMSJ9.2IieorABrDO3bK9baO6vvg&autocomplete=true&country=fr&types=address`;
        const response = await fetch(endpoint);
        const results = await response.json();
        setSuggestions(results?.features);
        //getCity(results?.features)
      } catch (error) {
        console.log("Error fetching data, ", error);
      }
    };
  
    return {
      value,
      onChange: handleChange,
      setValue,
      suggestions,
      setSuggestions
    };
};
  