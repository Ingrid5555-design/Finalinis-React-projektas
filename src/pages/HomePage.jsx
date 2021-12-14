import React from 'react';  //{ useState, useEffect }
import { NavLink } from 'react-router-dom';
import './HomePage.css';
//import axios from 'axios';

const HomePage = () => {
  {/*const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    if (response.status === 200) {
      setData(response.data);
    }
  };*/}
  return (
    <div className='start-wrapper'>
      <NavLink to='/add'>
        <input className='start-button' type='button' value='START' />
      </NavLink>{' '}
      {/*} <div style={{ marginTop: '150px' }}>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>No.</th>
            <th style={{ textAlign: 'center' }}>Name</th>
            <th style={{ textAlign: 'center' }}>Email</th>
            <th style={{ textAlign: 'center' }}>Age</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
            {data && data.map((item, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{index +1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.age}</td>        
                    </tr>
                );
            })}
        </tbody>
      </table>
          </div>*/}
    </div>
  );
};

export default HomePage;
