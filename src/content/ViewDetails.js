import React from 'react';
import { useParams } from "react-router-dom";
import { tournamentsDatails } from '../common/constants';
import InternalDetailBox from './InternalDetailBox';
const ViewDetails = () => {
    let id = useParams().id
    let tournamentDatails = tournamentsDatails[id];
    return (
      <div className="tournaments">
        <div className="row justify-content-center text-center mb-5">
            <div className="col-md-5" data-aos="fade-up">
              <h2 className="section-heading">{tournamentDatails.name}</h2>
            </div>
        </div>
        <InternalDetailBox id={id}/>
      </div>
    );
}

export default ViewDetails;