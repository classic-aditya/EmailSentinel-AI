import {MapContainer , TileLayer , Marker , Popup} from 'react-leaflet';

function OriginMap({lat ,lng, label}){
    return (
        <MapContainer
        center={[lat,lng]}
        zoom={5}
        style={{height:'220px',width:'100%',borderRadius:'8px'}}
        >
            <TileLayer 
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; openstreetmap contributors'
            />
            <Marker position={[lat,lng]}>
                <Popup>{label}</Popup>
            </Marker>
        </MapContainer>
    )
}
export default OriginMap;