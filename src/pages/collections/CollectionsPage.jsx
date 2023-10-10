import React, { useState } from "react";
import Title from "../../components/title/Title";
import Head from "../../components/head/Head";
import CollectionList from "../../components/collectionlist/CollectionList";
import { useTranslation } from "react-i18next";

const CollectionsPage = () => {

  const { t } = useTranslation();
  const [showTitle, setShowTitle] = useState(true);

  return (
    <div>
      {showTitle ? (
        <Title>
          <h3 className="title__head container">{ t("title.collections")}</h3>
        </Title>
      ) : null}
      <Head>
        <p className="header--text">
          {t("headertext.collections")}
        </p>
      </Head>
      <CollectionList />
    </div>
  );
};

export default CollectionsPage;
