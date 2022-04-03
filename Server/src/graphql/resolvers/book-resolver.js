import generateNumericString from "@lib/utils/generateNumericString"

export const Books = []

const generateID = () => `${new Date().getTime()}${generateNumericString(6)}`

const getBooks = () => [...Books]
const getBookById = _id => Books.find(book => book._id === _id)
const createBook = data => {
  const book = {
    _id: generateID(),
    ...data,
    createdAt: new Date().toISOString()
  }
  Books.push(book)
}
const editBook = (_id, data) => {
  const thisBookIndex = Books.findIndex(Book => Book._id === _id)
  
  if (thisBookIndex < 0) throw new Error('bad request')

  Books[thisBookIndex].title = data.title
  
}

export const filterBooksByAuthorID = authorId => Books.filter(item => item.authorId === authorId)

export default {
  Query: {
    getBooks,
    getBook: (_, { _id }) => getBookById(_id)
  },
  Mutation: {
    createBook: (_, data) => {
      createBook(data)
      return {
        msg: 'ok',
        status: 200
      }
    },
    editBook: (_, { _id, title }) => {
      try {
        
        editBook(_id, { title })

        return {
          msg: 'ok',
          status: 200
        }

      } catch (error) {
        throw error
      }
      
    }
  }
}