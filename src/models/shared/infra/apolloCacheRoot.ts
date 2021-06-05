import { InMemoryCache, makeVar } from '@apollo/client';


const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        roles:{
          read(roles){
            return roles
          },
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          }
        }
      }
    }
  }
});
export const rolesInitialState = makeVar<string[]>([]);

export { cache }