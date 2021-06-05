import { ApolloClient, HttpLink, ApolloLink, NormalizedCacheObject } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { cache } from './apolloCacheRoot'


const httpLink = new HttpLink({
  uri: 'http://localhost:5000/graphql/v2',
  headers: {
    'client-version': '1.0.0'
  }
})


const errorLink = onError(({ graphQLErrors, networkError }) => {

})

const link = ApolloLink.from([errorLink, httpLink]);


const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  connectToDevTools: true,
  link,
  cache,
});

export { client }