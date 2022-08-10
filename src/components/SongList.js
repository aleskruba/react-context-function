import React ,{useState,useEffect} from 'react';
import uuid from 'react-uuid'
import NewSongForm from './NewSonForm';


const SongList = () => {

const [songs,setSongs] =  useState([
    {title:'title 1', id:1},
    {title:'title 2', id:2},
    {title:'title 3', id:3}
]);
    
const addSong = (title) => {
    setSongs([...songs,{title:title , id:uuid()
}])
}

const [age, setAge] = useState(20)

useEffect(()=>{
console.log('useEffect hoo run',songs)
},[songs])
    
useEffect(()=>{
    console.log('useEffect hook run',age)
    },[age])
        
return ( 
        <div className='song-list'>
            <ul>
            {songs.map( song => {
                return (<div key={song.id}>
                     <li >{ song.title}</li>
                     </div>
                

                    )
               
            })}
            </ul>
            <NewSongForm addSong={addSong}/> 
            <button onClick={()=>setAge(age+1)}>Add 1 to age : {age}</button>
       
            </div>
     );
}
 
export default SongList;