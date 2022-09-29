import React from "react";

const Person = (props) => {
  return (
    <div class="col-lg-12">
      <div class="card-box">
        <div class="member-card pt-2 pb-2">
          <div class="thumb-lg member-thumb mx-auto">
            <img
              src={props.img}
              class="rounded-circle img-thumbnail"
              alt="profile-image"
            />
          </div>
          <div class="">
            <h4>{props.name}</h4>
            <p class="text-muted">{props.role}</p>
           <p class="text-muted">{props.sector}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;