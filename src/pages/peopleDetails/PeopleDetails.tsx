import axios from 'axios';
import { useState, useEffect,useCallback  } from 'react';
import {API} from '../../constants/api';
import { people } from '../../types/Character';
import Loading from '../../components/Loading/Loading';
import { useNavigate,useParams } from 'react-router-dom';
import { peopleHomeWorld } from '../../types/Character';
import { convertBBY } from '../../components/formatDate/FormatDate';
import './peopleDetails.css';

const PeopleDetails = () => {
    
    const [people, setPeople]=useState<people>();
    const [peopleHomeWorld, setPeopleHomeWorld]=useState<peopleHomeWorld>();
    const [loading,setLoading] = useState<boolean>(true);

    const navigate = useNavigate();
    const {id}=useParams();
    const imgUrl = 'https://starwars-visualguide.com/assets/img/characters/'


    const getPeopleDetails = useCallback(async () => {
      try {
        const response = await API.get(`/people/${id}`);
        setPeople(response.data);
        setLoading(false);
      } catch (error) {
        console.log("can't load data")
    }
    }, [id]);
  
    useEffect(() => {
      getPeopleDetails();
    }, [getPeopleDetails]);


    const homeWorldInfo=async()=>{
        try {
            if(people?.homeworld) {
                const response=await axios.get(people.homeworld);
                setPeopleHomeWorld(await response.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

      
    useEffect(()=>{
      homeWorldInfo()
  },[{}])


  return (
    <div className='wrapper-size people_wrapper'>
        {loading?(
        <Loading />
      ) : (people?.homeworld&&
        <div className='people_details_wrapper'>
             <div className="back">
                <button
                onClick={() => navigate(-1)}>
                Back
                </button>
            </div>
            <div className="people_details">
            <div className="image">
               <img
                src={`${imgUrl}${id}.jpg`}
                alt={`${people?.name}`}
                />
            </div>
            <div className="info-wrapper">
            <div className="info">
                <h1>Name:{people?.name}</h1>
                <span>Height:{people?.height}cm</span>
                <span>Mass:{people?.mass}kg</span>
                <span>Birth_year:</span><span>{convertBBY(people?.birth_year)}</span>
                <span>Films:{people?.films.length}</span>
            </div>
            <div className="homeworld">
                <h2>Homeworld Information</h2>
                <span>Name:{peopleHomeWorld?.name}</span>
                <span>Terrain{peopleHomeWorld?.terrain}</span>
                <span>Climate:{peopleHomeWorld?.climate}</span>
                <span>Residents:{peopleHomeWorld?.residents.length}</span>
            </div>
            </div>
            </div>
        </div>    
      )}
    </div>
  )
}

export default PeopleDetails