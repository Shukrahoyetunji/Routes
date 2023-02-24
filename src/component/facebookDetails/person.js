import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { facebookData } from './data'

function FacebookPerson() {
    const params = useParams()
    const [person, setFacebookPerson] = useState({})
    useEffect(() => {
        getFacebookPerson()
    }, [])
    
    const getFacebookPerson = () => {
        const f = facebookData.filter(facebook=> facebook.id == params.personId)
        setFacebookPerson(f[0])
    }
  return (
    <div className='personinfo'>
        <img src={person.profile_picture} alt="pic"></img>
        <h1>This is {person.First_name} {person.Last_name} Page </h1>
        <h3>Gender: {person.Gender}</h3>
        <h3>Date of Birth: {new Date(person.Date_of_Birth).toDateString()}</h3>
        <h3>Country: {person.Country}</h3>
        
    </div>
  )
}

export default FacebookPerson