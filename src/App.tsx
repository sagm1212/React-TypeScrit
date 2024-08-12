import { useEffect, useRef, useState } from 'react';
import './App.css';
import List from './Components/List';
import Form from './Components/Form';
import { Sub, SubsResponseFromApi } from './types';

interface AppState {
  subs: Array<Sub>
  newSubNumber: number
}

function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([]) //Estado del Array de los objetos Sub
  const [newSubNumber, setNewSubNumber] = useState<AppState["newSubNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null) //hook donde se puede guardar un valor que se va a quedar guardado entre renderizados pero no va a causar renderizados.

  useEffect(() => {  
    const fetchSubs = async (): Promise<SubsResponseFromApi> => {
      const response = await fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=ecdcbbba3aba539a4c49babb64241a55');
      return response.json();
    }

    const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
      return apiResponse.data.results.map(character => {
        const {
          id,
          name,
          description,
          thumbnail: { path, extension }
        } = character;

        return {
          id,
          name,
          description,
          avatar: `${path}.${extension}`
        }
      })
    }
    
    fetchSubs()
      .then(mapFromApiToSubs)
      .then(setSubs)
      .catch(error => {
        console.error('Error fetching Marvel characters:', error);
      });
 
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub]);
    setNewSubNumber(n => n + 1);
  }

  return (
    <div className='App' ref={divRef}>
      <h1>Cantidad de subs</h1>
      <List subs={subs}/>
      New subs: {newSubNumber}
      <Form onNewSub={handleNewSub}/>
    </div>
  )
}

export default App;
