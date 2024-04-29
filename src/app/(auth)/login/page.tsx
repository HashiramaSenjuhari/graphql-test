import React from 'react'
import { useQuery, gql } from '@apollo/client'

export async function getStacticProps() {
  const QUERY_GET_ALLUSER = gql`
  query Query {
  users {
    id
    name
    email
    password
  }
  }
`
  const { loading, error, data } = useQuery(QUERY_GET_ALLUSER)
  console.log(data)
}
const page = () => {


  return (
    <div>page</div>
  )
}

export default page