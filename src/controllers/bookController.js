const bookModel = require('../models/bookModel')

const bookListController = async(req,res)=>{
const books = await bookModel.find()
res.json(books)
}

const newBookController = async (req, res) => {
  console.log("added");
  console.log(req.body);
const newBook= {        
      title:req.body.title,
            rating: req.body.rating,
            author:req.body.author,
            year:req.body.year,
            image:req.body.image,}

            const newBookDocument = new bookModel(newBook)

            try{

              await newBookDocument.save()

          
                res.send({"message":"book added"})

  
            }
            catch(error){
              res.status(400).send({"message":"something went wrong","error":error})

            }
}

const bookDetailController= async(req, res) => {
  const bookID = req.params.id
    const books= await bookModel.findById(bookID)
  res.json(books)
}


const ratingController = async (req,res)=>{
const id =req.body.id
const book = await bookModel.findById(id)
    book.rating = req.body.rating
    await book.save()
  res.json("rating added")
}

const deleteBookController = async (req, res) => {
  

  await bookModel.findByIdAndDelete(req.query.id)
    res.json({ message: "Book deleted successfully" }); // <-- Send response here!

    


}


module.exports={bookListController,newBookController,ratingController,deleteBookController,bookDetailController}