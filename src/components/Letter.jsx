import React from "react";
import jsPDF from "jspdf";
import { useLocation } from "react-router-dom";
import ReactDOM from 'react-dom';
import "./Letter.css";
import parse from 'html-react-parser';

const Letter = () => {
  const tdStyle = {
  	borderRight: '1px solid black', borderLeft: '1px solid black',
    minHeight: '250px'
};
const tableStyle = {
  border: '2px solid black',
  borderCollapse: 'collapse',
  minHeight: '250px',
  minWidth: '250px'
};

const np = 'UWAGI DODATKOE ORAZ WYKRYTE NIEPRAWIDLOWOSCI';

const students = [
  { id: 1, name: 'Tomek',  age: 22 },
  { id: 2, name: 'Adam', age: 43 },
  { id: 3, name: 'Marek', age: 16 },
  { id: 4, name: 'Jacek', age: 29 }
];
  const {
    DATA,
    GRUPA,
    SMSJMP,
    NS,
    AS,
    SGM,
    KS,
    KOiSJMP,
    text,
    KRAO,
    wybor1,
    TAK1,
    NIE1,
    UWAGI1,
    TAK2,
    NIE2,
    UWAGI2,
    TAK3,
    NIE3,
    UWAGI3,
    TAK4,
    NIE4,
    UWAGI4,
    TAK5,
    NIE5,
    UWAGI5,
    TAK6,
    NIE6,
    UWAGI6,
    TAK7,
    NIE7,
    UWAGI7,
    TAK8,
    NIE8,
    UWAGI8,
    TAK9,
    NIE9,
    UWAGI9
  } = useLocation().state;

  const generatePDF = () => {
    let doc = new jsPDF('l', 'mm', [1500, 1400]);
      doc.html(document.getElementById("pdf-div"), {
        callback: function (pdf) {
          pdf.save(`Raport z dzialan GM Sosnowiec - T2 Styczen.pdf`);
        },
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vh",
        backgroundColor: "#393c40",
      }}
    >
      <div className="container">
        <div className="row">

        <h1 className='heading text-center' style={{color:'#24134d' }}>Preview</h1>
          <div style={{minWidth: '1500px', minHeight: '1500px',backgroundColor:'white'}} id="pdf-div">
      <div>
        <table>
          <tr>
             <th style={{borderRight: '1px solid black', borderLeft: '1px solid black', borderTop: '1px solid black', minWidth: '1450px', fontWeight: 'bold', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{GRUPA}</th>
        </tr>
        </table>
        <table>
          <tr>
            <td style={{borderLeft: '1px solid black', borderTop: '1px solid black', minWidth: '725px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>Data kontroli</td>
            <td style={{borderRight: '1px solid black', borderLeft: '1px solid black', borderTop: '1px solid black', minWidth: '725px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>{DATA}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderLeft: '1px solid black', borderTop: '1px solid black', minWidth: '725px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>Numer sklepu</td>
            <td style={{borderRight: '1px solid black', borderLeft: '1px solid black', borderTop: '1px solid black', minWidth: '725px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>{NS}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderLeft: '1px solid black', borderTop: '1px solid black', minWidth: '725px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>Adres sklepu</td>
            <td style={{borderRight: '1px solid black', borderLeft: '1px solid black', borderTop: '1px solid black', minWidth: '725px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>{AS}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderLeft: '1px solid black', borderTop: '1px solid black', minWidth: '725px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>Sklad GM</td>
            <td style={{borderRight: '1px solid black', borderLeft: '1px solid black', borderTop: '1px solid black', minWidth: '725px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>{SGM}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderLeft: '1px solid black', borderTop: '1px solid black', minWidth: '725px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>Kierownik sklepu</td>
            <td style={{borderRight: '1px solid black', borderLeft: '1px solid black', borderTop: '1px solid black', minWidth: '725px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>{KS}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderLeft: '1px solid black', borderTop: '1px solid black', minWidth: '725px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>Kierownik Operacji i Sprzedazy JMP</td>
            <td style={{borderRight: '1px solid black', borderLeft: '1px solid black', borderTop: '1px solid black', minWidth: '725px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>{KOiSJMP}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderLeft: '1px solid black', borderTop: '1px solid black', minWidth: '725px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>Starszy Menadzer Sprzedazy JMP</td>
            <td style={{borderRight: '1px solid black', borderLeft: '1px solid black', borderTop: '1px solid black', minWidth: '725px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>{SMSJMP}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderBottom: '1px solid black', borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '725px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>Kierownik Rejonu Agencji Ochrony</td>
            <td style={{borderBottom: '1px solid black', borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', minWidth: '725px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>{KRAO}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{ borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>LP.</td>
            <td style={{ borderLeft: '1px solid black', borderRight: '1px solid black', minWidth: '425px', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>WYSZCZEGÓLNIENIE</td>
            <td style={{ borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>TAK</td>
            <td style={{ borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>NIE</td>
            <td style={{ borderLeft: '1px solid black', borderRight: '1px solid black', minWidth: '425px', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold'}}>OPIS / UWAGI</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>1.1</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>Spotkanie z Kierownikiem Sklepu poznanie opinii KS na temat przyczyn zlych wyników inwentur sklepu</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{TAK1}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{NIE1}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', minWidth: '425px', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center', color: '#ff0000'}}>{UWAGI1}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>1.2</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>Kontrola pomieszczen socjalnych (szatnia, toalety, kuchnia) pod katem pozostawienia towarów w odniesieniu do obowiazujacych procedur JMP</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{TAK2}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{NIE2}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', minWidth: '425px', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{UWAGI2}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>1.3</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>Dokonanie mini inwentaryzacji na poczatku i koncu pracy na sklepie - jezeli tak podaj ilosć indeksów i wynik ostateczny na koniec pracy</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{TAK3}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{NIE3}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', minWidth: '425px', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{UWAGI3}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>1.4</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>Sprawdzanie czy Sprzedawca-Kasjer skanuje wszystkie towary wyjete przez Klienta na tasme kasowa oraz pozostawione w wózku i zaglada do opakowan zbiorczych kontrolujac, czy nie ma w nich lub pod nimi ukrytych towarów</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{TAK4}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{NIE4}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', minWidth: '425px', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{UWAGI4}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>1.5</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>Przegladanie materialów CCTV pod katem kradziezy zewnetrznych, wewnetrznych i innych zdarzen na terenie sklepu</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{TAK5}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{NIE5}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', minWidth: '425px', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center', color: '#ff0000'}}>{UWAGI5}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>1.6</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>Kontrola miedzy zmianowa i wieczorna - jezeli TAK to podaj wynik i opisz sposób przeprowadzenia kontroli.</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{TAK6}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{NIE6}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', minWidth: '425px', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{UWAGI6}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>1.7</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>Czy wszystkie kasy sa wyposazone w system anty napadowy - jezeli nie to podaj które i z jakiego powodu </td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{TAK7}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{NIE7}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', minWidth: '425px', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{UWAGI7}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>1.8</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>Czy kamery  nie sa zasloniete plakatami itp. Jezeli TAK to podaj lokalizacje</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{TAK8}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{NIE8}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', minWidth: '425px', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{UWAGI8}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>1.9</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>Czy zamykane sa tasmy miedzy kasami, oraz podajniki na papierosy w kasach (musza być zamkniete na klucz)</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{TAK9}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', maxWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{NIE9}</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', minWidth: '425px', maxWidth: '425px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>{UWAGI9}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', minWidth: '200px', fontFamily: 'Nunito Sans', textAlign: 'center'}}>1.10</td>
            <td style={{borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', minWidth: '1250px', fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold'}}>{np}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td style={{borderBottom: '1px solid black', borderTop: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', minWidth: '1450px', maxWidth: '1450px', minHeight: '1450px', maxHeight: '1450px', fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold'}}>{parse(text)}</td>
          </tr>
        </table>
         
        
      </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center align-items-center text-center">
            <button
              className="btn btn-primary mb-2 mt-1 mybtn"
              onClick={generatePDF}
            >
              Generate PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
