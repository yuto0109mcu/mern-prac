import { gql } from '@apollo/client'

const MOVIE_LIST = gql`
   {
      movies{
         id
         name
         genre
         director{
            name
         }
      }
   }
`

const DIRECTOR_LIST = gql`
   {
      directors{
         id
         name
      }
   }
`

const ADD_MOVIE = gql`
   mutation($name: String!, $genre: String!, $directorId: ID!){
      addMovie(name: $name, genre: $genre, directorId: $directorId){
         name
         genre
      }
   }
`

const ADD_DIRECTOR = gql`
   mutation($name: String!, $age: Int!){
      addDirector(name: $name, age: $age){
         name
         age
      }
   }
`

const DELETE_MOVIE = gql`
   mutation($id: ID!){
      deleteMovie(id: $id){
         id
      }
   }
`

   export { MOVIE_LIST, DIRECTOR_LIST, ADD_MOVIE, ADD_DIRECTOR, DELETE_MOVIE }