import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  function loading() {
    return;
  }
  const [isLoading, setIsLoading] = useState(false);
  const [alimento, setAlimento] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "alimentos", id);
    getDoc(queryDoc)
    .then((res) =>setAlimento({id:res.id,...res.data()}));
  }, [id]);
  return (
    <div>
      {isLoading ? <Loading /> : loading()}
      <div className="cntCNT">
        <ItemDetail alimento={alimento} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
