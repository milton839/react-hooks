import React, { useState } from 'react';

const studentsData = [
    {
        "id":1,
        "name":"Milton",
        "age":15,
        "classNumber":"Ten"
    },
    {
        "id":2,
        "name":"Azizul",
        "age":16,
        "classNumber":"Eleven"
    },
    {
        "id":3,
        "name":"Abir",
        "age":18,
        "classNumber":"Twelve"
    },
    {
        "id":4,
        "name":"Mamun",
        "age":14,
        "classNumber":"Nine"
    },
    {
        "id":5,
        "name":"Rahul",
        "age":12,
        "classNumber":"Eight"
    },
]

const UseState = () => {

    const [title, setTitle] = useState("First title");

    const [students, setStudent] = useState(studentsData);

    const [person, setPerson] = useState({
        name: "Azizul Islam Milton",
        age: "25",
        message:"Hello! How are you?"
    })

    const [value, setValue] = useState(0);

    const changeTitle = () =>{
        if(title === "First title"){
            setTitle("Change the title after clicking this button");
        }
        else{
            setTitle("First title");
        }
    }


    const removeItem = (id) => {
        const newStudent = students.filter(student => student.id !== id);
        setStudent(newStudent)
    }

    const changeMessage = () => {
        if(person.message === "Hello! How are you?"){
            setPerson({...person,message: "Messaged Change"})
        }
        else{
            setPerson({...person, message: "Hello! How are you?"})
        }
    }

    const resetValue = () => {
        setValue(0)
    }

    return (
        <div className="container text-center pt-3 bg-light-gray">
            {/* // ==================Title change using usestate================== */}
            <div>
                <h2>{title}</h2>
                <button type="button" className="btn btn-primary mt-3" onClick={changeTitle}>Change Title</button>
            </div>
            {/* ======================Array using by usestate====================== */}
            <div className="mt-3 mb-5">
                <h2>UseState use for array method</h2>
                <h4>Total Students: {students.length}</h4>
                <table className="table table-hover mt-3 mb-2">
                    <thead className="bg-dark text-white">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Class</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                            students.map((student) => {
                                const {id, name, age, classNumber} = student;
                                return(
                                    <tr style={{border: '1px solid gray', padding:'100px'}} key={id}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{age}</td>
                                        <td>{classNumber}</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" onClick={()=>removeItem(id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                    <div class="d-grid">
                        <button type="button" className="btn btn-danger mt-2" onClick={()=>setStudent([])}>Delete All Items</button>
                    </div>
            </div>

            {/* ===================Usestate object method=================== */}
            <div className="mb-5">
                <h2>UseState use of object method</h2>
                <h4>Name of the person: {person.name}</h4>
                <h4>Age of the person: {person.age}</h4>
                <h4>Message of the person: {person.message}</h4>
                <button className="btn btn-success" onClick={changeMessage}>Change the message</button>
            </div>

            {/* ===================Usestate object method=================== */}
            <div className="mb-5">
                <h2>UseState Counter example</h2>
                <h2>{value}</h2>
                <button className="btn btn-primary me-2" onClick={() => (value > 0 ? setValue(value-1) : setValue(0))}>Decrease</button>
                <button className="btn btn-primary me-2" onClick={resetValue}>Reset</button>
                <button className="btn btn-primary me-2" onClick={() => setValue(value+1)}>Increase</button>
            </div>
        </div>
    );
};

export default UseState;