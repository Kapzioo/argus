import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import '../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from './quill';
import './Home.css';

const Home = () => {

  const options = [
    { label: 'TAK', value: 'X' },
    { label: 'NIE', value: 'X' },
    ];

  const [wybor1, setValue] = React.useState('fruit');

const handleChange = (event) => {

setValue(event.target.value);

};

  const navigate=useNavigate();

  const [DATA, setDATA] = useState("");
  const [text,setText] =useState("Brak uwag.");
  const [GRUPA,setGRUPA] = useState("");
  const [SMSJMP, setSMSJMP] = useState("");
  const [NS, setNS] = useState("");
  const [AS, setAS] = useState("");
  const [SGM,setSGM]=useState("");
  const [KS,setKS]=useState("");
  const [KOiSJMP,setKOiSJMP]=useState("");
  const [KRAO,setKRAO]=useState("");
  const [TAK1,setTAK1]=useState("");
  const [NIE1,setNIE1]=useState("");
  const [UWAGI1, setUWAGI1]=useState("Brak uwag.");
  const [TAK2,setTAK2]=useState("");
  const [NIE2,setNIE2]=useState("");
  const [UWAGI2, setUWAGI2]=useState("Brak uwag.");
  const [TAK3,setTAK3]=useState("");
  const [NIE3,setNIE3]=useState("");
  const [UWAGI3, setUWAGI3]=useState("Brak uwag.");
  const [TAK4,setTAK4]=useState("");
  const [NIE4,setNIE4]=useState("");
  const [UWAGI4, setUWAGI4]=useState("Brak uwag.");
  const [TAK5,setTAK5]=useState("");
  const [NIE5,setNIE5]=useState("");
  const [UWAGI5, setUWAGI5]=useState("Brak uwag.");
  const [TAK6,setTAK6]=useState("");
  const [NIE6,setNIE6]=useState("");
  const [UWAGI6, setUWAGI6]=useState("Brak uwag.");
  const [TAK7,setTAK7]=useState("");
  const [NIE7,setNIE7]=useState("");
  const [UWAGI7, setUWAGI7]=useState("Brak uwag.");
  const [TAK8,setTAK8]=useState("");
  const [NIE8,setNIE8]=useState("");
  const [UWAGI8, setUWAGI8]=useState("Brak uwag.");
  const [TAK9,setTAK9]=useState("");
  const [NIE9,setNIE9]=useState("");
  const [UWAGI9, setUWAGI9]=useState("Brak uwag.");
  const submitDetails=(e)=>{
      e.preventDefault();
    if(
      !DATA.trim() || 
      !GRUPA.trim() ||
      !text.trim() ||
      !NS.trim() || 
      !AS.trim() || 
      !SGM.trim() || 
      !KS.trim() || 
      !KOiSJMP.trim() || 
      !KRAO.trim() || 
      !UWAGI1.trim() ||
      !UWAGI2.trim() ||
      !UWAGI3.trim() ||
      !UWAGI4.trim() ||
      !UWAGI5.trim() ||
      !UWAGI6.trim() ||
      !UWAGI7.trim() ||
      !UWAGI8.trim() ||
      !UWAGI9.trim())
    alert("Wypełnij wszystkie pola tekstowe!");
    else{
      navigate(`generateletter`,
      {state:
        {
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
        }
      }
      );
    }
  }

  useEffect(()=>{
    if(window.screen.width<585) alert("Please open in a larger device for best experience!");
  },[])

  // const handleCompany = (event) => {
  //   setDATA(event.target.value);
  //   console.log(event.target.value);
  // };

  // const handleLetterType = (event) => {
  //   setLetterType(event.target.value);
  //   console.log(event.target.value);
  // };

  
  const convertBase64=(file)=>{
    return new Promise((resolve,reject)=>{
      const fileReader=new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload=()=>{
        resolve(fileReader.result);
      }
      
      fileReader.onerror=(err)=>{
        reject(err);
      }
    })
  }

  return (
    <html lang="PL">
    <div style={{fontFamily: 'Nunito Sans', minHeight:'100vh', minWidth:'100vw', backgroundColor: '#393c40'}}>

      <div className="container d-flex justify-content-center align-items-center text-center">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3"></div>
          </div>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center mq" style={{fontFamily: 'Nunito Sans', height: '55%'}}>
            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%'},
              }}
              noValidate
              autoComplete="off"
            >
              <div className="form-group text-center">
                <input type="file" className="form-control-file d-none" id="exampleFormControlFile1" />
              <div className="form-group">
              </div>
              </div>
            </Box>
          </div>

          <div className="col-lg-12 col-md-6 col-sm-12 col-12 mt-4 tfield">
            
          <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%'},
              }}
              noValidate
              autoComplete="off"
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontFamily: 'Nunito Sans', fontSize: '18px', marginTop: '20px'}}>
              Grupa:
              </h5>
              <TextField id="standard-basic" InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold',fontFamily: 'Nunito Sans', color: '#fff'}}} variant="standard" value={GRUPA} onChange={(e) => setGRUPA(e.target.value)} />
            </Box>

          <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%', marginTop: '10px'  },
              }}
              noValidate
              autoComplete="off"
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', fontFamily: 'Nunito Sans', marginTop: '20px'}}>
              Data:
              </h5>
              <TextField id="standard-basic" InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', fontFamily: 'Nunito Sans', color: '#fff'}}} variant="standard" value={DATA} onChange={(e) => setDATA(e.target.value)} />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%', marginTop: '10px'  },
              }}
              noValidate
              autoComplete="off"
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              Numer Sklepu:
              </h5>
              <TextField id="standard-basic" InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff'}}} variant="standard" value={NS} onChange={(e) => setNS(e.target.value)} />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%', marginTop: '10px'},
              }}
              noValidate
              autoComplete="off"
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              Adres Sklepu:
              </h5>
              <TextField id="standard-basic" InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff'}}} variant="standard" value={AS} onChange={(e) => setAS(e.target.value)} />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%' , marginTop: '10px' },
              }}
              noValidate
              autoComplete="off"
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              Skład GM:
              </h5>
              <TextField id="standard-basic" InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff'}}} variant="standard" value={SGM} onChange={(e) => setSGM(e.target.value)} />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%', marginTop: '10px'  },
              }}
              noValidate
              autoComplete="off"
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              Kierownik Sklepu:
              </h5>
              <TextField id="standard-basic" InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff'}}} variant="standard" value={KS} onChange={(e) => setKS(e.target.value)} />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%', marginTop: '10px' },
              }}
              noValidate
              autoComplete="off"
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              Kierownik Operacji i Sprzedaży JMP:
              </h5>
              <TextField id="standard-basic" InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff'}}} variant="standard" value={KOiSJMP} onChange={(e) => setKOiSJMP(e.target.value)} />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%', marginTop: '10px'  },
              }}
              noValidate
              autoComplete="off"
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              Starszy Menadżer Sprzedaży JMP:
              </h5>
              <TextField id="standard-basic" InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff'}}} variant="standard" value={SMSJMP} onChange={(e) => setSMSJMP(e.target.value)} />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%', marginTop: '10px'  },
              }}
              noValidate
              autoComplete="off"
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              Kierownik Rejonu Agencji Ochrony:
              </h5>
              <TextField id="standard-basic" InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff'}}} variant="standard" value={KRAO} onChange={(e) => setKRAO(e.target.value)} />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%', marginTop: '100px'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', minWidth: '35px', maxWidth: '35px', marginTop: '100px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
                Spotkanie z Kierownikiem Sklepu poznanie opinii KS na temat przyczyn złych wyników inwentur sklepu
              </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px'}}>
              TAK
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', position: 'absolute', minWidth: '35px', maxWidth: '35px', marginTop: '0px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={TAK1} onChange={(e) => setTAK1(e.target.value)} />
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#8a8686', fontSize: '18px', marginTop: '0px', marginLeft: '125px'}}>Wstaw X </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '-29px', marginLeft: '50px'}}>
              NIE
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginTop: '0px', marginLeft: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={NIE1} onChange={(e) => setNIE1(e.target.value)} />
              
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              OPIS / UWAGI
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', marginBottom:'50px' ,fontWeight:'bold', color: '#fff',}}} variant="standard" value={UWAGI1} onChange={(e) => setUWAGI1(e.target.value)} />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%', marginTop: '100px'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', minWidth: '35px', maxWidth: '35px', marginTop: '100px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              Kontrola pomieszczeń socjalnych (szatnia, toalety, kuchnia) pod kątem pozostawienia towarów w odniesieniu do obowiązujących procedur JMP
              </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px'}}>
              TAK
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', position: 'absolute', minWidth: '35px', maxWidth: '35px', marginTop: '0px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={TAK2} onChange={(e) => setTAK2(e.target.value)} />
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#8a8686', fontSize: '18px', marginTop: '0px', marginLeft: '125px'}}>Wstaw X </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '-29px', marginLeft: '50px'}}>
              NIE
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginTop: '0px', marginLeft: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={NIE2} onChange={(e) => setNIE2(e.target.value)} />
              
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              OPIS / UWAGI
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', marginBottom:'50px' ,fontWeight:'bold', color: '#fff',}}} variant="standard" value={UWAGI2} onChange={(e) => setUWAGI2(e.target.value)} />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%', marginTop: '100px'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', minWidth: '35px', maxWidth: '35px', marginTop: '100px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              Dokonanie mini inwentaryzacji na początku i końcu pracy na sklepie - jeżeli tak podaj ilość indeksów i wynik ostateczny na koniec pracy
              </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px'}}>
              TAK
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', position: 'absolute', minWidth: '35px', maxWidth: '35px', marginTop: '0px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={TAK3} onChange={(e) => setTAK3(e.target.value)} />
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#8a8686', fontSize: '18px', marginTop: '0px', marginLeft: '125px'}}>Wstaw X </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '-29px', marginLeft: '50px'}}>
              NIE
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginTop: '0px', marginLeft: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={NIE3} onChange={(e) => setNIE3(e.target.value)} />
              
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              OPIS / UWAGI
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', marginBottom:'50px' ,fontWeight:'bold', color: '#fff',}}} variant="standard" value={UWAGI3} onChange={(e) => setUWAGI3(e.target.value)} />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%', marginTop: '100px'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', minWidth: '35px', maxWidth: '35px', marginTop: '100px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              Sprawdzanie czy Sprzedawca-Kasjer skanuje wszystkie towary wyjęte przez Klienta na taśmę kasową
              <br />oraz pozostawione w wózku i zagląda do opakowań zbiorczych kontrolując, czy nie ma w nich lub pod nimi ukrytych towarów
              </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px'}}>
              TAK
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', position: 'absolute', minWidth: '35px', maxWidth: '35px', marginTop: '0px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={TAK4} onChange={(e) => setTAK4(e.target.value)} />
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#8a8686', fontSize: '18px', marginTop: '0px', marginLeft: '125px'}}>Wstaw X </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '-29px', marginLeft: '50px'}}>
              NIE
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginTop: '0px', marginLeft: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={NIE4} onChange={(e) => setNIE4(e.target.value)} />
              
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              OPIS / UWAGI
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', marginBottom:'50px' ,fontWeight:'bold', color: '#fff',}}} variant="standard" value={UWAGI4} onChange={(e) => setUWAGI4(e.target.value)} />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%', marginTop: '100px'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', minWidth: '35px', maxWidth: '35px', marginTop: '100px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              Przeglądanie materiałów CCTV pod kątem kradzieży zewnętrznych, wewnętrznych i innych zdarzeń na terenie sklepu
              </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px'}}>
              TAK
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', position: 'absolute', minWidth: '35px', maxWidth: '35px', marginTop: '0px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={TAK5} onChange={(e) => setTAK5(e.target.value)} />
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#8a8686', fontSize: '18px', marginTop: '0px', marginLeft: '125px'}}>Wstaw X </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '-29px', marginLeft: '50px'}}>
              NIE
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginTop: '0px', marginLeft: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={NIE5} onChange={(e) => setNIE5(e.target.value)} />
              
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              OPIS / UWAGI
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', marginBottom:'50px' ,fontWeight:'bold', color: '#fff',}}} variant="standard" value={UWAGI5} onChange={(e) => setUWAGI5(e.target.value)} />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%', marginTop: '100px'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', minWidth: '35px', maxWidth: '35px', marginTop: '100px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              Kontrola między zmianowa i wieczorna - jeżeli TAK to podaj wynik i opisz sposób przeprowadzenia kontroli.
              </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px'}}>
              TAK
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', position: 'absolute', minWidth: '35px', maxWidth: '35px', marginTop: '0px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={TAK6} onChange={(e) => setTAK6(e.target.value)} />
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#8a8686', fontSize: '18px', marginTop: '0px', marginLeft: '125px'}}>Wstaw X </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '-29px', marginLeft: '50px'}}>
              NIE
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginTop: '0px', marginLeft: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={NIE6} onChange={(e) => setNIE6(e.target.value)} />
              
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              OPIS / UWAGI
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', marginBottom:'50px' ,fontWeight:'bold', color: '#fff',}}} variant="standard" value={UWAGI6} onChange={(e) => setUWAGI6(e.target.value)} />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%', marginTop: '100px'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', minWidth: '35px', maxWidth: '35px', marginTop: '100px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              Kontrola między zmianowa i wieczorna - jeżeli TAK to podaj wynik i opisz sposób przeprowadzenia kontroli.
              </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px'}}>
              TAK
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', position: 'absolute', minWidth: '35px', maxWidth: '35px', marginTop: '0px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={TAK7} onChange={(e) => setTAK7(e.target.value)} />
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#8a8686', fontSize: '18px', marginTop: '0px', marginLeft: '125px'}}>Wstaw X </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '-29px', marginLeft: '50px'}}>
              NIE
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginTop: '0px', marginLeft: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={NIE7} onChange={(e) => setNIE7(e.target.value)} />
              
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              OPIS / UWAGI
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', marginBottom:'50px' ,fontWeight:'bold', color: '#fff',}}} variant="standard" value={UWAGI7} onChange={(e) => setUWAGI7(e.target.value)} />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%', marginTop: '100px'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', minWidth: '35px', maxWidth: '35px', marginTop: '100px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              Czy wszystkie kasy są wyposażone w system anty napadowy - jeżeli nie to podaj które i z jakiego powodu 
              </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px'}}>
              TAK
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', position: 'absolute', minWidth: '35px', maxWidth: '35px', marginTop: '0px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={TAK8} onChange={(e) => setTAK8(e.target.value)} />
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#8a8686', fontSize: '18px', marginTop: '0px', marginLeft: '125px'}}>Wstaw X </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '-29px', marginLeft: '50px'}}>
              NIE
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginTop: '0px', marginLeft: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={NIE8} onChange={(e) => setNIE8(e.target.value)} />
              
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              OPIS / UWAGI
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', marginBottom:'50px' ,fontWeight:'bold', color: '#fff',}}} variant="standard" value={UWAGI8} onChange={(e) => setUWAGI8(e.target.value)} />
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%', marginTop: '100px'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', minWidth: '35px', maxWidth: '35px', marginTop: '100px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              Czy wszystkie kasy są wyposażone w system anty napadowy - jeżeli nie to podaj które i z jakiego powodu 
              </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px'}}>
              TAK
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', position: 'absolute', minWidth: '35px', maxWidth: '35px', marginTop: '0px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={TAK9} onChange={(e) => setTAK9(e.target.value)} />
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', position:'absolute', color: '#8a8686', fontSize: '18px', marginTop: '0px', marginLeft: '125px'}}>Wstaw X </h5>
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '-29px', marginLeft: '50px'}}>
              NIE
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginTop: '0px', marginLeft: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', fontWeight:'bold', color: '#fff', textAlign: 'center'}}} variant="standard" value={NIE9} onChange={(e) => setNIE9(e.target.value)} />
              
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)':  { width: '100%'  },
              }}
              noValidate
              autoComplete="off"
              style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}}
            >
              <h5 style={{fontFamily: 'Nunito Sans', textAlign: 'left', fontWeight: 'bold', color: '#fff', fontSize: '18px', marginTop: '20px'}}>
              OPIS / UWAGI
              </h5>
              <TextField id="standard-basic" style={{fontFamily: 'Nunito Sans', marginBottom: '50px'}} InputLabelProps={{style: {fontFamily: 'Nunito Sans', marginBottom:'50px' ,fontWeight:'bold', color: '#fff',}}} variant="standard" value={UWAGI9} onChange={(e) => setUWAGI9(e.target.value)} />
            </Box>



            

          <h4 style={{fontFamily: 'Nunito Sans', color: "#ffffff", textAlign: 'center', marginTop: '15px'}}>UWAGI DODATKOWE ORAZ WYKRYTE NIEPRAWDŁOWOŚCI</h4>
          <div className="CKedit d-flex justify-content-center mt-3 ">
          <div className="editor" style={{fontFamily: 'Nunito Sans', backgroundColor:"#bee1e6"}}>
              <ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        value={text}
                        placeholder="Tutaj wpisz UWAGI DODATKOWE ORAZ WYKRYTE NIEPRAWDŁOWOŚCI:"
                        onChange={(e)=>{
                          setText(e)
                        }}
                    />
            </div>
          </div>

            <div className='d-flex justify-content-center align-items-center'>
            <button className='btn btn-info mybtn text-white mt-3 mb-2' onClick={submitDetails} type='submit'>Submit</button>
            </div>
          </div>
        
        
        </div>
      </div>
    </div>
    </html>
  )
}

export default Home;


//<div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded mt-5" src={nImg}  style={{fontFamily: 'Nunito Sans', width:"80%"}}/><span className="font-weight-bold">Upload image</span><input type="file" className="text-center form-control" onChange={(e)=>{uploadImage(e)}}/></div>