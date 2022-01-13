import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../../api/tmdbApi';
import apiConfig from '../../../api/apiConfig';

const CastList = props => {
    const {category} = useParams();
    const [cats,setCasts] = useState([]);
    useEffect(() => {
        const getCredits = async ()=>{
            const res = await tmdbApi.credits(category,props.id);
            setCasts(res.cast.slice(0,5));
        }
        getCredits();
   
    }, [category,props.id]);
  return (
    <div className="casts">
        {
            cats.map((item,i)=>(
                <div key={i} className="casts__item">
                    <div className="casts__item__img" style={{backgroundImage:`url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                    <p className="casts_item_name">{item.name}</p>
                </div>
            ))
        }
      
    </div>
  )
}

export default CastList
