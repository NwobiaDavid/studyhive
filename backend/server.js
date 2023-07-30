import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/api/data',(req,res)=>{
    const data = "Hello from the server!";
    res.json(data);
})


app.listen(PORT, ()=>{
    console.log(`listening at port ${PORT}...`)
})