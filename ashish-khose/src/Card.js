import React from "react";

let Card = (props) => {
  if (props.proData) {
    return props.proData.map((items) => {
      return (
        <div className="card-div">
          <div className="card-img-div">
            <img
              src={items.imageUrl}
              alt="img not found"
              className="card-img"
            />
          </div>
          <div className="card-body">
            <div className="card-desc">
              <h3>{items.companyId.name}</h3>
            </div>
          </div>
        </div>
      );
    });
  }
};
export default Card;
