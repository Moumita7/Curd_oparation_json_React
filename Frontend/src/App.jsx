// import { useEffect, useState } from 'react'
// import axios from "axios"
// import './App.css'

import FormOne from "./Components/FormOne";

// function App() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     gender: 'male', // Assuming default is male
//     hobbies: [],
//   });




//   let fetchData=async()=>{
//     let res=await axios.get("http://localhost:3006/details")
//     console.log(res.data)
//   }

// // post 
// const handleInputChange = (e) => {
//   const { name, value, type, checked } = e.target;

//   if (type === 'checkbox') {
//     // Handle checkbox input separately
//     const updatedHobbies = checked
//       ? [...formData.hobbies, value]
//       : formData.hobbies.filter((hobby) => hobby !== value);

//     setFormData({
//       ...formData,
//       hobbies: updatedHobbies,
//     });
//   } else {
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   }
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     // Assuming your API endpoint is 'https://example.com/api/users'
//     const response = await axios.post('http://localhost:3006/details', formData);

//     console.log('Data posted successfully:', response.data);
//     // You can handle success, e.g., redirect or show a success message
//   } catch (error) {
//     console.error('Error posting data:', error);
//     // Handle error, e.g., show an error message
//   }
// };


//   useEffect(()=>{
// fetchData()
//   },[])

//   return (
//     <>
//      <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
//       </label>
//       <br />

//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//       </label>
//       <br />

//       <label>
//         Gender:
//         <label>
//           Male
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={formData.gender === 'male'}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Female
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             checked={formData.gender === 'female'}
//             onChange={handleInputChange}
//           />
//         </label>
//       </label>
//       <br />

//       <label>
//         Hobbies:
//         <label>
//           Dance
//           <input
//             type="checkbox"
//             name="hobbies"
//             value="dance"
//             checked={formData.hobbies.includes('dance')}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Drawing
//           <input
//             type="checkbox"
//             name="hobbies"
//             value="drawing"
//             checked={formData.hobbies.includes('drawing')}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Painting
//           <input
//             type="checkbox"
//             name="hobbies"
//             value="painting"
//             checked={formData.hobbies.includes('painting')}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Development
//           <input
//             type="checkbox"
//             name="hobbies"
//             value="development"
//             checked={formData.hobbies.includes('development')}
//             onChange={handleInputChange}
//           />
//         </label>
//       </label>
//       <br />

//       <button type="submit">Submit</button>
//     </form>
 
//     </>
//   )
// }

// export default App




const App = () => {
  

  return (
    <div>
    {/* <FormOne/> */}
  
     
    </div>
  );
};

export default App;

