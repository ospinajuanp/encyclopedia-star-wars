import '../styles/page.module.scss'
import LayoutPeople from '@/containers/LayoutPeoples';
import useGetPeople from '../hooks/useGetPeoples'

interface response{
  count: number,
  next: string,
  previous: string,
  results: data[],
}

type data ={
  name?:string,
  height?:string,
  mass?:string,
  hair_color?:string,
  skin_color?:string,
  eye_color?:string,
  birth_year?: string,
  gender?:string,
  homeworld?:string,
  films?: [],
  species?: [],
  vehicles?: [],
  starships?: [],
  created?:string,
  edited?: string,
  url?: string,
}



const Home= async () => {
  let personajes:data[]=[]
  let response1:response = await useGetPeople(1)
  let response2:response = await useGetPeople(2)
  let response3:response = await useGetPeople(3)
  let response4:response = await useGetPeople(4)
  let response5:response = await useGetPeople(5)
  let response6:response = await useGetPeople(6)
  let response7:response = await useGetPeople(7)
  let response8:response = await useGetPeople(8)
  let response9:response = await useGetPeople(9)
  response1.results.map(personaje=>{    
    personajes.push(personaje)
  })
  response2.results.map(personaje=>{    
    personajes.push(personaje)
  })
  response3.results.map(personaje=>{    
    personajes.push(personaje)
  })
  response4.results.map(personaje=>{    
    personajes.push(personaje)
  })
  response5.results.map(personaje=>{    
    personajes.push(personaje)
  })
  response6.results.map(personaje=>{    
    personajes.push(personaje)
  })
  response7.results.map(personaje=>{    
    personajes.push(personaje)
  })
  response8.results.map(personaje=>{    
    personajes.push(personaje)
  })
  response9.results.map(personaje=>{    
    personajes.push(personaje)
  })
  
  return (
    <div>
      <h1>Hello World</h1>
      {<LayoutPeople data={personajes} key={1}></LayoutPeople>}
      
    </div>
  )
}

export default Home;
