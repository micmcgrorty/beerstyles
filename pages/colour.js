import Head from 'next/head';
import styles from '../styles/Home.module.css';

import classes from './colour.module.css';

import beerStyles from '../data/styles';
import colours from '../data/colours';

const Colour = ({ beerStyles }) => {
  const { beers } = beerStyles;
  return (
    <>
      <Head>
        <title>Colour Guide</title>
        <meta
          name="description"
          content="A list of all BJCP beer styles, showing their colour range."
        />
      </Head>
      <div className={styles.container}>
        <div className={classes.headerContainer}>
          <h3 className={classes.header}>Style</h3>
          <div className={classes.keyContainer}>
            <h3>1</h3>
            <h3>40</h3>
          </div>
        </div>
        {beers.map((section) => {
          return section.subcategories.map((beer) => {
            const { guidelines } = beer;
            const { vitalStatistics } = guidelines;
            const { srm } = vitalStatistics;
            const srmSplit = srm.split(' - ');
            const firstHex = colours[srmSplit[0]];
            const secondHex = colours[srmSplit[1]];
            const firstPercentage = (srmSplit[0] / 40) * 100;
            const secondPercentage = (srmSplit[1] / 40) * 100;
            return (
              <div className={classes.beerContainer}>
                <div className={classes.header}>
                  <h3>{beer.name}</h3>
                </div>
                <div
                  className={classes.detailContainer}
                  style={{
                    background: `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${firstPercentage}%, ${firstHex} ${firstPercentage}%, ${secondHex} ${secondPercentage}%, rgba(255,255,255,1) ${secondPercentage}%, rgba(255,255,255,1) 100%)`
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

export default Colour;
