import React ,{useState} from 'react';
import uuid from 'react-uuid'


const SongList = () => {

const [songs,setSongs] =  useState([
    {title:'title 1', id:1},
    {title:'title 2', id:2},
    {title:'title 3', id:3}
]);
    
const addSong = () => {
    setSongs([...songs,{title:'title 4', id:uuid()
}])
}

    return ( 
        <div className='song-list'>
            <ul>
            {songs.map( song => {
                return (<div>
                     <li key={song.id}>{ song.title}</li>
                   
                     </div>

                    )
               
            })}
            </ul>
    <button onClick={addSong}>add a new one</button>

        </div>
     );
}
 
export default SongList;