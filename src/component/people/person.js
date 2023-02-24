import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { peopleData } from './people-data'

function Person() {
    const params = useParams()
    const [person, setPerson] = useState({})
    useEffect(() => {
        getPerson()
    }, [])
    
    const getPerson = () => {
        const p = peopleData.filter(item => item.id == params.personId)
        setPerson(p[0])
        console.log(person)
    }
  return (
    <div className='personinfo'>
        <img src={person.Profile_picture} alt="pic"></img>
        <h1>This is {person.first_name} {person.last_name} Page </h1>
        <h3>E-mail Address: {person.email}</h3>
        <h3>Gender: {person.gender}</h3>
    </div>
  )
}

export default Person