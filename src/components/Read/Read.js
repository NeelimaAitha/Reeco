import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function Read() {
  const [data, setData] = useState([])
  const {ProductName} = useParams()
    useEffect(() => {
      axios
        .get('https://localhost:3000/user/' + ProductName)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
    return(
        <div>
            <h1>will mark the product approved</h1>
        </div>
    )
  })
}
export default Read 