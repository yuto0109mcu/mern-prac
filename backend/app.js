const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const mongoose = require("mongoose")
const schema = require("./schema/schema")
const app = express()

mongoose.connect(
   "mongodb+srv://yuto:yu2232tosw@cluster0.jvbl7.mongodb.net/test?retryWrites=true&w=majority"
)
mongoose.connection.once("open", () => {
   console.log("db connection established")
})
app.use("/graphql", graphqlHTTP({
   schema,
   graphiql: true
}))

app.listen(5000, () => {
   console.log("localServer5000")
})