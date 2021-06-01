import React ,{useState , useEffect} from 'react'
import axios from 'axios'
import './UserList.css'

function UserList() {
    const [listOfUser, setListOfUser] = useState([])
  const getUsersData=()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{setListOfUser(res.data)})
            .catch((err)=> alert('this is an error') )
        }
    useEffect(() => {
        getUsersData();
        },[]) 
      
    return (
        <div className="container">
            <ul>
      {listOfUser.map((item)=> (
     <div className='List' key={item.id}>
     <li><span>Name:</span>{item.name}</li>
     <li><span>Username:</span> {item.username}</li>
     <li><span>Email:</span>{item.email}</li>
     <li><span>Address:</span> 
         <ul>
     <li><span>Street:</span> {item.address.street}</li>
     <li><span>Suite:</span> {item.address.suite}</li>
     <li><span>City:</span> {item.address.city}</li>
     <li><span>Zip code: </span> {item.address.zipcode}</li>
     <li><span>Geo: </span>
         <ul>
     <li><span>Lat:</span> {item.address.geo.lat}</li>
     <li><span>Lng:</span> {item.address.geo.lng}</li>
    </ul></li>
      </ul></li>
      <li><span>Phone:</span>{item.phone}</li>
      <li><span>WebSite:</span> {item.website}</li>
      <li><span>Company:</span>
          <ul>
      <li><span>Name:</span> {item.company.name}</li>
      <li><span>CatchtPhrase:</span> {item.company.catchPhrase}</li>
      <li><span>Bs:</span> {item.company.bs}</li>
      </ul>
      </li>
      </div>
      ))}
          </ul>
        </div>
    )
}

export default UserList
