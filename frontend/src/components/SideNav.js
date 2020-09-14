import React from 'react'
import { useQuery, useMutation } from "@apollo/client"
import { useForm } from "react-hook-form"
import { DIRECTOR_LIST, ADD_MOVIE, MOVIE_LIST, ADD_DIRECTOR } from '../queries/queries'

import { Card, 
         CardHeader, 
         CardBody, 
         Form, 
         FormGroup, 
         Button 
      } from "reactstrap"

const SideNav = () => {

   const { data } = useQuery(DIRECTOR_LIST)
   const [addMovie] = useMutation(ADD_MOVIE, { refetchQueries: [{ query: MOVIE_LIST }], awaitRefetchQueries: true }) 
   const [addDirector] = useMutation(ADD_DIRECTOR, { refetchQueries: [{query: DIRECTOR_LIST}], awaitRefetchQueries: true })
   const { register, handleSubmit } = useForm()
   const { 
      register: registerDirector, 
      handleSubmit: handleSubmitDirector 
   } = useForm()
   const onSubmit = ({movieName, movieGenre, directorId}, e) => {
      addMovie({
         variables: {
            name: movieName,
            genre: movieGenre,
            directorId: directorId
         }
      })
      e.target.reset()
   }
   const onSubmitDirector = ({directorName, directorAge}, e) => {
      addDirector({
         variables: {
            name: directorName,
            age: parseInt(directorAge)
         }
      })
      e.target.reset()
   }
   
   return(
      <>
         <Card>
            <CardHeader>
               Director
            </CardHeader>
            <CardBody>
               <Form onSubmit={handleSubmitDirector(onSubmitDirector)}>
                  <FormGroup>
                     <input 
                        className="form-control" 
                        type="text" 
                        name="directorName" 
                        placeholder="Director Name"
                        ref={registerDirector}
                        />
                     <input 
                        className="form-control mt-2" 
                        type="text" 
                        name="directorAge" 
                        placeholder="Age"
                        ref={registerDirector}
                     />
                  </FormGroup>
                  <Button color="primary" type="submit">Add</Button>
               </Form>
            </CardBody>
         </Card>  
         <Card className="mt-4">
            <CardHeader>
               Movies
            </CardHeader>
            <CardBody>
               <Form onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup>
                     <input 
                        className="form-control" 
                        type="text" 
                        name="movieName" 
                        placeholder="Movie Title"
                        ref={register}
                     />
                     <input 
                        className="form-control mt-2" 
                        type="text" 
                        name="movieGenre" 
                        placeholder="Genre"
                        ref={register}
                     />
                     <select 
                        className="form-control mt-2"
                        type="select"
                        name="directorId"
                        ref={register}
                     >
                        {
                           data && data.directors.map(({id, name}) => (
                              <option 
                                 key={id}
                                 value={id}
                              >
                                 {name}
                              </option>
                           ))
                        }
                     </select>
                  </FormGroup>
                  <Button color="primary" type="submit">Add</Button>
               </Form>
            </CardBody>
         </Card>  
      </>
   )
}

export default SideNav