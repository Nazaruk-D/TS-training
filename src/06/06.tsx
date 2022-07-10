import React from "react";


// const callback =() => {
//     alert('Hey!')
// }
//
// window.setTimeout (callback ,1000 )

export const User = () => {

    const deleteUser = () => {
        alert("user should be deleted")
    }

    const addUser = () => {
        alert("user should be added")
    }

    return <div> Dima
        <button onClick={deleteUser}>Delete</button>
        <button onClick={addUser}>Add</button>
    </div>
}