import Link from 'next/link'
import Head from 'next/head';
// import WithApollo from 'next-with-apollo'
import Name from '../components/Name';
import style from './about.module.css';

const Page = () => (
  <>
  <Head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap" rel="stylesheet" />

  </Head>
  <div>
    Welcome, <Name />
    <br/><br/>
    <Link href="/about"><a>About</a></Link>
  </div>
  </>
)

export default Page

