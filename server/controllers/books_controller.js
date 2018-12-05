let books = []
let id = 0

const read = (req, res, next) => {
  res.status(200).json(books)
}
const create = (req, res, next) => {
  const { title, author } = req.body
  let book = {
    id: id,
    title: title,
    author: author
  }
  books.push(book)
  res.status(200).json(books)
  id++
}

const updateBook = (req, res, next) => {
  console.log(req.params)
  console.log(req.body)
  const id = +req.params.id
  const index = books.findIndex(book => +book.id === +id)
  books[index].title = req.body.title
  books[index].author = req.body.author
  res.status(200).json(books)
}

const deleteBook = (req, res, next) => {
  const id = +id
  const index = books.findIndex(book => +book.id === +id)
  books = books.splice(index, 1)
  res.status(200).json(books)
}
module.exports = {
  create,
  read,
  updateBook,
  deleteBook
}
