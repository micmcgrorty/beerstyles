import Head from 'next/head';
import styles from '../styles/Home.module.css';

import classes from './colour.module.css';

import beerStyles from '../data/styles';

const Bitterness = ({ beerStyles }) => {
  const { beers } = beerStyles;
  return (
    <>
      <Head>
        <title>Bitterness Guide</title>
        <meta
          name="description"
          content="A list of all BJCP beer styles, showing their bitterness range."
        />
      </Head>
      <div className={styles.container}>
        <div className={classes.headerContainer}>
          <h3 className={classes.header}>Style</h3>
          <div className={classes.keyContainer}>
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
              <div className={classes.beerContainer}>
                <div className={classes.header}>
                  <h3>{beer.name}</h3>
                </div>
                <div
                  className={classes.detailContainer}
                  style={{
                    background: `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${firstPercentage}%, #a8b953 ${firstPercentage}%, #a8b953 ${secondPercentage}%, rgba(255,255,255,1) ${secondPercentage}%, rgba(255,255,255,1) 100%)`
                  }}
                />
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

export default Bitterness;
