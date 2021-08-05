// Libraries
import { ApolloProvider } from '@apollo/client'
// Apollo Utils
import client from '../apollo-client'
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp