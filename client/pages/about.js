import Link from 'next/link'
import { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Styles from './about.module.css';


const dummyData = [
  {
    name: "Random",
    address: "chennai",
    email: "diago@mail.com"
  },
  {
    name: "Random2",
    address: "chennai",
    email: "diago@mail.com"
  },
  {
    name: "Random3",
    address: "chennai",
    email: "diago@mail.com"
  },
  {
    name: "Random4",
    address: "chennai",
    email: "diago@mail.com"
  },
  {
    name: "Random5",
    address: "chennai",
    email: "diago@mail.com"
  },
  {
    name: "Random6",
    address: "chennai",
    email: "diago@mail.com"
  },
]

export default () => {
  const [ loadMore, setLoadMore ] = useState(true);
  const [ slicedData, setSlicedData ] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (dummyData.length !== 0 ) {
     funcSlice();
     setIndex(index+2)
    }
  }, []);

  const loadMoreFunc = () => {
    if (slicedData.length >= dummyData.length) {
      setLoadMore(false);
    } else {
      setIndex(index+2);
    funcSlice();
    }
  }

  const funcSlice = () => {
  let data = dummyData.slice(index, index+2);
  console.log(index)
   setSlicedData(slicedData.concat(data));
  }

  return(
    <div>
    About Page
    <div className={Styles.wrapper}>
    {slicedData.map((item,key) => <Card data={item} key={key} />)}
    </div>
    {loadMore && <div onClick={loadMoreFunc}>Load More...</div>}
    <br/><br/>
    <Link href="/"><a>Go Back</a></Link>
  </div>
  )
}
