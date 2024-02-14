import React from 'react';

function Components() {

  const  [contacts, setContacts] = React.useState( {
    fName:"",
    lName:"",
    email:""
  });

function handleChange(event) {
const {value,name} =event.target;

setContacts(prevVlue => {
  return{
    ...prevVlue,
     [name]: value
    };
});
}



// setContacts(prevVlue =>({ ...prevVlue, [name]: value}));
// }
// setContacts(prevValue => {
// if(name === "fName"){
//   return {
//     fName:value,
//     lName:prevValue.lName,
//     email:prevValue.email
//   }
// }else if(name === "lName"){
//   return {
//     fName:prevValue.fName,
//     lName:value,
//     email:prevValue.email
//    };
// }
// else if(name === "email"){
//   return {
//     fName:prevValue.fName,
//     lName:prevValue.lName,
//     email:value
//    };
// }
// });
// }
  return (
      <div className='container'>
        <h1>Nirosha Rathod!! {contacts.fName}  {contacts.lName} </h1>
       <p>{contacts.email}</p>
        <input
        name='fName'
        onChange={handleChange}
        placeholder='First Name'
        value={contacts.fName}
        />
        <input
        name='lName'
        onChange={handleChange}
        placeholder='Last Name'
        value={contacts.lName}
        />
        <input
        name='email'
        onChange={handleChange}
        placeholder='email'
        value={contacts.email}
        />
        <button> Submit </button>
      </div>
    );
  }

  export default Components;












// function Components() {

// const  [fName, setfName] = React.useState("");
// const  [lName, setlName] = React.useState("");

// function updatefName(event) {
//   const firstName=event.target.value;
//   setfName(firstName);
// }


// function updatelName(event) {
//   const lastName=event.target.value;
//   setlName(lastName);
// }


// return (
//     <div className='container'>
//       <h1>Nirosha Rathod!! {fName}  {lName}</h1>
//       <input name='fname' onChange={updatefName} placeholder='Firts Name' value={fName}/>
//       <input name='lname' onChange= {updatelName} placeholder='Last Name' value={lName}/>
//       <button> Submit </button>
//     </div>
//   );
// }

// export default Components;
