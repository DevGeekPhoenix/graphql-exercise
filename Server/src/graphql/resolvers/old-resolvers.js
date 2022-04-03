

let length = 0
export default {
  Query: {
    hello: () => {
      const str = Array.from({ length }).reduce((acc, cur) => acc + 'o', '');
      return `hello w${str}rld`
    },
    anotherQuery: () => Math.floor(Math.random() * 100) + 1
  },
  Mutation: {
    myMutation: async () => {
      length++
      return 'success'
    }
  }
}