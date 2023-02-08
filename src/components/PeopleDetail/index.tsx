import React from "react";
import styles from "./index.module.less";
import { useParams } from "react-router-dom";

const PeopleDetail = () => {
  const {id } = useParams();

  return <div>member id : {id}</div>;
};

export default PeopleDetail;
