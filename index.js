const express = require('express')
const mongoose = require('mongoose');
const bookRouter = require('./src/routes/bookRouter')
const userRouter = require('./src/routes/userRouter')
var cors = require('cors')
const app = express()


const port = 3000


 mongoose.connect("mongodb+srv://sharinhansha:mgPeHNepPdEHBA4J@main.hjzb9sc.mongodb.net/?retryWrites=true&w=majority&appName=main")
.then(res=>{
console.log("mongodb connected");

}).catch(err=>{
  console.log("error",err);
})

var corsOptions = {
  // origin: 'https://movie-rating-two.vercel.app',
  origin:'https://book-library-bice-tau.vercel.app'
}

app.use(cors(corsOptions));
app.use(express.json())
// app.use("",bookRouter)
app.get('/', (req, res) => {
  res.send('Backend API is running');
});
app.use("",bookRouter)
app.use("/user", userRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
