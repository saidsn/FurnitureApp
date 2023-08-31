import React from "react";
import BredCrumbs from "../../components/bredcrumbs/BredCrumbs";
import Title from "../../components/title/Title";
import Head from "../../components/head/Head";
import CollectionList from "../../components/collectionlist/CollectionList";

const CollectionsPage = () => {
  return (
    <div>
      <BredCrumbs />
      <Title>
        <h3 className="title__head">COLLECTIONS</h3>
      </Title>
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
