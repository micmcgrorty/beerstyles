import Head from 'next/head';
import styles from '../styles/Home.module.css';

import beerStyles from '../data/styles';

const Home = ({ beerStyles }) => {
  const { beers } = beerStyles;
  return (
    <div className={styles.container}>
      <Head>
        <title>Beer Styles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {beers.map((section) => {
        return section.subcategories.map((beer) => {
          const { guidelines } = beer;
          const { vitalStatistics } = guidelines;
          return (
            <div
              style={{
                width: '95%',
                boxShadow:
                  '-5px -10px 13px 0 #fff, 5px 10px 13px 0 rgb(0 0 0 / 15%)',
                padding: '1rem',
                margin: '1rem',
                borderRadius: '10px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  textAlign: 'center',
                  flexWrap: 'wrap'
                }}
              >
                <h3>{beer.name}</h3>
                <div>
                  <p>ABV</p>
                  <p>{vitalStatistics.abv}</p>
                </div>
                <div>
                  <p>OG</p>
                  <p>{vitalStatistics.og}</p>
                </div>
                <div>
                  <p>FG</p>
                  <p>{vitalStatistics.fg}</p>
                </div>
                <div>
                  <p>IBU</p>
                  <p>{vitalStatistics.ibu}</p>
                </div>
                <div>
                  <p>SRM</p>
                  <p>{vitalStatistics.srm}</p>
                </div>
              </div>
              <p>{guidelines.overallImpression}</p>
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

export default Home;
