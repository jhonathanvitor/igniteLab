import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q6d69z334201ywchvz4ean/master',
    cache: new InMemoryCache()
})