import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
const http = require("http");



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


  httpServer.listen({ port: 8080 }, () => {
    console.log(`🚀 Server Started! hurrah! in port=> 8080`);
  });
};
startServer();