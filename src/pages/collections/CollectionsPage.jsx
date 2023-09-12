import React, { useState } from "react";
import Title from "../../components/title/Title";
import Head from "../../components/head/Head";
import CollectionList from "../../components/collectionlist/CollectionList";

const CollectionsPage = () => {
  const [showTitle, setShowTitle] = useState(true);

  return (
    <div>
      {showTitle ? (
        <Title>
          <h3 className="title__head container">COLLECTIONS</h3>
        </Title>
      ) : null}
      <Head>
        <p className="header--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo
          laboriosam ipsam accusamus harum beatae provident culpa inventore
          aspernatur voluptates?
        </p>
      </Head>
      <CollectionList />
    </div>
  );
};

export default CollectionsPage;
