import Link from 'next/link'
import Head from 'next/head';

const Page = () => {
  return (
    <>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap" rel="stylesheet" />
        </Head>
        <div>
          Welcome, 
          <br/><br/>
          <Link href="/about"><a>About</a></Link>
        </div>
    </>
  )
}

export default Page

