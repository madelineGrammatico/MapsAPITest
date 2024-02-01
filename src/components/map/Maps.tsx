
import {
    APIProvider,
    Map,
    // AdvancedMarker,
    // Pin,
    // InfoWindow
} from "@vis.gl/react-google-maps"


export default function Maps() {
    const position = {lat: 53.54, lng:10}
    return <APIProvider apiKey={import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY }>
        <div style={{height: "100vh", width:"100wh"}}>
        <Map zoom={9}center={position}></Map>
        </div> 
    </APIProvider>
}