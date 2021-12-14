import React, {useState} from 'react';
import Axios from "axios";
import './AddEdit.css';

function AddEdit () {
    const url="http://localhost:5000/create"
    const [data, setData] = useState({
        name: "",
        surname:"",
        email: "",
        age: ""
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            surname: data.surname,
            email: data.email,
            age: data.age
        })
        .then(res => {
            console.log(res.data)
        })
    }
    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <form className="form" onSubmit={submit}>
            <div>
                <label htmlFor="name">Name</label>
                <input onChange={handle} id="name" value={data.name} placeholder="name" type="text"></input>
            </div>
            <div>
                <label htmlFor="surname">Surname</label>
                <input onChange={handle} id="surname" value={data.surname} placeholder="surname" type="text" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input onChange={handle} id="email" value={data.email} placeholder="email" type="email" />
            </div>
            <div>
                <label htmlFor="age">Customers age</label>
                <input onChange={handle} id="age" value={data.age} placeholder="age" type="number" />
            </div>
            <div>
                <button>Submit</button>
            </div>   
        </form>
    )
}

export default AddEdit;



