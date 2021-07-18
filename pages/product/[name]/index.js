import { useRouter } from 'next/router'
import Link from 'next/link'
import React , { useState, useEffect }from 'react';
const Prod = (props) => {
  const router = useRouter()
  const { name } = router.query
  const { pathname } = router.pathname
  


  useEffect(() => {
    const data=JSON.parse(localStorage.getItem("data"))
    console.log(data)

  });

  return (
    <>
      <h1>prouct: {name}</h1>
      <h1>prouct: {pathname}</h1>
      <ul>
        <li>
         {props.posts.price}
        </li>
        <li>
          
        </li>
      </ul>
    </>
  )
}


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const posts = {price:"kir"}
  console.log(posts)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export const getStaticPaths = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export default Prod