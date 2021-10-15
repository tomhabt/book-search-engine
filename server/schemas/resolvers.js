// import the built in authentication object
const { AuthenticationError } = require('apollo-server-express');

// import the models
const {User} = require('../models')

const resolvers = {
    Query:{
        me: async () => {
            return User.findOne({_id})
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user)
          
            return {token, user};
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
        }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
        }
          
            const token = signToken(user);
            return { token, user };
        },
        saveBook: async (parent, args, context) =>{
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id:context.user._id},
                    {$addToSet: { savedBooks: args } },
                    { new: true, runValidators: true }
                );
                return updatedUser
            };
            throw new AuthenticationError('You need to be logged in!');
        },
        removeBook: async (parent, {bookId}, context) =>{
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id:context.user._id},
                    {$pull: { savedBooks: bookId } },
                    { new: true, runValidators: true }
                );
                return updatedUser
            };
            throw new AuthenticationError('You need to be logged in again!');
        }
    }
}


// export the resolvers
module.exports = resolvers;