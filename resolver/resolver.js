const {students} = require('../data/static')

const resolvers = {
    Query: {
        students : () => students,
        student:(parent, args) => students.find(student => student.id == args.id),
        
    },
    Mutation:{
        createStudent: (parent,args) => args
        
    }
}
module.exports = resolvers