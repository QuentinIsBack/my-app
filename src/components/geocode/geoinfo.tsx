export const GetGeoInfo = (value: any) => {
    //console.log(suggestion.context)

    let postcode = ""
    let place = ""
    let region = ""
    let country = ""
    let neighborhood = ""

    Object.values(value).map((o:any)=>{
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

export const GetGeoInfoByCoord = async (value: number[]) => {
    try {
        const endpoint = `http://api.mapbox.com/geocoding/v5/mapbox.places/${value[0]},${value[1]}.json?access_token=sk.eyJ1IjoicXVlbnRpbnQiLCJhIjoiY2xkbnVpYXdwMGx5bDQxbjAycWRwZHRsNSJ9.5HBkylnszqE9SpwbZIEvKg&limit=1`;
        const response = await fetch(endpoint);
        const results = await response.json();

        console.log(results?.features[0])
        return results?.features[0].context
    } catch (error) {
        console.log("Error fetching data, ", error);
    }
}