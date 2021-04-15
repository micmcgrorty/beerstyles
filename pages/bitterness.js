import Head from 'next/head';
import styles from '../styles/Home.module.css';

import beerStyles from '../data/styles';
import colours from '../data/colours';

const Bitterness = ({ beerStyles }) => {
  const { beers } = beerStyles;
  return (
    <div className={styles.container}>
      <Head>
        <title>Beer Styles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: 'flex', width: '100%', padding: '10px 25px' }}>
        <h3 style={{ width: '25%' }}>Style</h3>
        <div
          style={{
            display: 'flex',
            width: '75%',
            justifyContent: 'space-between'
          }}
        >
          <h3>1</h3>
          <h3>120</h3>
        </div>
      </div>
      {beers.map((section) => {
        return section.subcategories.map((beer) => {
          const { guidelines } = beer;
          const { vitalStatistics } = guidelines;
          const { ibu } = vitalStatistics;
          const ibuSplit = ibu.split(' - ');
          const firstPercentage = (ibuSplit[0] / 120) * 100;
          const secondPercentage = (ibuSplit[1] / 120) * 100;
          return (
            <div
              style={{
                width: '100%',
                display: 'flex'
              }}
            >
              <div
                style={{
                  width: '25%'
                }}
              >
                <h3>{beer.name}</h3>
              </div>
              <div
                style={{
                  width: '75%',
                  background: `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${firstPercentage}%, #a8b953 ${firstPercentage}%, #a8b953 ${secondPercentage}%, rgba(255,255,255,1) ${secondPercentage}%, rgba(255,255,255,1) 100%)`
                }}
              />
            </div>
          );
        });
      })}
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      beerStyles
    } // will be passed to the page component as props
  };
}

export default Bitterness;
