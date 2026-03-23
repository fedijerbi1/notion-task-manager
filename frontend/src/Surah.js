import { useParams } from "react-router-dom"; 
import {useEffect,useState} from "react" ; 
function Surah () { 
    const {number} = useParams() ;  
    const [Surah,setSurah] = useState({}) ; 
    const [SurahAudio,setSurahAudio] = useState([])
  function playAudio (audioURL) {  
    if (audioURL) { 
        const audio = new Audio(audioURL) ; 
        audio.play() ; 
    }

  }
    
    useEffect(() => {
        const fetchSurah = async ()=> { 
        
       const response = await fetch(`https://api.alquran.cloud/v1/surah/${number}`)
       const data = await response.json() ; 
       setSurah(data.data) ; 
        
       const audio = await fetch (`https://api.alquran.cloud/v1/surah/${number}/ar.alafasy`) ;
       const dat = await audio.json(); 
       setSurahAudio (dat.data.ayahs) ;  
      console.log(dat.data.ayahs) ;
        
    }
        fetchSurah();
    }, [number]) ; 
    return ( 
        <div>  
                          

            <h1 style={{color: "black"}}>{Surah.name}</h1>  
            <div className="ayahs" > 
            <li style={{color:"black"}}>{Surah.ayahs?.slice(0,1).map((ayahs)=>( 
               
                <div key={ayahs.number}> <h2 style={{color:"black"}}>{ayahs.text.slice(0,38)} </h2>{ayahs.text.slice(38)}<span onClick={()=>playAudio(SurahAudio[ayahs.numberInSurah-1]?.audio)}>{ayahs.numberInSurah}</span></div>))} 
                </li>   
            <li style={{color:"black"}}>{Surah.ayahs?.slice(1).map((ayahs)=>( 
              
                <div key={ayahs.number}>{ayahs.text} <span style={{color:"black"}} id={ayahs.numberInSurah} onClick={()=>playAudio(SurahAudio[ayahs.numberInSurah-1]?.audio)}>{ayahs.numberInSurah}</span></div>))} 
                </li> 
                 <audio controls>
                    <source src={`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${number}.mp3`}/>
                 votre navigateur ne support pas audio 
                 
                 </audio>

                
                </div>
        </div>
     );
} 
export default Surah;