import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
const http = require("http");

let PORT = process.env.PORT || 8080

const startServer = async () => {

  const app = express(); 
  
  const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    playground:true,
    tracing: false,
  });

  server.applyMiddleware({ app });
  var httpServer;
    httpServer = http.createServer(app);


  httpServer.listen({ port: PORT, host: '0.0.0.0' }, () => {
    console.log(`🚀 Server Started! hurrah! in port=> ${PORT}`);
  });
};
startServer();