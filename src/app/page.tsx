import '../styles/page.module.scss'
import LayoutPeople from '@/containers/LayoutPeoples';
import useGetPeople from '../hooks/useGetPeoples'

interface response{
  count: number,
  next: string,
  previous: string,
  results: data[],
}

interface data {
  name:string,
  height:string,
  mass:string,
  hair_color:string,
  skin_color:string,
  eye_color:string,
  birth_year: string,
  gender:string,
  homeworld:string,
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created:string,
  edited: string,
  url: string,
}

const Home= async () => {
  let personajes:data[]=[]

  let response1 = await useGetPeople(1)
  console.log(response1.results[0])
  let response2 = await useGetPeople(2)
  let response3 = await useGetPeople(3)
  let response4 = await useGetPeople(4)
  let response5 = await useGetPeople(5)
  let response6 = await useGetPeople(6)
  let response7 = await useGetPeople(7)
  let response8 = await useGetPeople(8)
  let response9 = await useGetPeople(9)
  personajes.push(response1.results)
  personajes.push(response2.results)
  personajes.push(response3.results)
  personajes.push(response4.results)
  personajes.push(response5.results)
  personajes.push(response6.results)
  personajes.push(response7.results)
  personajes.push(response8.results)
  personajes.push(response9.results)
  
  
  
  return (
    <div>
      <h1>Hello World</h1>
      {
        personajes.map(personaje=>(
          <LayoutPeople  data={personaje}/>
          
        ))
      }
        
    </div>
  )
}

export default Home;
