// eslint-disable-next-line
import axios from 'axios'

import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function BlogList() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('https://localhost:3000')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    // eslint-disable-next-line
    <div className="container">
      <form>
        <input type="text" className="border" placeholder="Search..." />
      </form>
      <div className="class">
        <div className="sub-class">
          <Link to="/create" className="button">
            Add Items
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ProductName</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
        <tbody>
          {data.map((d, i) => (
            <tr key={d}>
              <td>{i.ProductName}</td>
              <td>{i.Brand}</td>
              <td>{i.Price}</td>
              <td>{i.Quantity}</td>
              <td>{i.total}</td>
              <td>{i.status}</td>
              <td>
                <button type="button" className="btn-btn-sm btn-primary">
                  Read
                </button>
                <button type="button" className="btn-btn-sm btn-primary">
                  Edit
                </button>
                <button type="button" className="btn-btn-sm btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  )
}

export default BlogList
