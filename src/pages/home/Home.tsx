import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { data,people } from '../../types/Character';
import Loading from '../../components/Loading/Loading';
import {API} from '../../constants/api';
import { Link } from 'react-router-dom';
import { getCharacterId } from '../../components/getCharacterId/getCharacterId';
import './home.css';


const Home = () => {

    const[data, setData]=useState<data>();
    const[pagination, setPagination]=useState<number>(1);
    const[loading, setLoading]=useState<boolean>(true);
    const [search, setSearch] = useState<string>('');
    const [people, setPeople]=useState<people[]>([]);
    const imgUrl = 'https://starwars-visualguide.com/assets/img/characters/'


const getPeople = useCallback(async () => {
  try {
    const response = await API.get(`people/?page=${pagination}`);
    setData(await response.data);
    setPeople(await response.data.results);
    setLoading(false);
  } catch(err) {
    console.log(err)
  } 
}, [pagination]);



useEffect(() => {
  setLoading(true);
  getPeople();
}, [getPeople]);


const searchedData = useCallback(async () => {
  try {
    const response = await API.get(`people/?search=${search}`);
    setData(await response.data);
    setPeople(await response.data.results);
    setLoading(false);
  } catch (err){
    console.log(err)
  } 
}, [search]);


useEffect(() => {
  setLoading(true);
  searchedData();
}, [searchedData]);



const handleSearch = (e: React.ChangeEvent<HTMLInputElement>)=> {
  setSearch(e.target.value);
}

  return (
    <div className='home wrapper-size'>
      {loading?<Loading />:
      <div>
          <div className="text">   
            <h1>Star Wars Figures</h1>
            <p>Find the latest products for the biggest fans of the iconic saga.</p>
          </div>
          <input
          type="text"
          placeholder="Search Name"
          value={search}
          onChange={(e) => handleSearch(e)
          }  
        />
          {search.length>1||<div className="pagination">
          { data&&(

          <button
            className="left"
            onClick={() => setPagination(pagination - 1)}
            disabled={pagination === 1}
          >
            <i className="fa-solid fa-arrow-left-long"></i>
            Previous  
          </button>)}
          <span className='current_page'>{pagination}</span>
         {data&&(
          <button
            className="right"
            onClick={() => {
            if (data?.next) {
                setPagination(pagination + 1);
              }
            }}
            disabled={!data?.next}
          >
            Next
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>)}
      </div>}
          <div className='people-wrapper'>
          {people.map((item,index)=>(
            <div key={index} className='people-box' style={{backgroundColor:`${item.eye_color}`}}>
                <div className="people">
                    <Link to={`/people/${getCharacterId(item.url)}`}>
                      <img 
                      src={`${imgUrl}${getCharacterId(item.url)}.jpg`}
                      alt={`${item.name}}`}
                    />
                    <span>{item.name}</span>
                    </Link>
                </div>
            </div>
        ))}
        {search&&(
        <p className='searchText'>Data matching your search wasn't found</p>
        )}
          </div>
      </div>
      }
    </div>
  )
}

export default Home