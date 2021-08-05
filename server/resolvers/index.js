const { createDummyUsers } =  require('../utils')

const Query = {
    users(parent, args, ctx, info) {
        console.log('HELLO')
        return createDummyUsers().slice(0, args.first)
    }
}


const resolvers = {
    Query
}

module.exports = {
  resolvers
}