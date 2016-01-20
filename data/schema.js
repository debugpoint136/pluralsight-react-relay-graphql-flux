import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql';


let Schema = (db) => {

    let playerType = new GraphQLObjectType({
        name: 'Player',
        fields: () => ({
            _id: {type: GraphQLString},
            firstname: {type: GraphQLString},
            lastname: {type: GraphQLString},
            address: {type: GraphQLString}
        })
    });

    let schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'Query',
            fields: () => ({
                players: {
                    type: new GraphQLList(playerType),
                    resolve: () =>
                        db.collection("people").find({}).toArray()
                     // Read from mongo
                },
                message: {
                    type: GraphQLString,
                    resolve: () => "Hello GraphQL!"
                }
            })
        })
        // Example Mutation
        /*
         mutation: new GraphQLObjectType({
         name: 'Mutation',
         fields: () => ({
         incrementCounter: {
         type: GraphQLInt,
         resolve: () => ++counter
         }
         })
         })*/
    });

    return schema
};

export default Schema;