export const typeDefs = `#graphql
type User{
  id:ID!
  name:String!
  email:String!
  password:String!
}
input UserInput{
  name:String!
  email:String!
  password:String!
}
input UpdateUser{
  name:String!
  email:String!
}
type Query{
  users:[User]
  user(id:ID!):User
}
type Mutation{
  createUser(input:UserInput):User
  updateUser(id:ID!,input:UpdateUser):User
  deleteUser(id:ID!):User
}
`;
