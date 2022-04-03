import generateNumericString from "@lib/utils/generateNumericString";

export const Authors = [];

const generateID = () => `${new Date().getTime()}${generateNumericString(6)}`;

const getAuthors = () => [...Authors];
export const getAuthorById = (_id) => Authors.find((author) => author._id === _id);
const createAuthor = (data) => {
  const author = {
    _id: generateID(),
    ...data,
    createdAt: new Date().toISOString(),
  };
  Authors.push(author);
};
const editAuthor = (_id, data) => {
  const thisAuthorIndex = Authors.findIndex((author) => author._id === _id);

  if (thisAuthorIndex < 0) throw new Error("bad request");

  Authors[thisAuthorIndex].name = data.name;
};

//
// (req,res,next) =>

export default {
  Query: {
    getAuthors,
    getAuthor: (_, { _id }) => getAuthorById(_id),
  },
  Mutation: {
    createAuthor: (_, data) => {
      console.log(data);
      createAuthor(data);
      return {
        msg: "ok",
        status: 200,
      };
    },
    editAuthor: (_, { _id, name }) => {
      try {
        editAuthor(_id, { name });

        return {
          msg: "ok",
          status: 200,
        };
      } catch (error) {
        throw error;
      }
    },
  },
};
