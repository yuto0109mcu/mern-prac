import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from './components/Header';
import { Container, Row, Col } from "reactstrap"
import SideNav from './components/SideNav';
import MovieList from './components/MovieList';

const client = new ApolloClient({
   uri: 'http://localhost:5000/graphql',
   cache: new InMemoryCache()
});

function App() {
   return (
      <div className="App">
         <Header/>
         <ApolloProvider client={client}>
            <Container>
               <Row>
                  <Col xs={12} sm={4}>
                  <SideNav/>
                  </Col>
                  <Col xs={12} sm={8}>
                  <MovieList/>
                  </Col>
               </Row>
            </Container>
         </ApolloProvider>
      </div>
   );
}

export default App;
