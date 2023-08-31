import { useEffect, useState } from "react";
import "./CollectionList.scss";
import CollectionService from "../../APIs/services/CollectionService";
import CategoryCard from "../categorycard/CategoryCard";

const CollectionList = () => {
  const [collections, setCollections] = useState([]);

  const GetAllCollection = async () => {
    setCollections(await CollectionService.GetAll());
  };

  useEffect(() => {
    GetAllCollection();
  }, []);
  return (
    <section class="collection__list section">
      <div className="container">
        <div className="collection__content">
          {collections.map((collection) => {
            return <CategoryCard key={collection.id}>{collection}</CategoryCard>;
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectionList;
