import React from "react"
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

interface x{
    data:data[]
}

const LayoutPeople= ({data}:x) => {
    return (
        <div>
            {
                data.map(person=>(
                    <p>{person.name}</p>
                ))
            }
            <p>--------------------</p>
        </div>
    )
}

export default LayoutPeople