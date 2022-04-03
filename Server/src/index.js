import '@lib/global'
import runServer from '@lib/server/run-server'
import buildSchema from 'graphql/schema/buildSchema'
import resolvers from 'graphql/resolvers'

const typeDefs = buildSchema()

print('********************************')
print(typeDefs)
print('********************************')

runServer({ typeDefs, resolvers, port: 4000 })