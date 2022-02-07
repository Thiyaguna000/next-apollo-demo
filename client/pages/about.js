import Link from 'next/link'
import { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Styles from './about.module.css';
import { client } from '../lib/with-apollo';
import { GET_API } from '../lib/api';



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
  const [ loadMore, setLoadMore ] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ slicedData, setSlicedData ] = useState([]);
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
   getCompanyList();
  }, []);

  useEffect(() => {
    if (data.length !== 0 ) {
      funcSlice();
      setIndex(index+2)
     }
  }, [data])

  const getCompanyList = () => {
    client
    .query({
      query: GET_API,
      fetchPolicy: 'no-cache'
    })
    .then(result => {
      setData(result.data.hello);
      setLoading(false);
      setLoadMore(true);
    })
    .catch(err => setLoading(false))
    };

  const loadMoreFunc = () => {
    if (slicedData.length >= 60) {
      setLoadMore(false);
      console.log(slicedData);
    } else {
      setIndex(index+2);
      funcSlice();
    }
  }

  const funcSlice = () => {
    let newData = data.slice(index, index+20);
    setSlicedData(slicedData.concat(newData));
  }

  const searchHandler = (event) => {
    let value = event.target.value;
    console.log(value);
    if (value) {
      const searchData = slicedData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
      setSlicedData(searchData);
    } else {
      funcSlice();
    }
  }

  return(
    <>
      <div className={Styles.aboutWrapper}>
        <div className={Styles.searchWrapper}>
        <input type='search' className={Styles.searchInput} placeholder='Search' onChange={searchHandler}/>
        </div>
        {
          loading ? <div className={Styles.loader} /> : <div className={Styles.wrapper}>
          {slicedData.map((item,key) => <Card className={Styles.cardData} data={item} key={key} />)}
          </div>
        }
        {loadMore && <div className={Styles.load} onClick={loadMoreFunc}>Load More...</div>}
        <br/><br/>
        <Link href="/"><a>Go Back</a></Link>
      </div>
    </>
  )
}
