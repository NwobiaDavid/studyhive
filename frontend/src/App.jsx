// import { useEffect, useState } from 'react';
// import axios from 'axios';
import Navbar from './components/Navbar';

function App() {
  // const Port = 'http://localhost:3000';
  // const [data, setData] = useState('');

  // useEffect(() => {
  //   axios
  //     .get(`${Port}/api/data`)
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
     <Navbar/>
    </>
  );
}

export default App;
