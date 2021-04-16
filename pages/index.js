import Head from 'next/head';
import styles from '../styles/Home.module.css';

import classes from './index.module.css';

import beerStyles from '../data/styles';

const Home = ({ beerStyles }) => {
  const { beers } = beerStyles;
  return (
    <>
      <Head>
        <title>BJCP Beer Styles</title>
        <meta
          name="description"
          content="A list of all BJCP beer styles displaying their vital statistics."
        />
      </Head>
      <title>Beer Styles</title>
      <div className={styles.container}>
        {beers.map((section) => {
          return section.subcategories.map((beer) => {
            const { guidelines } = beer;
            const { vitalStatistics } = guidelines;
            return (
              <div className={classes.beerContainer}>
                <div className={classes.detailsRow}>
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
    </>
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
