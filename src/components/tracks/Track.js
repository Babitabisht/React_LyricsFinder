import React from "react";
import { Link } from "react-router-dom";
export const Track = props => {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5> {props.track.artist_name} </h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play">&nbsp; Track :</i>
            </strong>
            {props.track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc">&nbsp; Album :</i>
            </strong>
            {props.track.album_name}
          </p>
          <Link
            to={`lyrics/track/${props.track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right" /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};