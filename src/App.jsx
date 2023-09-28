import React, { useState } from "react";
import styles from "./App.module.css";
import * as XLSX from 'xlsx';
import Header from "./components/Header";
import MapContainer from "./components/MapContainer";
import Map2 from "./components/Map2";

import exemplo from './assets/exemplo.png';
import Footer from "./components/Footer";

export default function App() {
  const [jsonData, setJsonData] = useState([]);

  const handleFileUpload = (e) => {

    const file = e.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0]; // Assumindo que você está interessado na primeira planilha
  
        const sheet = workbook.Sheets[sheetName];
        const dataJson = XLSX.utils.sheet_to_json(sheet);
  
        setJsonData(dataJson);
      };
  
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

      <div className={styles.mainHeader}>
          <div className={styles.inputMap}>
            <a href="https://docs.google.com/spreadsheets/d/1H98aKoO_-NBN-bnEsO6YjjXLexJ4KERk/edit?usp=drive_link&ouid=109370909611652809334&rtpof=true&sd=true">Planilha modelo</a>
            <label>
              Upload do arquivo
            </label>
            <input
              type="file" 
              accept=".xlsx" 
              onChange={handleFileUpload} 
            />
          </div>
          <div className={styles.infoMap}>
            <div>
              Crie um arquivo do excel (.XLSX) como no exemplo abaixo, observe os nomes das colunas:
            </div>

            <img
              src={exemplo}
              alt="Descrição da imagem"
              // width="300" // Largura da imagem (opcional)
              // height="200" // Altura da imagem (opcional)
            />
          </div>
        </div>
      
        <div className={styles.mainContent}>
          <MapContainer data={jsonData} />
          {/* <Map2 /> */}
        </div>

      </div>

      <Footer />
    </div>
  );
}