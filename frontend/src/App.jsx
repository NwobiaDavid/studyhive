import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const Port = 'http://localhost:3000';
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get(`${Port}/api/data`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>frontend working</h1>
      <h2>backend: {data}</h2>
    </>
  );
}

export default App;
