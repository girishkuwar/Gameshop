import React, { useEffect, useState } from 'react'
import supabase from '../../config/supabaseclient'

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchusers = async () => {
      const { data, error } = await supabase
        .from("users")
        .select()

      if (error) {
        console.log(error)
      }
      if (data) {
        console.log(data);
        setUsers(data);
      }
    }
    fetchusers();
  }, [])
  return (
    <div>
      <h1>Users</h1>
      <div className="tbl">
        <table>
          <tr>
            {/* <th>Id</th> */}
            <th>Name</th>
            <th>Email</th>
          </tr>
          {
            users.map((e) => {
              return (<tr>
                {/* <td>{e.id}</td> */}
                <td>{e.name}</td>
                <td>{e.email}</td>
              </tr>)
            })
          }
        </table>
      </div>
    </div>
  )
}

export default Users
