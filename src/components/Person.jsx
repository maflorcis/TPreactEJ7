import React from "react";

const Person = (props) => {
  return (
    <div className="col-lg-12">
      <div className="card-box">
        <div className="member-card pt-2 pb-2">
          <div className="thumb-lg member-thumb mx-auto">
            <img
              src={props.img}
              className="rounded-circle img-thumbnail"
              alt="profile-image"
            />
          </div>
          <div class="">
            <h4>{props.name}</h4>
            <p class="text-muted">{props.role}</p>
           <p className="text-white badge bg-primary">{props.sector}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;