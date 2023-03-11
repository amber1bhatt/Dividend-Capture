import { gql } from "apollo-server-core";
import { typeDefs as stockTypeDefs } from "./stock.schema";
const typeDefs = gql `
  ${stockTypeDefs}
`;
export { typeDefs };
