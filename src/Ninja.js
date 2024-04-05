import React from "react";

const Ninja = (props) => {
  const { ninjas } = props;
  const ninjaList = ninjas.map((ninja) => {
    return (
      <div className="form-row align-items-center ml-2 mb-2" key={ninja.id}>
        <div className="col-md-1">Name: {ninja.name}</div>
        <div className="col-md-1">Age: {ninja.age}</div>
        <div className="col-md-1">Belt: {ninja.belt}</div>
        <div className="col-auto">
          <i type="submit" className="bi bi-pencil"></i>
        </div>
        <div className="col-auto">
          <i type="submit" className="bi bi-trash"></i>
        </div>
      </div>
    );
  });
  return <form>{ninjaList}</form>;
};

export default Ninja;
