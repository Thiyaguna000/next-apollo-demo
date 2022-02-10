import Link from 'next/link'
import { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Styles from './style.module.css';
import { client } from '../lib/with-apollo';
import { GET_API } from '../lib/api';

export default () => {
  const [ loadMore, setLoadMore ] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ slicedData, setSlicedData ] = useState([]);
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const [infiniteLoader, setInfiniteLoader] = useState(false);

  useEffect(() => {
   getCompanyList();
  }, []);

  useEffect(() => {
    if (data.length !== 0 ) {
      funcSlice();
      setIndex(index+20)
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
    setInfiniteLoader(true);
    if (slicedData.length >= 200) {
      setLoadMore(false);
    } else {
      setTimeout(() => {
        setInfiniteLoader(false);
        setIndex(index+20);
        funcSlice();
      }, 3000);
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
      <Link href="/"><a className={Styles.load}>Go Back</a></Link>
        <div className={Styles.searchWrapper}>
          <h1>List of Universities</h1>
          <input type='search' className={Styles.searchInput} placeholder='Search' onChange={searchHandler}/>
        </div>
        {
          loading ? <div className={Styles.loader} /> : 
            <div className={Styles.wrapper}>
          {slicedData.map((item,key) => <Card data={item} key={key} />)}
          </div>
        }
        {infiniteLoader ? <div className={Styles.loader} /> : loadMore && <div className={Styles.load} onClick={loadMoreFunc}>Load More...</div>}
      </div>
    </>
  )
}
