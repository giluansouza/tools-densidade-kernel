import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat/dist/leaflet-heat.js';

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

const MapContainer = ({ data }) => {
  const arrayDeArrays = [];
  
  for (let i = 1; i < data.length; i++) {
    arrayDeArrays.push([data[i].latitude, data[i].longitude, data[i].intensidade]);
  }
  
  useEffect(() => {
    // Inicia o map
    const map = L.map('map').setView([-9.427125, -40.506872], 13);
  
    const heatData = arrayDeArrays;

    // Defina a paleta de cores para vermelho (de amarelo para vermelho)
    const gradient = {
      0.1: 'red', // Cor mais clara (intensidade baixa)
      1.0: 'red',    // Cor mais escura (intensidade alta)
    };
  
    const heatLayer = L.heatLayer(heatData, {
      radius: 25, // Raio de influência do kernel
      blur: 10,   // Desfoque do kernel
      maxZoom: 19, // Zoom máximo onde o heatmap é exibido
      gradient: gradient, // Defina a paleta de cores
    }).addTo(map);
  
    // Adiciona uma tile layer ao mapa
    L.tileLayer(themes.standard.urlTemplate, themes.standard.options).addTo(
      map
    );
  
    return () => {
      map.remove();
    };
  }, [data]);

  return (
      <div id='map' style={{ height: '80vh', width: '80vw', alignContent: 'center' }}></div>
  );
};

export default MapContainer;
