import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';
import iconCar from '../assets/icon_car.png';

const customIcon = new L.Icon({
  iconUrl: iconCar, // Substitua pelo caminho para o seu ícone personalizado
  iconSize: [32, 32], // Defina o tamanho do ícone
  iconAnchor: [16, 32], // Defina o ponto de ancoragem do ícone (geralmente metade da largura e a altura total)
});

const themes = {
  dark: {
    urlTemplate:
      'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
    options: {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    },
  },
  standard: {
    urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    options: {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
  },
};

const Map2 = (data) => {
  const arrayDeArrays = [];
  
  for (let i = 1; i < data.length; i++) {
    arrayDeArrays.push([data[i].latitude, data[i].longitude, data[i].intensidade]);
  }
  
  // useEffect(() => {
  //   // Inicia o map
  //   const map = L.map('map').setView([-9.427125, -40.506872], 13);
  
  //   const heatData = arrayDeArrays;

  //   console.log(heatData)
  
  //   // Defina a paleta de cores para vermelho (de amarelo para vermelho)
  //   const gradient = {
  //     0.1: 'yellow', // Cor mais clara (intensidade baixa)
  //     1.0: 'red',    // Cor mais escura (intensidade alta)
  //   };
  
  //   const heatLayer = L.heatLayer(heatData, {
  //     radius: 25, // Raio de influência do kernel
  //     blur: 10,   // Desfoque do kernel
  //     maxZoom: 19, // Zoom máximo onde o heatmap é exibido
  //     gradient: gradient, // Defina a paleta de cores
  //   }).addTo(map);
  
  //   // Adiciona uma tile layer ao mapa
  //   L.tileLayer(themes.standard.urlTemplate, themes.standard.options).addTo(
  //     map
  //   );
  
  //   return () => {
  //     map.remove();
  //   };
  // }, [data]);

  return (
    <MapContainer 
        center={[-9.427125, -40.506872]} 
        zoom={13} 
        style={{ height: '80vh', width: '80vw' }}
        scrollWheelZoom={true}
    >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* {dataMarker.latitude === undefined || dataMarker.longitude === undefined ? null :
          <Marker 
            position={position}
            icon={customIcon}
          >
          <Popup>
              Ford/Ka
              QLS7I74 
              {data.dados['timestamp']}
          </Popup>
          </Marker>
        } */}
    </MapContainer>
  )
}

export default Map2

