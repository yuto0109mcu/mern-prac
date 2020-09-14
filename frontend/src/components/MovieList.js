import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { Card, CardBody, Table, Button } from "reactstrap"
import { MOVIE_LIST, DELETE_MOVIE } from '../queries/queries'

const MovieList = () => {

   const { loading, error, data } = useQuery(MOVIE_LIST)
   const [deleteMutation] = useMutation(
      DELETE_MOVIE, 
      { 
         refetchQueries: [{query: MOVIE_LIST}], 
         awaitRefetchQueries: true 
      }
   )
   const handleDeleteMovie = (id) => {
      deleteMutation({ variables: { id } })
   }

   if (loading) {
      return <p>loading...</p>
   } else if (error) {
      return <p>Error</p>
   } else {
      return(
         <Card>
            <CardBody>
               <Table hover>
                  <thead>
                     <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th colSpan="2">Director</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        data.movies.map(({id, name, genre, director}) => (
                           <tr key={id}>
                              <td>{name}</td>
                              <td>{genre}</td>
                              <td>{director.name}</td>
                              <td>
                                 <Button 
                                    color="primary"
                                    onClick={() => handleDeleteMovie(id)}
                                 >
                                    Delete
                                 </Button>
                              </td>
                           </tr>
                        ))
                     }
                  </tbody>
               </Table>
            </CardBody>
         </Card>
      )
   }
}

export default MovieList