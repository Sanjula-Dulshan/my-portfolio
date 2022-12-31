import React, { useState } from "react";
import { useHistory } from "react-router";

const Card = (props) => {
  let history = useHistory();

  const toggleModal = () => {};

  return (
    <>
      <div className="box btn_shadow ">
        <div className="img">
          <img src={props.image} alt="" onClick={toggleModal} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{props.date}</span>
          {/*<label>
            <i className='far fa-heart'></i> {props.date}
          </label>*/}
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title_one}</h2>
          <a
            href="https://medium.com/@it20253530/sql-vs-nosql-a028ee3adede"
            className="arrow"
            onClick={toggleModal}
          >
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
