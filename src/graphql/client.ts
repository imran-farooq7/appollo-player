import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
	uri: "https://evolved-phoenix-58.hasura.app/v1/graphql",
	cache: new InMemoryCache(),
	headers: {
		authorization:
			"06Z3y5OKg8Dedq97nagyvruz3U1eDLyrp8gJqz68b87aH1HirHasdUpHh5kInLBG",
	},
});
export default client;
