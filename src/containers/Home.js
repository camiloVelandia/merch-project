import React from 'react';
import Products from '../components/Products'
import initialState from '../initialState'
import {Helmet} from 'react-helmet'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Merch - Productos</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@xander_coder" />
        <meta name="twitter:creator" content="@xander_coder" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Merch Store" />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <meta property="og:title" content="Merch Store" />
        <meta property="og:description" content="Merch Store" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <meta property="og:url" content="https://merch-300216.web.app" />
        <meta property="og:site_name" content="Merch Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products products={initialState.products} />
    </>
  );
};

export default Home;