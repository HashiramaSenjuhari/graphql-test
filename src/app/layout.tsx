import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { client } from "../graphql/apolloclient";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ApolloProvider client={client}>
        <body className={inter.className}>{children}</body>
      </ApolloProvider>
    </html>
  );
}