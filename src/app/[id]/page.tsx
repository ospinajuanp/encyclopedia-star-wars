'use client'
import getData from './services/personaje.services'
import Link from 'next/link';
import '../../styles/idPage.scss'


export default async function Page({params}: {params: { id: number } }) {
const person = await getData(params.id);
  return (
    
    <div className='containerPersonaje'>
      <div className='title'>
        <Link href={`/`} key={params.id}> {'<'} </Link>
        <p >{person.name}</p>
      </div>
      <div className='styleDate'>
        <p >Height : {person.height}</p>
        <p >Mass : {person.mass}</p>
      </div>
      <div className='styleDate'>
        <p >Hair Color : {person.hair_color}</p>
        <p >Skin Color : {person.skin_color}</p>
        <p >Eye Color : {person.eye_color}</p>
      </div>
      <div className='styleDate'>
        <p >Birthday Year : {person.birth_year}</p>
      </div>
      <div className='styleDate'>
        <p >Gender : {person.gender}</p>
      </div>
      <div className='styleDateFinish'>
        <p >Date Of Created : {person.created}</p>
        <p >Last Date Of Edited : {person.edited}</p>
      </div>
    </div>
  )
}