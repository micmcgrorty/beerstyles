const styles = {
  beers: [
    {
      name: 'American Standard',
      number: 1,
      subcategories: [
        {
          name: 'American Light Lager',
          letter: 'A',
          guidelines: {
            overallImpression:
              'Highly carbonated, very light-bodied, nearly flavorless lager designed to be consumed very cold. Very refreshing and thirst quenching.',
            aroma:
              'Low to no malt aroma, although it can be perceived as grainy, sweet, or corn-like if present. Hop aroma is light to none, with a spicy or floral hop character if present. While a clean fermentation character is desirable, a light amount of yeast character (particularly a light apple fruitiness) is not a fault. Light DMS is not a fault.',
            appearance:
              'Very pale straw to pale yellow color. White, frothy head seldom persists. Very clear.',
            flavor:
              'Relatively neutral palate with a crisp and dry finish and a low to very low grainy or corn-like flavor that might be perceived as sweetness due to the low bitterness. Hop flavor ranges from none to low levels, and can have a floral, spicy, or herbal quality (although rarely strong enough to detect). Low to very low hop bitterness. Balance may vary from slightly malty to slightly bitter, but is relatively close to even. High levels of carbonation may accentuate the crispness of the dry finish. Clean lager fermentation character.',
            mouthfeel:
              'Very light (sometimes watery) body. Very highly carbonated with slight carbonic bite on the tongue.',
            comments:
              'Designed to appeal to as broad a range of the general public as possible. Strong flavors are a fault.',
            history:
              'Coors briefly made a light lager in the early 1940s. Modern versions were first produced by Rheingold in 1967 to appeal to diet-conscious drinkers, but only became popular starting in 1973 after Miller Brewing acquired the recipe and marketed the beer heavily to sports fans with the “tastes great, less filling” campaign. Beers of this genre became the largest sellers in the United States in the 1990s.',
            ingredients:
              'Two- or six-row barley with high percentage (up to 40%) of rice or corn as adjuncts. Additional enzymes can further lighten the body and lower carbohydrates.',
            comparison:
              'A lighter-bodied, lower-alcohol, lower calorie version of an American Lager. Less hop character and bitterness than a Leichtbier. ',
            vitalStatistics: {
              og: '1.028 - 1.040',
              fg: '0.998 - 1.008',
              abv: '2.8 - 4.2%',
              ibu: '8 - 12',
              srm: '2 - 3'
            }
          },
          commercialExamples: [
            {
              name: 'Bud Light'
            },
            {
              name: 'Coors Light'
            },
            {
              name: 'Keystone Light'
            },
            {
              name: 'Michelob  Light'
            },
            {
              name: 'Miller Light'
            },
            {
              name: 'Old Milwaukee'
            }
          ],
          tags: [
            {
              tag: 'session-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'session-strength'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'pale-lager-family'
            },
            {
              tag: 'balanced'
            }
          ]
        },
        {
          name: 'American Lager',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A very pale, highly-carbonated, lightbodied, well-attenuated lager with a very neutral flavor profile and low bitterness. Served very cold, it can be a very refreshing and thirst quenching drink.',
            aroma:
              'Low to no malt aroma, although it can be perceived as grainy, sweet or corn-like if present. Hop aroma may range from none to a light, spicy or floral hop presence. While a clean fermentation character is desirable, a light amount of yeast character (particularly a light apple character) is not a fault. Light DMS is also not a fault.',
            appearance:
              'Very pale straw to medium yellow color. White, frothy head seldom persists. Very clear.',
            flavor:
              'Relatively neutral palate with a crisp and dry finish and a moderately-low to low grainy or corn-like flavor that might be perceived as sweetness due to the low bitterness. Hop flavor ranges from none to moderately-low levels, and can have a floral, spicy, or herbal quality (although often not strong enough to distinguish). Hop bitterness at low to medium-low level. Balance may vary from slightly malty to slightly bitter, but is relatively close to even. High levels of carbonation may accentuate the crispness of the dry finish. Clean lager fermentation character.',
            mouthfeel:
              'Low to medium-low body. Very highly carbonated with slight carbonic bite on the tongue.',
            comments:
              'Strong flavors are a fault. Often what non-craft beer drinkers expect to be served if they order beer in the United States. May be marketed as Pilsner beers outside of Europe, but should not be confused with traditional examples.',
            history:
              'Although German immigrants had brewed traditional Pilsner-inspired lager beer in the United States since the mid-late 1800s, the modern American lager style was heavily influenced by Prohibition and World War II. Surviving breweries consolidated, expanded distribution, and heavily promoted a beer style that was appealing to a broad range of the population. Became the dominant beer style for many decades, and spawning many international rivals who would develop similarly bland products for the mass market supported by heavy advertising.',
            ingredients:
              'Two- or six-row barley with high percentage (up to 40%) of rice or corn as adjuncts.',
            comparison:
              'Stronger, more flavor and body than a Light American Lager. Less bitterness and flavor than an International Lager. Significantly less flavor, hops, and bitterness than traditional European Pilsners.',

            vitalStatistics: {
              og: '1.040 - 1.050',
              fg: '1.004 - 1.010',
              abv: '4.2 - 5.3%',
              ibu: '8 - 18',
              srm: '2 - 4'
            }
          },
          commercialExamples: [
            {
              name: 'Budweiser'
            },
            {
              name: 'Coors Original'
            },
            {
              name: 'Grain Belt Premium Lager'
            },
            {
              name: 'Miller High Life'
            },
            {
              name: 'Pabst Blue Ribbon'
            },
            {
              name: 'Special Export'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'pale-lager-family'
            },
            {
              tag: 'balanced'
            }
          ]
        },
        {
          name: 'Cream Ale',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A clean, well-attenuated, flavorful American “lawnmower” beer. Easily drinkable and refreshing, with more character than typical American lagers.',
            aroma:
              'Medium-low to low malt notes, with a sweet, cornlike aroma. Low levels of DMS are allowable, but are not required. Hop aroma medium low to none, and can be of any variety although floral, spicy, or herbal notes are most common. Overall, a subtle aroma with neither hops nor malt dominating. Low fruity esters are optional.',
            appearance:
              'Pale straw to moderate gold color, although usually on the pale side. Low to medium head with medium to high carbonation. Fair head retention. Brilliant, sparkling clarity.',
            flavor:
              'Low to medium-low hop bitterness. Low to moderate maltiness and sweetness, varying with gravity and attenuation. Usually well-attenuated. Neither malt nor hops dominate the palate. A low to moderate corny flavor is commonly found, as is light DMS (optional). Finish can vary from somewhat dry to faintly sweet. Low fruity esters are optional. Low to mediumlow hop flavor (any variety, but typically floral, spicy, or herbal).',
            mouthfeel:
              'Generally light and crisp, although body can reach medium. Smooth mouthfeel with medium to high attenuation; higher attenuation levels can lend a “thirst quenching” quality. High carbonation.',
            comments:
              'Pre-prohibition Cream Ales were slightly stronger, hoppier (including some dry hopping) and more bitter (25-30+ IBUs). These versions should be entered in the historical category. Most commercial examples are in the 1.050–1.053 OG range, and bitterness rarely rises above 20 IBUs.',
            history:
              'A sparkling or present-use ale that existed in the 1800s and survived prohibition. An ale version of the American lager style. Produced by ale brewers to compete with lager brewers in Canada and the Northeast, Mid-Atlantic, and Midwest states. Originally known as sparkling or present use ales, lager strains were (and sometimes still are) used by some brewers, but were not historically mixed with ale strains. Many examples are kräusened to achieve carbonation. Cold conditioning isn’t traditional, although modern brewers sometimes use it.',
            ingredients:
              'American ingredients most commonly used. A grain bill of six-row malt, or a combination of six-row and North American two-row, is common. Adjuncts can include up to 20% maize in the mash, and up to 20% glucose or other sugars in the boil. Any variety of hops can be used for bittering and finishing.',
            comparison:
              'Similar to a Standard American Lager, but with more character.',

            vitalStatistics: {
              og: '1.042 - 1.055',
              fg: '1.006 - 1.012',
              abv: '4.2 - 5.6%',
              ibu: '8 - 20',
              srm: '2.5 - 5'
            }
          },
          commercialExamples: [
            {
              name: 'Genesee Cream Ale'
            },
            {
              name: 'Liebotschaner Cream Ale'
            },
            {
              name: 'Little Kings Cream Ale'
            },
            {
              name: 'New Glarus Spotted Cow'
            },
            {
              name: 'Old Style'
            },
            {
              name: 'Sleeman Cream Ale'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'any-fermentation'
            },
            {
              tag: 'northamerica'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'pale-ale-family'
            },
            {
              tag: 'balanced'
            }
          ]
        },
        {
          name: 'American Wheat Beer',
          letter: 'D',
          guidelines: {
            overallImpression:
              'Refreshing wheat beers that can display more hop character and less yeast character than their German cousins. A clean fermentation character allows bready, doughy, or grainy wheat flavors to be complemented by hop flavor and bitterness rather than yeast qualities.',
            aroma:
              'Low to moderate grainy, bready, or doughy wheat character. A light to moderate malty sweetness is acceptable. Esters can be moderate to none, although should reflect relatively neutral yeast strains; banana is inappropriate. Hop aroma may be low to moderate, and can have a citrusy, spicy, floral, or fruity character. No clove phenols.',
            appearance:
              'Usually pale yellow to gold. Clarity may range from brilliant to hazy with yeast approximating the German weissbier style of beer. Big, long-lasting white head.',
            flavor:
              'Light to moderately-strong bready, doughy, or grainy wheat flavor, which can linger into the finish. May have a moderate malty sweetness or finish quite dry. Low to moderate hop bitterness, which sometimes lasts into the finish. Balance is usually even, but may be slightly bitter. Low to moderate hop flavor (citrusy, spicy, floral, or fruity). Esters can be moderate to none, but should not include banana. No clove phenols. May have a slightly crisp finish.',
            mouthfeel:
              'Medium-light to medium body. Medium-high to high carbonation. Slight creaminess is optional; wheat beers sometimes have a soft, ‘fluffy’ impression.',
            comments:
              'Different variations exist, from an easy-drinking fairly sweet beer to a dry, aggressively-hopped beer with a strong wheat flavor. American rye beers should be entered in the Alternative Fermentables specialty category.',
            history:
              'An American craft beer adaptation of the German weissbier style using a cleaner yeast and more hops, first widely popularized by Widmer in the mid-1980s.',
            ingredients:
              'Clean American ale or lager yeast (German weissbier yeast is inappropriate). Large proportion of wheat malt (often 30–50%, which is lower than is typical in German weissbiers). American, German, or New World hops are typical.',
            comparison:
              'More hop character and less yeast character than German weissbier. Never with the banana and clove character of German weissbier. Generally can have the same range and balance as Blonde Ales, but with a wheat character as the primary malt flavor.',

            vitalStatistics: {
              og: '1.040 - 1.055',
              fg: '1.008 - 1.013',
              abv: '4.0 - 5.5%',
              ibu: '15 - 30',
              srm: '3 - 6'
            }
          },
          commercialExamples: [
            {
              name: 'Bell’s Oberon'
            },
            {
              name: 'Boulevard Unfiltered Wheat Beer'
            },
            {
              name: 'Goose Island 312 Urban Wheat Ale'
            },
            {
              name: 'Widmer Hefeweizen'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'any-fermentation'
            },
            {
              tag: 'northamerica'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'wheat-beer-family'
            },
            {
              tag: 'balanced'
            }
          ]
        }
      ]
    },
    {
      name: 'International Lager',
      number: 2,
      subcategories: [
        {
          name: 'International Pale Lager',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A highly-attenuated pale lager without strong flavors, typically well-balanced and highly carbonated. Served cold, it is refreshing and thirst-quenching.',
            aroma:
              'Low to medium-low malt aroma, which can be grainymalty or slightly corny-sweet. Hop aroma may range from very low to a medium, spicy or floral hop presence. While a clean fermentation profile is generally most desirable, low levels of yeast character (such as a light apple fruitiness) are not a fault. A light amount of DMS or corn aroma is not a fault.',
            appearance:
              'Pale straw to gold color. White, frothy head may not be long lasting. Very clear.',
            flavor:
              'Low to moderate levels of grainy-malt flavor, with a crisp, dry, well-attenuated finish. The grain character can be somewhat neutral, or show a light bready-crackery quality or up to moderate corny or malty sweetness. Hop flavor ranges from none to medium levels, and often showing a floral, spicy, or herbal character if detected. Hop bitterness at medium-low to medium level. Balance may vary from slightly malty to slightly bitter, but is relatively close to even. Neutral aftertaste with light malt and sometimes hop flavors. A light amount of DMS is not a fault.',
            mouthfeel:
              'Light to medium body. Moderately high to highly carbonated. Can have a slight carbonic bite on the tongue.',
            comments:
              'International lagers tend to have fewer adjuncts than standard American lagers. They may be all-malt, although strong flavors are still a fault. A broad category of international mass-market lagers ranging from up-scale American lagers to the typical “import” or “green bottle” international beers found in America and many export markets. Often confusingly labeled as a “Pilsner.” Any skunkiness in commercial beers from being lightstruck in a green bottle is a mishandling fault, not a characteristic of the style.',
            history:
              'In the United States, developed as a premium version of the standard American lager, with a similar history. Outside the United States, developed either as an imitation of American style lagers, or as a more accessible (and often drier and less bitter) version of a Pilsner-type beer. Often heavily marketed and exported by large industrial or multi-national breweries.',
            ingredients:
              'Two- or six-row barley. May use rice, corn, or sugar as adjuncts, or may be all malt.',
            comparison:
              'Generally more bitter and filling than American lager. Less hoppy and bitter than a German Pils. Less body, malt flavor, and hop character than a Czech Premium Pale Lager. More robust versions can approach a Munich Helles in flavor, although with more of an adjunct quality.',
            vitalStatistics: {
              og: '1.042 - 1.050',
              fg: '1.008 - 1.012',
              abv: '2.8 - 4.2%',
              ibu: '18 - 25',
              srm: '2 - 6'
            }
          },
          commercialExamples: [
            {
              name: 'Asahi Super Dry'
            },
            {
              name: 'Birra Moretti'
            },
            {
              name: 'Corona Extra'
            },
            {
              name: 'Devils Backbone Gold Leaf Lager'
            },
            {
              name: 'Full Sail Session Premium Lager'
            },
            {
              name: 'Heineken'
            },
            {
              name: 'Red Stripe'
            },
            {
              name: 'Singha'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'pale-lager-family'
            },
            {
              tag: 'balanced'
            }
          ]
        },
        {
          name: 'International Amber Lager',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A well-attenuated malty amber lager with an interesting caramel or toast quality and restrained bitterness. Usually fairly well-attenuated, often with an adjunct quality. Smooth, easily-drinkable lager character.',
            aroma:
              'Low to moderate malt aroma which can be grainy, with a very low to moderate caramel-sweet to toasty-malty aroma. Hop aroma can range from low to none with a mildly floral or spicy character. Clean lager profile. A slight DMS or corny aroma is acceptable.',
            appearance:
              'Golden-amber to reddish-copper color. Bright clarity. White to off-white foam stand which may not last.',
            flavor:
              'Low to moderate malt profile which can vary from dry to grainy-sweet. Low to moderate levels of caramel and toastybready notes can be evident. Low to medium-low corny sweetness is optional, but not a fault. Hop bitterness is low to moderate, and hop flavor is low to moderate with a spicy, herbal, or floral character. The balance can be fairly malty to nearly even, with the bitterness becoming more noticeable but not objectionable. The bitterness level can increase if the malt character increases to match. Clean fermentation profile. Finish is moderately dry with a moderately malty aftertaste.',
            mouthfeel:
              'Light to medium body. Medium to high carbonation. Smooth; some examples can be creamy.',
            comments:
              'A wide spectrum of mass-market Amber lagers developed either independently in various countries, or describing rather generic amber beers that may have had more historical relevance but who eventually changed into an indistinguishable product in modern times.',
            history:
              'Varies by country, but generally represents an adaptation of the mass-market International Lager or an evolution of indigenous styles into a more generic product.',
            ingredients:
              'Two-row or six-row base malt. Color malts such as victory, amber, etc. Caramel malt adjuncts. European or American hops or a combination of both.',
            comparison:
              'Less well-developed malt flavor than a Vienna lager, often with an adjunct taste.',
            vitalStatistics: {
              og: '1.042 - 1.055',
              fg: '1.008 - 1.014',
              abv: '4.6 - 6.0%',
              ibu: '8 - 25',
              srm: '7 - 14'
            }
          },
          commercialExamples: [
            {
              name: 'Brooklyn Lager'
            },
            {
              name: 'Capital Winter Skål'
            },
            {
              name: 'Dos Equis Amber'
            },
            {
              name: 'Schell’s Oktoberfest'
            },
            {
              name: 'Yuengling Lager'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'amber-lager-family'
            },
            {
              tag: 'malty'
            }
          ]
        },
        {
          name: 'International Dark Lager',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A darker and somewhat sweeter version of international pale lager with a little more body and flavor, but equally restrained in bitterness. The low bitterness leaves the malt as the primary flavor element, and the low hop levels provide very little in the way of balance.',
            aroma:
              'Little to no malt aroma; may have a light corn character. Medium-low to no roast and caramel malt aroma. Hop aroma may range from none to light spicy or floral hop presence. While a clean fermentation profile is generally most desirable, low levels of yeast character (such as a light apple fruitiness) are not a fault. A light amount of DMS or corn aroma is not a fault.',
            appearance:
              'Deep amber to dark brown with bright clarity and ruby highlights. Foam stand may not be long lasting, and is beige to light tan in color.',
            flavor:
              'Low to medium malty sweetness with medium-low to no caramel and/or roasted malt flavors (and may include hints of coffee, molasses or cocoa). Hop flavor ranges from none to low levels, and is typically floral, spicy, or herbal. Low to medium hop bitterness. May have a very light fruitiness. Moderately crisp finish. The balance is typically somewhat malty. Burnt or moderately strong roasted malt flavors are a defect. ',
            mouthfeel:
              'Light to medium-light body. Smooth with a light creaminess. Medium to high carbonation.',
            comments:
              'A broad range of international lagers that are darker than pale, and not assertively bitter and/or roasted.',
            history:
              'Darker versions of International Pale Lagers often created by the same large, industrial breweries and meant to appeal to a broad audience. Often either a colored or sweetened adaptation of the standard pale industrial lager, or a more broadly accessible (and inexpensive) version of more traditional dark lagers.',
            ingredients:
              'Two- or six-row barley, corn, rice, or sugars as adjuncts. Light use of caramel and darker malts. Commercial versions may use coloring agents.',
            comparison:
              'Less flavor and richness than Munich Dunkel, Schwarzbier, or other dark lagers. Frequently uses adjuncts, as is typical of other International Lagers.',
            vitalStatistics: {
              og: '1.044 - 1.056',
              fg: '1.008 - 1.012',
              abv: '4.2 - 6.0%',
              ibu: '8 - 20',
              srm: '14 - 22'
            }
          },
          commercialExamples: [
            {
              name: 'Baltika #4 Original'
            },
            {
              name: 'Devils Backbone Old Virginia Dark'
            },
            {
              name: 'Dixie Blackened Voodoo, Saint Pauli Girl Dark'
            },
            {
              name: 'San Miguel Dark'
            },
            {
              name: 'Session Black Dark Lager'
            },
            {
              name: 'Shiner Bock'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'dark-lager-family'
            },
            {
              tag: 'malty'
            }
          ]
        }
      ]
    },
    {
      name: 'Czech Lager',
      number: 3,
      subcategories: [
        {
          name: 'Czech Pale Lager',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A lighter-bodied, rich, refreshing, hoppy, bitter pale Czech lager having the familiar flavors of the stronger Czech Premium Pale Lager (Pilsner-type) beer but in a lower alcohol, lighter-bodied, and slightly less intense format.',
            aroma:
              'Light to moderate bready-rich malt combined with light to moderate spicy or herbal hop bouquet; the balance between the malt and hops may vary. Faint hint of caramel is acceptable. Light (but never intrusive) diacetyl and light, fruity hop-derived esters are acceptable, but need not be present. No sulfur.',
            appearance:
              'Light gold to deep gold color. Brilliant to very clear, with a long-lasting, creamy white head. ',
            flavor:
              'Medium-low to medium bready-rich malt flavor with a rounded, hoppy finish. Low to medium-high spicy or herbal hop flavor. Bitterness is prominent but never harsh. Flavorful and refreshing. Diacetyl or fruity esters are acceptable at low levels, but need not be present and should never be overbearing.',
            mouthfeel: 'Medium-light to medium body. Moderate carbonation. ',
            comments: 'The Czech name of the style is světlé výčepní pivo. ',
            history:
              'Josef Groll initially brewed two types of beer in 1842–3, a výčepní and a ležák, with the smaller beer having twice the production; Evan Rail speculates that these were probably 10 °P and 12 °P beers, but that the výčepní could have been weaker. This is the most consumed type of beer in the Czech Republic at present.',
            ingredients:
              'Soft water with low sulfate and carbonate content, Saazer-type hops, Czech Pilsner malt, Czech lager yeast. Low ion water provides a distinctively soft, rounded hop profile despite high hopping rates.',
            comparison:
              'A lighter-bodied, lower-intensity, refreshing, everyday version of Czech Premium Pale Lager.',
            vitalStatistics: {
              og: '1.028 - 1.044',
              fg: '1.008 - 1.014',
              abv: '3.0 - 4.1%',
              ibu: '20 - 35',
              srm: '3 - 6'
            }
          },
          commercialExamples: [
            {
              name: 'Březňák Světlé výčepní pivo'
            },
            {
              name: 'Notch Session Pils'
            },
            {
              name: 'Pivovar Kout na Šumavě Koutská 10°'
            },
            {
              name: 'Únětické pivo 10°'
            }
          ],
          tags: [
            {
              tag: 'session-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'pale-lager-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'Czech Premium Pale Lager',
          letter: 'B',
          guidelines: {
            overallImpression:
              'Rich, characterful, pale Czech lager, with considerable malt and hop character and a long, rounded finish. Complex yet well-balanced and refreshing. The malt flavors are complex for a Pilsner-type beer, and the bitterness is strong but clean and without harshness, which gives a rounded impression that enhances drinkability.',
            aroma:
              'Medium to medium-high bready-rich malt and medium-low to medium-high spicy, floral, or herbal hop bouquet; though the balance between the malt and hops may vary, the interplay is rich and complex. Light diacetyl, or very low fruity hop-derived esters are acceptable, but need not be present. ',
            appearance:
              'Gold to deep gold color. Brilliant to very clear clarity. Dense, long-lasting, creamy white head.',
            flavor:
              'Rich, complex, bready maltiness combined with a pronounced yet soft and rounded bitterness and floral and spicy hop flavor. Malt and hop flavors are medium to mediumhigh, and the malt may contain a slight impression of caramel. Bitterness is prominent but never harsh. The long finish can be balanced towards hops or malt but is never aggressively tilted either way. Light to moderate diacetyl and low hop-derived esters are acceptable, but need not be present.',
            mouthfeel: 'Medium body. Moderate to low carbonation. ',
            comments:
              'Generally a group of pivo Plzeňského typu, or Pilsner-type beers. This style is a combination of the Czech styles světlý ležák (11–12.9 °P) and světlé speciální pivo (13– 14.9 °P). In the Czech Republic, only Pilsner Urquell is called a Pilsner, despite how widely adopted this name is worldwide. Kvasnicové (“yeast beer”) versions are popular in the Czech Republic, and may be either kräusened with yeasted wort or given a fresh dose of pure yeast after fermentation. These beers are sometimes cloudy, with subtle yeastiness and enhanced hop character. Modern examples vary in their malt to hop balance and many are not as hop-forward as Pilsner Urquell.',
            history:
              'Commonly associated with Pilsner Urquell, which was first brewed in 1842 after construction of a new brewhouse by burghers dissatisfied with the standard of beer brewed in Plzeň. Bavarian brewer Josef Groll is credited with first brewing the beer.',
            ingredients:
              'Soft water with low sulfate and carbonate content, Saazer-type hops, Czech malt, Czech lager yeast. Low ion water provides a distinctively soft, rounded hop profile despite high hopping rates. The bitterness level of some larger commercial examples has dropped in recent years, although not as much as in many contemporary German examples.',
            comparison:
              'More color, malt richness, and body than a German Pils, with a fuller finish and a cleaner, softer impression. Stronger than a Czech Pale Lager.',

            vitalStatistics: {
              og: '1.044 - 1.060',
              fg: '1.013 - 1.017',
              abv: '4.2 - 5.8%',
              ibu: '30 - 45',
              srm: '3.5 - 6'
            }
          },
          commercialExamples: [
            {
              name: 'Bernard Sváteční ležák'
            },
            {
              name: 'Gambrinus Premium'
            },
            {
              name: 'Kout na Šumavě Koutská 12°'
            },
            {
              name: 'Pilsner Urquell'
            },
            {
              name: 'Pivovar Jihlava Ježek 11°'
            },
            {
              name: 'Primátor Premium'
            },
            {
              name: 'Únětická 12°'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'pilsner-family'
            },
            {
              tag: 'balanced'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'Czech Amber Lager',
          letter: 'C',
          guidelines: {
            overallImpression:
              'Malt-driven amber Czech lager with hop character that can vary from low to quite significant. The malt flavors can vary quite a bit, leading to different interpretations ranging from drier, bready, and slightly biscuity to sweeter and somewhat caramelly',
            aroma:
              'Moderate intensity, rich malt aroma that can be either bready and Maillard product-dominant or slightly caramelly and candy-like. Spicy, floral or herbal hop character may be moderate to none. Clean lager character, though low fruity esters (stone fruit or berries) may be present. Diacetyl is optional and can range from low to none.',
            appearance:
              'Deep amber to copper color. Clear to bright clarity. Large, off-white, persistent head. ',
            flavor:
              'Complex malt flavor is dominant (medium to medium-high), though its nature may vary from dry and Maillard product-dominant to caramelly and almost sweet. Some examples have a candy-like to graham-cracker malt character. Low to moderate spicy hop flavor. Prominent but clean hop bitterness provides a balanced finish. Subtle plum or berry esters optional. Low diacetyl optional. No roasted malt flavor. Finish may vary from dry and hoppy to relatively sweet.',
            mouthfeel:
              'Medium-full to medium body. Soft and round, often with a gentle creaminess. Moderate to low carbonation.',
            comments:
              'The Czech name of the style is polotmavé pivo, which translates as half dark. This style is a combination of the Czech styles polotmavý ležák (11–12.9 °P) and polotmavé speciální pivo (13–14.9 °P).',
            history:
              'A Vienna-style lager which has continued to be brewed in the Czech Republic. A resurgence of small breweries opening in the Czech Republic has increased the number of examples of this style. ',
            ingredients:
              'Pilsner and caramel malts, but Vienna and Munich malts may also be used. Low mineral content water, Saazer-type hops, Czech lager yeast.',
            comparison:
              'The style can be similar to a Vienna lager but with Saazer-type hop character, or that approaching an English bitter but significantly richer with more of a deep caramel character. Large brewery versions are generally similar to Czech Premium Pale Lager with slightly darker malt flavors and less hop, while smaller breweries often make versions with considerable hop character, malt complexity, or residual sweetness.',

            vitalStatistics: {
              og: '1.044 - 1.060',
              fg: '1.013 - 1.017',
              abv: '4.4 - 5.8%',
              ibu: '20 - 35',
              srm: '10 - 16'
            }
          },
          commercialExamples: [
            {
              name: 'Bernard Jantarový ležák'
            },
            {
              name: 'Pivovar Vysoký Chlumec Démon'
            },
            {
              name: 'Primátor polotmavý 13°'
            },
            {
              name: 'Strakonický Dudák Klostermann polotmavý ležák 13°'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'amber-lager-family'
            },
            {
              tag: 'balanced'
            }
          ]
        },
        {
          name: 'Czech Dark Lager',
          letter: 'D',
          guidelines: {
            overallImpression:
              'A rich, dark, malty Czech lager with a roast character that can vary from almost absent to quite prominent. Malty with an interesting and complex flavor profile, with variable levels of hopping providing a range of possible interpretations.',
            aroma:
              'Medium to medium-high rich, deep, sometimes sweet maltiness, with optional qualities such as bread crusts, toast, nuts, cola, dark fruit, or caramel. Roasted malt characters such as chocolate or sweetened coffee can vary from moderate to none but should not overwhelm the base malt character. Low, spicy hop aroma is optional. Low diacetyl and low fruity esters (plums or berries) may be present.',
            appearance:
              'Dark copper to almost black color, often with a red or garnet tint. Clear to bright clarity. Large, off-white to tan, persistent head.',
            flavor:
              'Medium to medium-high deep, complex maltiness dominates, typically with malty-rich Maillard products and a light to moderate residual malt sweetness. Malt flavors such as caramel, toast, nuts, licorice, dried dark fruit, chocolate and coffee may also be present, with very low to moderate roast character. Spicy hop flavor can be moderately-low to none. Hop bitterness may be moderate to medium-low but should be perceptible. Balance can vary from malty to relatively wellbalanced to gently hop-forward. Low to moderate diacetyl and light plum or berry esters may be present. ',
            mouthfeel:
              'Medium to medium-full body, considerable mouthfeel without being heavy or cloying. Moderately creamy in texture. Smooth. Moderate to low carbonation. Can have a slight alcohol warmth in stronger versions.',
            comments:
              'This style is a combination of the Czech styles tmavý ležák (11–12.9 °P) and tmavé speciální pivo (13–14.9 °P). More modern examples are drier and have higher bitterness while traditional versions often have IBUs in the 18– 20 range with a sweeter balance.',
            history:
              'The U Fleků brewery has been operating in Prague since 1499. Many small, new breweries are brewing this style.',
            ingredients:
              'Pilsner and dark caramel malts with the addition of debittered roasted malts are most common, but additions of Vienna or Munich malt are also appropriate. Low mineral content water, Saazer-type hops, Czech lager yeast. Any fruity esters are typically from malt, not yeast.',
            comparison:
              'The beer is the Czech equivalent of a dark lager ranging in character from Munich Dunkel to Schwarzbier, but typically with greater malt richness and hop character (aroma, flavor, and/or bitterness).',

            vitalStatistics: {
              og: '1.044 - 1.060',
              fg: '1.013 - 1.017',
              abv: '4.4 - 5.8%',
              ibu: '18 - 34',
              srm: '14 - 35'
            }
          },
          commercialExamples: [
            {
              name: 'Bohemian Brewery Cherny Bock 4%'
            },
            {
              name: 'Budweiser Budvar B:Dark tmavý ležák'
            },
            {
              name: 'Devils Backbone Morana'
            },
            {
              name: 'Kout na Šumavě Koutský tmavý speciál 14°'
            },
            {
              name: 'Notch Černé Pivo'
            },
            {
              name: 'Pivovar Březnice Herold'
            },
            {
              name: 'U Fleků Flekovský tmavý 13° ležák'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'dark-lager-family'
            },
            {
              tag: 'balanced'
            }
          ]
        }
      ]
    },
    {
      name: 'Pale Malty European Lager',
      number: 4,
      subcategories: [
        {
          name: 'Munich Helles',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A clean, malty, gold-colored German lager with a smooth grainy-sweet malty flavor and a soft, dry finish. Subtle spicy, floral, or herbal hops and restrained bitterness help keep the balance malty but not sweet, which helps make this beer a refreshing, everyday drink.',
            aroma:
              'Moderate grainy-sweet malt aroma. Low to moderately-low spicy, floral, or herbal hop aroma. While a clean aroma is most desirable, a very low background note of DMS is not a fault. Pleasant, clean fermentation profile, with malt dominating the balance. The freshest examples will have more of a malty-sweet aroma.',
            appearance:
              'Medium yellow to pale gold. Clear. Persistent creamy white head.',
            flavor:
              'Moderately malty start with the suggestion of sweetness, moderate grainy-sweet malt flavor with a soft, rounded palate impression, supported by a low to medium-low hop bitterness. The finish is soft and dry, not crisp and biting. Low to moderately-low spicy, floral or herbal hop flavor. The malt dominates the hops in the palate, finish, and aftertaste, but the hops should be noticeable. There should not be any residual sweetness, simply the impression of maltiness with restrained bitterness. Very fresh examples will seem sweeter due to the fresh, rich malt character that can fade with time. Clean fermentation profile.',
            mouthfeel:
              'Medium body. Medium carbonation. Smooth, well-lagered character.',
            comments:
              'A fully-attenuated Pils malt showcase, Helles is a malt-accentuated beer that is not overly sweet, but rather focuses on malt flavor with underlying hop bitterness in a supporting role. Export examples can quickly lose some of the rich malt character that often suggests sweetness. Helles in Munich tends to be lighter in all aspects than those outside the city, which can be more assertive with more body, flavor, and hop character.',
            history:
              'Created in Munich in 1894 at the Spaten brewery to compete with pale Pilsner-type beers. Currently the most popular style in Southern Germany.',
            ingredients:
              'Continental Pilsner malt, traditional German Saazer-type hop varieties, clean German lager yeast.',
            comparison:
              'Similar in malt balance and bitterness to Munich Dunkel, but less malty-sweet in nature and pale rather than dark. More body and malt presence than a German Pils, with less hop character throughout. Similar malt profile as a German Exportbier, but with less hops in the balance. ',

            vitalStatistics: {
              og: '1.044 - 1.048',
              fg: '1.006 - 1.012',
              abv: '4.7 - 5.4%',
              ibu: '16 - 22',
              srm: '3 - 5'
            }
          },
          commercialExamples: [
            {
              name: 'Augustiner Lagerbier Hell'
            },
            {
              name: 'Bürgerbräu Wolznacher Hell Naturtrüb'
            },
            {
              name: 'Hacker-Pschorr Münchner Gold'
            },
            {
              name: 'Löwenbraü Original'
            },
            {
              name: 'Paulaner Premium Lager'
            },
            {
              name: 'Spaten Premium Lager'
            },
            {
              name: 'Weihenstephaner Original'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'pale-lager-family'
            },
            {
              tag: 'malty'
            }
          ]
        },
        {
          name: 'Festbier',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A smooth, clean, pale German lager with a moderately strong malty flavor and a light hop character. Deftly balances strength and drinkability, with a palate impression and finish that encourages drinking. Showcases elegant German malt flavors without becoming too heavy or filling.',
            aroma:
              'Moderate malty richness, with an emphasis on toastydoughy aromatics and an impression of sweetness. Low to medium-low floral, herbal, or spicy hops. The malt should not have a deeply toasted, caramel, or biscuity quality. Clean lager fermentation character.',
            appearance:
              'Deep yellow to deep gold color; should not have amber hues. Bright clarity. Persistent white to off-white foam stand. Most commercial examples are medium gold in color.',
            flavor:
              'Medium to medium-high malty flavor initially, with a lightly toasty, bread dough quality and an impression of soft sweetness. Medium to medium-low bitterness, definitely malty in the balance. Well-attenuated and crisp, but not dry. Medium-low to medium floral, herbal, or spicy hop flavor. Clean lager fermentation character. The taste is mostly of Pils malt, but with slightly toasty hints. The bitterness is supportive, but still should yield a malty, flavorful finish.',
            mouthfeel:
              'Medium body, with a smooth, somewhat creamy texture. Medium carbonation. Alcohol strength barely noticeable as warming, if at all. ',
            comments:
              'This style represents the modern German beer served at Oktoberfest (although it is not solely reserved for Oktoberfest; it can be found at many other ‘fests’), and is sometimes called Wiesn (“the meadow” or local name for the Oktoberfest festival). We chose to call this style Festbier since by German and EU regulations, Oktoberfestbier is a protected appellation for beer produced at large breweries within the Munich city limits for consumption at Oktoberfest. Other countries are not bound by these rules, so many craft breweries in the US produce beer called Oktoberfest, but based on the traditional style described in these guidelines as Märzen.',
            history:
              'Since 1990, the majority of beer served at Oktoberfest in Munich has been this style. Export beer specifically made for the United States is still mainly of the traditional amber style, as are US-produced interpretations. Paulaner first created the golden version in the mid-1970s because they thought the traditional Oktoberfest was too filling. So they developed a lighter, more drinkable but still malty version that they wanted to be “more poundable” (according to the head brewer at Paulaner). But the actual type of beer served at Oktoberfest is set by a Munich city committee.',
            ingredients:
              'Majority Pils malt, but with some Vienna and/or Munich malt to increase maltiness. Differences in commercial examples are mostly due to different maltsters and yeast, not major grist differences.',
            comparison:
              'Less intense and less richly toasted than a Märzen. More rich-heavy in body than a Helles, with more hop flavor and higher alcohol. Less rich in malt intensity than a Maibock. The malt complexity is similar to a higher-gravity Czech Premium Pale Lager, although without the associated hops.',

            vitalStatistics: {
              og: '1.054 - 1.057',
              fg: '1.010 - 1.012',
              abv: '5.8 - 6.3%',
              ibu: '18 - 25',
              srm: '4 - 7'
            }
          },
          commercialExamples: [
            {
              name: 'Augustiner Oktoberfest'
            },
            {
              name: 'HackerPschorr Superior Festbier'
            },
            {
              name: 'Hofbräu Festbier'
            },
            {
              name: 'Löwenbräu Oktoberfestbier'
            },
            {
              name: 'Paulaner Wiesn'
            },
            {
              name: 'Schönramer Gold'
            },
            {
              name: 'Weihenstephaner Festbier'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'pale-lager-family'
            },
            {
              tag: 'malty'
            }
          ]
        },
        {
          name: 'Helles Bock',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A relatively pale, strong, malty German lager beer with a nicely attenuated finish that enhances drinkability. The hop character is generally more apparent than in other bocks.',
            aroma:
              'Moderate to strong grainy-sweet malt aroma, often with a lightly toasted quality and low Maillard products. Moderately-low to no hop aroma, often with a spicy, herbal, or floral quality. Clean fermentation profile. Fruity esters should be low to none. Very light alcohol may be noticeable. May have a light DMS aroma.',
            appearance:
              'Deep gold to light amber in color. Bright to clear clarity. Large, creamy, persistent, white head.',
            flavor:
              'Moderately to moderately strong grainy-sweet malt flavor dominates with some toasty notes and/or Maillard products providing added interest. Little to no caramel flavors. May have a light DMS flavor. Moderate to no hop flavor (spicy, herbal, floral, peppery). Moderate hop bitterness (more so in the balance than in other bocks). Clean fermentation profile. Well-attenuated, not cloying, with a moderately-dry finish that may taste of both malt and hops.',
            mouthfeel:
              'Medium-bodied. Moderate to moderately-high carbonation. Smooth and clean with no harshness or astringency, despite the increased hop bitterness. A light alcohol warming may be present.',
            comments:
              'Also known as Mai Bock, but there is some dispute whether Helles (“pale”) Bock and Mai (“May”) Bock are synonymous. Most agree that they are identical, but some believe that Maibock is a “fest” type beer hitting the upper limits of hopping and color for the range. Any fruitiness is due to Munich and other specialty malts, not yeast-derived esters developed during fermentation. The hops compensate for the lower level of Maillard products.',
            history:
              'A fairly recent development in comparison to the other members of the bock family. The serving of Maibock is specifically associated with springtime and the month of May.',
            ingredients:
              'Base of Pils and/or Vienna malt with some Munich malt to add character (although much less than in a traditional bock). No non-malt adjuncts. Saazertype hops. Clean lager yeast. Decoction mash is typical, but boiling is less than in Dunkles Bock to restrain color development.',
            comparison:
              'Can be thought of as either a pale version of a Dunkles Bock, or a Munich Helles brewed to bock strength. While quite malty, this beer typically has less dark and rich malt flavors, and can be drier, hoppier, and more bitter than a Dunkles Bock. Has more of a rich malt character and more alcohol than a Festbier.',

            vitalStatistics: {
              og: '1.064 - 1.072',
              fg: '1.011 - 1.018',
              abv: '6.3 - 7.4%',
              ibu: '23 - 35',
              srm: '6 - 11'
            }
          },
          commercialExamples: [
            {
              name: 'Altenmünster Maibock'
            },
            {
              name: 'Ayinger Maibock'
            },
            {
              name: 'Capital Maibock'
            },
            {
              name: 'Blind Tiger Maibock'
            },
            {
              name: 'Einbecker Mai-Urbock'
            },
            {
              name: 'Hacker-Pschorr Hubertus Bock'
            },
            {
              name: 'Mahr’s Bock'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'bock-family'
            },
            {
              tag: 'malty'
            }
          ]
        }
      ]
    },
    {
      name: 'Pale Bitter European Beer',
      number: 5,
      subcategories: [
        {
          name: 'German Leichtbier',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A pale, highly-attenuated, light-bodied German lager with lower alcohol and calories than normalstrength beers. Moderately bitter with noticeable malt and hop flavors, the beer is still interesting to drink.',
            aroma:
              'Low to medium hop aroma, with a spicy, herbal, or floral character. Low to medium-low grainy-sweet or slightly crackery malt aroma. Clean fermentation profile.',
            appearance:
              'Straw to pale gold in color. Brilliant clarity. Moderate white head with average to below average persistence.',
            flavor:
              'Low to medium grainy-sweet malt flavor initially. Medium hop bitterness. Low to medium hop flavor, with a spicy, herbal, or floral quality. Clean fermentation character, well-lagered. Dry finish with a light malty and hoppy aftertaste.',
            mouthfeel:
              'Light to very light body. Medium to high carbonation. Smooth, well-attenuated.',
            comments:
              'Marketed primarily as a diet-oriented beer with lower carbohydrates, alcohol, and calories. Pronounced “LYESHT-beer.” May also be known as a Diat Pils or Helles, this style is in the schankbier gravity class. Other variations of Leicht class beers can be made from Weissbier, Kölsch, and Altbier; those beers are best entered in the Mixed-Style Beer category.',
            history:
              'Traditional versions existed as drinks for physical laborers in factories or fields, but modern versions are more based on popular American products in the same class.',
            ingredients:
              'Similar to a German Pils or Helles, continental Pils malt, German lager yeast, Saazer-type hops.',
            comparison:
              'Like a lower-alcohol, lighter-bodied, slightly less aggressive German Pils or Helles.',

            vitalStatistics: {
              og: '1.026 - 1.034',
              fg: '1.006 - 1.010',
              abv: '2.4 - 3.6%',
              ibu: '15 - 28',
              srm: '2 - 5'
            }
          },
          commercialExamples: [
            {
              name: 'Beck’s Light'
            },
            {
              name: 'Bitburger Light'
            },
            {
              name: 'Mahr’s Leicht'
            },
            {
              name: 'Paulaner Münchner Hell Leicht'
            },
            {
              name: 'Paulaner Premium Leicht'
            }
          ],
          tags: [
            {
              tag: 'session-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'pale-lager-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'Kölsch',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A clean, crisp, delicately-balanced beer usually with a very subtle fruit and hop character. Subdued maltiness throughout leads into a pleasantly well-attenuated and refreshing finish. Freshness makes a huge difference with this beer, as the delicate character can fade quickly with age. Brilliant clarity is characteristic.',
            aroma:
              'Low to very low malt aroma, with a grainy-sweet character. A pleasant, subtle fruit aroma from fermentation (apple, cherry or pear) is acceptable, but not always present. A low floral, spicy or herbal hop aroma is optional but not out of style. Some yeast strains may give a slight winy or sulfury character (this characteristic is also optional, but not a fault). Overall, the intensity of aromatics is fairly subtle but generally balanced, clean, and fresh.',
            appearance:
              'Very pale gold to light gold. Very clear (authentic commercial versions are filtered to a brilliant clarity). Has a delicate white head that may not persist.',
            flavor:
              'Soft, rounded palate comprised of a delicate flavor balance between soft yet attenuated malt, an almost imperceptible fruity sweetness from fermentation, and a medium-low to medium bitterness with a delicate dryness and slight crispness in the finish (but no harsh aftertaste). The malt tends to be grainy-sweet, possibly with a very light bready or honey quality. The hop flavor is variable, and can range from low to moderately-high; most are medium-low to medium intensity and have a floral, spicy, or herbal character. May have a malty-sweet impression at the start, but this is not required. No noticeable residual sweetness. May have a slightly winy, minerally, or sulfury accent that accentuates the dryness and flavor balance. A slight wheat taste is rare but not a fault. Otherwise, very clean.',
            mouthfeel:
              'Medium-light to medium body (most are medium-light). Medium to medium-high carbonation. Smooth and generally crisp and well-attenuated.',
            comments:
              'Characterized in Germany as a top-fermented, lagered beer. Each Köln brewery produces a beer of different character, and each interprets the Kölsch Konvention slightly differently. Allow for a range of variation within the style when judging. Note that drier versions may seem hoppier or more bitter than the IBU specifications might suggest. Due to its delicate flavor profile, Kölsch tends to have a relatively short shelf-life; older examples and imports can easily show some oxidation defects. Served in Köln in a tall, narrow 200ml glass called a Stange.',
            history:
              'Cologne, Germany (Köln) has a top-fermenting brewing tradition since the Middle Ages, but developed the beer now known as Kölsch in the late 1800s to combat encroaching bottom-fermented pale lagers. Kölsch is an appellation protected by the Kölsch Konvention (1986), and is restricted to the 20 or so breweries in and around Köln. The Konvention simply defines the beer as a “light, highly attenuated, hop-accentuated, clear, top-fermenting Vollbier.”',
            ingredients:
              'Traditional German hops (Hallertau, Tettnang, Spalt or Hersbrucker). German Pils or pale malt. Attenuative, clean ale yeast. Up to 20% wheat malt may be used, but this is quite rare in authentic versions. Current commercial practice is to ferment warm, cold condition for a short period of time, and serve young.',
            comparison:
              'To the untrained taster, easily mistaken for a cream ale or somewhat subtle Pils.',

            vitalStatistics: {
              og: '1.044 - 1.050',
              fg: '1.007 - 1.011',
              abv: '4.4 - 5.2%',
              ibu: '18 - 30',
              srm: '3.5 - 5'
            }
          },
          commercialExamples: [
            {
              name: 'Früh Kölsch'
            },
            {
              name: 'Gaffel Kölsch'
            },
            {
              name: 'Mühlen Kölsch'
            },
            {
              name: 'Reissdorf Kölsch'
            },
            {
              name: 'Sion Kölsch'
            },
            {
              name: 'Sünner Kölsch'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'pale-ale-family'
            },
            {
              tag: 'balanced'
            }
          ]
        },
        {
          name: 'German Helles Exportbier',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A pale, well-balanced, smooth German lager that is slightly stronger than the average beer with a moderate body and a mild, aromatic hop and malt character.',
            aroma:
              'Low to medium hop aroma, typically floral, spicy, or herbal in character. Moderate grainy-sweet malt aroma. Clean fermentation profile. A slight sulfury note at the start that dissipates is not a fault, neither is a low background note of DMS.',
            appearance:
              'Light gold to deep gold. Clear. Persistent white head.',
            flavor:
              'Neither grainy-sweet malt nor floral, spicy, or herbal hops dominate, but both are in good balance with a touch of malty sweetness, providing a smooth yet crisply refreshing beer. Balance continues through the finish and the hop bitterness lingers in aftertaste (although some examples may finish slightly sweet). Clean fermentation character. Some mineral character might be noted from the water, although it usually does not come across as an overt minerally flavor.',
            mouthfeel: 'Medium body, medium carbonation. Smooth but crisp.',
            comments:
              'Sometimes known as Dortmunder or Dortmunder Export. Brewed to a slightly higher starting gravity than other light lagers, providing a firm malty body and underlying maltiness to complement the sulfate-accentuated hop bitterness. The term “Export” is a beer strength descriptor under German brewing tradition, and is not strictly synonymous with the “Dortmunder” style; beer from other cities or regions can be brewed to Export strength, and labeled as such (even if not necessarily exported).',
            history:
              'The Dortmunder style developed in the Dortmund industrial region in the 1870s in response to pale Pilsner-type beers, it became very popular after World War II but declined in the 1970s. Other Export-class beers developed independently, and reflected a slightly stronger version of existing beers. The modern German style is typically 12-13 °P.',
            ingredients:
              'Minerally water with high levels of sulfates, carbonates and chlorides, German or Czech noble hops, Pilsner malt, German lager yeast. Newer commercial versions can contain adjuncts and hop extract.',
            comparison:
              'Less finishing hops and more body than a Pils but more bitter than a Helles.',

            vitalStatistics: {
              og: '1.048 - 1.056',
              fg: '1.010 - 1.015',
              abv: '4.8 - 6.0%',
              ibu: '20 - 30',
              srm: '4 - 7'
            }
          },
          commercialExamples: [
            {
              name: 'DAB Original'
            },
            {
              name: 'Dortmunder Kronen'
            },
            {
              name: 'Dortmunder Union Export'
            },
            {
              name: 'Flensburger Gold'
            },
            {
              name: 'Gordon Biersch Golden Export'
            },
            {
              name: 'Great Lakes Dortmunder Gold'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'pale-lager-family'
            },
            {
              tag: 'balanced'
            }
          ]
        },
        {
          name: 'German Pils',
          letter: 'D',
          guidelines: {
            overallImpression:
              'A light-bodied, highly-attenuated, gold-colored, bottom-fermented bitter German beer showing excellent head retention and an elegant, floral hop aroma. Crisp, clean, and refreshing, a German Pils showcases the finest quality German malt and hops.',
            aroma:
              'Medium-low to low grainy-sweet-rich malt character (often with a light honey and slightly toasted cracker quality) and distinctive flowery, spicy, or herbal hops. Clean fermentation profile. May optionally have a very light sulfury note that comes from water as much as yeast. The hops are moderately-low to moderately-high, but should not totally dominate the malt presence. One-dimensional examples are inferior to the more complex qualities when all ingredients are sensed. May have a very low background note of DMS.',
            appearance:
              'Straw to light gold, brilliant to very clear, with a creamy, long-lasting white head.',
            flavor:
              'Medium to high hop bitterness dominates the palate and lingers into the aftertaste. Moderate to moderately-low grainy-sweet malt character supports the hop bitterness. Low to high floral, spicy, or herbal hop flavor. Clean fermentation profile. Dry to medium-dry, crisp, well-attenuated finish with a bitter aftertaste and light malt flavor. Examples made with water with higher sulfate levels often will have a low sulfury flavor that accentuates the dryness and lengthens the finish; this is acceptable but not mandatory. Some versions have a soft finish with more of a malt flavor, but still with noticeable hop bitterness and flavor, with the balance still towards bitterness.',
            mouthfeel: 'Medium-light body. Medium to high carbonation.',
            comments:
              'Modern examples of Pils tend to become paler in color, drier in finish, and more bitter as you move from South to North in Germany, often mirroring the increase in sulfate in the water. The Pils found in Bavaria tend to be a bit softer in bitterness with more malt flavor and late hop character, yet still with sufficient hops and crispness of finish to differentiate itself from a Helles. The use of the term ‘Pils’ is more common in Germany than ‘Pilsner’ to differentiate it from the Czech style, and (some say) to show respect.',
            history:
              'Adapted from Czech Pilsner to suit brewing conditions in Germany, particularly water with higher mineral content and domestic hop varieties. First brewed in Germany in the early 1870s. Became more popular after WWII as German brewing schools emphasized modern techniques. Along with its sister beer, Czech Pilsner, is the ancestor of the most widely produced beer styles today. Average IBUs of many well-regarded commercial examples have dropped over time.',
            ingredients:
              'Continental Pilsner malt, German hop varieties (especially Saazer-type varieties such as Tettnanger, Hallertauer, and Spalt for taste and aroma; Saaz is less common), German lager yeast.',
            comparison:
              'Lighter in body and color, drier, crisper, and more fully attenuated, with more of a lingering bitterness, and with higher carbonation than a Czech Premium Pale Lager. More hop character, malt flavor, and bitterness than International Pale Lagers. More hop character and bitterness with a drier, crisper finish than a Munich Helles; the Helles has more malt flavor, but of the same character as the Pils.',

            vitalStatistics: {
              og: '1.044 - 1.050',
              fg: '1.008 - 1.013',
              abv: '4.4 - 5.2%',
              ibu: '22 - 40',
              srm: '2 - 5'
            }
          },
          commercialExamples: [
            {
              name: 'König Pilsener'
            },
            {
              name: 'Left Hand Polestar Pils'
            },
            {
              name: 'Paulaner Premium Pils'
            },
            {
              name: 'Schönramer Pils'
            },
            {
              name: 'Stoudt Pils'
            },
            {
              name: 'Tröegs Sunshine Pils'
            },
            {
              name: 'Trumer Pils'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'pilsner-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        }
      ]
    },
    {
      name: 'Amber Malty European Lager',
      number: 6,
      subcategories: [
        {
          name: 'Märzen',
          letter: 'A',
          guidelines: {
            overallImpression:
              'An elegant, malty German amber lager with a clean, rich, toasty and bready malt flavor, restrained bitterness, and a dry finish that encourages another drink. The overall malt impression is soft, elegant, and complex, with a rich aftertaste that is never cloying or heavy.',
            aroma:
              'Moderate intensity aroma of German malt, typically rich, bready, somewhat toasty, with light bread crust notes. Clean lager fermentation character. No hop aroma. Caramel, dry-biscuity, or roasted malt aromas inappropriate. Very light alcohol might be detected, but should never be sharp. Clean, elegant malt richness should be the primary aroma.',
            appearance:
              'Amber-orange to deep reddish-copper color; should not be golden. Bright clarity, with persistent, off-white foam stand.',
            flavor:
              'Initial malt flavor often suggests sweetness, but finish is moderately-dry to dry. Distinctive and complex maltiness often includes a bready, toasty aspect. Hop bitterness is moderate, and the hop flavor is low to none (German types: complex, floral, herbal, or spicy). Hops provide sufficient balance that the malty palate and finish do not seem sweet. The aftertaste is malty, with the same elegant, rich malt flavors lingering. Noticeable caramel, biscuit, or roasted flavors are inappropriate. Clean lager fermentation profile.',
            mouthfeel:
              'Medium body, with a smooth, creamy texture that often suggests a fuller mouthfeel. Medium carbonation. Fully attenuated, without a sweet or cloying impression. May be slightly warming, but the strength should be relatively hidden.',
            comments:
              'Modern domestic German Oktoberfest versions are golden – see the Festbier style for this version. Export German versions (to the United States, at least) are typically orange-amber in color, have a distinctive toasty malt character, and are most often labeled Oktoberfest. American craft versions of Oktoberfest are generally based on this style, and most Americans will recognize this beer as Oktoberfest. Historic versions of the beer tended to be darker, towards the brown color range, but there have been many ‘shades’ of Märzen (when the name is used as a strength); this style description specifically refers to the stronger amber lager version. The modern Festbier can be thought of as a pale Märzen by these terms.',
            history:
              'As the name suggests, brewed as a stronger “March beer” in March and lagered in cold caves over the summer. Modern versions trace back to the lager developed by Spaten in 1841, contemporaneous to the development of Vienna lager. However, the Märzen name is much older than 1841; the early ones were dark brown, and in Austria the name implied a strength band (14 °P) rather than a style. The German amber lager version (in the Viennese style of the time) was first served at Oktoberfest in 1872, a tradition that lasted until 1990 when the golden Festbier was adopted as the standard festival beer.',
            ingredients:
              'Grist varies, although traditional German versions emphasized Munich malt. The notion of elegance is derived from the finest quality ingredients, particularly the base malts. A decoction mash was traditionally used to develop the rich malt profile.',
            comparison:
              'Not as strong and rich as a Dunkles Bock. More malt depth and richness than a Festbier, with a heavier body and slightly less hops. Less hoppy and equally malty as a Czech Amber Lager.',

            vitalStatistics: {
              og: '1.054 - 1.060',
              fg: '1.010 - 1.014',
              abv: '5.8 - 6.3%',
              ibu: '18 - 24',
              srm: '8 - 17'
            }
          },
          commercialExamples: [
            {
              name: 'Buergerliches Ur-Saalfelder'
            },
            {
              name: 'Hacker-Pschorr Original Oktoberfest'
            },
            {
              name: 'Paulaner Oktoberfest'
            },
            {
              name: 'Weltenburg Kloster Anno 1050'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'amber-lager-family'
            },
            {
              tag: 'malty'
            }
          ]
        },
        {
          name: 'Rauchbier',
          letter: 'B',
          guidelines: {
            overallImpression:
              'An elegant, malty German amber lager with a balanced, complementary beechwood smoke character. Toasty-rich malt in aroma and flavor, restrained bitterness, low to high smoke flavor, clean fermentation profile, and an attenuated finish are characteristic.',
            aroma:
              'Blend of smoke and malt, with a varying balance and intensity. The beechwood smoke character can range from subtle to fairly strong, and can seem smoky, woody, or baconlike. The malt character can be low to moderate, and be somewhat rich, toasty, or malty-sweet. The malt and smoke components are often inversely proportional (i.e., when smoke increases, malt decreases, and vice versa). Hop aroma may be very low to none. Clean lager fermentation character.',
            appearance:
              'This should be a very clear beer, with a large, creamy, rich, tan- to cream-colored head. Medium amber/light copper to dark brown color.',
            flavor:
              'Generally follows the aroma profile, with a blend of smoke and malt in varying balance and intensity, yet always complementary. Märzen-like qualities should be noticeable, particularly a malty, toasty richness, but the beechwood smoke flavor can be low to high. At higher levels, the smoke can take on a ham- or bacon-like character, which is acceptable as long as it doesn’t veer into the greasy range. The palate can be somewhat malty, rich, and sweet, yet the finish tends to be medium-dry to dry with the smoke character sometimes enhancing the dryness of the finish. The aftertaste can reflect both malt richness and smoke flavors, with a balanced presentation desirable. Moderate, balanced, hop bitterness. Moderate to none hop flavor with spicy, floral, or herbal notes. Clean lager fermentation character. Harsh, bitter, burnt, charred, rubbery, sulfury or phenolic smoky characteristics are inappropriate.',
            mouthfeel:
              'Medium body. Medium to medium-high carbonation. Smooth lager character. Significant astringent, phenolic harshness is inappropriate.',
            comments:
              'Literally “smoke beer” in German. The intensity of smoke character can vary widely; not all examples are highly smoked. Allow for variation in the style when judging. Other examples of smoked beers are available in Germany based on styles such as Dunkles Bock, Weissbier, Dunkel, Schwarzbier, and Helles, including examples such as Spezial Lager; these should be entered in the Classic Style Smoked Beer category. This description specifically refers to the smoked Märzen version.',
            history:
              'A historical specialty of the city of Bamberg, in the Franconian region of Bavaria in Germany. Beechwood-smoked malt is used to make a Märzen-style amber lager. The smoke character of the malt varies by maltster; some breweries produce their own smoked malt (rauchmalz).',
            ingredients:
              'German Rauchmalz (beechwood-smoked Vienna-type malt) typically makes up 20- 100% of the grain bill, with the remainder being German malts typically used in a Märzen. Some breweries adjust the color slightly with a bit of roasted malt. German lager yeast. German or Czech hops.',
            comparison:
              'Like a Märzen with but with a balanced, sweet, smoky aroma and flavor and a somewhat darker color.',

            vitalStatistics: {
              og: '1.050 - 1.057',
              fg: '1.012 - 1.016',
              abv: '4.8 - 6%',
              ibu: '20 - 30',
              srm: '12 - 22'
            }
          },
          commercialExamples: [
            {
              name: 'Eisenbahn Rauchbier'
            },
            {
              name: 'Kaiserdom Rauchbier'
            },
            {
              name: 'Schlenkerla Rauchbier Märzen'
            },
            {
              name: 'Spezial Rauchbier Märzen Victory Scarlet Fire Rauchbier'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'amber-lager-family'
            },
            {
              tag: 'malty'
            },
            {
              tag: 'smoke'
            }
          ]
        },
        {
          name: 'Dunkles Bock',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A dark, strong, malty German lager beer that emphasizes the malty-rich and somewhat toasty qualities of continental malts without being sweet in the finish.',
            aroma:
              'Medium to medium-high bready-malty-rich aroma, often with moderate amounts of rich Maillard products and/or toasty overtones. Virtually no hop aroma. Some alcohol may be noticeable. Clean lager character, although the malts can provide a slight (low to none) dark fruit character, particularly in aged examples.',
            appearance:
              'Light copper to brown color, often with attractive garnet highlights. Lagering should provide good clarity despite the dark color. Large, creamy, persistent, offwhite head.',
            flavor:
              'Complex, rich maltiness is dominated by the toastyrich Maillard products. Some caramel notes may be present. Hop bitterness is generally only high enough to support the malt flavors, allowing a bit of sweetness to linger into the finish. Well-attenuated, not cloying. Clean fermentation profile, although the malt can provide a slight dark fruit character. No hop flavor. No roasted or burnt character.',
            mouthfeel:
              'Medium to medium-full bodied. Moderate to moderately low carbonation. Some alcohol warmth may be found, but should never be hot. Smooth, without harshness or astringency.',
            comments:
              'Decoction mashing and long boiling plays an important part of flavor development, as it enhances the caramel and Maillard flavor aspects of the malt. Any fruitiness is due to Munich and other specialty malts, not yeast-derived esters developed during fermentation.',
            history:
              'Originated in the Northern German city of Einbeck, which was a brewing center and popular exporter in the days of the Hanseatic League (14th to 17th century). Recreated in Munich starting in the 17th century. The name “bock” is based on a corruption of the name “Einbeck” in the Bavarian dialect, and was thus only used after the beer came to Munich. “Bock” also means “Ram” in German, and is often used in logos and advertisements.',
            ingredients:
              'Munich and Vienna malts, rarely a tiny bit of dark roasted malts for color adjustment, never any non-malt adjuncts. Continental European hop varieties are used. Clean German lager yeast.',
            comparison:
              'Darker, with a richer malty flavor and less apparent bitterness than a Helles Bock. Less alcohol and malty richness than a Doppelbock. Stronger malt flavors and higher alcohol than a Märzen. Richer, less attenuated, and less hoppy than a Czech Amber Lager.',

            vitalStatistics: {
              og: '1.064 - 1.072',
              fg: '1.013 - 1.019',
              abv: '6.3 - 7.2%',
              ibu: '20 - 27',
              srm: '14 - 22'
            }
          },
          commercialExamples: [
            {
              name: 'Aass Bock'
            },
            {
              name: 'Einbecker Ur-Bock Dunkel'
            },
            {
              name: 'Great Lakes Rockefeller Bock'
            },
            {
              name: 'Kneitinger Bock'
            },
            {
              name: 'New Glarus Uff-da Bock'
            },
            {
              name: 'Penn Brewery St. Nikolaus Bock'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'bock-family'
            },
            {
              tag: 'malty'
            }
          ]
        }
      ]
    },
    {
      name: 'Amber Bitter European Beer',
      number: 7,
      subcategories: [
        {
          name: 'Vienna Lager',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A moderate-strength amber lager with a soft, smooth maltiness and moderate bitterness, yet finishing relatively dry. The malt flavor is clean, bready-rich, and somewhat toasty, with an elegant impression derived from quality base malts and process, not specialty malts and adjuncts.',
            aroma:
              'Moderately-intense malt aroma, with toasty and malty-rich aromatics. Clean lager character. Floral, spicy hop aroma may be low to none. A significant caramel or roasted aroma is inappropriate.',
            appearance:
              'Light reddish amber to copper color. Bright clarity. Large, off-white, persistent head.',
            flavor:
              'Soft, elegant malt complexity is in the forefront, with a firm enough hop bitterness to provide a balanced finish. The malt flavor tends towards a rich, toasty character, without significant caramel or roast flavors. Fairly dry, crisp finish, with both rich malt and hop bitterness present in the aftertaste. Floral, spicy hop flavor may be low to none. Clean lager fermentation character.',
            mouthfeel:
              'Medium-light to medium body, with a gentle creaminess. Moderate carbonation. Smooth. ',
            comments:
              'A standard-strength everyday beer, not a beer brewed for festivals. American versions can be a bit stronger, drier and more bitter, while modern European versions tend to be sweeter. Many Mexican amber and dark lagers used to be more authentic, but unfortunately are now more like sweet, adjunct-laden Amber/Dark International Lagers. Regrettably, many modern examples use adjuncts which lessen the rich malt complexity characteristic of the best examples of this style. This style is on the watch list to move to the Historical category in future guidelines; that would allow the classic style to be described while moving the sweeter modern versions to the International Amber or Dark Lager styles.',
            history:
              'Developed by Anton Dreher in Vienna in 1841, became popular in the mid-late 1800s. Now nearly extinct in its area of origin, the style continues in Mexico where it was brought by Santiago Graf and other Austrian immigrant brewers in the late 1800s. Authentic examples are increasingly hard to find (except perhaps in the craft beer industry) as formerly good examples become sweeter and use more adjuncts.',
            ingredients:
              'Vienna malt provides a lightly toasty and complex, Maillard-rich malt profile. As with Märzens, only the finest quality malt should be used, along with Continental hops (preferably Saazer types or Styrians). Can use some caramel malts and/or darker malts to add color and sweetness, but caramel malts shouldn’t add significant aroma and flavor and dark malts shouldn’t provide any roasted character.',
            comparison:
              'Lighter malt character, slightly less body, and slightly more bitter in the balance than a Märzen, yet with many of the same malt-derived flavors. The malt character is similar to a Märzen, but less intense and more balanced. Lower in alcohol than Märzen or Festbier. Less rich, less malty and less hop-centered compared to Czech Amber Lager.',

            vitalStatistics: {
              og: '1.048 - 1.055',
              fg: '1.010 - 1.014',
              abv: '4.7 - 5.5%',
              ibu: '18 - 30',
              srm: '9 - 15'
            }
          },
          commercialExamples: [
            {
              name: 'Cuauhtémoc Noche Buena'
            },
            {
              name: 'Chuckanut Vienna Lager'
            },
            {
              name: 'Devils Backbone Vienna Lager'
            },
            {
              name: 'Figueroa Mountain Danish-style Red Lager'
            },
            {
              name: 'Heavy Seas Cutlass Amber Lager'
            },
            {
              name: 'Schell’s Firebrick'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'amber-lager-family'
            },
            {
              tag: 'balanced'
            }
          ]
        },
        {
          name: 'Altbier',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A well-balanced, well-attenuated, bitter yet malty, clean, and smooth, amber- to copper-colored German beer. The bitterness is balanced by the malt richness, but the malt intensity and character can range from moderate to high (the bitterness increases with the malt richness). ',
            aroma:
              'Clean yet robust and complex aroma of grainy-rich malt and spicy hops with restrained (low to medium-low) fruity esters. The malt character reflects German base malt varieties, with rich baked bread and nutty-toasty bread crust notes. The hop aroma may vary from moderate to low, and can have a peppery, spicy, floral, herbal or perfumy character associated with Saazer-type hops.',
            appearance:
              'The color ranges from light amber to deep copper color, stopping short of brown; bronze-orange is most common. Brilliant clarity. Thick, creamy, long-lasting off-white head.',
            flavor:
              'Assertive hop bitterness well balanced by a sturdy yet clean and crisp malt character. The malt presence is moderated by medium-high to high attenuation, but considerable rich, complex, and somewhat grainy malt flavors can remain. Some fruity esters (especially cherry-like) may survive the lagering period. A long-lasting, medium-dry to dry, bittersweet or nutty finish reflects both the hop bitterness and malt complexity. Spicy, peppery or floral hop flavor can be moderate to low. No roasted malt flavors or harshness. The apparent bitterness level is sometimes masked by the malt character; the bitterness can seem as low as moderate if the finish is not very dry. Light sulfury or minerally character optional.',
            mouthfeel:
              'Medium-bodied. Smooth. Medium to mediumhigh carbonation, although can be lower when served from the cask. Astringency low to none. Despite being very full of flavor, is light-bodied enough to be consumed as a gravity-fed session beer in its home brewpubs in Düsseldorf.',
            comments:
              'A top-fermented lagered beer, fermented at cool ale temperature (59–68 °F), often conditioned at bottomfermentation temperatures (about 50 °F) and then lagered at cold temperatures to produce a cleaner, smoother palate than is typical for most ales. Zum Uerige is a wonderful beer, but much more aggressively bitter and complex than most other German examples. It may be like the Fuller’s ESB of the strong bitter category – well-known but somewhat of a stylistic outlier. Do not judge all Altbiers as if they were Zum Uerige clones; allow for a more balanced bitterness in the beer (25–35 IBUs is more typical for most other German examples). Stronger sticke and doppelsticke beers should not be entered here.',
            history:
              'The traditional style of beer from Düsseldorf. “Alt” refers to the “old” style of brewing (i.e., using top-fermenting yeast) that was common before bottom-fermenting lager brewing became popular. Predates the isolation of bottomfermenting yeast strains, though it approximates many characteristics of bottom-fermenting lager beers. Many of the classic examples can be found in brewpubs in the Altstadt (“old town”) section of Düsseldorf.',
            ingredients:
              'Grists vary, but usually consist of German base malts (usually Pils, sometimes Munich) with small amounts of crystal, chocolate, and/or black malts used to adjust color. Occasionally will include some wheat, including roasted wheat. Spalt hops are traditional, but other Saazer-type hops can also be used. Clean, highly attenuative ale yeast. A step mash or decoction mash program is traditional.',
            comparison:
              'More bitter and malty than international amber lagers. Somewhat similar to California Common, both in production technique and finished flavor and color, though not in ingredients.',

            vitalStatistics: {
              og: '1.044 - 1.052',
              fg: '1.008 - 1.014',
              abv: '4.3 - 5.5%',
              ibu: '25 - 50',
              srm: '11 - 17'
            }
          },
          commercialExamples: [
            {
              name: 'Bolten Alt'
            },
            {
              name: 'Diebels Alt'
            },
            {
              name: 'Füchschen Alt'
            },
            {
              name: 'Original Schlüssel Alt'
            },
            {
              name: 'Schlösser Alt'
            },
            {
              name: 'Schumacher Alt'
            },
            {
              name: 'Uerige Altbier'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'amber-ale-family'
            },
            {
              tag: 'bitter'
            }
          ]
        },
        {
          name: 'Pale Kellerbier',
          letter: 'C1',
          guidelines: {
            overallImpression:
              'A young, fresh Helles, so while still a malty, fully-attenuated Pils malt showcase, the hop character (aroma, flavor and bitterness) is more pronounced, and the beer is cloudy, often with some level of diacetyl, and possibly has some green apple and/or other yeast-derived notes. As with the traditional Helles, the Keller version is still a beer intended to be drunk by the liter, so overall it should remain a light, refreshing, easy drinking golden lager.',
            aroma:
              'Moderately-low to moderately-high spicy, floral, or herbal hop aroma. Very low to moderate diacetyl, possible very low green apple or other yeast derived notes. Pleasantly grainysweet, clean malt aroma, with possible low background note of DMS.',
            appearance:
              ' Slight haze to moderately cloudy, but never extremely cloudy or murky. Medium yellow to pale gold color. Creamy white head with good persistence. When served on cask, can have low carbonation and very low head.',
            flavor:
              'Moderately malty with a rounded, grainy-sweet profile. Low to moderately-high spicy, floral, or herbal hop flavor, with a moderate hop bitterness that can linger. Finish is crisp and dry, but the aftertaste remains malty. Very low to moderate diacetyl, which should always remain at a pleasant, drinkable level that balances somewhat with the other characteristics of the beer; overwhelming diacetyl is not appropriate. Possible very low green apple or other yeast derived notes, and possible low background note of DMS.',
            mouthfeel:
              'Medium body. Low to medium carbonation. Depending on the level of yeast in suspension, it may assist in creating a slightly creamy texture. A slight slickness on the tongue may be present from the diacetyl.',
            comments:
              'Most Pale Kellerbiers are young, unfiltered, unpasteurized versions of Munich Helles beer, although Pils or a different, custom golden lager beer designed specifically for serving young could also be used. The best examples are served only on tap at many of the Munich area breweries. Bottled versions are not likely to have the freshness, hop character and young beer notes exhibited by the draft versions.',
            history:
              'Modern adaptation from the traditional Franconian style, using Helles instead of Märzen. Today, a popular summer seasonal beer. ',
            ingredients:
              'Pilsner malt, German hops, German lager yeast; same as a Munich Helles.',
            comparison:
              'Most commonly, a young, unfiltered and unpasteurized version of a Munich Helles, though it can be a young, unfiltered and unpasteurized version of other golden German lagers, such as a Pilsner or a seasonal golden lager made specifically for serving young.',

            vitalStatistics: {
              og: '1.045 - 1.051',
              fg: '1.008 - 1.012',
              abv: '4.7 - 5.4%',
              ibu: '20 - 35',
              srm: '3 - 7'
            }
          },
          commercialExamples: [
            {
              name: '(local) Paulaner'
            },
            {
              name: 'Paulaner Brauhaus'
            },
            {
              name: 'Hofbrau'
            },
            {
              name: 'Tegernseer Tal. (bottled) Ayinger Kellerbier'
            },
            {
              name: 'Hacker-Pschorr Munchner Kellerbier Anno 1417'
            },
            {
              name: 'Hofbrau Munchner Sommer Naturtrub'
            },
            {
              name: 'Wolnzacher Hell Naturtrüb'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'balanced'
            },
            {
              tag: 'pale-lager-family'
            }
          ]
        },
        {
          name: 'Amber Kellerbier',
          letter: 'C2',
          guidelines: {
            overallImpression:
              'A young, unfiltered, and unpasteurized beer that is between a Helles and Märzen in color, spicier in the hops with greater attenuation. Interpretations range in color and balance, but remain in the drinkable 4.8% ABV neighborhood. Balance ranges from the dry, spicy and palecolored interpretations by St. Georgen and Löwenbräu of Buttenheim, to darker and maltier interpretations in the Fränkische Schweiz. This style is above all a method of producing simple drinkable beers for neighbors out of local ingredients to be served fresh. Balance with a focus on drinkability and digestibility is important.',
            aroma:
              'Moderate intensity of German malt, typically rich, bready, somewhat toasty, with light bread crust notes. Moderately-low to moderate spicy peppery hop aroma. Very low to low diacetyl, occasionally low to moderately-low sulfur and very low green apple or other yeast-derived notes. Caramel, biscuity, or roasted malt aroma is inappropriate.',
            appearance:
              'Moderately cloudy to clear depending on age, but never extremely cloudy or murky. Gold to deep reddishamber color. Off-white, creamy head. When served on cask, can have low carbonation and very low head.',
            flavor:
              'Initial malt flavor may suggest sweetness, but finish is moderately dry to dry, and slightly bitter. Distinctive and complex maltiness often includes a bready-toasty aspect. Hop bitterness is moderate to moderately high, and spicy or herbal hop flavor is low to moderately high. Balance can be either on the malt or hop side, but the finish is not sweet. Noticeable caramel or roasted malt flavors are inappropriate. Very low to low diacetyl. Possible very low green apple or other yeastderived notes. Smooth, malty aftertaste.',
            mouthfeel:
              'Medium body, with a creamy texture and medium carbonation. Fully fermented, without a sweet or cloying impression.',
            comments:
              'The best examples of Amber Kellerbier are served only on tap at many of the small Franconia area breweries (as this is a beer best served fresh and the serving style being an important part of the style). Bottled versions are not likely to have the freshness, hop character and young beer notes exhibited by the draft versions.',
            history:
              'This was the classic, historical style before it was adapted in other areas. This original, older style of Kellerbier would have simply been beer served from local taverns that did not lager long enough to drop bright. Many breweries in Franconia would use some of this young beer during the summer months, for festivals such as the Annafest (est. 1840) in July in Forchheim, where it was traditional to drink directly from the lagering vessels.',
            ingredients:
              'Grist varies, although traditional German versions emphasized Franconian pale and color malt. The notion of elegance is derived from the highquality local ingredients, particularly the malts. Spalt or other typically spicy local hops are most common. Frugal Franconian brewers rarely used decoction brewing due to the cost of energy.',
            comparison:
              'Most commonly, this style is a young, unfiltered, unpasteurized, hoppier version of Munich Helles or Märzen. Fränkische Schweiz versions can edge up to dark amber or brown.',

            vitalStatistics: {
              og: '1.048 - 1.054',
              fg: '1.012 - 1.016',
              abv: '4.8 - 5.4%',
              ibu: '25 - 40',
              srm: '7 - 17'
            }
          },
          commercialExamples: [
            {
              name: '(local) Greif'
            },
            {
              name: 'Eichhorn'
            },
            {
              name: 'Nederkeller'
            },
            {
              name: 'Hebendanz (bottled) Buttenheimer Kaiserdom Kellerbier'
            },
            {
              name: 'Kulmbacher Monchshof Kellerbier'
            },
            {
              name: 'Leikeim Kellerbier'
            },
            {
              name: 'Löwenbräu Kellerbier'
            },
            {
              name: 'Mahr’s Kellerbier, St. Georgen Kellerbier'
            },
            {
              name: 'Tucher Kellerbier Naturtrub'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'bottom-fermenting'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'balanced'
            },
            {
              tag: 'amber-lager-family'
            }
          ]
        }
      ]
    },
    {
      name: 'Dark European Lager',
      number: 8,
      subcategories: [
        {
          name: 'Munich Dunkel',
          letter: 'A',
          guidelines: {
            overallImpression:
              'Characterized by depth, richness and complexity typical of darker Munich malts with the accompanying Maillard products. Deeply bready-toasty, often with chocolate-like flavors in the freshest examples, but never harsh, roasty, or astringent; a decidedly malt-balanced beer, yet still easily drinkable.',
            aroma:
              'Rich, elegant, deep malt sweetness, typically like bread crusts (often toasted bread crusts). Hints of chocolate, nuts, caramel, and/or toffee are also acceptable, with fresh traditional versions often showing higher levels of chocolate. Clean fermentation profile. A slight spicy, floral, or herbal hop aroma is acceptable.',
            appearance:
              'Deep copper to dark brown, often with a red or garnet tint. Creamy, light to medium tan head. Usually clear, although murky unfiltered versions exist.',
            flavor:
              'Dominated by the soft, rich, and complex flavor of darker Munich malts, usually with overtones reminiscent of toasted bread crusts, but without a burnt-harsh-grainy toastiness. The palate can be moderately malty, although it should not be overwhelming or cloyingly sweet. Mild caramel, toast or nuttiness may be present. Very fresh examples often have a pleasant malty-chocolate character that isn’t roasty or sweet. Burnt or bitter flavors from roasted malts are inappropriate, as are pronounced caramel flavors from crystal malt. Hop bitterness is moderately low but perceptible, with the balance tipped firmly towards maltiness. Hop flavor is low to none; if noted, should reflect floral, spicy, or herbal Germantype varieties. Aftertaste remains malty, although the hop bitterness may become more apparent in the medium-dry finish. Clean fermentation profile and lager character.',
            mouthfeel:
              'Medium to medium-full body, providing a soft and dextrinous mouthfeel without being heavy or cloying. Moderate carbonation. The use of continental Munich-type malts should provide a richness, not a harsh or biting astringency.',
            comments:
              'Unfiltered versions from Germany can taste like liquid bread, with a yeasty, earthy richness not found in exported filtered examples',
            history:
              'The classic brown lager style of Munich which developed as a darker, more malt-accented beer than other regional lagers. While originating in Munich, the style became popular throughout Bavaria (especially Franconia). Franconian versions are often darker and more bitter.',
            ingredients:
              'Grist is traditionally made up of German Munich malt (up to 100% in some cases) with the remainder German Pilsner malt. Small amounts of crystal malt can add dextrins and color but should not introduce excessive residual sweetness. Slight additions of roasted malts (such as Carafa or chocolate) may be used to improve color but should not add strong flavors. Traditional German hop varieties and German lager yeast strains should be used. Often decoction mashed (up to a triple decoction) to enhance the malt flavors and create the depth of color.',
            comparison:
              'Not as intense in maltiness as a bock (and thus more drinkable in quantity). Lacking the more roasted flavors (and often hop bitterness) of a schwarzbier. Richer, more malt-centric, and less hoppy than a Czech Dark Lager.',

            vitalStatistics: {
              og: '1.048 - 1.056',
              fg: '1.010 - 1.016',
              abv: '4.5 - 5.6%',
              ibu: '18 - 28',
              srm: '14 - 28'
            }
          },
          commercialExamples: [
            {
              name: 'Ayinger Altbairisch Dunkel'
            },
            {
              name: 'Chuckanut Dunkel Lager'
            },
            {
              name: 'Ettaler Kloster Dunkel'
            },
            {
              name: 'HackerPschorr Alt Munich Dark'
            },
            {
              name: 'Weltenburger Kloster BarockDunkel'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'malty'
            },
            {
              tag: 'dark-lagerfamily'
            }
          ]
        },
        {
          name: 'Schwarzbier',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A dark German lager that balances roasted yet smooth malt flavors with moderate hop bitterness. The lighter body, dryness, and lack of a harsh, burnt, or heavy aftertaste helps make this beer quite drinkable.',
            aroma:
              'Low to moderate malt, with low aromatic malty sweetness and/or hints of roast malt often apparent. The malt can be clean and neutral or moderately rich and bready, and may have a hint of dark caramel. The roast character can be somewhat dark chocolate- or coffee-like but should never be burnt. A low spicy, floral, or herbal hop aroma is optional. Clean lager yeast character, although a light sulfur is possible.',
            appearance:
              'Medium to very dark brown in color, often with deep ruby to garnet highlights, yet almost never truly black. Very clear. Large, persistent, tan-colored head.',
            flavor:
              'Light to moderate malt flavor, which can have a clean, neutral character to a moderately rich, bread-malty quality. Light to moderate roasted malt flavors can give a bitterchocolate palate that lasts into the finish, but which are never burnt. Medium-low to medium bitterness, which can last into the finish. Light to moderate spicy, floral, or herbal hop flavor. Clean lager character. Aftertaste tends to dry out slowly and linger, featuring hop bitterness with a complementary but subtle roastiness in the background. Some residual sweetness is acceptable but not required.',
            mouthfeel:
              'Medium-light to medium body. Moderate to moderately-high carbonation. Smooth. No harshness or astringency, despite the use of dark, roasted malts.',
            comments:
              'Literally means “black beer” in German. While sometimes called a “black Pils,” the beer is rarely as dark as black or as bitter as a Pils; don’t expect strongly roasted, porter-like flavors.',
            history:
              'A regional specialty from Thuringia, Saxony and Franconia in Germany. History is a bit sketchy, but is suspected of being originally a top-fermented beer. Popularity grew after German reunification. Served as the inspiration for black lagers brewed in Japan.',
            ingredients:
              'German Munich malt and/or Pilsner malts for the base, supplemented by a judicious use of roasted malts (such as Carafa types) for the dark color and subtle roast flavors. Huskless dark roasted malts can add roast flavors without burnt flavors. German hop varieties and clean German lager yeasts are traditional.',
            comparison:
              'In comparison with a Munich Dunkel, usually darker in color, drier on the palate, lighter in body, and with a noticeable (but not high) roasted malt edge to balance the malt base. Should not taste like an American Porter made with lager yeast. Drier, less malty, with less hop character than a Czech Dark Lager.',

            vitalStatistics: {
              og: '1.046 - 1.052',
              fg: '1.010 - 1.016',
              abv: '4.4 - 5.4%',
              ibu: '20 - 30',
              srm: '17 - 30'
            }
          },
          commercialExamples: [
            {
              name: 'Devils Backbone Schwartz Bier'
            },
            {
              name: 'Einbecker Schwarzbier'
            },
            {
              name: 'Eisenbahn Dunkel'
            },
            {
              name: 'Köstritzer Schwarzbier'
            },
            {
              name: 'Mönchshof Schwarzbier'
            },
            {
              name: 'Nuezeller Original Badebier'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'balanced'
            },
            {
              tag: 'dark-lagerfamily'
            }
          ]
        }
      ]
    },
    {
      name: 'Strong European Beer',
      number: 9,
      subcategories: [
        {
          name: 'Doppelbock',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A strong, rich, and very malty German lager that can have both pale and dark variants. The darker versions have more richly-developed, deeper malt flavors, while the paler versions have slightly more hops and dryness.',
            aroma:
              'Very strong maltiness. Darker versions will have significant Maillard products and often some toasty aromas. A light caramel aroma is acceptable. Lighter versions will have a strong malt presence with some Maillard products and toasty notes. Virtually no hop aroma, although a light noble hop aroma is acceptable in pale versions. A moderately low maltderived dark fruit character may be present (but is optional) in dark versions. A very slight chocolate-like aroma may be present in darker versions, but no roasted or burned aromatics should ever be present. Moderate alcohol aroma may be present.',
            appearance:
              'Deep gold to dark brown in color. Darker versions often have ruby highlights. Lagering should provide good clarity. Large, creamy, persistent head (color varies with base style: white for pale versions, off-white for dark varieties). Stronger versions might have impaired head retention, and can display noticeable legs.',
            flavor:
              'Very rich and malty. Darker versions will have significant Maillard products and often some toasty flavors. Lighter versions will have a strong malt flavor with some Maillard products and toasty notes. A very slight chocolate flavor is optional in darker versions, but should never be perceived as roasty or burnt. Clean lager character. A moderately low malt-derived dark fruit character is optional in darker versions. Invariably there will be an impression of alcoholic strength, but this should be smooth and warming rather than harsh or burning. Little to no hop flavor (more is acceptable in pale versions). Hop bitterness varies from moderate to moderately low but always allows malt to dominate the flavor. Most versions are fairly malty-sweet, but should have an impression of attenuation. The sweetness comes from low hopping, not from incomplete fermentation. Paler versions generally have a drier finish.',
            mouthfeel:
              'Medium-full to full body. Moderate to moderately-low carbonation. Very smooth without harshness, astringency. A light alcohol warmth may be noted, but it should never burn.',
            comments:
              'Most versions are dark colored and may display the caramelizing and Maillard products of decoction mashing, but excellent pale versions also exist. The pale versions will not have the same richness and darker malt flavors of the dark versions, and may be a bit drier, hoppier and more bitter. While most traditional examples are in the lower end of the ranges cited, the style can be considered to have no upper limit for gravity, alcohol and bitterness (thus providing a home for very strong lagers). ',
            history:
              'A Bavarian specialty first brewed in Munich by the monks of St. Francis of Paula. Historical versions were less well-attenuated than modern interpretations, with consequently higher sweetness and lower alcohol levels (and hence was considered “liquid bread” by the monks). The term “doppel (double) bock” was coined by Munich consumers. Many commercial doppelbocks have names ending in “-ator,” either as a tribute to the prototypical Salvator or to take advantage of the beer’s popularity. Traditionally dark brown in color; paler examples are a more recent development.',
            ingredients:
              'Pils and/or Vienna malt for pale versions (with some Munich), Munich and Vienna malts for darker ones and occasionally a tiny bit of darker color malts (such as Carafa). Saazer-type hops. Clean lager yeast. Decoction mashing is traditional.',
            comparison:
              'A stronger, richer, more full-bodied version of either a Dunkles Bock or a Helles Bock. Pale versions will show higher attenuation and less dark fruity character than the darker versions.',

            vitalStatistics: {
              og: '1.072 - 1.112',
              fg: '1.016 - 1.024',
              abv: '7.0 - 10.0%',
              ibu: '16 - 26',
              srm: '6 - 25'
            }
          },
          commercialExamples: [
            {
              name: 'Dark Versions –Andechser Doppelbock Dunkel'
            },
            {
              name: 'Ayinger Celebrator'
            },
            {
              name: 'Paulaner Salvator'
            },
            {
              name: 'Spaten Optimator'
            },
            {
              name: 'Tröegs Troegenator'
            },
            {
              name:
                'Weihenstephaner Korbinian,; Pale Versions – Eggenberg Urbock 23º'
            },
            {
              name: 'EKU 28, Plank Bavarian Heller Doppelbock'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'bottomfermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'bockfamily'
            },
            {
              tag: 'malty'
            }
          ]
        },
        {
          name: 'Eisbock',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A strong, full-bodied, rich, and malty dark German lager often with a viscous quality and strong flavors. Even though flavors are concentrated, the alcohol should be smooth and warming, not burning. ',
            aroma:
              'Dominated by a balance of rich, intense malt and a definite alcohol presence. No hop aroma. May have significant malt-derived dark fruit esters. Alcohol aromas should not be harsh or solventy.',
            appearance:
              'Deep copper to dark brown in color, often with attractive ruby highlights. Lagering should provide good clarity. Head retention may be moderate to poor. Off-white to deep ivory colored head. Pronounced legs are often evident.',
            flavor:
              'Rich, sweet malt balanced by a significant alcohol presence. The malt can have Maillard products, toasty qualities, some caramel, and occasionally a slight chocolate flavor. No hop flavor. Hop bitterness just offsets the malt sweetness enough to avoid a cloying character. May have significant malt-derived dark fruit esters. The alcohol should be smooth, not harsh or hot, and should help the hop bitterness balance the strong malt presence. The finish should be of malt and alcohol, and can have a certain dryness from the alcohol. It should not by sticky, syrupy or cloyingly sweet. Clean lager character.',
            mouthfeel:
              'Full to very full-bodied. Low carbonation. Significant alcohol warmth without sharp hotness. Very smooth without harsh edges from alcohol, bitterness, fusels, or other concentrated flavors.',
            comments:
              'Extended lagering is often needed post-freezing to smooth the alcohol and enhance the malt and alcohol balance. Pronounced “ICE-bock.”',
            history:
              'A traditional Kulmbach specialty brewed by freezing a doppelbock and removing the ice to concentrate the flavor and alcohol content (as well as any defects).',
            ingredients:
              'Same as doppelbock. Commercial eisbocks are generally concentrated anywhere from 7% to 33% (by volume).',
            comparison:
              'Eisbocks are not simply stronger doppelbocks; the name refers to the process of freezing and concentrating the beer and is not a statement on alcohol; some doppelbocks are stronger than Eisbocks. Not as thick, rich, or sweet as a Wheatwine.',

            vitalStatistics: {
              og: '1.078 - 1.120',
              fg: '1.020 - 1.035',
              abv: '9.0 - 14.0%',
              ibu: '25 - 35',
              srm: '18 - 30'
            }
          },
          commercialExamples: [
            {
              name: 'Kulmbacher Eisbock'
            }
          ],
          tags: [
            {
              tag: 'very-high-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'bock-family'
            },
            {
              tag: 'malty'
            }
          ]
        },
        {
          name: 'Baltic Porter',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A Baltic Porter often has the malt flavors reminiscent of an English porter and the restrained roast of a schwarzbier, but with a higher OG and alcohol content than either. Very complex, with multi-layered malt and dark fruit flavors.',
            aroma:
              'Rich malty sweetness often containing caramel, toffee, nutty to deep toast, and/or licorice notes. Complex alcohol and ester profile of moderate strength, and reminiscent of plums, prunes, raisins, cherries or currants, occasionally with a vinous Port-like quality. Some darker malt character that is deep chocolate, coffee or molasses but never burnt. No hops. No sourness. Very smooth.',
            appearance:
              'Dark reddish-copper to opaque dark brown (not black). Thick, persistent tan-colored head. Clear, although darker versions can be opaque.',
            flavor:
              'As with aroma, has a rich malty sweetness with a complex blend of deep malt, dried fruit esters, and alcohol. Has a prominent yet smooth schwarzbier-like roasted flavor that stops short of burnt. Mouth-filling and very smooth. Clean lager character. Starts sweet but darker malt flavors quickly dominates and persists through finish. Just a touch dry with a hint of roast coffee or licorice in the finish. Malt can have a caramel, toffee, nutty, molasses and/or licorice complexity. Light hints of black currant and dark fruits. Medium-low to medium bitterness from malt and hops, just to provide balance. Hop flavor from slightly spicy hops ranges from none to medium-low.',
            mouthfeel:
              'Generally quite full-bodied and smooth, with a well-aged alcohol warmth. Medium to medium-high carbonation, making it seem even more mouth-filling. Not heavy on the tongue due to carbonation level.',
            comments:
              'May also be described today as an Imperial Porter, although heavily roasted or hopped versions are not appropriate for this style. Most versions are in the 7–8.5% ABV range. Danish breweries often refer to them as Stouts, which indicates their historic lineage from the days when Porter was used as a generic name for Porter and Stout.',
            history:
              'Traditional beer from countries bordering the Baltic Sea, developed indigenously after higher-gravity export brown or imperial stouts from England were established. Historically top-fermented, many breweries adapted the recipes for bottom-fermenting yeast along with the rest of their production.',
            ingredients:
              'Generally lager yeast (cold fermented if using ale yeast, as is required when brewed in Russia). Debittered chocolate or black malt. Munich or Vienna base malt. Continental hops (Saazer-type, typically). May contain crystal malts and/or adjuncts. Brown or amber malt common in historical recipes.',
            comparison:
              'Much less roasted and smoother than an Imperial Stout, typically with less alcohol. Lacks the roasty qualities of stouts in general, more taking on the roasted-butnot-burnt characteristics of a schwarzbier. Quite fruity compared to other porters. Higher alcohol than other porters.',

            vitalStatistics: {
              og: '1.060 - 1.090',
              fg: '1.016 - 1.024',
              abv: '6.5 - 9.5%',
              ibu: '20 - 40',
              srm: '17 - 30'
            }
          },
          commercialExamples: [
            {
              name: 'Aldaris Porteris'
            },
            {
              name: 'Baltika #6 Porter'
            },
            {
              name: 'Devils Backbone Danzig'
            },
            {
              name: 'Okocim Porter'
            },
            {
              name: 'Sinebrychoff Porter'
            },
            {
              name: 'Zywiec Porter'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'any-fermentation'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'eastern-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'porter-family'
            },
            {
              tag: 'malty'
            }
          ]
        }
      ]
    },
    {
      name: 'German Wheat Beer',
      number: 10,
      subcategories: [
        {
          name: 'Weissbier',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A pale, refreshing German wheat beer with high carbonation, dry finish, a fluffy mouthfeel, and a distinctive banana-and-clove yeast character.',
            aroma:
              'Moderate to strong phenols (usually clove) and fruity esters (typically banana). The balance and intensity of the phenol and ester components can vary but the best examples are reasonably balanced and fairly prominent. The hop character ranges from low to none. A light to moderate wheat aroma (which might be perceived as bready or grainy) may be present but other malt characteristics should not. Optional, but acceptable, aromatics can include a light to moderate vanilla character, and/or a faint bubblegum aroma. None of these optional characteristics should be high or dominant, but often can add to the complexity and balance.',
            appearance:
              'Pale straw to gold in color. A very thick, moussy, long-lasting white head is characteristic. The high protein content of wheat impairs clarity in an unfiltered beer, although the level of haze is somewhat variable.',
            flavor:
              'Low to moderately strong banana and clove flavor. The balance and intensity of the phenol and ester components can vary but the best examples are reasonably balanced and fairly prominent. Optionally, a very light to moderate vanilla character and/or faint bubblegum notes can accentuate the banana flavor, sweetness and roundness; neither should be dominant if present. The soft, somewhat bready or grainy flavor of wheat is complementary, as is a slightly grainy-sweet malt character. Hop flavor is very low to none, and hop bitterness is very low to moderately low. Well-rounded, flavorful palate with a relatively dry finish. The perception of sweetness is more due to the absence of hop bitterness than actual residual sweetness; a sweet or heavy finish would significantly impair drinkability.',
            mouthfeel:
              'Medium-light to medium body; never heavy. Suspended yeast may increase the perception of body. The texture of wheat imparts the sensation of a fluffy, creamy fullness that may progress to a light, spritzy finish aided by high to very high carbonation. Always effervescent.',
            comments:
              'These are refreshing, fast-maturing beers that are lightly hopped and show a unique banana-and-clove yeast character. These beers often don’t age well and are best enjoyed while young and fresh. The version mit hefe is served with suspended yeast; the krystal version is filtered for excellent clarity. The character of a krystal weizen is generally fruitier and less phenolic than that of the weissbier mit hefe. May be known as hefeweizen, particularly in the United States.',
            history:
              'While Bavaria has a wheat beer tradition dating back hundreds of years, brewing wheat beer used to be a monopoly reserved for Bavarian royalty. Modern weissbier dates from 1872 when Schneider began production. However, pale weissbier only became popular since the 1960s. It is quite popular today, particularly in southern Germany.',
            ingredients:
              'By German brewing tradition, at least 50% of the grist must be malted wheat, although some versions use up to 70%; the remainder is typically Pilsner malt. A decoction mash is traditional, although modern brewers typically don’t follow this practice. Weizen ale yeast produces the typical spicy and fruity character, although high fermentation temperatures can affect the balance and produce off-flavors.',
            vitalStatistics: {
              og: '1.044 - 1.052',
              fg: '1.010 - 1.014',
              abv: '4.3 - 5.6%',
              ibu: '8 - 15',
              srm: '2 - 6'
            }
          },
          commercialExamples: [
            {
              name: 'Ayinger Bräu Weisse'
            },
            {
              name: 'Hacker-Pschorr Weisse'
            },
            {
              name: 'Paulaner Hefe-Weizen Naturtrüb'
            },
            {
              name: 'Schneider Weisse Unser Original'
            },
            {
              name: 'Weihenstephaner Hefeweissbier'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'wheat-beer-family'
            },
            {
              tag: 'malty'
            }
          ]
        },
        {
          name: 'Dunkles Weissbier',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A moderately dark German wheat beer with a distinctive banana-and-clove yeast character, supported by a toasted bread or caramel malt flavor. Highly carbonated and refreshing, with a creamy, fluffy texture and light finish that encourages drinking.',
            aroma:
              'Moderate phenols (usually clove) and fruity esters (usually banana). The balance and intensity of the phenol and ester components can vary but the best examples are reasonably balanced. Optionally, a low to moderate vanilla character and/or faint bubblegum notes may be present, but should not dominate. Hop aroma ranges from low to none, and may be lightly floral, spicy, or herbal. A light to moderate wheat aroma (which might be perceived as bready, doughy or grainy) may be present and is often accompanied by a caramel, bread crust, or richer malt aroma. The malt aroma may moderate the phenols and esters somewhat.',
            appearance:
              'Light copper to mahogany brown in color. A very thick, moussy, long-lasting off-white head is characteristic. The high protein content of wheat impairs clarity in this traditionally unfiltered style, although the level of haze is somewhat variable. Suspended yeast sediment can contribute to cloudiness.',
            flavor:
              'Low to moderately strong banana and clove flavor. The balance and intensity of the phenol and ester components can vary but the best examples are reasonably balanced and fairly prominent. Optionally, a very light to moderate vanilla character and/or faint bubblegum notes can accentuate the banana flavor, sweetness and roundness; neither should be dominant if present. The soft, somewhat bready, doughy, or grainy flavor of wheat is complementary, as is a richer caramel, toast, or bread crust flavor. The malty richness can be low to medium-high, and supports the yeast character. A roasted malt character is inappropriate. A spicy, herbal, or floral hop flavor is very low to none, and hop bitterness is very low to low. Well-rounded, flavorful, often somewhat malty palate with a relatively dry finish.',
            mouthfeel:
              'Medium-light to medium-full body. The texture of wheat as well as yeast in suspension imparts the sensation of a fluffy, creamy fullness that may progress to a lighter finish, aided by moderate to high carbonation. Effervescent.',
            comments:
              'The presence of Munich and/or Vienna-type barley malts gives this style a deep, rich barley malt character not found in a weissbier. Often known as dunkelweizen, particularly in the United States.',
            history:
              'Bavaria has a wheat beer brewing traditional hundreds of years old, but the brewing right was reserved for Bavarian royalty until the late 1700s. Old-fashioned Bavarian wheat beer was often dark, as were most beer of the day. Pale weissbier started to become popular in the 1960s, but traditional dark wheat beer remained somewhat of an old person’s drink.',
            ingredients:
              'By German brewing tradition, at least 50% of the grist must be malted wheat, although some versions use up to 70%; the remainder is usually Munich, Vienna, or dark or caramel wheat malts, or Pilsner malt with color malt. A decoction mash is traditional, but infrequently used today. Weizen ale yeasts produce the typical spicy and fruity character, although extreme fermentation temperatures can affect the balance and produce off-flavors.',
            comparison:
              'Reflecting the best yeast and wheat character of a weissbier blended with the malty richness of a Munich dunkel. The banana and clove character is often less apparent than in a weissbier due to the increased maltiness.',
            vitalStatistics: {
              og: '1.044 - 1.056',
              fg: '1.010 - 1.014',
              abv: '4.3 - 5.6%',
              ibu: '10 - 18',
              srm: '14 - 23'
            }
          },
          commercialExamples: [
            {
              name: 'Ayinger Ur-Weisse'
            },
            {
              name: 'Ettaler Weissbier Dunkel'
            },
            {
              name: 'Franziskaner Hefe-Weisse Dunkel'
            },
            {
              name: 'Hacker-Pschorr Weisse Dark'
            },
            {
              name: 'Tucher Dunkles Hefe Weizen'
            },
            {
              name: 'Weihenstephaner Hefeweissbier Dunkel'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'wheat-beer-family'
            },
            {
              tag: 'malty'
            }
          ]
        },
        {
          name: 'Weizenbock',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A strong, malty, fruity, wheat-based ale combining the best malt and yeast flavors of a weissbier (pale or dark) with the malty-rich flavor, strength, and body of a Dunkles Bock or Doppelbock.',
            aroma:
              'Medium-high to high malty-rich character with a significant bready-grainy wheat component. Paler versions will have a bready-toasty malty richness, while darker versions will have a deeper, richer malt presence with significant Maillard products. The malt component is similar to a helles bock for pale versions (grainy-sweet-rich, lightly toasted) or a dunkles bock for dark versions (bready-malty-rich, highly toasted, optional caramel). The yeast contributes a typical weizen character of banana and spice (clove, vanilla), which can be medium-low to medium-high. Darker versions can have some dark fruit aroma (plums, prunes, grapes, raisins), particularly as they age. A low to moderate alcohol aroma is acceptable, but shouldn’t be hot or solventy. No hop aroma. The malt, yeast, and alcohol intertwine to produce a complex, inviting, prominent bouquet.',
            appearance:
              'Pale and dark versions exist, with pale versions being light gold to light amber, and dark versions being dark amber to dark ruby-brown in color. A very thick, moussy, long-lasting white to off-white (pale versions) or light tan (dark versions) head is characteristic. The high protein content of wheat impairs clarity in this traditionally unfiltered style, although the level of haze is somewhat variable. Suspended yeast sediment can contribute to the cloudiness.',
            flavor:
              'imilar to the aroma, a medium-high to high malty-rich flavor together with a significant bready-grainy wheat flavor. Paler versions will have a bready, toasty, grainy-sweet malt richness, while darker versions will have deeper, bready-rich or toasted malt flavors with significant Maillard products, optional caramel. Low to moderate banana and spice (clove, vanilla) yeast character. Darker versions can have some dark fruit flavor (plums, prunes, grapes, raisins), particularly as they age. A light chocolate character (but not roast) is optional in darker versions. No hop flavor. A low hop bitterness can give a slightly sweet palate impression, but the beer typically finishes dry (sometimes enhanced by a light alcohol character). The interplay between the malt, yeast, and alcohol adds complexity and interest, which is often enhanced with age.',
            mouthfeel:
              'Medium-full to full body. A fluffy or creamy texture is typical, as is the mild warming sensation of substantial alcohol content. Moderate to high carbonation.',
            comments:
              'A Weissbier brewed to bock or doppelbock strength. Schneider also produces an Eisbock version. Pale and dark versions exist, although dark are more common. Pale versions have less rich malt complexity and often more hops, as with doppelbocks. Lightly oxidized Maillard products can produce some rich, intense flavors and aromas that are often seen in aged imported commercial products; fresher versions will not have this character. Well-aged examples might also take on a slight sherry-like complexity.',
            history:
              'Aventinus, the world’s oldest top-fermented wheat doppelbock, was created in 1907 at the Schneider Weisse Brauhaus in Munich.',
            ingredients:
              'A high percentage of malted wheat is used (by German brewing tradition must be at least 50%, although it may contain up to 70%), with the remainder being Munich- and/or Vienna-type barley malts in darker versions, and more Pils malt in paler versions. Some color malts may be used sparingly. A traditional decoction mash can give the appropriate body without cloying sweetness. Weizen ale yeasts produce the typical spicy and fruity character. Too warm or too cold fermentation will cause the phenols and esters to be out of balance and may create off-flavors. Hop choice is essentially irrelevant, but German varieties are most traditional.',
            comparison:
              'tronger and richer than a Weissbier or Dunkles Weissbier, but with similar yeast character. More directly comparable to the Doppelbock style, with the pale and dark variations. Can vary widely in strength, but most are in the bock to doppelbock range.',
            instruction:
              'The entrant will specify whether the entry is a pale or a dark version.',
            vitalStatistics: {
              og: '1.064 - 1.090',
              fg: '1.015 - 1.022',
              abv: '6.5 - 9.0%',
              ibu: '15 - 30',
              srm: '6 - 25'
            }
          },
          commercialExamples: [
            {
              name: 'Eisenbahn Weizenbock'
            },
            {
              name: 'Plank Bavarian Dunkler Weizenbock'
            },
            {
              name: 'Penn Weizenbock'
            },
            {
              name:
                'Schneider Unser Aventinus; Pale –Plank Bavarian Heller Weizenbock'
            },
            {
              name: 'Weihenstephaner Vitus'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'wheat-beer-family'
            },
            {
              tag: 'malty'
            }
          ]
        }
      ]
    },
    {
      name: 'British Bitter',
      number: 11,
      subcategories: [
        {
          name: 'Ordinary Bitter',
          letter: 'A',
          guidelines: {
            overallImpression:
              'Low gravity, low alcohol levels, and low carbonation make this an easy-drinking session beer. The malt profile can vary in flavor and intensity, but should never override the overall bitter impression. Drinkability is a critical component of the style',
            aroma:
              'Low to moderate malt aroma, often (but not always) with a light caramel quality. Bready, biscuity, or lightly toasty malt complexity is common. Mild to moderate fruitiness. Hop aroma can range from moderate to none, typically with a floral, earthy, resiny, and/or fruity character. Generally no diacetyl, although very low levels are allowed.',
            appearance:
              'Pale amber to light copper color. Good to brilliant clarity. Low to moderate white to off-white head. May have very little head due to low carbonation.',
            flavor:
              'Medium to moderately high bitterness. Moderately low to moderately high fruity esters. Moderate to low hop flavor, typically with an earthy, resiny, fruity, and/or floral character. Low to medium maltiness with a dry finish. The malt profile is typically bready, biscuity, or lightly toasty. Low to moderate caramel or toffee flavors are optional. Balance is often decidedly bitter, although the bitterness should not completely overpower the malt flavor, esters and hop flavor. Generally no diacetyl, although very low levels are allowed.',
            mouthfeel:
              'Light to medium-light body. Low carbonation, although bottled examples can have moderate carbonation.',
            comments:
              ' The lowest gravity member of the British Bitter family, typically known to consumers simply as “bitter” (although brewers tend to refer to it as Ordinary Bitter to distinguish it from other members of the family).',
            history:
              'The family of British bitters grew out of English pale ales as a draught product in the late 1800s. The use of crystal malts in bitters became more widespread after WWI. Traditionally served very fresh under no pressure (gravity or hand pump only) at cellar temperatures (i.e., “real ale”). Most bottled or kegged versions of UK-produced bitters are often higher-alcohol and more highly carbonated versions of cask products produced for export, and have a different character and balance than their draught counterparts in Britain (often being sweeter and less hoppy than the cask versions). These guidelines reflect the “real ale” version of the style, not the export formulations of commercial products.',
            ingredients:
              'Pale ale, amber, and/or crystal malts. May use a touch of dark malt for color adjustment. May use sugar adjuncts, corn, or wheat. English finishing hops are most traditional, but any hops are fair game; if American hops are used, a light touch is required. Characterful British yeast.',
            comparison:
              'Some modern variants are brewed exclusively with pale malt and are known as golden ales, summer ales, or golden bitters. Emphasis is on the bittering hop addition as opposed to the aggressive middle and late hopping seen in American ales.',

            vitalStatistics: {
              og: '1.030 - 1.039',
              fg: '1.007 - 1.011',
              abv: '3.2 - 3.8%',
              ibu: '25 - 35',
              srm: '8 - 14'
            }
          },
          commercialExamples: [
            {
              name: 'Adnams Southwold Bitter'
            },
            {
              name: 'Brains Bitter'
            },
            {
              name: "Fuller's Chiswick Bitter"
            },
            {
              name: 'Greene King IPA'
            },
            {
              name: 'Tetley’s Original Bitter'
            },
            {
              name: "Young's Bitter"
            }
          ],
          tags: [
            {
              tag: 'session-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'amber-ale-family'
            },
            {
              tag: 'bitter'
            }
          ]
        },
        {
          name: 'Best Bitter',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A flavorful, yet refreshing, session beer. Some examples can be more malt balanced, but this should not override the overall bitter impression. Drinkability is a critical component of the style.',
            aroma:
              'Low to moderate malt aroma, often (but not always) with a low to medium-low caramel quality. Bready, biscuit, or lightly toasty malt complexity is common. Mild to moderate fruitiness. Hop aroma can range from moderate to none, typically with a floral, earthy, resiny, and/or fruity character. Generally no diacetyl, although very low levels are allowed.',
            appearance:
              'Pale amber to medium copper color. Good to brilliant clarity. Low to moderate white to off-white head. May have very little head due to low carbonation.',
            flavor:
              'Medium to moderately high bitterness. Moderately low to moderately high fruity esters. Moderate to low hop flavor, typically with an earthy, resiny, fruity, and/or floral character. Low to medium maltiness with a dry finish. The malt profile is typically bready, biscuity, or lightly toasty. Low to moderate caramel or toffee flavors are optional. Balance is often decidedly bitter, although the bitterness should not completely overpower the malt flavor, esters and hop flavor. Generally no diacetyl, although very low levels are allowed.',
            mouthfeel:
              'Medium-light to medium body. Low carbonation, although bottled examples can have moderate carbonation.',
            comments:
              'More evident malt flavor than in an ordinary bitter, this is a stronger, session-strength ale.',
            history:
              'The family of British bitters grew out of English pale ales as a draught product in the late 1800s. The use of crystal malts in bitters became more widespread after WWI. Traditionally served very fresh under no pressure (gravity or hand pump only) at cellar temperatures (i.e., “real ale”). Most bottled or kegged versions of UK-produced bitters are often higher-alcohol and more highly carbonated versions of cask products produced for export, and have a different character and balance than their draught counterparts in Britain (often being sweeter and less hoppy than the cask versions). These guidelines reflect the “real ale” version of the style, not the export formulations of commercial products.',
            ingredients:
              'Pale ale, amber, and/or crystal malts. May use a touch of dark malt for color adjustment. May use sugar adjuncts, corn or wheat. English finishing hops are most traditional, but any hops are fair game; if American hops are used, a light touch is required. Characterful British yeast.',
            comparison:
              'More alcohol than an ordinary bitter, and often using higher-quality ingredients. Less alcohol than a strong bitter. More caramel or base malt character and color than a British Golden Ale. Emphasis is on the bittering hop addition as opposed to the aggressive middle and late hopping seen in American ales.',

            vitalStatistics: {
              og: '1.040 - 1.048',
              fg: '1.008 - 1.012',
              abv: '3.8 - 4.6%',
              ibu: '25 - 40',
              srm: '8 - 16'
            }
          },
          commercialExamples: [
            {
              name: 'Adnams SSB'
            },
            {
              name: 'Coniston Bluebird Bitter'
            },
            {
              name: "Fuller's London Pride"
            },
            {
              name: 'Harvey’s Sussex Best Bitter'
            },
            {
              name: 'Shepherd Neame Master Brew Kentish Ale'
            },
            {
              name: 'Timothy Taylor Landlord'
            },
            {
              name: 'Young’s Special'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'amber-ale-family'
            },
            {
              tag: 'bitter'
            }
          ]
        },
        {
          name: 'Strong Bitter',
          letter: 'C',
          guidelines: {
            overallImpression:
              'An average-strength to moderately-strong British bitter ale. The balance may be fairly even between malt and hops to somewhat bitter. Drinkability is a critical component of the style. A rather broad style that allows for considerable interpretation by the brewer.',
            aroma:
              'Hop aroma moderately-high to moderately-low, typically with a floral, earthy, resiny, and/or fruity character. Medium to medium-high malt aroma, optionally with a low to moderate caramel component. Medium-low to medium-high fruity esters. Generally no diacetyl, although very low levels are allowed.',
            appearance:
              'ight amber to deep copper color. Good to brilliant clarity. Low to moderate white to off-white head. A low head is acceptable when carbonation is also low.',
            flavor:
              'Medium to medium-high bitterness with supporting malt flavors evident. The malt profile is typically bready, biscuity, nutty, or lightly toasty, and optionally has a moderately low to moderate caramel or toffee flavor. Hop flavor moderate to moderately high, typically with a floral, earthy, resiny, and/or fruity character. Hop bitterness and flavor should be noticeable, but should not totally dominate malt flavors. Moderately-low to high fruity esters. Optionally may have low amounts of alcohol. Medium-dry to dry finish. Generally no diacetyl, although very low levels are allowed.',
            mouthfeel:
              'Medium-light to medium-full body. Low to moderate carbonation, although bottled versions will be higher. Stronger versions may have a slight alcohol warmth but this character should not be too high.',
            comments:
              'In England today, “ESB” is a Fullers trademark, and no one thinks of it as a generic class of beer. It is a unique (but very well-known) beer that has a very strong, complex malt profile not found in other examples, often leading judges to overly penalize traditional English strong bitters. In America, ESB has been co-opted to describe a malty, bitter, reddish, standard-strength (for the US) British-type ale, and is a popular craft beer style. This may cause some judges to think of US brewpub ESBs as representative of this style.',
            history:
              'See comments in category introduction. Strong bitters can be seen as a higher-gravity version of best bitters (although not necessarily “more premium” since best bitters are traditionally the brewer’s finest product). British pale ales are generally considered a premium, export-strength pale, bitter beer that roughly approximates a strong bitter, although reformulated for bottling (including increasing carbonation levels). While modern British pale ale is considered a bottled bitter, historically the styles were different.',
            ingredients:
              'Pale ale, amber, and/or crystal malts, may use a touch of black malt for color adjustment. May use sugar adjuncts, corn or wheat. English finishing hops are most traditional, but any hops are fair game; if American hops are used, a light touch is required. Characterful British yeast. Burton versions use medium to high sulfate water, which can increase the perception of dryness and add a minerally or sulfury aroma and flavor.',
            comparison:
              'More evident malt and hop flavors than in a special or best bitter, as well as more alcohol. Stronger versions may overlap somewhat with British strong ales, although strong bitters will tend to be paler and more bitter. More malt flavor (particularly caramel) and esters than an American Pale Ale, with different finishing hop character.',

            vitalStatistics: {
              og: '1.048 - 1.060',
              fg: '1.010 - 1.016',
              abv: '4.6 - 6.2%',
              ibu: '30 - 50',
              srm: '8 - 18'
            }
          },
          commercialExamples: [
            {
              name: 'Bass Ale'
            },
            {
              name: 'Highland Orkney Blast'
            },
            {
              name: 'Samuel Smith’s Old Brewery Pale Ale'
            },
            {
              name: "Shepherd Neame Bishop's Finger"
            },
            {
              name: 'Shepherd Neame Spitfire'
            },
            {
              name: 'West Berkshire Dr. Hexter’s Healer'
            },
            {
              name: 'Whitbread Pale Ale'
            },
            {
              name: 'Young’s Ram Rod'
            }
          ],
          tags: [
            {
              tag: 'session-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'amber-ale-family'
            },
            {
              tag: 'bitter'
            }
          ]
        }
      ]
    },
    {
      name: 'Pale Commonwealth Beer',
      number: 12,
      subcategories: [
        {
          name: 'British Golden Ale',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A hop-forward, average-strength to moderately-strong pale bitter. Drinkability and a refreshing quality are critical components of the style.',
            aroma:
              'Hop aroma is moderately low to moderately high, and can use any variety of hops – floral, herbal, or earthy English hops and citrusy American hops are most common. Frequently a single hop varietal will be showcased. Little to no malt aroma; no caramel. Medium-low to low fruity aroma from the hops rather than esters. Little to no diacetyl.',
            appearance:
              'Straw to golden in color. Good to brilliant clarity. Low to moderate white head. A low head is acceptable when carbonation is also low.',
            flavor:
              'Medium to medium-high bitterness. Hop flavor is moderate to moderately high of any hop variety, although citrus flavors are increasingly common. Medium-low to low malt character, generally bready with perhaps a little biscuity flavor. Caramel flavors are typically absent. Little to no diacetyl. Hop bitterness and flavor should be pronounced. Moderately-low to low esters. Medium-dry to dry finish. Bitterness increases with alcohol level, but is always balanced.',
            mouthfeel:
              'Light to medium body. Low to moderate carbonation on draught, although bottled commercial versions will be higher. Stronger versions may have a slight alcohol warmth, but this character should not be too high.',
            comments:
              'Well-hopped, quenching beer with an emphasis on showcasing hops. Served colder than traditional bitters, this style was originally positioned as a refreshing summer beer, but is now often brewed year-round. Although early on the beers were brewed with English hops, increasingly American citrus-flavored hops are used. Golden Ales are also called Golden Bitters, Summer Ales, or British Blonde Ales. Can be found in cask, keg, and bottle.',
            history:
              "Modern golden ales were developed in England to take on strongly-marketed lagers. While it is difficult to identify the first, Hop Back's Summer Lightning, first brewed in 1986, is thought by many to have got the style off the ground.",
            ingredients:
              'Low-color pale or lager malt acting as a blank canvas for the hop character. May use sugar adjuncts, corn or wheat. English hops frequently used, although citrusy American varietals are becoming more common. Somewhat clean-fermenting British yeast.',
            comparison:
              'More similar to an American Pale Ale than anything else, although it is often lower in alcohol and usually features British ingredients. Has no caramel and fewer esters compared to British bitters and pale ales. Dry as bitters but with less malt character to support the hops, giving a different balance. Often uses (and features) American hops, more so than most other modern British styles.',

            vitalStatistics: {
              og: '1.038 - 1.053',
              fg: '1.006 - 1.012',
              abv: '3.6 - 5.0%',
              ibu: '20 - 45',
              srm: '2 - 6'
            }
          },
          commercialExamples: [
            {
              name: 'Crouch Vale Brewers Gold'
            },
            {
              name: "Fuller's Discovery"
            },
            {
              name: 'Golden Hill Exmoor Gold'
            },
            {
              name: 'Hop Back Summer Lightning'
            },
            {
              name: 'Kelham Island Pale Rider'
            },
            {
              name: 'Morland Old Golden Hen'
            },
            {
              name: 'Oakham JHB'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'pale-ale-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'Australian Sparkling Ale',
          letter: 'B',
          guidelines: {
            overallImpression:
              'Smooth and balanced, all components merge together with similar intensities. Moderate flavors showcasing Australian ingredients. Large flavor dimension. Very drinkable, suited to a hot climate. Relies on yeast character.',
            aroma:
              'Fairly soft, clean aroma with a balanced mix of esters, hops, malt, and yeast – all moderate to low in intensity. The esters are frequently pears and apples, possibly with a very light touch of banana (optional). The hops are earthy, herbaceous, or might show the characteristic iron-like Pride of Ringwood nose. The malt can range from neutral grainy to moderately sweet to lightly bready; no caramel should be evident. Very fresh examples can have a lightly yeasty, sulfury nose.',
            appearance:
              'Deep yellow to light amber in color, often medium gold. Tall, frothy, persistent white head with tiny bubbles. Noticeable effervescence due to high carbonation. Brilliant clarity if decanted, but typically poured with yeast to have a cloudy appearance. Not typically cloudy unless yeast roused during the pour.',
            flavor:
              'Medium to low rounded, grainy to bready malt flavor, initially mild to malty-sweet but a medium to medium-high bitterness rises mid-palate to balance the malt. Caramel flavors typically absent. Highly attenuated, giving a dry finish with lingering bitterness, although the body gives an impression of fullness. Medium to medium-high hop flavor, somewhat earthy and possibly herbal, resinous, peppery, or iron-like but not floral, lasting into aftertaste. Medium-high to medium-low esters, often pears and apples. Banana is optional, but should never dominate. May be lightly minerally or sulfury, especially if yeast is present. Should not be bland.',
            mouthfeel:
              'High to very high carbonation, giving mouth-filling bubbles and a crisp, spritzy carbonic bite. Medium to medium-full body, tending to the higher side if poured with yeast. Smooth but gassy. Stronger versions may have a light alcohol warmth, but lower alcohol versions will not. Very well-attenuated; should not have any residual sweetness.',
            comments:
              'Coopers has been making their flagship Sparkling Ale since 1862, although the formulation has changed over the years. Presently the beer will have brilliant clarity if decanted, but publicans often pour most of the beer into a glass then swirl the bottle and dump in all the yeast. In some bars, the bottle is rolled along the bar! When served on draught, the brewery instructs publicans to invert the keg to rouse the yeast. A cloudy appearance for the style seems to be a modern consumer preference. Always naturally carbonated, even in the keg. A present-use ale, best enjoyed fresh.',
            history:
              'Brewing records show that the majority of Australian beer brewed in the 19th century was draught XXX (Mild) and porter. Ale in bottle was originally developed to compete with imported bottled pale ales from British breweries, such as Bass and Wm Younger’ Monk. By the early 20th century, bottled pale ale went out of fashion and “lighter” lager beers were in vogue. Many Australian Sparkling and Pale Ales were labeled as ales, but were actually bottom-fermented lagers with very similar grists to the ales that they replaced. Coopers of Adelaide, South Australia is the only surviving brewer producing the Sparkling Ale style.',
            ingredients:
              'Lightly kilned Australian 2-row pale malt, lager varieties may be used. Small amounts of crystal malt for color adjustment only. Modern examples use no adjuncts, cane sugar for priming only. Historical examples using 45% 2 row, 30% higher protein malt (6 row) would use around 25% sugar to dilute the nitrogen content. Traditionally used Australian hops, Cluster, and Goldings until replaced from mid-1960s by Pride of Ringwood. Highly attenuative Burton-type yeast (Australian-type strain typical). Variable water profile, typically with low carbonate and moderate sulfate.',
            comparison:
              'Superficially similar to English Pale Ales, although much more highly carbonated, with less caramel, less late hops, and showcasing the signature yeast strain and hop variety. More bitter than IBUs might suggest due to high attenuation, low final gravity, and somewhat coarse hops.',

            vitalStatistics: {
              og: '1.038 - 1.050',
              fg: '1.004 - 1.006',
              abv: '2.8 - 4.2%',
              ibu: '20 - 35',
              srm: '4 - 7'
            }
          },
          commercialExamples: [
            {
              name: 'Coopers Original Pale Ale'
            },
            {
              name: 'Coopers Sparkling Ale'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'pacific'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'pale-ale-family'
            },
            {
              tag: 'bitter'
            }
          ]
        },
        {
          name: 'English IPA',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A hoppy, moderately-strong, very well-attenuated pale British ale with a dry finish and a hoppy aroma and flavor. Classic British ingredients provide the best flavor profile.',
            aroma:
              'A moderate to moderately-high hop aroma of floral, spicy-peppery or citrus-orange in nature is typical. A slightly grassy dry-hop aroma is acceptable, but not required. A moderately-low caramel-like or toasty malt presence is optional. Low to moderate fruitiness is acceptable. Some versions may have a sulfury note, although this character is not mandatory.',
            appearance:
              'Color ranges from golden to deep amber, but most are fairly pale. Should be clear, although unfiltered dry-hopped versions may be a bit hazy. Moderate-sized, persistent head stand with off-white color.',
            flavor:
              'Hop flavor is medium to high, with a moderate to assertive hop bitterness. The hop flavor should be similar to the aroma (floral, spicy-peppery, citrus-orange, and/or slightly grassy). Malt flavor should be medium-low to medium, and be somewhat bready, optionally with light to medium-light biscuit-like, toasty, toffee-like and/or caramelly aspects. Medium-low to medium fruitiness. Finish is medium-dry to very dry, and the bitterness may linger into the aftertaste but should not be harsh. The balance is toward the hops, but the malt should still be noticeable in support. If high sulfate water is used, a distinctively minerally, dry finish, some sulfur flavor, and a lingering bitterness are usually present. Some clean alcohol flavor can be noted in stronger versions. Oak is inappropriate in this style.',
            mouthfeel:
              'Smooth, medium-light to medium-bodied mouthfeel without hop-derived astringency, although moderate to medium-high carbonation can combine to render an overall dry sensation despite a supportive malt presence. A low, smooth alcohol warming can and should be sensed in stronger (but not all) versions.',
            comments:
              'The attributes of IPA that were important to its arrival in good condition in India were that it was very well-attenuated, and heavily hopped. Simply because this is how IPA was shipped, doesn’t mean that other beers such as Porter weren’t also sent to India, that IPA was invented to be sent to India, that IPA was more heavily hopped than other keeping beers, or that the alcohol level was unusual for the time. Many modern examples labeled IPA are quite weak in strength. According to CAMRA, “so-called IPAs with strengths of around 3.5% are not true to style.” English beer historian Martyn Cornell has commented that beers like this are “not really distinguishable from an ordinary bitter.” So we choose to agree with these sources for our guidelines rather than what some modern British breweries are calling an IPA; just be aware of these two main types of IPAs in the British market today.',
            history:
              'Accounts of its origins vary, but most agree that what became later known as IPA was pale ale prepared for shipment to India in the late 1700s and early 1800s. George Hodgson of the Bow Brewery became well-known as an exporter of IPA during the early 1800s, and is the first name frequently mentioned with its popularity. As with all English beers with a long history, the popularity and formulation of the product changed over time. Burton breweries with their high-sulfate water were able to successfully brew IPA and began their domination of this market by the 1830s, around the time the name India Pale Ale was first used. Strength and popularity declined over time, and the style virtually disappeared in the second half of the 20th century. The name was often used to describe pale ales and bitters, not anything special (a trend that continues in some modern British examples). The style underwent a craft beer rediscovery in the 1980s, and is what is described in these guidelines. Modern examples are inspired by classic versions, but shouldn’t be assumed to have an unbroken lineage with the exact same profile. White Shield is probably the example with the longest lineage, tracing to the strong Burton IPAs of old and first brewed in 1829.',
            ingredients:
              'Pale ale malt. English hops are traditional, particularly as finishing hops. Attenuative British ale yeast. Refined sugar may be used in some versions. Some versions may show a sulfate character from Burton-type water, but this is not essential to the style.',
            comparison:
              'Generally will have more finish hops and less fruitiness and/or caramel than British pale ales and bitters. Has less hop intensity and a more pronounced malt flavor than typical American versions.',

            vitalStatistics: {
              og: '1.050 - 1.075',
              fg: '1.010 - 1.018',
              abv: '5.0 - 7.5%',
              ibu: '40 - 60',
              srm: '6 - 14'
            }
          },
          commercialExamples: [
            {
              name: 'Freeminer Trafalgar IPA'
            },
            {
              name: "Fuller's Bengal Lancer IPA"
            },
            {
              name: 'Meantime India Pale Ale'
            },
            {
              name: 'Ridgeway IPA'
            },
            {
              name: 'Summit True Brit IPA'
            },
            {
              name: 'Thornbridge Jaipur, Worthington White Shield'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'ipa-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        }
      ]
    },
    {
      name: 'Brown British Beer',
      number: 13,
      subcategories: [
        {
          name: 'Dark Mild',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A dark, low-gravity, malt-focused British session ale readily suited to drinking in quantity. Refreshing, yet flavorful, with a wide range of dark malt or dark sugar expression.',
            aroma:
              'Low to moderate malt aroma, and may have some fruitiness. The malt expression can take on a wide range of character, which can include caramel, toffee, grainy, toasted, nutty, chocolate, or lightly roasted. Little to no hop aroma, earthy or floral if present. Very low to no diacetyl.',
            appearance:
              'Copper to dark brown or mahogany color. A few paler examples (medium amber to light brown) exist. Generally clear, although is traditionally unfiltered. Low to moderate off-white to tan head; retention may be poor.',
            flavor:
              'Generally a malty beer, although may have a very wide range of malt- and yeast-based flavors (e.g., malty, sweet, caramel, toffee, toast, nutty, chocolate, coffee, roast, fruit, licorice, plum, raisin). Can finish sweet to dry. Versions with darker malts may have a dry, roasted finish. Low to moderate bitterness, enough to provide some balance but not enough to overpower the malt. Fruity esters moderate to none. Diacetyl and hop flavor low to none.',
            mouthfeel:
              'Light to medium body. Generally low to medium-low carbonation. Roast-based versions may have a light astringency. Sweeter versions may seem to have a rather full mouthfeel for the gravity.',
            comments:
              'Most are low-gravity session beers around 3.2%, although some versions may be made in the stronger (4%+) range for export, festivals, seasonal and/or special occasions. Generally served on cask; session-strength bottled versions don’t often travel well. A wide range of interpretations are possible. Pale versions exist, but these are even more rare than dark milds; these guidelines only describe the modern dark version.',
            history:
              'Historically, ‘mild’ was simply an unaged beer, and could be used as an adjective to distinguish between aged or more highly hopped keeping beers. Modern milds trace their roots to the weaker X-type ales of the 1800s, although dark milds did not appear until the 20th century. In current usage, the term implies a lower-strength beer with less hop bitterness than bitters. The guidelines describe the modern British version. The term ‘mild’ is currently somewhat out of favor with consumers, and many breweries no longer use it. Increasingly rare. There is no historic connection or relationship between Mild and Porter.',
            ingredients:
              'Pale British base malts (often fairly dextrinous), crystal malt, dark malts or dark sugar adjuncts, may also include adjuncts such as flaked maize, and may be colored with brewer’s caramel. Characterful British ale yeast. Any type of hops, since their character is muted and rarely is noticeable.',
            comparison:
              'Some versions may seem like lower-gravity modern English porters. Much less sweet than London Brown Ale.',

            vitalStatistics: {
              og: '1.030 - 1.038',
              fg: '1.008 - 1.013',
              abv: '3.0 - 3.8%',
              ibu: '10 - 25',
              srm: '12 - 25'
            }
          },
          commercialExamples: [
            {
              name: "Banks's Mild"
            },
            {
              name: "Cain's Dark Mild"
            },
            {
              name: 'Highgate Dark Mild'
            },
            {
              name: 'Brain’s Dark'
            },
            {
              name: 'Moorhouse Black Cat'
            },
            {
              name: 'Rudgate Ruby Mild'
            },
            {
              name: 'Theakston Traditional Mild'
            }
          ],
          tags: [
            {
              tag: 'session-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'brown-ale-family'
            },
            {
              tag: 'malty'
            }
          ]
        },
        {
          name: 'British Brown Ale',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A malty, brown caramel-centric British ale without the roasted flavors of a Porter.',
            aroma:
              'Light, sweet malt aroma with toffee, nutty, or light chocolate notes, and a light to heavy caramel quality. A light but appealing floral or earthy hop aroma may also be noticed. A light fruity aroma may be evident, but should not dominate.',
            appearance:
              'Dark amber to dark reddish-brown color. Clear. Low to moderate off-white to light tan head.',
            flavor:
              'Gentle to moderate malt sweetness, with a light to heavy caramel character and a medium to dry finish. Malt may also have a nutty, toasted, biscuity, toffee, or light chocolate character. Medium to medium-low bitterness. Malt-hop balance ranges from even to malt-focused; hop flavor low to none (floral or earthy qualities). Low to moderate fruity esters can be present.',
            mouthfeel:
              'Medium-light to medium body. Medium to medium-high carbonation.',
            comments:
              'A wide-ranging category with different interpretations possible, ranging from lighter-colored to hoppy to deeper, darker, and caramel-focused; however, none of the versions have strongly roasted flavors. A stronger Double Brown Ale was more popular in the past, but is very hard to find now. While London Brown Ales are marketed using the name Brown Ale, we list those as a different judging style due to the significant difference in balance (especially sweetness) and alcohol strength; that doesn’t mean that they aren’t in the same family, though.',
            history:
              'Brown ale has a long history in Great Britain, although several different types of products used that name at various times. Modern brown ale is a 20th century creation as a bottled product; it is not the same as historical products of the same name. A wide range of gravities were brewed, but modern brown ales are generally of the stronger (by current UK standards) interpretation. This style is based on the modern stronger British brown ales, not historical versions or the sweeter London Brown Ale. Predominately but not exclusively a bottled product currently.',
            ingredients:
              'British mild ale or pale ale malt base with caramel malts. May also have small amounts darker malts (e.g., chocolate) to provide color and the nutty character. English hop varieties are most authentic.',
            comparison:
              'More malty balance than British Bitters, with more malt flavors from darker grains. Stronger than a Dark Mild. Less roast than an English Porter. Stronger and much less sweet than London Brown Ale.',

            vitalStatistics: {
              og: '1.040 - 1.052',
              fg: '1.008 - 1.013',
              abv: '4.2 - 5.4%',
              ibu: '20 - 30',
              srm: '12 - 22'
            }
          },
          commercialExamples: [
            {
              name: 'Maxim Double Maxim'
            },
            {
              name: 'Newcastle Brown Ale'
            },
            {
              name: 'Riggwelter Yorkshire Ale'
            },
            {
              name: 'Samuel Smith’s Nut Brown Ale'
            },
            {
              name: 'Wychwood Hobgoblin'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'brown-ale-family'
            },
            {
              tag: 'malty'
            }
          ]
        },
        {
          name: 'English Porter',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A moderate-strength brown beer with a restrained roasty character and bitterness. May have a range of roasted flavors, generally without burnt qualities, and often has a chocolate-caramel-malty profile.',
            aroma:
              'Moderate to moderately low bready, biscuity, and toasty malt aroma with mild roastiness, and may have a chocolate quality. May also show some non-roasted malt character in support (caramelly, nutty, toffee-like and/or sweet). May have up to a moderate level of floral or earthy hops. Fruity esters moderate to none. Diacetyl low to none.',
            appearance:
              'Light brown to dark brown in color, often with ruby highlights when held up to light. Good clarity, although may approach being opaque. Moderate off-white to light tan head with good to fair retention.',
            flavor:
              'Moderate bready, biscuity, and toasty malt flavor includes a mild to moderate roastiness (frequently with a chocolate character) and often a significant caramel, nutty, and/or toffee character. May have other secondary flavors such as coffee, licorice, biscuits or toast in support. Should not have a significant burnt or harsh roasted flavor, although small amounts may contribute a bitter chocolate complexity. Earthy or floral hop flavor moderate to none. Medium-low to medium hop bitterness will vary the balance from slightly malty to slightly bitter. Usually fairly well-attenuated, although can be somewhat sweet. Diacetyl moderately-low to none. Moderate to low fruity esters.',
            mouthfeel:
              'Medium-light to medium body. Moderately-low to moderately-high carbonation. Light to moderate creamy texture.',
            comments:
              'This style description describes the modern version of English porter, not every possible variation over time in every region where it existed. Historical re-creations should be entered in the Historical style category, with an appropriate description describing the profile of the beer. Modern craft examples in the UK are bigger and hoppier.',
            history:
              'Originating in London around 300 years ago, porter evolved from earlier sweet, Brown Beer popular at the time. Evolved many times with various technological and ingredient developments and consumer preferences driving these changes. Became a highly-popular, widely-exported style in the 1800s before declining around WWI and disappearing in the 1950s. It was re-introduced in the mid-1970s with the start of the craft beer era. The name is said to have been derived from its popularity with the London working class performing various load-carrying tasks of the day. Parent of various regional interpretations over time, and a predecessor to all stouts (which were originally called “stout porters”). There is no historic connection or relationship between Mild and Porter.',
            ingredients:
              'Grists vary, but something producing a dark color is always involved. Chocolate or other dark-roasted malts, caramel malt, brewing sugars, and the like are common. London-type porters often use brown malt as a characteristic flavor.',
            comparison:
              'Differs from an American Porter in that it usually has softer, sweeter and more caramelly flavors, lower gravities, and usually less alcohol; the American Porter will also typically have more of a hop character. More substance and roast than a British Brown Ale. Higher in gravity than a dark mild.',

            vitalStatistics: {
              og: '1.040 - 1.052',
              fg: '1.008 - 1.014',
              abv: '4.0 - 5.4%',
              ibu: '18 - 35',
              srm: '20 - 30'
            }
          },
          commercialExamples: [
            {
              name: 'Burton Bridge Burton Porter'
            },
            {
              name: "Fuller's London Porter"
            },
            {
              name: 'Nethergate Old Growler Porter'
            },
            {
              name: 'RCH Old Slug Porter'
            },
            {
              name: 'Samuel Smith Taddy Porter'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'porter-family'
            },
            {
              tag: 'malty'
            },
            {
              tag: 'roasty'
            }
          ]
        }
      ]
    },
    {
      name: 'Scottish Ale',
      number: 14,
      subcategories: [
        {
          name: 'Scottish Light',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A malt-focused, generally caramelly beer with perhaps a few esters and occasionally a butterscotch aftertaste. Hops only to balance and support the malt. The malt character can range from dry and grainy to rich, toasty, and caramelly, but is never roasty and especially never has a peat smoke character. Traditionally the darkest of the Scottish ales, sometimes nearly black but lacking any burnt, overtly roasted character.',
            aroma:
              'Low to medium maltiness, often with flavors of toasted breadcrumbs, lady fingers, and English biscuits. Low to medium caramel and low butterscotch is allowable. Light pome fruitiness in best examples. May have low traditional English hop aroma (earthy, floral, orange-citrus, spicy, etc.). Peat smoke is inappropriate.',
            appearance:
              'Pale copper to very dark brown. Clear. Low to moderate, creamy off-white.',
            flavor:
              'Entirely malt-focused, with flavors ranging from pale, bready malt with caramel overtones to rich-toasty malt with roasted accents (but never roasty) or a combination thereof. Fruity esters are not required but add depth yet are never high. Hop bitterness to balance the malt. No to low hop flavor is also allowed and should of traditional English character (earthy, floral, orange-citrus, spicy, etc.). Finish ranges from rich and malty to dry and grainy. A subtle butterscotch character is acceptable; however, burnt sugars are not. The malt-hop balance tilts toward malt. Peat smoke is inappropriate.',
            mouthfeel:
              'Medium-low to medium body. Low to moderate carbonation. Can be relatively rich and creamy to dry and grainy.',
            comments:
              'Malt-focused ales that gain the vast majority of their character from specialty malts, never the process. Burning malt or wort sugars via ‘kettle caramelization’ is not traditional nor is any blatantly ‘butterscotch’ character. Most frequently a draught product. Smoke character is inappropriate as any found traditionally would have come from the peat in the source water. Scottish ales with smoke character should be entered as a Classic Style Smoked Beer.',
            history: '',
            ingredients:
              'Originally used Scottish pale malt, grits or flaked maize, and brewers caramel for color. Later adapted to use additional ingredients, such as amber and brown malts, crystal and wheat malts, and roasted grains or dark sugars for color but not for the ‘roasty’ flavor. Sugar adjuncts are traditional. Clean or slightly fruity yeast. Peat-smoked malt is inauthentic and inappropriate.',
            comparison:
              'Similar character to a Wee Heavy, but much smaller. Similar in color to a Dark Mild, but a little weaker in strength.',

            vitalStatistics: {
              og: '1.030 - 1.035',
              fg: '1.010 - 1.013',
              abv: '2.5 - 3.2%',
              ibu: '10 - 20',
              srm: '17 - 22'
            }
          },
          commercialExamples: [
            {
              name: "McEwan's 60"
            }
          ],
          tags: [
            {
              tag: 'session-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'amber-ale-family'
            },
            {
              tag: 'malty'
            }
          ]
        },
        {
          name: 'Scottish Heavy',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A malt-focused, generally caramelly beer with perhaps a few esters and occasionally a butterscotch aftertaste. Hops only to balance and support the malt. The malt character can range from dry and grainy to rich, toasty, and caramelly, but is never roasty and especially never has a peat smoke character.',
            aroma:
              'Low to medium maltiness, often with flavors of toasted breadcrumbs, lady fingers, and English biscuits. Low to medium caramel and low butterscotch is allowable. Light pome fruitiness in best examples. May have low traditional English hop aroma (earthy, floral, orange-citrus, spicy, etc.). Peat smoke is inappropriate.',
            appearance:
              'Pale copper to very dark brown. Clear. Low to moderate, creamy off-white.',
            flavor:
              'Entirely malt-focused, with flavors ranging from pale, bready malt with caramel overtones to rich-toasty malt with roasted accents (but never roasty) or a combination thereof. Fruity esters are not required but add depth yet are never high. Hop bitterness to balance the malt. No to low hop flavor is also allowed and should of traditional English character (earthy, floral, orange-citrus, spicy, etc.). Finish ranges from rich and malty to dry and grainy. A subtle butterscotch character is acceptable; however, burnt sugars are not. The malt-hop balance tilts toward malt. Peat smoke is inappropriate.',
            mouthfeel:
              'Medium-low to medium body. Low to moderate carbonation. Can be relatively rich and creamy to dry and grainy. ',
            comments:
              'Malt-focused ales that gain the vast majority of their character from specialty malts, never the process. Burning malt or wort sugars via ‘kettle caramelization’ is not traditional nor is any blatantly ‘butterscotch’ character. Most frequently a draught product. Smoke character is inappropriate as any found traditionally would have come from the peat in the source water. Scottish ales with smoke character should be entered as a Classic Style Smoked Beer.',
            history: '',
            ingredients:
              'Originally used Scottish pale malt, grits or flaked maize, and brewers caramel for color. Later adapted to use additional ingredients, such as amber and brown malts, crystal and wheat malts, and roasted grains or dark sugars for color but not for the ‘roasty’ flavor. Sugar adjuncts are traditional. Clean or slightly fruity yeast. Peat-smoked malt is inauthentic and inappropriate.',
            comparison: 'Similar character to a Wee Heavy, but much smaller.',

            vitalStatistics: {
              og: '1.035 - 1.040',
              fg: '1.010 - 1.015',
              abv: '3.2 - 3.9%',
              ibu: '10 - 20',
              srm: '13 - 22'
            }
          },
          commercialExamples: [
            {
              name: 'Broughton Greenmantle Ale'
            },
            {
              name: 'Caledonia Smooth'
            },
            {
              name: "McEwan's 70"
            },
            {
              name: 'Orkney Raven Ale'
            },
            {
              name: 'Tennent’s Special Ale'
            }
          ],
          tags: [
            {
              tag: 'session-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'amber-ale-family'
            },
            {
              tag: 'malty'
            }
          ]
        },
        {
          name: 'Scottish Export',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A malt-focused, generally caramelly beer with perhaps a few esters and occasionally a butterscotch aftertaste. Hops only to balance and support the malt. The malt character can range from dry and grainy to rich, toasty, and caramelly, but is never roasty and especially never has a peat smoke character.',
            aroma:
              'Low to medium maltiness, often with flavors of toasted breadcrumbs, lady fingers, and English biscuits. Low to medium caramel and low butterscotch is allowable. Light pome fruitiness in best examples. May have low traditional English hop aroma (earthy, floral, orange-citrus, spicy, etc.). Peat smoke is inappropriate.',
            appearance:
              'Pale copper to very dark brown. Clear. Low to moderate, creamy off-white.',
            flavor:
              'Entirely malt-focused, with flavors ranging from pale, bready malt with caramel overtones to rich-toasty malt with roasted accents (but never roasty) or a combination thereof. Fruity esters are not required but add depth yet are never high. Hop bitterness to balance the malt. No to low hop flavor is also allowed and should of traditional English character (earthy, floral, orange-citrus, spicy, etc.). Finish ranges from rich and malty to dry and grainy. A subtle butterscotch character is acceptable; however, burnt sugars are not. The malt-hop balance tilts toward malt. Peat smoke is inappropriate.',
            mouthfeel:
              'Medium-low to medium body. Low to moderate carbonation. Can be relatively rich and creamy to dry and grainy.',
            comments:
              'Malt-focused ales that gain the vast majority of their character from specialty malts, never the process. Burning malt or wort sugars via ‘kettle caramelization’ is not traditional nor is any blatantly ‘butterscotch’ character. Most frequently a draught product. Smoke character is inappropriate as any found traditionally would have come from the peat in the source water. Scottish ales with smoke character should be entered as a Classic Style Smoked Beer.',
            history: '',
            ingredients:
              'Originally used Scottish pale malt, grits or flaked maize, and brewers caramel for color. Later adapted to use additional ingredients, such as amber and brown malts, crystal and wheat malts, and roasted grains or dark sugars for color but not for the ‘roasty’ flavor. Sugar adjuncts are traditional. Clean or slightly fruity yeast. Peat-smoked malt is inauthentic and inappropriate.',
            comparison: 'Similar character to a Wee Heavy, but much smaller.',

            vitalStatistics: {
              og: '1.040 - 1.060',
              fg: '1.010 - 1.016',
              abv: '3.9 - 6.0%',
              ibu: '15 - 30',
              srm: '13 - 22'
            }
          },
          commercialExamples: [
            {
              name: 'elhaven Scottish Ale'
            },
            {
              name: 'Broughton Exciseman’s Ale'
            },
            {
              name: 'Orkney Dark Island'
            },
            {
              name: 'Pelican MacPelican’s Scottish Style Ale'
            },
            {
              name: 'Weasel Boy Plaid Ferret Scottish Ale'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'amber-ale-family'
            },
            {
              tag: 'malty'
            }
          ]
        }
      ]
    },
    {
      name: 'Irish Beer',
      number: 15,
      subcategories: [
        {
          name: 'Irish Red Ale',
          letter: 'A',
          guidelines: {
            overallImpression:
              'An easy-drinking pint, often with subtle flavors. Slightly malty in the balance sometimes with an initial soft toffee/caramel sweetness, a slightly grainy-biscuity palate, and a touch of roasted dryness in the finish. Some versions can emphasize the caramel and sweetness more, while others will favor the grainy palate and roasted dryness.',
            aroma:
              'Low to moderate malt aroma, either neutral-grainy or with a lightly caramelly-toasty-toffee character. May have a very light buttery character (although this is not required). Hop aroma is low earthy or floral to none (usually not present). Quite clean.',
            appearance:
              'Medium amber to medium reddish-copper color. Clear. Low off-white to tan colored head, average persistence.',
            flavor:
              'Moderate to very little caramel malt flavor and sweetness, rarely with a light buttered toast or toffee-like quality. The palate often is fairly neutral and grainy, or can take on a lightly toasty or biscuity note as it finishes with a light taste of roasted grain, which lends a characteristic dryness to the finish. A light earthy or floral hop flavor is optional. Medium to medium-low hop bitterness. Medium-dry to dry finish. Clean and smooth. Little to no esters. The balance tends to be slightly towards the malt, although light use of roasted grains may increase the perception of bitterness slightly.',
            mouthfeel:
              'Medium-light to medium body, although examples containing low levels of diacetyl may have a slightly slick mouthfeel (not required). Moderate carbonation. Smooth. Moderately attenuated.',
            comments:
              'Several variations exist within the style, which causes the guidelines to be somewhat broad to accommodate them. Traditional Irish examples are relatively low in hops, are grainy with a slight roast dryness in the finish, fairly neutral in general. Modern export Irish examples are more caramelly and sweet, and might have more esters. American craft versions are often more alcoholic versions of the Irish export examples. An emerging Irish craft beer scene is exploring more bitter versions of traditional examples. Finally, there are some commercial examples that sound Irish but are essentially International Amber Lagers, with sweetish palates and little bitterness. These guidelines are written around the traditional Irish examples, with slight extensions for export Irish versions and modern craft Irish versions.',
            history:
              'While Ireland has a long ale brewing heritage, the modern Irish Red Ale style is essentially an adaptation or interpretation of the popular English Bitter style with less hopping and a bit of roast to add color and dryness. Rediscovered as a craft beer style in Ireland, today it is an essential part of most brewery lineups, along with a pale ale and a stout.',
            ingredients:
              'Generally has a bit of roasted barley or black malt to provide reddish color and dry roasted finish. Pale base malt. Caramel malts were historically imported and more expensive, so not all brewers would use them.',
            comparison:
              'A less-bitter and hoppy Irish equivalent to an English Bitter, with a dryish finish due to roasted barley. More attenuated with less caramel flavor and body than equivalent-strength Scottish ales.',

            vitalStatistics: {
              og: '1.036 - 1.046',
              fg: '1.010 - 1.014',
              abv: '3.8 - 5.0%',
              ibu: '18 - 28',
              srm: '9 - 14'
            }
          },
          commercialExamples: [
            {
              name: 'Caffrey’s Irish Ale'
            },
            {
              name: 'Franciscan Well Rebel Red'
            },
            {
              name: 'Kilkenny Irish Beer'
            },
            {
              name: 'O’Hara’s Irish Red Ale'
            },
            {
              name: 'Porterhouse Red Ale'
            },
            {
              name: 'Samuel Adams Irish Red'
            },
            {
              name: 'Smithwick’s Irish Ale'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'amber-ale-family'
            },
            {
              tag: 'balanced'
            }
          ]
        },
        {
          name: 'Irish Stout',
          letter: 'B',
          guidelines: {
            overallImpression:
              ' black beer with a pronounced roasted flavor, often similar to coffee. The balance can range from fairly even to quite bitter, with the more balanced versions having a little malty sweetness and the bitter versions being quite dry. Draught versions typically are creamy from a nitro pour, but bottled versions will not have this dispense-derived character. The roasted flavor can be dry and coffee-like to somewhat chocolaty.',
            aroma:
              'Moderate coffee-like aroma typically dominates; may have slight dark chocolate, cocoa and/or roasted grain secondary notes. Esters medium-low to none. Hop aroma low to none, may be lightly earthy or floral, but is typically absent.',
            appearance:
              'Jet black to very deep brown with garnet highlights in color. According to Guinness, “Guinness beer may appear black, but it is actually a very dark shade of ruby.” Opaque. A thick, creamy, long-lasting, tan- to brown-colored head is characteristic when served on nitro, but don’t expect the tight, creamy head on a bottled beer.',
            flavor:
              'Moderate roasted grain or malt flavor with a medium to high hop bitterness. The finish can be dry and coffee-like to moderately balanced with a touch of caramel or malty sweetness. Typically has coffee-like flavors, but also may have a bittersweet or unsweetened chocolate character in the palate, lasting into the finish. Balancing factors may include some creaminess, medium-low to no fruitiness, and medium to no hop flavor (often earthy). The level of bitterness is somewhat variable, as is the roasted character and the dryness of the finish; allow for interpretation by brewers.',
            mouthfeel:
              'Medium-light to medium-full body, with a somewhat creamy character (particularly when served with a nitro pour). Low to moderate carbonation. For the high hop bitterness and significant proportion of dark grains present, this beer is remarkably smooth. May have a light astringency from the roasted grains, although harshness is undesirable.',
            comments:
              'When a brewery offered a stout and a porter, the stout was always the stronger beer (it was originally called a “Stout Porter”). Modern versions are brewed from a lower OG and no longer necessarily reflect a higher strength than porters. This is typically a draught product today; bottled versions are typically brewed from a higher OG and are usually called Extra Stouts. Regional differences exist in Ireland, similar to variability in English Bitters. Dublin-type stouts use roasted barley, are more bitter, and are drier. Cork-type stouts are weeter, less bitter, and have flavors from chocolate and specialty malts. Commercial examples of this style are almost always associated with a nitro pour. Do not expect traditional bottle-conditioned beers to have the full, creamy texture or very long-lasting head traditionally associated with nitrogen dispense.',
            history:
              'The style evolved from attempts to capitalize on the success of London porters, but originally reflected a fuller, creamier, more “stout” body and strength. Guinness began brewing only porter in 1799, and a “stouter kind of porter” around 1810. Irish stout diverged from London single stout (or simply porter) in the late 1800s, with an emphasis on darker malts. Guinness was among the first breweries to use black patent malt for porters and stouts in the 1820s. Guinness began using roasted barley after WWII, while London brewers continued to use brown malt. Guinness started using flaked barley in the 1950s, also increasing attenuation greatly. Guinness Draught was launched as a brand in 1959. Draught cans and bottles were developed in the late 1980s and 1990s.',
            ingredients:
              'Guinness is made using roasted barley, flaked barley, and pale malt, but other breweries don’t necessarily use roasted barley; they can use chocolate or other dark and specialty malts. Whatever combination of malts or grains is used, the resulting product should be black. Cork-type stouts are perhaps closer to historical London-type stouts in composition with a varied grist not dominated by roasted barley.',
            comparison:
              'Lower strength than an Irish Extra Stout, but with similar flavors. Darker in color (black) than an English porter (brown).',

            vitalStatistics: {
              og: '1.036 - 1.044',
              fg: '1.007 - 1.011',
              abv: '4.0 - 4.5%',
              ibu: '25 - 45',
              srm: '25 - 40'
            }
          },
          commercialExamples: [
            {
              name: 'Beamish Irish Stout'
            },
            {
              name: 'Guinness Draught'
            },
            {
              name: 'Harpoon Boston Irish Stout'
            },
            {
              name: "Murphy's Irish Stout"
            },
            {
              name: 'O’Hara’s Irish Stout'
            },
            {
              name: 'Porterhouse Wrasslers 4X'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'stout-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'roasty'
            }
          ]
        },
        {
          name: 'Irish Extra Stout',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A fuller-bodied black beer with a pronounced roasted flavor, often similar to coffee and dark chocolate with some malty complexity. The balance can range from moderately bittersweet to bitter, with the more balanced versions having up to moderate malty richness and the bitter versions being quite dry.',
            aroma:
              'Moderate to moderately high coffee-like aroma, often with slight dark chocolate, cocoa, biscuit, vanilla and/or roasted grain secondary notes. Esters medium-low to none. Hop aroma low to none, may be lightly earthy or spicy, but is typically absent. Malt and roast dominate the aroma.',
            appearance:
              'Jet black. Opaque. A thick, creamy, tan head is characteristic. ',
            flavor:
              'Moderate to moderately high dark-roasted grain or malt flavor with a medium to medium-high hop bitterness. The finish can be dry and coffee-like to moderately balanced with up to moderate caramel or malty sweetness. Typically has roasted coffee-like flavors, but also often has a dark chocolate character in the palate, lasting into the finish. Background mocha, biscuit, or vanilla flavors are often present and add complexity. Medium-low to no fruitiness. Medium to no hop flavor (often earthy or spicy). The level of bitterness is somewhat variable, as is the roasted character and the dryness of the finish; allow for interpretation by brewers.',
            mouthfeel:
              'Medium-full to full body, with a somewhat creamy character. Moderate carbonation. Very smooth. May have a light astringency from the roasted grains, although harshness is undesirable. A slightly warming character may be detected.',
            comments:
              'Traditionally a bottled product. Consumers expect a stout to always have a black color; the flavor intensity from whatever made it black is what consumers expect in their beer. Not all breweries make a dry, roasty version typical of Guinness; a more balanced and chocolaty version is equally acceptable.',
            history:
              'Same roots as Irish stout, but as a stronger product. Guinness Extra Stout (Extra Superior Porter, later Double Stout) was first brewed in 1821, and was primarily a bottled product. Described by Guinness as a “more full-bodied beer with a deeper characteristic roasted bitterness and a rich, mature texture. Of all the types of Guinness available today, this is the closest to the porter originally brewed by Arthur Guinness.” Note that in modern times, Guinness Extra Stout has different strengths in different regions; the European version is around 4.2% and fits in the Irish Stout style.',
            ingredients: 'Similar to Irish Stout.',
            comparison:
              'Midway between an Irish Stout and a Foreign Extra Stout in strength and flavor intensity, although with a similar balance. More body, richness, and often malt complexity than an Irish Stout. Black in color, not brown like a porter.',

            vitalStatistics: {
              og: '1.052 - 1.062',
              fg: '1.010 - 1.014',
              abv: '5.5 - 6.5%',
              ibu: '35 - 50',
              srm: '25 - 40'
            }
          },
          commercialExamples: [
            {
              name: 'Guinness Extra Stout (US version)'
            },
            {
              name: 'O’Hara’s Leann Folláin'
            },
            {
              name: 'Sheaf Stout'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'stout-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'roasty'
            }
          ]
        }
      ]
    },
    {
      name: 'Dark British Beer',
      number: 16,
      subcategories: [
        {
          name: 'Sweet Stout',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A very dark, sweet, full-bodied, slightly roasty ale that can suggest coffee-and-cream, or sweetened espresso.',
            aroma:
              'Mild roasted grain aroma, sometimes with coffee and/or chocolate notes. An impression of cream-like sweetness often exists. Fruitiness can be low to moderately high. Diacetyl low to none. Hop aroma low to none, with floral or earthy notes.',
            appearance:
              'Very dark brown to black in color. Can be opaque (if not, it should be clear). Creamy tan to brown head.',
            flavor:
              'Dark roasted grain/malt impression with coffee and/or chocolate flavors dominate the palate. Hop bitterness is moderate. Medium to high sweetness provides a counterpoint to the roasted character and hop bitterness, and lasts into the finish. Low to moderate fruity esters. Diacetyl low to none. The balance between dark grains/malts and sweetness can vary, from quite sweet to moderately dry and somewhat roasty.',
            mouthfeel:
              'Medium-full to full-bodied and creamy. Low to moderate carbonation. High residual sweetness from unfermented sugars enhances the full-tasting mouthfeel.',
            comments:
              'Gravities are low in England, higher in exported and US products. Variations exist, with the level of residual sweetness, the intensity of the roast character, and the balance between the two being the variables most subject to interpretation. Some versions in England are very sweet (low attenuation) and also low in ABV (Tennent’s Sweetheart Stout is 2%), but is an outlier compared to the other examples. These guidelines mostly describe the higher gravity, more balanced, export versions rather than the low alcohol, very sweet versions that many find quite difficult to drink.',
            history:
              'An English style of stout developed in the early 1900s. Historically known as “Milk” or “Cream” stouts, legally this designation is no longer permitted in England (but is acceptable elsewhere). The “milk” name is derived from the use of lactose, or milk sugar, as a sweetener. Originally marketed as a tonic for invalids and nursing mothers.',
            ingredients:
              'The sweetness in most Sweet Stouts comes from a lower bitterness level than most other stouts and a high percentage of unfermentable dextrins. Lactose, an unfermentable sugar, is frequently added to provide additional residual sweetness. Base of pale malt, and may use roasted barley, black malt, chocolate malt, crystal malt, and adjuncts such as maize or brewing sugars.',
            comparison:
              'Much sweeter and less bitter than other stouts (except the stronger tropical stout). The roast character is mild, not burnt like other stouts. Somewhat similar in balance to oatmeal stouts, albeit with more sweetness.',

            vitalStatistics: {
              og: '1.044 - 1.060',
              fg: '1.012 - 1.024',
              abv: '4.0 - 6.0%',
              ibu: '20 - 40',
              srm: '30 - 40'
            }
          },
          commercialExamples: [
            {
              name: 'Bristol Beer Factory Milk Stout'
            },
            {
              name: 'Left Hand Milk Stout'
            },
            {
              name: 'Lancaster Milk Stout'
            },
            {
              name: "Mackeson's XXX Stout"
            },
            {
              name: 'Marston’s Oyster Stout'
            },
            {
              name: 'Samuel Adams Cream Stout'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'stout-family'
            },
            {
              tag: 'malty'
            },
            {
              tag: 'roasty'
            },
            {
              tag: 'sweet'
            }
          ]
        },
        {
          name: 'Oatmeal Stout',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A very dark, full-bodied, roasty, malty ale with a complementary oatmeal flavor. The sweetness, balance, and oatmeal impression can vary considerably.',
            aroma:
              'Mild roasted grain aromas, generally with a coffee-like character. A light malty sweetness can suggest a coffee-and-cream impression. Fruitiness should be low to medium-high. Diacetyl medium-low to none. Hop aroma medium-low to none, earthy or floral. A light grainy-nutty oatmeal aroma is optional.',
            appearance:
              'Medium brown to black in color. Thick, creamy, persistent tan- to brown-colored head. Can be opaque (if not, it should be clear).',
            flavor:
              'Similar to the aroma, with a mild roasted coffee to coffee-and-cream flavor, and low to moderately-high fruitiness. Oats and dark roasted grains provide some flavor complexity; the oats can add a nutty, grainy or earthy flavor. Dark grains can combine with malt sweetness to give the impression of milk chocolate or coffee with cream. Medium hop bitterness with the balance toward malt. Medium-sweet to medium-dry finish. Diacetyl medium-low to none. Hop flavor medium-low to none, typically earthy or floral.',
            mouthfeel:
              'Medium-full to full body, with a smooth, silky, velvety, sometimes an almost oily slickness from the oatmeal. Creamy. Medium to medium-high carbonation.',
            comments:
              'Generally between Sweet and Irish Stouts in sweetness. Variations exist, from fairly sweet to quite dry, as well as English and American versions (American versions tend to be more hoppy, less sweet, and less fruity). The level of bitterness also varies, as does the oatmeal impression. Light use of oatmeal may give a certain silkiness of body and richness of flavor, while heavy use of oatmeal can be fairly intense in flavor with an almost oily mouthfeel, dryish finish, and slight grainy astringency. When judging, allow for differences in interpretation.',
            history:
              'A variant of nourishing or invalid stouts of the late 1800s using oatmeal in the grist, similar to the development of sweet stout that used lactose. An original Scottish version used a significant amount of oat malt. Later went through a shady phase where some English brewers would throw a handful of oats into their parti-gyled stouts in order to legally produce a ‘healthy’ Oatmeal Stout for marketing purposes. Most popular in England between the World Wars, was revived in the craft beer era for export, which helped lead to its adoption as a popular modern American craft beer style that uses a noticeable (not symbolic) quantity of oats.',
            ingredients:
              'Pale, caramel and dark roasted malts (often chocolate) and grains. Oatmeal or malted oats (5-20% or more) used to enhance fullness of body and complexity of flavor. Hops primarily for bittering. Can use brewing sugars or syrups. English ale yeast.',
            comparison:
              'Most are like a cross between an Irish Extra Stout and a Sweet Stout with oatmeal added. Several variations exist, with the sweeter versions more like a Sweet Stout with oatmeal instead of lactose, and the drier versions more like a more nutty, flavorful Irish Extra Stout. Both tend to emphasize the body and mouthfeel.',

            vitalStatistics: {
              og: '1.045 - 1.065',
              fg: '1.010 - 1.018',
              abv: '4.2 - 5.9%',
              ibu: '25 - 40',
              srm: '22 - 40'
            }
          },
          commercialExamples: [
            {
              name: 'Anderson Valley Barney Flats Oatmeal Stout'
            },
            {
              name: 'Broughton Scottish Oatmeal Stout'
            },
            {
              name: 'Figueroa Mountain Stagecoach Stout'
            },
            {
              name: 'St-Ambroise Oatmeal Stout'
            },
            {
              name: 'Samuel Smith Oatmeal Stout'
            },
            {
              name: "Young's Oatmeal Stout"
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'stout-family'
            },
            {
              tag: 'balanced, roasty'
            }
          ]
        },
        {
          name: 'Tropical Stout',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A very dark, sweet, fruity, moderately strong ale with smooth roasty flavors without a burnt harshness.',
            aroma:
              'Sweetness evident, moderate to high intensity. Roasted grain aromas moderate to high, and can have coffee or chocolate notes. Fruitiness medium to high. May have a molasses, licorice, dried fruit, and/or vinous aromatics. Stronger versions can have a subtle clean aroma of alcohol. Hop aroma low to none. Diacetyl low to none.',
            appearance:
              'Very deep brown to black in color. Clarity usually obscured by deep color (if not opaque, should be clear). Large tan to brown head with good retention.',
            flavor:
              'Quite sweet with a smooth dark grain flavors, and restrained bitterness. Roasted grain and malt character can be moderate to high with a smooth coffee or chocolate flavor, although the roast character is moderated in the balance by the sweet finish. Moderate to high fruity esters. Can have a sweet, dark rum-like quality. Little to no hop flavor. Medium-low to no diacetyl.',
            mouthfeel:
              'Medium-full to full body, often with a smooth, creamy character. May give a warming (but never hot) impression from alcohol presence. Moderate to moderately-high carbonation.',
            comments:
              'Sweetness levels can vary significantly. Surprisingly refreshing in a hot climate.',
            history:
              'Originally high-gravity stouts brewed for tropical markets, became popular and imitated by local brewers often using local sugars and ingredients.',
            ingredients:
              'Similar to a sweet stout, but with more gravity. Pale and dark roasted malts and grains. Hops mostly for bitterness. May use adjuncts and sugar to boost gravity. Typically made with warm-fermented lager yeast.',
            comparison:
              'Tastes like a scaled-up sweet stout with higher fruitiness. Similar to some Imperial Stouts without the high bitterness, strong/burnt roastiness, and late hops, and with lower alcohol. Much more sweet and less hoppy than American Stouts. Much sweeter and less bitter than the similar-gravity Export Stouts.',

            vitalStatistics: {
              og: '1.056 - 1.075',
              fg: '1.010 - 1.018',
              abv: '5.5 - 8.0%',
              ibu: '30 - 50',
              srm: '30 - 40'
            }
          },
          commercialExamples: [
            {
              name: 'ABC Extra Stout'
            },
            {
              name: 'Dragon Stout'
            },
            {
              name: 'Jamaica Stout'
            },
            {
              name: 'Lion Stout'
            },
            {
              name: 'Royal Extra Stout'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'stout-family'
            },
            {
              tag: 'malty'
            },
            {
              tag: 'roasty'
            },
            {
              tag: 'sweet'
            }
          ]
        },
        {
          name: 'Foreign Extra Stout',
          letter: 'D',
          guidelines: {
            overallImpression:
              'A very dark, moderately strong, fairly dry, stout with prominent roast flavors.',
            aroma:
              'Moderate to high roasted grain aromas, often with coffee, chocolate and/or lightly burnt notes. Low to medium fruitiness. May have a sweet aroma, or molasses, licorice, dried fruit, and/or vinous aromatics. Stronger versions can have a subtle, clean aroma of alcohol. Hop aroma moderately low to none, can be earthy, herbal or floral. Diacetyl low to none.',
            appearance:
              'Very deep brown to black in color. Clarity usually obscured by deep color (if not opaque, should be clear). Large tan to brown head with good retention.',
            flavor:
              'Moderate to high roasted grain and malt flavor with a coffee, chocolate, or lightly burnt grain character, although without a sharp bite. Moderately dry. Low to medium esters. Medium to high bitterness. Moderate to no hop flavor, can be earthy, herbal, or floral. Diacetyl medium-low to none.',
            mouthfeel:
              'Medium-full to full body, often with a smooth, sometimes creamy character. May give a warming (but never hot) impression from alcohol presence. Moderate to moderately-high carbonation.',
            comments:
              'Also known as Foreign Stout, Export Stout, Foreign Export Stout. Historic versions (before WWI, at least) had the same OG as domestic Extra Stouts, but had a higher ABV because it had a long secondary with Brettanomyces chewing away at it. The difference between domestic and foreign versions were the hopping and length of maturation. ',
            history:
              'Stronger stouts brewed for the export market today, but with a history stretching back to the 18th and 19th centuries when they were more heavily-hopped versions of stronger export stouts. Guinness Foreign Extra Stout (originally, West India Porter, later Foreign Extra Double Stout) was first brewed in 1801 according to Guinness with “extra hops to give it a distinctive taste and a longer shelf life in hot weather, this is brewed [today] in Africa, Asia and the Caribbean. It [currently] makes up 40% of all the Guinness brewed around the world.”',
            ingredients:
              'Pale and dark roasted malts and grains, historically also could have used brown and amber malts. Hops mostly for bitterness, typically English varieties. May use adjuncts and sugar to boost gravity.',
            comparison:
              'Similar in balance to an Irish Extra Stout, but with more alcohol. Not as big or intense as a Russian Imperial Stout. Lacking the strong bitterness and high late hops of American Stouts. Similar gravity as Tropical Stout, but with a drier finish, higher bitterness, and less esters.',

            vitalStatistics: {
              og: '1.056 - 1.075',
              fg: '1.010 - 1.018',
              abv: '6.3 - 8.0%',
              ibu: '50 - 70',
              srm: '30 - 40'
            }
          },
          commercialExamples: [
            {
              name: 'Coopers Best Extra Stout'
            },
            {
              name: 'Guinness Foreign Extra Stout'
            },
            {
              name: 'The Kernel Export Stout'
            },
            {
              name: 'Ridgeway Foreign Export Stout'
            },
            {
              name: 'Southwark Old Stout'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'stout-family'
            },
            {
              tag: 'balanced'
            },
            {
              tag: 'roasty'
            }
          ]
        }
      ]
    },
    {
      name: 'Strong British Ale',
      number: 17,
      subcategories: [
        {
          name: 'British Strong Ale',
          letter: 'A',
          guidelines: {
            overallImpression:
              'An ale of respectable alcoholic strength, traditionally bottled-conditioned and cellared. Can have a wide range of interpretations, but most will have varying degrees of malty richness, late hops and bitterness, fruity esters, and alcohol warmth. Judges should allow for a significant range in character, as long as the beer is within the alcohol strength range and has an interesting ‘British’ character, it likely fits the style. The malt and adjunct flavors and intensity can vary widely, but any combination should result in an agreeable palate experience.',
            aroma:
              'Malty-sweet with fruity esters, often with a complex blend of dried-fruit, caramel, nuts, toffee, and/or other specialty malt aromas. Some alcohol notes are acceptable, but shouldn’t be hot or solventy. Hop aromas can vary widely, but typically have earthy, resiny, fruity, and/or floral notes. The balance can vary widely, but most examples will have a blend of malt, fruit, hops, and alcohol in varying intensities.',
            appearance:
              'Deep gold to dark reddish-brown color (many are fairly dark). Generally clear, although darker versions may be almost opaque. Moderate to low cream- to light tan-colored head; average retention.',
            flavor:
              'Medium to high malt character often rich with nutty, toffee, or caramel flavors. Light chocolate notes are sometimes found in darker beers. May have interesting flavor complexity from brewing sugars. Balance is often malty, but may be well hopped, which affects the impression of maltiness. Moderate fruity esters are common, often with a dark fruit or dried fruit character. The finish may vary from medium dry to somewhat sweet. Alcoholic strength should be evident, though not overwhelming. Diacetyl low to none, and is generally not desirable.',
            mouthfeel:
              'Medium to full, chewy body. Alcohol warmth is often evident and always welcome. Low to moderate carbonation. Smooth texture.',
            comments:
              'As an entry category more than a style, the strength and character of examples can vary widely. Fits in the style space between normal gravity beers (strong bitters, brown ales, English porters) and barleywines. Can include pale malty-hoppy beers, English winter warmers, strong dark milds, smaller Burton ales, and other unique beers in the general gravity range that don’t fit other categories. Traditionally a bottle-conditioned product suitable for cellaring.',
            history:
              'The heritage varies since this category generally reflects a grouping of unrelated minor styles with limited production. Some are historical recreations while others are modern. Some directly descend from older styles such as Burton ales, while others maintain a historical connection with older beers. As a grouping, the notion is relatively modern since beers of this strength category would not have been abnormal in past centuries. Do not use this category grouping to infer historical relationships between examples; this is almost a modern British specialty category where the ‘special’ attribute is alcohol level. ',
            ingredients:
              'Grists vary, often based on pale malt with caramel and specialty malts. Some darker examples suggest that dark malts (e.g., chocolate, black malt) may be appropriate, though sparingly so as to avoid an overly roasted character. Sugary adjuncts are common, as are starchy adjuncts (maize, flaked barley, wheat). Finishing hops are traditionally English.',
            comparison:
              'Significant overlap in gravity with old ales, but not having a stale or aged character. A wide range of interpretations is possible. Should not be as rich or strong as an English Barleywine. Stronger than the stronger everyday beers (strong bitters, brown ales, porters). More specialty malt and/or sugar character than American Strong Ales.',

            vitalStatistics: {
              og: '1.055 - 1.080',
              fg: '1.015 - 1.022',
              abv: '5.5 - 8.0%',
              ibu: '30 - 60',
              srm: '8 - 22'
            }
          },
          commercialExamples: [
            {
              name: 'Fuller’s 1845'
            },
            {
              name: 'Harvey’s Elizabethan Ale'
            },
            {
              name: 'J.W. Lees Manchester Star'
            },
            {
              name: 'Samuel Smith’s Winter Welcome'
            },
            {
              name: "Young's Winter Warmer"
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'strong-ale-family'
            },
            {
              tag: 'malty'
            }
          ]
        },
        {
          name: 'Old Ale',
          letter: 'B',
          guidelines: {
            overallImpression:
              'An ale of moderate to fairly significant alcoholic strength, bigger than standard beers, though usually not as strong or rich as barleywine. Often tilted towards a maltier balance. “It should be a warming beer of the type that is best drunk in half pints by a warm fire on a cold winter’s night” – Michael Jackson.',
            aroma:
              'Malty-sweet with fruity esters, often with a complex blend of dried-fruit, vinous, caramelly, molasses, nutty, toffee, light treacle, and/or other specialty malt aromas. Some alcohol and oxidative notes are acceptable, akin to those found in Sherry or Port. Hop aromas not usually present due to extended aging.',
            appearance:
              'Light amber to very dark reddish-brown color (most are fairly dark). Age and oxidation may darken the beer further. May be almost opaque (if not, should be clear). Moderate to low cream- to light tan-colored head; may be adversely affected by alcohol and age.',
            flavor:
              'Medium to high malt character with a luscious malt complexity, often with nutty, caramelly and/or molasses-like flavors. Light chocolate or roasted malt flavors are optional, but should never be prominent. Balance is often malty-sweet, but may be well hopped (the impression of bitterness often depends on amount of aging). Moderate to high fruity esters are common, and may take on a dried-fruit or vinous character. The finish may vary from dry to somewhat sweet. Extended aging may contribute oxidative flavors similar to a fine old Sherry, Port or Madeira. Alcoholic strength should be evident, though not overwhelming. Diacetyl low to none. Some wood-aged or blended versions may have a lactic or Brettanomyces character; but this is optional and should not be too strong. Any acidity or tannin from age should be well-integrated and contribute to complexity in the flavor profile, not be a dominant experience.',
            mouthfeel:
              'Medium to full, chewy body, although older examples may be lower in body due to continued attenuation during conditioning. Alcohol warmth is often evident and always welcome. Low to moderate carbonation, depending on age and conditioning. Light acidity may be present, as well as some tannin if wood-aged; both are optional.',
            comments:
              'Strength and character varies widely. The predominant defining quality for this style is the impression of age, which can manifest itself in different ways (complexity, lactic, Brett, oxidation, leather, vinous qualities, etc.). Even if these qualities are otherwise faults, if the resulting character of the beer is still pleasantly drinkable and complex, then those characteristics are acceptable. In no way should those allowable characteristics be interpreted as making an undrinkably off beer as somehow in style. Old Peculier is a fairly unique type of beer that is quite different than other Old Ales.',
            history:
              'Historically, an aged ale used as stock ales for blending or enjoyed at full strength (stale or stock refers to beers that were aged or stored for a significant period of time). There are at least two definite types in Britain today, weaker draught ones that are similar aged milds of around 4.5%, and stronger ones that are often 6-8% or more.',
            ingredients:
              ' Composition varies, although generally similar to British Strong Ales. The age character is the biggest driver of the final style profile, which is more handling than brewing. May be aged in wood, but should not have a strong wood character.',
            comparison:
              'Roughly overlapping the British Strong Ale and the lower end of the English Barleywine styles, but always having an aged quality. The distinction between an Old Ale and a Barleywine is somewhat arbitrary above 7% ABV, and generally means having a more significant aged quality (particularly from wood). Barleywines tend to develop more of a ‘mature’ quality, while Old Ales can show more of the barrel qualities (lactic, Brett, vinous, etc.).',

            vitalStatistics: {
              og: '1.055 - 1.088',
              fg: '1.015 - 1.022',
              abv: '5.5 - 9.0%',
              ibu: '30 - 60',
              srm: '10 - 22'
            }
          },
          commercialExamples: [
            {
              name: 'Burton Bridge Olde Expensive'
            },
            {
              name: 'Gale’s Prize Old Ale'
            },
            {
              name: 'Greene King Strong Suffolk Ale'
            },
            {
              name: 'Marston Owd Roger'
            },
            {
              name: 'Theakston Old Peculier'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'strong-ale-family'
            },
            {
              tag: 'malty'
            },
            {
              tag: 'aged'
            }
          ]
        },
        {
          name: 'Wee Heavy',
          letter: 'C',
          guidelines: {
            overallImpression:
              'Rich, malty, dextrinous, and usually caramel-sweet, these beers can give an impression that is suggestive of a dessert. Complex secondary malt and alcohol flavors prevent a one-dimensional quality. Strength and maltiness can vary, but should not be cloying or syrupy.',
            aroma:
              'Deeply malty, with a strong caramel component. Lightly smoky secondary aromas may also be present, adding complexity; peat smoke is inappropriate. Diacetyl should be low to none. Low to moderate esters and alcohol are often present in stronger versions. Hops are very low to none, and can be slightly earthy or floral.',
            appearance:
              'Light copper to dark brown color, often with deep ruby highlights. Clear. Usually has a large tan head, which may not persist. Legs may be evident in stronger versions.',
            flavor:
              'Richly malty with significant caramel (particularly in stronger versions). Hints of roasted malt may be present (sometimes perceived as a faint smoke character), as may some nutty character, all of which may last into the finish. Peat smoke is inappropriate. Hop flavors and bitterness are low to medium-low, so the malt presence should dominate the balance. Diacetyl should be low to none. Low to moderate esters and alcohol are usually present. Esters may suggest plums, raisins or dried fruit. The palate is usually full and sweet, but the finish may be sweet to medium-dry, sometimes with a light roasty-grainy note.',
            mouthfeel:
              'Medium-full to full-bodied, with some versions (but not all) having a thick, chewy viscosity. A smooth, alcoholic warmth is usually present and is quite welcome since it balances the malty sweetness. Moderate carbonation.',
            comments:
              'Also known as “strong Scotch ale.” The term “wee heavy” means “small strong” and traces to the beer that made the term famous, Fowler’s Wee Heavy, a 12 Guinea Ale. Historically, the strongest beer from a Scottish ale parti-gyle.',
            history:
              'More related to historical brews than modern lower-strength Scottish ales, these beers have their roots in the strong ales of the 1700s and 1800s, although formulations and methods have changed. A premium product, often produced for export. Modern versions have lower starting and finishing gravities than their historical ancestors.',
            ingredients:
              'Well-modified pale malt, with roasted barley for color. May use some crystal malt for color adjustment. Slight smoke character may be present in some versions, but derives from roasted grains or from the boil. Peated malt is absolutely not traditional.',
            comparison: 'Somewhat similar to an English Barleywine.',

            vitalStatistics: {
              og: '1.070 - 1.130',
              fg: '1.018 - 1.040',
              abv: '6.5 - 10.0%',
              ibu: '17 - 35',
              srm: '14 - 25'
            }
          },
          commercialExamples: [
            {
              name: 'Belhaven Wee Heavy'
            },
            {
              name: 'Gordon Highland Scotch Ale'
            },
            {
              name: 'Inveralmond Blackfriar'
            },
            {
              name: "McEwan's Scotch Ale"
            },
            {
              name: 'Orkney Skull Splitter'
            },
            {
              name: 'Traquair House Ale'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'strong-ale-family'
            },
            {
              tag: 'malty'
            }
          ]
        },
        {
          name: 'English Barleywine',
          letter: 'D',
          guidelines: {
            overallImpression:
              'A showcase of malty richness and complex, intense flavors. Chewy and rich in body, with warming alcohol and a pleasant fruity or hoppy interest. When aged, it can take on port-like flavors. A wintertime sipper.',
            aroma:
              'Very rich and strongly malty, often with a caramel-like aroma in darker versions or a light toffee character in paler versions. May have moderate to strong fruitiness, often with a dark- or dried-fruit character, particularly in dark versions. The hop aroma may range from mild to assertive, and is typically floral, earthy, or marmalade-like. Alcohol aromatics may be low to moderate, but are soft and rounded. The intensity of these aromatics often subsides with age. The aroma may have a rich character including bready, toasty, toffee, and/or molasses notes. Aged versions may have a sherry-like quality, possibly vinous or port-like aromatics, and generally more muted malt aromas.',
            appearance:
              'Color may range from rich gold to very dark amber or even dark brown (often has ruby highlights, but should not be opaque). Low to moderate off-white head; may have low head retention. May be cloudy with chill haze at cooler temperatures, but generally clears to good to brilliant clarity as it warms. The color may appear to have great depth, as if viewed through a thick glass lens. High alcohol and viscosity may be visible in “legs” when beer is swirled in a glass.',
            flavor:
              'Strong, intense, complex, multi-layered malt flavors ranging from bready, toffee, and biscuity in paler versions through nutty, deep toast, dark caramel, and/or molasses in darker versions. Moderate to high malty sweetness on the palate, although the finish may be moderately sweet to moderately dry (depending on aging). Some oxidative or vinous flavors may be present, and often complex alcohol flavors should be evident. Moderate to fairly high fruitiness, often with a dark- or dried-fruit character. Hop bitterness may range from just enough for balance to a firm presence; balance therefore ranges from malty to somewhat bitter. Pale versions are often more bitter, better attenuated, and might show more hop character than darker versions; however, all versions are malty in the balance. Low to moderately high hop flavor, often floral, earthy, or marmalade-like English varieties.',
            mouthfeel:
              'Full-bodied and chewy, with a velvety, luscious texture (although the body may decline with long conditioning). A smooth warmth from aged alcohol should be present. Carbonation may be low to moderate, depending on age and conditioning.',
            comments:
              'The richest and strongest of modern English Ales. The character of these ales can change significantly over time; both young and old versions should be appreciated for what they are. The malt profile can vary widely; not all examples will have all possible flavors or aromas. Paler varieties won’t have the caramel and richer malt flavors, nor will they typically have the darker dried fruits – don’t expect flavors and aromatics that are impossible from a beer of that color. Typically written as “Barley Wine” in the UK, and “Barleywine” in the US.',
            history:
              'Strong ales of various formulations have long been brewed in England, and were known by several names. The modern barleywine traces back to Bass No. 1, which was first called a barleywine in 1872. Barleywines were darker beers until Tennant (now Whitbread) first produced Gold Label, a gold-colored barleywine in 1951. Usually the strongest ale offered by a brewery, and in recent years many commercial examples are now vintage-dated and offered as a limited-release winter seasonal specialty. The original barleywine style that inspired derivative variations in Belgium, the United States, and elsewhere in the world.',
            ingredients:
              'High-quality, well-modified pale malt should form the backbone of the grist, with judicious amounts of caramel malts. Dark malts should be used with great restraint, if at all, as most of the color arises from a lengthy boil. English hops such as Northdown, Target, East Kent Goldings and Fuggles are typical. Characterful British yeast.',
            comparison:
              'Although often a hoppy beer, the English Barleywine places less emphasis on hop character than the American Barleywine and features English hops. English versions can be darker, maltier, fruitier, and feature richer specialty malt flavors than American Barleywines. Has some overlap British Old Ale on the lower end, but generally does not have the vinous qualities of age; rather, it tends to display the mature, elegant signs of age.',

            vitalStatistics: {
              og: '1.080 - 1.120',
              fg: '1.018 - 1.030',
              abv: '8.0 - 12.0%',
              ibu: '35 - 70',
              srm: '8 - 22'
            }
          },
          commercialExamples: [
            {
              name: 'Adnams Tally-Ho'
            },
            {
              name: 'Burton Bridge Thomas Sykes Old Ale'
            },
            {
              name: 'Coniston No. 9 Barley Wine'
            },
            {
              name: 'Fuller’s Golden Pride'
            },
            {
              name: 'J.W. Lee’s Vintage Harvest Ale'
            },
            {
              name: 'Robinson’s Old Tom'
            }
          ],
          tags: [
            {
              tag: 'very-high-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'strong-ale-family'
            },
            {
              tag: 'malty'
            }
          ]
        }
      ]
    },
    {
      name: 'Pale American Ale',
      number: 18,
      subcategories: [
        {
          name: 'Blonde Ale',
          letter: 'A',
          guidelines: {
            overallImpression:
              'Easy-drinking, approachable, malt-oriented American craft beer, often with interesting fruit, hop, or character malt notes. Well-balanced and clean, is a refreshing pint without aggressive flavors.',
            aroma:
              'Light to moderate sweet malty aroma, possibly with a light bready or caramelly note. Low to moderate fruitiness is optional, but acceptable. May have a low to medium hop aroma, and can reflect almost any hop variety although citrusy, floral, fruity, and spicy notes are common.',
            appearance:
              'Light yellow to deep gold in color. Clear to brilliant. Low to medium white head with fair to good retention.',
            flavor:
              'Initial soft malty sweetness, but optionally some light character malt flavor (e.g., bread, toast, biscuit, wheat) can also be present. Caramel flavors typically absent; if present, they are typically low-color caramel notes. Low to medium fruity esters optional, but are welcome. Light to moderate hop flavor (any variety), but shouldn’t be overly aggressive. Medium-low to medium bitterness, but the balance is normally towards the malt or even between malt and hops. Finishes medium-dry to slightly malty-sweet; impression of sweetness is often an expression of lower bitterness than actual residual sweetness.',
            mouthfeel:
              'Medium-light to medium body. Medium to high carbonation. Smooth without being heavy.',
            comments:
              'Brewpub alternative to standard American lagers, typically offered as an entry-level craft beer.',
            history:
              'An American craft beer style produced by many microbreweries and brewpubs, particularly those who cannot produce lagers. Regional variations exist (many US West Coast brewpub examples are more assertive, like pale ales) but in most areas this beer is designed as the least challenging beer in their lineup.',
            ingredients:
              'Generally all malt, but can include up to 25% wheat malt and some sugar adjuncts. Any hop variety can be used. Clean American, lightly fruity English, or Kölsch yeast. May also be made with lager yeast, or cold-conditioned. Some versions may have honey, spices and/or fruit added, although if any of these ingredients are stronger than a background flavor they should be entered in those specialty categories instead.',
            comparison:
              'Typically has more flavor than American Lagers and Cream Ales. Less bitterness than an American Pale Ale.',

            vitalStatistics: {
              og: '1.038 - 1.054',
              fg: '1.008 - 1.013',
              abv: '3.8 - 5.5%',
              ibu: '15 - 28',
              srm: '3 - 6'
            }
          },
          commercialExamples: [
            {
              name: 'Kona Big Wave Golden Ale'
            },
            {
              name: 'Pelican Kiwanda Cream Ale'
            },
            {
              name: 'Russian River Aud Blonde'
            },
            {
              name: 'Victory Summer Love'
            },
            {
              name: 'Widmer Citra Summer Blonde Brew'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'any-fermentation'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'pale-ale-family'
            },
            {
              tag: 'balanced'
            }
          ]
        },
        {
          name: 'American Pale Ale',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A pale, refreshing and hoppy ale, yet with sufficient supporting malt to make the beer balanced and drinkable. The clean hop presence can reflect classic or modern American or New World hop varieties with a wide range of characteristics. An average-strength hop-forward pale American craft beer, generally balanced to be more accessible than modern American IPAs.',
            aroma:
              'Moderate to strong hop aroma from American or New World hop varieties with a wide range of possible characteristics, including citrus, floral, pine, resinous, spicy, tropical fruit, stone fruit, berry, or melon. None of these specific characteristics are required, but hops should be apparent. Low to moderate maltiness supports the hop presentation, and may optionally show small amounts of specialty malt character (bready, toasty, biscuit, caramelly). Fruity esters vary from moderate to none. Dry hopping (if used) may add grassy notes, although this character should not be excessive.',
            appearance:
              'Pale golden to light amber. Moderately large white to off-white head with good retention. Generally quite clear, although dry-hopped versions may be slightly hazy.',
            flavor:
              'Moderate to high hop flavor, typically showing an American or New World hop character (citrus, floral, pine, resinous, spicy, tropical fruit, stone fruit, berry, melon, etc.). Low to moderate clean grainy-malt character supports the hop presentation, and may optionally show small amounts of specialty malt character (bready, toasty, biscuity). The balance is typically towards the late hops and bitterness, but the malt presence should be supportive, not distracting. Caramel flavors are often absent or fairly restrained (but are acceptable as long as they don’t clash with the hops). Fruity yeast esters can be moderate to none, although many hop varieties are quite fruity. Moderate to high hop bitterness with a medium to dry finish. Hop flavor and bitterness often lingers into the finish, but the aftertaste should generally be clean and not harsh. Dry hopping (if used) may add grassy notes, although this character should not be excessive.',
            mouthfeel:
              'Medium-light to medium body. Moderate to high carbonation. Overall smooth finish without astringency and harshness.',
            comments:
              'New hop varieties and usage methods continue to be developed. Judges should allow for characteristics of modern hops in this style, as well as classic varieties. Becoming more of an international craft style, with local adaptations appearing in many countries with an emerging craft beer market. Hopping styles can vary from the classic large bitterness addition, to more modern late hop-bursted examples; all variations are allowable.',
            history:
              'A modern American craft beer era adaptation of English pale ale, reflecting indigenous ingredients (hops, malt, yeast, and water). Prior to the explosion in popularity of IPAs, was traditionally the most well-known and popular of American craft beers.',
            ingredients:
              'Pale ale malt, typically North American two-row. American or New World hops, with a wide range of allowable characteristics. American or English ale yeast (neutral to lightly fruity). Specialty grains may add character and complexity, but generally make up a relatively small portion of the grist. Grains that add malt flavor and richness, light sweetness, and toasty or bready notes are often used (along with late hops) to differentiate brands.',
            comparison:
              'Typically lighter in color, cleaner in fermentation by-products, and having less caramel flavors than English counterparts. There can be some overlap in color between American pale ale and American amber ale. The American pale ale will generally be cleaner, have a less caramelly malt profile, less body, and often more finishing hops. Less bitterness in the balance and alcohol strength than an American IPA. More balanced and drinkable, and less intensely hop-focused and bitter than session-strength American IPAs (aka Session IPAs).',

            vitalStatistics: {
              og: '1.045 - 1.060',
              fg: '1.010 - 1.015',
              abv: '4.5 - 6.2%',
              ibu: '30 - 50',
              srm: '5 - 10'
            }
          },
          commercialExamples: [
            {
              name: 'Ballast Point Grunion Pale Ale'
            },
            {
              name: 'Firestone Walker Pale 31'
            },
            {
              name: 'Great Lakes Burning River'
            },
            {
              name: 'Sierra Nevada Pale Ale'
            },
            {
              name: 'Stone Pale Ale'
            },
            {
              name: 'Tröegs Pale Ale'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'pale-ale-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        }
      ]
    },
    {
      name: 'Amber and Brown American Beer',
      number: 19,
      subcategories: [
        {
          name: 'American Amber Ale',
          letter: 'A',
          guidelines: {
            overallImpression:
              'An amber, hoppy, moderate-strength American craft beer with a caramel malty flavor. The balance can vary quite a bit, with some versions being fairly malty and others being aggressively hoppy. Hoppy and bitter versions should not have clashing flavors with the caramel malt profile.',
            aroma:
              'Low to moderate hop aroma with characteristics typical of American or New World hop varieties (citrus, floral, pine, resinous, spicy, tropical fruit, stone fruit, berry, or melon). A citrusy hop character is common, but not required. Moderately-low to moderately-high maltiness (usually with a moderate caramel character), which can either support, balance, or sometimes mask the hop presentation. Esters vary from moderate to none.',
            appearance:
              'Amber to coppery-brown in color. Moderately large off-white head with good retention. Generally quite clear, although dry-hopped versions may be slightly hazy.',
            flavor:
              'Moderate to high hop flavor with characteristics typical of American or New World hop varieties (citrus, floral, pine, resinous, spicy, tropical fruit, stone fruit, berry, or melon). A citrusy hop character is common, but not required. Malt flavors are moderate to strong, and usually show an initial malty sweetness followed by a moderate caramel flavor (and sometimes other character malts in lesser amounts). Malt and hop bitterness are usually balanced and mutually supportive, but can vary either way. Fruity esters can be moderate to none. Caramel sweetness and hop flavor/bitterness can linger somewhat into the medium to full finish.',
            mouthfeel:
              'Medium to medium-full body. Medium to high carbonation. Overall smooth finish without astringency. Stronger versions may have a slight alcohol warmth.',
            comments:
              'Can overlap in color with darker American pale ales, but with a different malt flavor and balance. Regional variations exist with some being fairly mainstream and others being quite aggressive in hopping. Stronger and more bitter versions are now split into the Red IPA style.',
            history:
              'A modern American craft beer style developed as a variation from American Pale Ales. Known simply as Red Ales in some regions, these beers were popularized in the hop-loving Northern California and the Pacific Northwest areas before spreading nationwide.',
            ingredients:
              'Pale ale malt, typically North American two-row. Medium to dark crystal malts. May also contain specialty grains which add additional character and uniqueness. American or New World hops, often with citrusy flavors, are common but others may also be used.',
            comparison:
              'Darker, more caramelly, more body, and generally less bitter in the balance than American Pale Ales. Less alcohol, bitterness, and hop character than Red IPAs. Less strength, malt, and hop character than American Strong Ales. Should not have a strong chocolate or roast character that might suggest an American brown ale (although small amounts are OK).',

            vitalStatistics: {
              og: '1.045 - 1.060',
              fg: '1.010 - 1.015',
              abv: '4.5 - 6.2%',
              ibu: '25 - 40',
              srm: '10 - 17'
            }
          },
          commercialExamples: [
            {
              name: 'Deschutes Cinder Cone Red'
            },
            {
              name: 'Full Sail Amber'
            },
            {
              name: 'Kona Lavaman Red Ale'
            },
            {
              name: "North Coast Ruedrich's Red Seal Ale"
            },
            {
              name: 'Rogue American Amber Ale'
            },
            {
              name: 'Tröegs HopBack Amber Ale'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'amber-ale-family'
            },
            {
              tag: 'balanced'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'California Common',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A lightly fruity beer with firm, grainy maltiness, interesting toasty and caramel flavors, and showcasing rustic, traditional American hop characteristics.',
            aroma:
              'Typically showcases rustic, traditional American hops (often with woody, rustic or minty qualities) in moderate to high strength. Light fruitiness acceptable. Low to moderate caramel and/or toasty malt aromatics support the hops.',
            appearance:
              'Medium amber to light copper color. Generally clear. Moderate off-white head with good retention.',
            flavor:
              'Moderately malty with a pronounced hop bitterness. The malt character is usually toasty (not roasted) and caramelly. Low to moderately high hop flavor, usually showing rustic, traditional American hop qualities (often woody, rustic, minty). Finish fairly dry and crisp, with a lingering hop bitterness and a firm, grainy malt flavor. Light fruity esters are acceptable, but otherwise clean.',
            mouthfeel: 'Medium-bodied. Medium to medium-high carbonation.',
            comments:
              'This style is narrowly defined around the prototypical Anchor Steam example, although allowing other typical ingredients of the era. Northern Brewer hops are not a strict requirement for the style; modern American and New World-type hops (especially citrusy ones) are inappropriate, however.',
            history:
              'American West Coast original, brewed originally as Steam Beer in the Gold Rush era. Large shallow open fermenters (coolships) were traditionally used to compensate for the absence of refrigeration and to take advantage of the cool ambient temperatures in the San Francisco Bay area. Fermented with a lager yeast, but one that was selected to ferment relatively clean beer at warmer temperatures. Modern versions are based on Anchor Brewing re-launching the style in the 1970s.',
            ingredients:
              'Pale ale malt, non-citrusy hops (often Northern Brewer), small amounts of toasted malt and/or crystal malts. Lager yeast; however, some strains (often with the mention of “California” in the name) work better than others at the warmer fermentation temperatures (55 to 60 °F) typically used. Note that some German yeast strains produce inappropriate sulfury character.',
            comparison:
              'Superficially similar to an American Amber Ale, but with specific choices for malt and hopping – the hop flavor/aroma is traditional (not modern) American hops, malt flavors are more toasty, the hopping is always assertive, and a warm-fermented lager yeast is used. Less attenuated, less carbonated and less fruity than Australian Sparkling ale.',

            vitalStatistics: {
              og: '1.048 - 1.054',
              fg: '1.011 - 1.014',
              abv: '4.5 - 5.5%',
              ibu: '30 - 45',
              srm: '10 - 14'
            }
          },
          commercialExamples: [
            {
              name: 'Anchor Steam'
            },
            {
              name: 'Flying Dog Old Scratch Amber Lager'
            },
            {
              name: 'Schlafly Pi Common'
            },
            {
              name: 'Steamworks Steam Engine Lager'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'amber-lager-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'American Brown Ale',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A malty but hoppy beer frequently with chocolate and caramel flavors. The hop flavor and aroma complements and enhances the malt rather than clashing with it.',
            aroma:
              'Moderate malty-sweet to malty-rich aroma with chocolate, caramel, nutty, and/or toasty qualities. Hop aroma is typically low to moderate, of almost any variety that complements the malt. Some interpretations of the style may feature a stronger hop aroma, an American or New World hop character (citrusy, fruity, tropical, etc.), and/or a fresh dry-hopped aroma (all are optional). Fruity esters are moderate to very low. The dark malt character is more robust than other brown ales, yet stops short of being overly porter-like. The malt and hops are generally balanced.',
            appearance:
              'Light to very dark brown color. Clear. Low to moderate off-white to light tan head.',
            flavor:
              'Medium to moderately-high malty-sweet or malty-rich flavor with chocolate, caramel, nutty, and/or toasty malt complexity, with medium to medium-high bitterness. The medium to medium-dry finish provides an aftertaste having both malt and hops. Hop flavor can be light to moderate, and may optionally have a citrusy, fruity, or tropical character, although any hop flavor that complements the malt is acceptable. Very low to moderate fruity esters.',
            mouthfeel:
              'Medium to medium-full body. More bitter versions may have a dry, resiny impression. Moderate to moderately-high carbonation.',
            comments:
              'Most commercial American Browns are not as aggressive as the original homebrewed versions, and some modern craft-brewed examples. This style reflects the current commercial offerings typically marketed as American Brown Ales rather than the hoppier, stronger homebrew versions from the early days of homebrewing. These IPA-strength brown ales should be entered in the Specialty IPA as Brown IPAs.',
            history:
              'An American style from the modern craft beer era. Derived from English Brown Ales, but with more hops. Pete’s Wicked Ale was one of the first and best known examples, and inspired many imitations. Popular with homebrewers, where very hoppy versions were sometimes called Texas Brown Ales (this is now more appropriately a Brown IPA).',
            ingredients:
              'Well-modified pale malt, plus crystal and darker malts (typically chocolate). American hops are typical, but continental or New World hops can also be used.',
            comparison:
              'More chocolate and caramel type flavors than American Pale or Amber Ales, typically with less prominent bitterness in the balance. Less bitterness, alcohol, and hop character than Brown IPAs. More bitter and generally hoppier than English Brown Ales, with a richer malt presence, usually higher alcohol, and American/New World hop character.',

            vitalStatistics: {
              og: '1.045 - 1.060',
              fg: '1.010 - 1.016',
              abv: '4.3 - 6.2%',
              ibu: '20 - 30',
              srm: '18 - 35'
            }
          },
          commercialExamples: [
            {
              name: 'Anchor Brekle’s Brown'
            },
            {
              name: 'Big Sky Moose Drool Brown Ale'
            },
            {
              name: 'Brooklyn Brown Ale'
            },
            {
              name: 'Bell’s Best Brown'
            },
            {
              name: 'Cigar City Maduro Brown Ale'
            },
            {
              name: 'Smuttynose Old Brown Dog Ale'
            },
            {
              name: 'Telluride Face Down Brown'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'brown-ale-family'
            },
            {
              tag: 'balanced'
            },
            {
              tag: 'hoppy'
            }
          ]
        }
      ]
    },
    {
      name: 'American Porter and Stout',
      number: 20,
      subcategories: [
        {
          name: 'American Porter',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A substantial, malty dark beer with a complex and flavorful dark malt character.',
            aroma:
              'Medium-light to medium-strong dark malt aroma, often with a lightly burnt character. Optionally may also show some additional malt character in support (grainy, bready, toffee-like, caramelly, chocolate, coffee, rich, and/or sweet). Hop aroma low to high, often with a resiny, earthy, or floral character. May be dry-hopped. Fruity esters are moderate to none.',
            appearance:
              'Medium brown to very dark brown, often with ruby- or garnet-like highlights. Can approach black in color. Clarity may be difficult to discern in such a dark beer, but when not opaque will be clear (particularly when held up to the light). Full, tan-colored head with moderately good head retention.',
            flavor:
              'Moderately strong malt flavor usually features a lightly burnt malt character (and sometimes chocolate and/or coffee flavors) with a bit of grainy, dark malt dryness in the finish. Overall flavor may finish from dry to medium-sweet. May have a sharp character from dark roasted grains, but should not be overly acrid, burnt or harsh. Medium to high bitterness, which can be accentuated by the dark malt. Hop flavor can vary from low to high with a resiny, earthy, or floral character, and balances the dark malt flavors. The dark malt and hops should not clash. Dry-hopped versions may have a resiny flavor. Fruity esters moderate to none.',
            mouthfeel:
              'Medium to medium-full body. Moderately low to moderately high carbonation. Stronger versions may have a slight alcohol warmth. May have a slight astringency from dark malts, although this character should not be strong. ',
            comments:
              'Although a rather broad style open to brewer interpretation. Dark malt intensity and flavor can vary significantly. May or may not have a strong hop character, and may or may not have significant fermentation by-products; thus may seem to have an “American” or “British” character.',
            history:
              'A stronger, more aggressive version of pre-prohibition porters and/or English porters developed in the modern craft beer era. Historical versions existed, particularly on the US East Coast, some of which are still being produced (see the Historical Beer, Pre-Prohibition Porter). This style describes the modern craft version.',
            ingredients:
              'May contain several malts, prominently dark malts, which often include black malt (chocolate malt is also often used). American hops typically used for bittering, but US or UK finishing hops can be used; a clashing citrus quality is generally undesirable. Ale yeast can either be clean US versions or characterful English varieties.',
            comparison:
              'More bitter and often stronger with more dark malt qualities and dryness than English Porters or Pre-Prohibition Porters. Less strong and assertive than American Stouts.',

            vitalStatistics: {
              og: '1.050 - 1.070',
              fg: '1.012 - 1.018',
              abv: '4.8 - 6.5%',
              ibu: '25 - 50',
              srm: '22 - 40'
            }
          },
          commercialExamples: [
            {
              name: 'Anchor Porter'
            },
            {
              name: 'Boulevard Bully! Porter'
            },
            {
              name: 'Deschutes Black Butte Porter'
            },
            {
              name: 'Founders Porter'
            },
            {
              name: 'Great Lakes Edmund Fitzgerald Porter'
            },
            {
              name: 'Smuttynose Robust Porter'
            },
            {
              name: 'Sierra Nevada Porter'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'porter-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'roasty'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'American Stout',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A fairly strong, highly roasted, bitter, hoppy dark stout. Has the body and dark flavors typical of stouts with a more aggressive American hop character and bitterness.',
            aroma:
              'Moderate to strong aroma of roasted malts, often having a roasted coffee or dark chocolate quality. Burnt or charcoal aromas are acceptable at low levels. Medium to very low hop aroma, often with a citrusy or resiny character. Medium to no esters. Light alcohol-derived aromatics are also optional.',
            appearance:
              'Generally a jet black color, although some may appear very dark brown. Large, persistent head of light tan to light brown in color. Usually opaque.',
            flavor:
              'Moderate to very high roasted malt flavors, often tasting of coffee, roasted coffee beans, dark or bittersweet chocolate. May have the flavor of slightly burnt coffee grounds, but this character should not be prominent. Low to medium malt sweetness, often with rich chocolate or caramel flavors. Medium to high bitterness. Low to high hop flavor, generally citrusy or resiny. Low to no esters. Medium to dry finish, occasionally with a lightly burnt quality. Alcohol flavors can be present up to medium levels, but smooth.',
            mouthfeel:
              'Medium to full body. Can be somewhat creamy, particularly if a small amount of oats have been used to enhance mouthfeel. Can have a bit of roast-derived astringency, but this character should not be excessive. Medium-high to high carbonation. Light to moderately strong alcohol warmth, but smooth and not excessively hot.',
            comments:
              'Breweries express individuality through varying the roasted malt profile, malt sweetness and flavor, and the amount of finishing hops used. Generally has bolder roasted malt flavors and hopping than other traditional stouts (except Imperial Stouts).',
            history:
              'A modern craft beer and homebrew style that applied an aggressive American hoping regime to a strong traditional English or Irish stout. The homebrew version was previously known as West Coast Stout, which is a common naming scheme for a more highly-hopped beer.',
            ingredients:
              'Common American base malts and yeast. Varied use of dark and roasted malts, as well as caramel-type malts. Adjuncts such as oatmeal may be present in low quantities. American hop varieties.',
            comparison:
              'Like a hoppy, bitter, strongly roasted Extra or Export Stout. Much more roast and body than a Black IPA. Bigger, stronger versions belong in the Russian Imperial Stout style. Stronger and more assertive, particularly in the dark malt/grain additions and hop character, than American Porter.',

            vitalStatistics: {
              og: '1.050 - 1.075',
              fg: '1.010 - 1.022',
              abv: '5.0 - 7.0%',
              ibu: '35 - 75',
              srm: '30 - 40'
            }
          },
          commercialExamples: [
            {
              name: 'Avery Out of Bounds Stout'
            },
            {
              name: 'Deschutes Obsidian Stout'
            },
            {
              name: 'North Coast Old No. 38'
            },
            {
              name: 'Rogue Shakespeare Stout'
            },
            {
              name: 'Sierra Nevada Stout'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'stout-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'roasty'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'Imperial Stout',
          letter: 'C',
          guidelines: {
            overallImpression:
              'An intensely-flavored, big, dark ale with a wide range of flavor balances and regional interpretations. Roasty-burnt malt with deep dark or dried fruit flavors, and a warming, bittersweet finish. Despite the intense flavors, the components need to meld together to create a complex, harmonious beer, not a hot mess.',
            aroma:
              'Rich and complex, with variable amounts of roasted grains, maltiness, fruity esters, hops, and alcohol. The roasted malt character can take on coffee, dark chocolate, or slightly burnt tones and can be light to moderately strong. The malt aroma can be subtle to rich and barleywine-like. May optionally show a slight specialty malt character (e.g., caramel), but this should only add complexity and not dominate. Fruity esters may be low to moderately strong, and may take on a complex, dark fruit (e.g., plums, prunes, raisins) character. Hop aroma can be very low to quite aggressive, and may contain any hop variety. An alcohol character may be present, but shouldn’t be sharp, hot, or solventy. Aged versions may have a slight vinous or port-like quality, but shouldn’t be sour. The balance can vary with any of the aroma elements taking center stage. Not all possible aromas described need be present; many interpretations are possible. Aging affects the intensity, balance and smoothness of aromatics.',
            appearance:
              'Color may range from very dark reddish-brown to jet black. Opaque. Deep tan to dark brown head. Generally has a well-formed head, although head retention may be low to moderate. High alcohol and viscosity may be visible in “legs” when beer is swirled in a glass.',
            flavor:
              'Rich, deep, complex and frequently quite intense, with variable amounts of roasted malt/grains, maltiness, fruity esters, hop bitterness and flavor, and alcohol. Medium to aggressively high bitterness. Medium-low to high hop flavor (any variety). Moderate to aggressively high roasted malt/grain flavors can suggest bittersweet or unsweetened chocolate, cocoa, and/or strong coffee. A slightly burnt grain, burnt currant or tarry character may be evident. Fruity esters may be low to intense, and can take on a dark fruit character (raisins, plums, or prunes). Malt backbone can be balanced and supportive to rich and barleywine-like, and may optionally show some supporting caramel, bready or toasty flavors. The palate and finish can vary from relatively dry to moderately sweet, usually with some lingering roastiness, hop bitterness and warming character. The balance and intensity of flavors can be affected by aging, with some flavors becoming more subdued over time and some aged, vinous or port-like qualities developing.',
            mouthfeel:
              'Full to very full-bodied and chewy, with a velvety, luscious texture (although the body may decline with long conditioning). Gentle smooth warmth from alcohol should be present and noticeable, but not a primary characteristic; in well-conditioned versions, the alcohol can be deceptive. Should not be syrupy or under-attenuated. Carbonation may be low to moderate, depending on age and conditioning.',
            comments:
              'Traditionally an English style, but it is currently much more popular and widely available in America where it is a craft beer favorite, not a curiosity. Variations exist, with English and American interpretations (predictably, the American versions have more bitterness, roasted character, and finishing hops, while the English varieties reflect a more complex specialty malt character and a more forward ester profile). Not all Imperial Stouts have a clearly ‘English’ or ‘American’ character; anything in between the two variants are allowable as well, which is why it is counter-productive to designate a sub-type when entering a competition. The wide range of allowable characteristics allow for maximum brewer creativity. Judges must be aware of the broad range of the style, and not try to judge all examples as clones of a specific commercial beer.',
            history:
              'A style with a long, although not necessarily continuous, heritage. Traces roots to strong English porters brewed for export in the 1700s, and said to have been popular with the Russian Imperial Court. After the Napoleonic wars interrupted trade, these beers were increasingly sold in England. The style eventually all but died out, until being popularly embraced in the modern craft beer era, both in England as a revival and in the United States as a reinterpretation or re-imagination by extending the style with American characteristics.',
            ingredients:
              'Well-modified pale malt, with generous quantities of roasted malts and/or grain. May have a complex grain bill using virtually any variety of malt. Any type of hops may be used. American or English ale yeast.',
            comparison:
              'Like a black barleywine with every dimension of flavor coming into play. More complex, with a broader range of possible flavors than lower-gravity stouts.',

            vitalStatistics: {
              og: '1.075 - 1.115',
              fg: '1.018 - 1.030',
              abv: '8.0 - 12.0%',
              ibu: '50 - 90',
              srm: '30 - 40'
            }
          },
          commercialExamples: [
            {
              name: 'Bell’s Expedition Stout'
            },
            {
              name: 'Cigar City Marshal Zhukov’s Imperial Stout'
            },
            {
              name: 'Great Divide Yeti Imperial Stout'
            },
            {
              name: 'North Coast Old Rasputin Imperial Stout'
            },
            {
              name:
                'Sierra Nevada Narwhal Imperial Stout; English – Courage Imperial Russian Stout'
            },
            {
              name: 'Le Coq Imperial Extra Double Stout'
            },
            {
              name: 'Samuel Smith Imperial Stout'
            }
          ],
          tags: [
            {
              tag: 'very-high-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'stout-family'
            },
            {
              tag: 'malty'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'roasty'
            }
          ]
        }
      ]
    },
    {
      name: 'IPA',
      number: 21,
      subcategories: [
        {
          name: 'American IPA',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A decidedly hoppy and bitter, moderately strong American pale ale, showcasing modern American or New World hop varieties. The balance is hop-forward, with a clean fermentation profile, dryish finish, and clean, supporting malt allowing a creative range of hop character to shine through.',
            aroma:
              'A prominent to intense hop aroma featuring one or more characteristics of American or New World hops, such as citrus, floral, pine, resinous, spicy, tropical fruit, stone fruit, berry, melon, etc. Many versions are dry hopped and can have an additional fresh hop aroma; this is desirable but not required. Grassiness should be minimal, if present. A low to medium-low clean, grainy-malty aroma may be found in the background. Fruitiness from yeast may also be detected in some versions, although a neutral fermentation character is also acceptable. A restrained alcohol note may be present, but this character should be minimal at best. Any American or New World hop character is acceptable; new hop varieties continue to be released and should not constrain this style.',
            appearance:
              'Color ranges from medium gold to light reddish-amber. Should be clear, although unfiltered dry-hopped versions may be a bit hazy. Medium-sized, white to off-white head with good persistence.',
            flavor:
              'Hop flavor is medium to very high, and should reflect an American or New World hop character, such as citrus, floral, pine, resinous, spicy, tropical fruit, stone fruit, berry, melon, etc. Medium-high to very high hop bitterness. Malt flavor should be low to medium-low, and is generally clean and grainy-malty although some light caramel or toasty flavors are acceptable. Low yeast-derived fruitiness is acceptable but not required. Dry to medium-dry finish; residual sweetness should be low to none. The bitterness and hop flavor may linger into the aftertaste but should not be harsh. A very light, clean alcohol flavor may be noted in stronger versions. May be slightly sulfury, but most examples do not exhibit this character.',
            mouthfeel:
              'Medium-light to medium body, with a smooth texture. Medium to medium-high carbonation. No harsh hop-derived astringency. Very light, smooth alcohol warming not a fault if it does not intrude into overall balance.',
            comments:
              'A modern American craft beer interpretation of the historical English style, brewed using American ingredients and attitude. The basis for many modern variations, including the stronger Double IPA as well as IPAs with various other ingredients. Those other IPAs should generally be entered in the Specialty IPA style. Oak is inappropriate in this style; if noticeably oaked, enter in wood-aged category.',
            history:
              'The first modern American craft beer example is generally believed to be Anchor Liberty Ale, first brewed in 1975 and using whole Cascade hops; the style has pushed beyond that original beer, which now tastes more like an American Pale Ale in comparison. American-made IPAs from earlier eras were not unknown (particularly the well-regarded Ballantine’s IPA, an oak-aged beer using an old English recipe). This style is based on the modern craft beer examples.',
            ingredients:
              'Pale ale or 2-row brewers malt as the base, American or New World hops, American or English yeast with a clean or slightly fruity profile. Generally all-malt, but mashed at lower temperatures for high attenuation. Sugar additions to aid attenuation are acceptable. Restrained use of crystal malts, if any, as high amounts can lead to a sweet finish and clash with the hop character.',
            comparison:
              'Stronger and more highly hopped than an American Pale Ale. Compared to an English IPA, has less of the “English” character from malt, hops, and yeast (less caramel, bread, and toast; more American/New World hops than English; less yeast-derived esters), less body, and often has a more hoppy balance and is slightly stronger than most examples. Less alcohol than a Double IPA, but with a similar balance.',

            vitalStatistics: {
              og: '1.056 - 1.070',
              fg: '1.008 - 1.014',
              abv: '5.5 - 7.5%',
              ibu: '40 - 70',
              srm: '6 - 14'
            }
          },
          commercialExamples: [
            {
              name: 'Alpine Duet'
            },
            {
              name: 'Bell’s Two-Hearted Ale'
            },
            {
              name: 'Fat Heads Head Hunter IPA'
            },
            {
              name: 'Firestone Walker Union Jack'
            },
            {
              name: 'Lagunitas IPA'
            },
            {
              name: 'Russian River Blind Pig IPA'
            },
            {
              name: 'Stone IPA'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'ipa-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'Specialty IPA',
          letter: 'B',
          guidelines: {
            overallImpression:
              'Recognizable as an IPA by balance – a hop-forward, bitter, dryish beer – with something else present to distinguish it from the standard categories. Should have good drinkability, regardless of the form. Excessive harshness and heaviness are typically faults, as are strong flavor clashes between the hops and the other specialty ingredients.',
            aroma:
              'Detectable hop aroma is required; characterization of hops is dependent on the specific type of Specialty IPA. Other aromatics may be present; hop aroma is typically the strongest element.',
            appearance:
              'Color depends on specific type of Specialty IPA. Most should be clear, although certain styles with high amounts of starchy adjuncts, or unfiltered dry-hopped versions may be slightly hazy. Darker types can be opaque making clarity irrelevant. Good, persistent head stand with color dependent on the specific type of Specialty IPA.',
            flavor:
              'Hop flavor is typically medium-low to high, with qualities dependent on typical varieties used in the specific Specialty IPA. Hop bitterness is typically medium-high to very high, with qualities dependent on typical varieties used in the specific Specialty IPA. Malt flavor generally low to medium, with qualities dependent on typical varieties used in the specific Specialty IPA. Commonly will have a medium-dry to dry finish. Some clean alcohol flavor can be noted in stronger versions. Various types of Specialty IPAs can show additional malt and yeast characteristics, depending on the type.',
            mouthfeel:
              'Smooth, medium-light to medium-bodied mouthfeel. Medium carbonation. Some smooth alcohol warming can be sensed in stronger versions.',
            comments: '',
            history: '',
            ingredients: '',
            comparison: '',
            instructions:
              'Entrant must specify a strength (session, standard, double); if no strength is specified, standard will be assumed. Entrant must specify specific type of Specialty IPA from the library of known types listed in the Style Guidelines, or as amended by the BJCP web site; or the entrant must describe the type of Specialty IPA and its key characteristics in comment form so judges will know what to expect. Entrants may specify specific hop varieties used, if entrants feel that judges may not recognize the varietal characteristics of newer hops. Entrants may specify a combination of defined IPA types (e.g., Black Rye IPA) without providing additional descriptions. Entrants may use this category for a different strength version of an IPA defined by its own BJCP subcategory (e.g., session-strength American or English IPA) – except where an existing BJCP subcategory already exists for that style (e.g., double [American] IPA). Currently Defined Types: Black IPA, Brown IPA, White IPA, Rye IPA, Belgian IPA, Red IPA  Strength classifications: Session – ABV: 3.0 – 5.0%, Standard – ABV: 5.0 – 7.5%, Double – ABV: 7.5 – 10.0%',

            vitalStatistics: {
              og: 'Variable by type',
              fg: 'Variable by type',
              abv: 'Variable by type',
              ibu: 'Variable by type',
              srm: 'Variable by type'
            }
          },
          commercialExamples: [
            {
              name: ''
            }
          ],
          tags: [
            {
              tag: ''
            }
          ]
        },
        {
          name: 'Specialty IPA: Belgian IPA',
          letter: 'B',
          guidelines: {
            overallImpression:
              'An IPA with the fruitiness and spiciness derived from the use of Belgian yeast. The examples from Belgium tend to be lighter in color and more attenuated, similar to a tripel that has been brewed with more hops. This beer has a more complex flavor profile and may be higher in alcohol than a typical IPA.',
            aroma:
              'Moderate to high hop aroma, often tropical, stone fruit, citrus or pine-like typical of American or New World hop varieties. Floral and spicy aromas are also found indicating European hops. Grassy aroma due to dry hopping may be present. Gentle, grainy-sweet malt aroma, with little to no caramel. Fruity esters are moderate to high and may include aromas of bananas, pears and apples. Light clove-like phenols may be noticeable. Belgian candi sugar-like aromas are sometimes present.',
            appearance:
              'Light golden to amber in color. Off-white head is moderate to large in size and has good retention. Clarity is fair to quite hazy in dry hopped examples.',
            flavor:
              'Initial flavor is moderately spicy and estery associated with Belgian yeast strains. Clove-like and peppery flavors are common. Banana, pear and apple flavors are also typical. Hop flavors are moderate to high in intensity and may reflect tropical, stone fruit, melon, citrusy, or piney American/New World varieties or floral and spicy Saazer-type hop flavors. Malt flavor is light and grainy-sweet, sometimes with low toasted or caramel malt flavor but not required. Bitterness is high and may be accentuated by spicy yeast-derived flavors. The finish is dry to medium-dry although some examples have a slight sweetness mixed with the lingering bitterness.',
            mouthfeel:
              'The body is medium to light and varies due to carbonation level and adjunct use. Carbonation level is medium to high. Some higher alcohol versions may be warming although this may not be readily apparent.',
            comments:
              'The choice of yeast strain and hop varieties is critical since many choices will horribly clash.',
            history:
              'A relatively new style, started showing up in the mid 2000s. Homebrewers and microbreweries simply substituted Belgian yeast in their American IPA recipes. Belgian breweries added more hops to their tripel and pale ale recipes.',
            ingredients:
              'Belgian yeast strains used in making tripels and golden strong ales. American examples tend to use American or New World hops while Belgian versions tend to use European hops and only pale malt.',
            comparison:
              'A cross between an American IPA/Imperial IPA with a Belgian Golden Strong Ale or Tripel. This style is may be spicier, stronger, drier and more fruity than an American IPA.',

            vitalStatistics: {
              og: '1.058 - 1.080',
              fg: '1.008 - 1.016',
              abv: '6.2 - 9.5%',
              ibu: '50 - 100',
              srm: '5 - 15'
            }
          },
          commercialExamples: [
            {
              name: 'Brewery Vivant Triomphe'
            },
            {
              name: 'Houblon Chouffe'
            },
            {
              name: 'Epic Brainless IPA'
            },
            {
              name: 'Green Flash Le Freak'
            },
            {
              name: 'Stone Cali-Belgique'
            },
            {
              name: 'Urthel Hop It'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'ipa-family'
            },
            {
              tag: 'specialty-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'Specialty IPA: Black IPA ',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A beer with the dryness, hop-forward balance, and flavor characteristics of an American IPA, only darker in color – but without strongly roasted or burnt flavors. The flavor of darker malts is gentle and supportive, not a major flavor component. Drinkability is a key characteristic.',
            aroma:
              'A moderate to high hop aroma, often with a stone fruit, tropical, citrusy, resinous, piney, berry, or melon character. If dry hopped, can have an additional floral, herbal, or grassy aroma, although this is not required. Very low to moderate dark malt aroma, which can optionally include light chocolate, coffee, or toast notes. Some clean or lightly caramelly malty sweetness may be found in the background. Fruitiness, either from esters or from hops, may also be detected in some versions, although a neutral fermentation character is also acceptable.',
            appearance:
              'Color ranges from dark brown to black. Should be clear, although unfiltered dry-hopped versions may be a bit hazy; if opaque, should not be murky. Good head stand with light tan to tan color should persist. ',
            flavor:
              'Medium-low to high hop flavor with tropical, stone fruit, melon, citrusy, berry, piney or resinous aspects. Medium-high to very high hop bitterness, although dark malts may contribute to the perceived bitterness. The base malt flavor is generally clean and of low to medium intensity, and can optionally have low caramel or toffee flavors. Dark malt flavors are low to medium-low; restrained chocolate or coffee flavors may be present, but the roasted notes should not be intense, ashy, or burnt, and should not clash with the hops. Low to moderate fruitiness (from yeast or hops) is acceptable but not required. Dry to slightly off-dry finish. The finish may include a light roast character that contributes to perceived dryness, although this is not required. The bitterness may linger into the aftertaste but should not be harsh. Some clean alcohol flavor can be noted in stronger versions. ',
            mouthfeel:
              'Smooth, medium-light to medium-bodied mouthfeel without significant hop- or (especially) roasted malt-derived astringency. Dry-hopped versions may be a bit resiny. Medium carbonation. A bit of creaminess may be present but is not required. Some smooth alcohol warming can and should be sensed in stronger (but not all) versions.',
            comments:
              'Most examples are standard strength. Strong examples can sometimes seem like big, hoppy porters if made too extreme, which hurts their drinkability. The hops and malt can combine to produce interesting interactions.',
            history:
              'A variation of the American IPA style first commercially produced by Greg Noonan as Blackwatch IPA around 1990. Popularized in the Pacific Northwest and Southern California of the US starting in the early-mid 2000s. This style is sometimes known as Cascadian Dark Ale (CDA), mainly in the Pacific Northwest. ',
            ingredients:
              'Debittered roast malts for color and some flavor without harshness and burnt qualities; American or New World hop varieties that don’t clash with roasted malts. Hop characteristics cited are typical of these type of hops; others characteristics are possible, particularly if derived from newer varietals.',
            comparison:
              'Balance and overall impression of an American or Double IPA with restrained roast similar to the type found in Schwarzbiers. Not as roasty-burnt as American stouts and porters, and with less body and increased smoothness and drinkability. ',

            vitalStatistics: {
              og: '1.050 - 1.085',
              fg: '1.010 - 1.018',
              abv: '5.5 - 9.0%',
              ibu: '50 - 90',
              srm: '25 - 40'
            }
          },
          commercialExamples: [
            {
              name: '21st Amendment Back in Black (standard)'
            },
            {
              name: 'Deschutes Hop in the Dark CDA (standard)'
            },
            {
              name: 'Rogue Dad’s Little Helper (standard)'
            },
            {
              name: 'Southern Tier Iniquity (double)'
            },
            {
              name: 'Widmer Pitch Black IPA (standard)'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'ipa-family'
            },
            {
              tag: 'specialty-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'Specialty IPA: Brown IPA',
          letter: 'B',
          guidelines: {
            overallImpression:
              'Hoppy, bitter, and moderately strong like an American IPA, but with some caramel, chocolate, toffee, and/or dark fruit malt character as in an American Brown Ale. Retaining the dryish finish and lean body that makes IPAs so drinkable, a Brown IPA is a little more flavorful and malty than an American IPA without being sweet or heavy.',
            aroma:
              'A moderate to moderately-strong fresh hop aroma featuring one or more characteristics of American or New World hops, such as tropical fruit, stone fruit, citrus, floral, spicy, berry, melon, pine, resinous, etc. Many versions are dry hopped and can have an additional fresh hop aroma; this is desirable but not required. Grassiness should be minimal, if present. A medium-low to medium malty-sweet aroma mixes in well with the hop selection, and often features chocolate, nuts, dark caramel, toffee, toasted bread, and/or dark fruit character. Fruitiness from yeast may also be detected in some versions, although a neutral fermentation character is also acceptable. A restrained alcohol note may be present, but this character should be minimal at best. Any American or New World hop character is acceptable; new hop varieties continue to be released and should not constrain this style.',
            appearance:
              'Color ranges from reddish-brown to dark brown but not black. Frequently opaque, but should be clear if visible. Unfiltered dry-hopped versions may be a bit hazy. Medium-sized, cream-colored to tan head with good persistence.',
            flavor:
              'Hop flavor is medium to high, and should reflect an American or New World hop character, such as citrus, floral, pine, resinous, spicy, tropical fruit, stone fruit, berry, melon, etc. Medium-high to high hop bitterness. Malt flavor should be medium-low to medium, and is generally clean but malty-sweet up front with milk chocolate, cocoa, toffee, nutty, biscuity, dark caramel, toasted bread and/or dark fruit malt flavors. The character malt choices and the hop selections should complement and enhance each other, not clash. The level of malt flavor should nearly balance the hop bitterness and flavor presentation. Low yeast-derived fruitiness is acceptable but not required. Dry to medium finish; residual sweetness should be medium-low to none. The bitterness and hop flavor may linger into the aftertaste but should not be harsh. A very light, clean alcohol flavor may be noted in stronger versions. No roasted, burnt, or harsh-bitter malt character.',
            mouthfeel:
              'Medium-light to medium body, with a smooth texture. Medium to medium-high carbonation. No harsh hop-derived astringency. Very light, smooth alcohol warming not a fault if it does not intrude into overall balance.',
            comments:
              'Previously might have been a sub-genre of American Brown Ales, hoppier and stronger than the normal products, but still maintaining the essential drinkability by avoiding sweet flavors or a heavy body or finish. The hops and malt can combine to produce interesting interactions.',
            history:
              'A more modern craft beer name for a style that has long been popular with US homebrewers, when it was known as a hoppier American Brown Ale or sometimes Texas Brown Ale (despite origins in California).',
            ingredients:
              'Similar to an American IPA, but with medium or dark crystal malts, lightly roasted chocolate-type malts, or other intermediate color character malts. May use sugar adjuncts, including brown sugar. American or New World finishing hops with tropical, fruity, citrusy, piney, berry, or melon aspects; the choice of hops and character malts is synergistic – they very much have to complement each other and not clash.',
            comparison:
              'A stronger and more bitter version of an American Brown Ale, with the balance of an American IPA.',

            vitalStatistics: {
              og: '1.056 - 1.070',
              fg: '1.008 - 1.016',
              abv: '5.5 - 7.5%',
              ibu: '40 - 70',
              srm: '11 - 19'
            }
          },
          commercialExamples: [
            {
              name: 'Dogfish Head Indian Brown Ale'
            },
            {
              name: 'Grand Teton Bitch Creek'
            },
            {
              name: 'Harpoon Brown IPA'
            },
            {
              name: 'Russian River Janet’s Brown Ale'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'ipa-family'
            },
            {
              tag: 'specialty-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'Specialty IPA: Red IPA',
          letter: 'B',
          guidelines: {
            overallImpression:
              'Hoppy, bitter, and moderately strong like an American IPA, but with some caramel, toffee, and/or dark fruit malt character. Retaining the dryish finish and lean body that makes IPAs so drinkable, a Red IPA is a little more flavorful and malty than an American IPA without being sweet or heavy.',
            aroma:
              'A moderate to strong fresh hop aroma featuring one or more characteristics of American or New World hops, such as tropical fruit, stone fruit, citrus, floral, spicy, berry, melon, pine, resinous, etc. Many versions are dry hopped and can have an additional fresh hop aroma; this is desirable but not required. Grassiness should be minimal, if present. A medium-low to medium malty-sweet aroma mixes in well with the hop selection, and often features caramel, toffee, toasty, and/or dark fruit character. Fruitiness from yeast may also be detected in some versions, although a neutral fermentation character is also acceptable. A restrained alcohol note may be present, but this character should be minimal at best. Any American or New World hop character is acceptable; new hop varieties continue to be released and should not constrain this style.',
            appearance:
              'Color ranges from light reddish-amber to dark reddish-copper. Should be clear, although unfiltered dry-hopped versions may be a bit hazy. Medium-sized, off-white to cream-colored head with good persistence.',
            flavor:
              'Hop flavor is medium to very high, and should reflect an American or New World hop character, such as citrus, floral, pine, resinous, spicy, tropical fruit, stone fruit, berry, melon, etc. Medium-high to very high hop bitterness. Malt flavor should be medium-low to medium, and is generally clean but malty-sweet up front with medium-dark caramel, toffee, toasty and/or dark fruit malt flavors. The character malt choices and the hop selections should complement and enhance each other, not clash. The level of malt flavor should not adversely constrain the hop bitterness and flavor presentation. Low yeast-derived fruitiness is acceptable but not required. Dry to medium-dry finish; residual sweetness should be medium-low to none. The bitterness and hop flavor may linger into the aftertaste but should not be harsh. A very light, clean alcohol flavor may be noted in stronger versions. ',
            mouthfeel:
              'Medium-light to medium body, with a smooth texture. Medium to medium-high carbonation. No harsh hop-derived astringency. Very light, smooth alcohol warming not a fault if it does not intrude into overall balance.',
            comments:
              'Previously might have been a sub-genre of American Amber Ales or Double Red Ales, hoppier and stronger than the normal products, but still maintaining the essential drinkability by avoiding sweet flavors or a heavy body or finish.',
            history:
              'A modern American craft beer style, based on American IPA but with the malt flavors of an American Amber Ale.',
            ingredients:
              'Similar to an American IPA, but with medium or dark crystal malts, possibly some character malts with a light toasty aspect. May use sugar adjuncts. American or New World finishing hops with tropical, fruity, citrusy, piney, berry, or melon aspects; the choice of hops and character malts is synergistic – they very much have to complement each other and not clash.',
            comparison:
              'Similar to the difference between an American Amber Ale and an American Pale Ale, a Red IPA will differ from an American IPA with the addition of some darker crystal malts giving a slightly sweeter, more caramelly and dark fruit-based balance. A Red IPA differs from an American Strong Ale in that the malt profile is less intense and there is less body; a Red IPA still has an IPA balance and doesn’t trend towards a barleywine-like malt character. A Red IPA is like a stronger, hoppier American Amber Ale, with the characteristic dry finish, medium-light body, and strong late hop character.',

            vitalStatistics: {
              og: '1.056 - 1.070',
              fg: '1.008 - 1.016',
              abv: '5.5 - 7.5%',
              ibu: '40 - 70',
              srm: '11 - 19'
            }
          },
          commercialExamples: [
            {
              name: 'Green Flash Hop Head Red Double Red IPA (double)'
            },
            {
              name: 'Midnight Sun Sockeye Red'
            },
            {
              name: 'Sierra Nevada Flipside Red IPA'
            },
            {
              name: 'Summit Horizon Red IPA'
            },
            {
              name: 'Odell Runoff Red IPA'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'ipa-family'
            },
            {
              tag: 'specialty-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'Specialty IPA: Rye IPA',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A decidedly hoppy and bitter, moderately strong American pale ale, showcasing modern American and New World hop varieties and rye malt. The balance is hop-forward, with a clean fermentation profile, dry finish, and clean, supporting malt allowing a creative range of hop character to shine through.',
            aroma:
              'A prominent to intense hop aroma featuring one or more characteristics of American or New World hops, such as citrus, floral, pine, resinous, spicy, tropical fruit, stone fruit, berry, melon, etc. Many versions are dry hopped and can have an additional fresh hop aroma; this is desirable but not required. Grassiness should be minimal, if present. It may have low peppery rye malt aroma. A low to medium-low clean grainy-malty aroma may be found in the background. Fruitiness from yeast may also be detected in some versions, although a neutral fermentation character is also acceptable. A restrained alcohol note may be present, but this character should be minimal at best. Any American or New World hop character is acceptable; new hop varieties continue to be released and should not constrain this style.',
            appearance:
              'Color ranges from medium gold to light reddish-amber. Should be clear, although unfiltered dry-hopped versions may be a bit hazy. Medium-sized, white to off-white head with good persistence.',
            flavor:
              'Hop flavor is medium to very high, and should reflect an American or New World hop character, such as citrus, floral, pine, resinous, spicy, tropical fruit, stone fruit, berry, melon, etc. Medium-high to very high hop bitterness. Malt flavor should be low to medium-low, and is generally clean and grainy-malty although some light caramel or toasty flavors are acceptable. A light grainy spiciness from rye malt should be present. Low yeast-derived fruitiness is acceptable but not required. Rye malt contributes to a dry finish; residual sweetness should be low to none. The bitterness, hop flavor and dryness may linger into the aftertaste but should not be harsh. A very light, clean alcohol flavor may be noted in stronger versions. ',
            mouthfeel:
              'Medium-light to medium body, with a smooth texture. Medium to medium-high carbonation. No harsh hop-derived astringency. Very light, smooth alcohol warming not a fault if it does not intrude into overall balance.',
            comments:
              'A modern American craft beer variation of American IPA. Rye malt character should be noticeable, otherwise enter in American IPA. Oak is inappropriate in this style; if noticeably oaked, enter in wood-aged category.',
            history:
              'Looking to add complexity and variety to their IPAs, craft brewers and homebrewers substituted rye malt for a portion of their base malt. Rye IPAs, RyePAs or RIPAs have found a place in many craft breweries seasonal rotations.',
            ingredients:
              'Pale ale or 2-row brewers malt as the base, 15-20% Rye malt, American or New World hops, American or English yeast with a clean or slightly fruity profile. Generally all-malt, but mashed at lower temperatures for high attenuation. Sugar additions to aid attenuation are acceptable. Water character varies from soft to moderately sulfate. Restrained use of crystal malts, if any, as high amounts can lead to a sweet finish and clash with the hop character.',
            comparison:
              'Drier and slightly spicier than an American IPA. Bitterness and spiciness from rye lingers longer than an American IPA. Does not have the intense rye malt character of a Roggenbier. Some examples are stronger like a Double IPA.',

            vitalStatistics: {
              og: '1.056 - 1.075',
              fg: '1.008 - 1.014',
              abv: '5.5 - 8.0%',
              ibu: '50 - 75',
              srm: '6 - 14'
            }
          },
          commercialExamples: [
            {
              name: 'Arcadia Sky High Rye'
            },
            {
              name: 'Bear Republic Hop Rod Rye'
            },
            {
              name: 'Founders Reds Rye'
            },
            {
              name: 'Great Lakes Rye of the Tiger'
            },
            {
              name: 'Sierra Nevada Ruthless Rye'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'ipa-family'
            },
            {
              tag: 'specialty-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'Specialty IPA: White IPA',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A fruity, spicy, refreshing version of an American IPA, but with a lighter color, less body, and featuring either the distinctive yeast and/or spice additions typical of a Belgian witbier.',
            aroma:
              'Moderate fruity esters – banana, citrus, perhaps apricot. May have light to moderate spice aroma such as coriander or pepper from actual spice additions and/or Belgian yeast. Hop aroma is moderately-low to medium, usually American or New World type with stone fruit, citrus and tropical aromas. Esters and spices may reduce hop aroma perception. Light clove-like phenolics may be present.',
            appearance:
              'Pale to deep golden color, typically hazy. Moderate to large, dense white head that persists.',
            flavor:
              'Light malt flavor, perhaps a bit bready. Fruity esters are moderate to high, with citrus flavors similar to grapefruit and orange, or stone fruit like apricot. Sometimes banana-like flavors are present. Hop flavor is medium-low to medium-high with citrusy or fruity aspects. Some spicy clove-like flavors from Belgian yeast may be present. Coriander and orange peel flavors may be found as well. Bitterness is high which leads to a moderately dry, refreshing finish.',
            mouthfeel:
              'Medium-light body with medium to medium-high carbonation. Typically no astringency, although highly spiced examples may exhibit a light astringency which is not distracting. ',
            comments:
              'A craft beer interpretation of American IPA crossed with a witbier.',
            history:
              'American craft brewers developed the style as a late winter/spring seasonal beer to appeal to Wit and IPA drinkers alike.',
            ingredients:
              'Pale and wheat malts, Belgian yeast, citrusy American type hops.',
            comparison:
              'Similar to a Belgian Wit style except highly hopped to the level of an American IPA. Bitter and hoppy like the IPA but fruity, spicy and light like the Wit. Typically the hop aroma and flavor are not as prominent as in an American IPA.',

            vitalStatistics: {
              og: '1.056 - 1.065',
              fg: '1.010 - 1.016',
              abv: '5.5 - 7.0%',
              ibu: '40 - 70',
              srm: '5 - 8'
            }
          },
          commercialExamples: [
            {
              name: 'Blue Point White IPA'
            },
            {
              name: 'Deschutes Chainbreaker IPA'
            },
            {
              name: 'Harpoon The Long Thaw'
            },
            {
              name: 'New Belgium Accumulation'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'ipa-family'
            },
            {
              tag: 'specialty-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            },
            {
              tag: 'spice'
            }
          ]
        }
      ]
    },
    {
      name: 'Strong American Ale',
      number: 22,
      subcategories: [
        {
          name: 'Double IPA',
          letter: 'A',
          guidelines: {
            overallImpression:
              'An intensely hoppy, fairly strong pale ale without the big, rich, complex maltiness and residual sweetness and body of an American barleywine. Strongly hopped, but clean, dry, and lacking harshness. Drinkability is an important characteristic; this should not be a heavy, sipping beer.',
            aroma:
              'A prominent to intense hop aroma that typically showcases American or New World hop characteristics (citrus, floral, pine, resinous, spicy, tropical fruit, stone fruit, berry, melon, etc.). Most versions are dry hopped and can have an additional resinous or grassy aroma, although this is not absolutely required. Some clean malty sweetness may be found in the background. Fruitiness, either from esters or hops, may also be detected in some versions, although a neutral fermentation character is typical. Some alcohol can usually be noted, but it should not have a “hot” character.',
            appearance:
              'Color ranges from golden to light orange-copper; most modern versions are fairly pale. Good clarity, although unfiltered dry-hopped versions may be a bit hazy. Moderate-sized, persistent, white to off-white head.',
            flavor:
              'Hop flavor is strong and complex, and can reflect the characteristics of modern American or New World hop varieties (citrus, floral, pine, resinous, spicy, tropical fruit, stone fruit, berry, melon, etc.). High to absurdly high hop bitterness. Low to medium malt flavor, generally clean and grainy-malty although low levels of caramel or toasty flavors are acceptable. Low to medium fruitiness is acceptable but not required. A long, lingering bitterness is usually present in the aftertaste but should not be harsh. Dry to medium-dry finish; should not finish sweet or heavy. A light, clean, smooth alcohol flavor is not a fault. Oak is inappropriate in this style. May be slightly sulfury, but most examples do not exhibit this character.',
            mouthfeel:
              'Medium-light to medium body, with a smooth texture. Medium to medium-high carbonation. No harsh hop-derived astringency. Restrained, smooth alcohol warming acceptable.',
            comments:
              "A showcase for hops, yet remaining quite drinkable. The adjective 'double' is arbitrary and simply implies a stronger version of an IPA; “imperial,” “extra,” “extreme,” or any other variety of adjectives would be equally valid, although the modern American market seems to have now coalesced around the “double” term.",
            history:
              'An American craft beer innovation first developed in the mid-late 1990s reflecting the trend of American craft brewers “pushing the envelope” to satisfy the need of hop aficionados for increasingly intense products. Became more mainstream and popular throughout the 2000s, and inspired additional IPA creativity.',
            ingredients:
              'Clean 2-row malt is typical as a base grain; an excessively complex grist can be distracting. Crystal-type malts often muddy the hop flavors, and are generally considered undesirable in significant quantities. Sugar or other highly fermentable adjuncts are often used to increase attenuation, as are lower-temperature mash rests. Can use a complex variety of hops, typically American or New World, often with cutting-edge profiles providing distinctive differences. Modern hops with unusual characteristics are not out of style. American yeast that can give a clean or slightly fruity profile.',
            comparison:
              'Bigger than either an English or American IPA in both alcohol strength and overall hop level (bittering and finish). Less malty, lower body, less rich and a greater overall hop intensity than an American Barleywine. Typically not as high in gravity/alcohol as a barleywine, since high alcohol and malt tend to limit drinkability.',

            vitalStatistics: {
              og: '1.065 - 1.085',
              fg: '1.008 - 1.018',
              abv: '7.5 - 10.0%',
              ibu: '60 - 120',
              srm: '6 - 14'
            }
          },
          commercialExamples: [
            {
              name: 'Avery Maharaja'
            },
            {
              name: 'Fat Heads Hop Juju'
            },
            {
              name: 'Firestone Walker Double Jack'
            },
            {
              name: 'Port Brewing Hop 15'
            },
            {
              name: 'Russian River Pliny the Elder'
            },
            {
              name: 'Stone Ruination IPA'
            },
            {
              name: 'Three Floyds Dreadnaught'
            }
          ],
          tags: [
            {
              tag: 'very-high-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'ipa-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'American Strong Ale',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A strong, full-flavored American ale that challenges and rewards the palate with full malty and hoppy flavors and substantial bitterness. The flavors are bold but complementary, and are stronger and richer than average-strength pale and amber American ales.',
            aroma:
              'Medium to high hop aroma, most often presenting citrusy or resiny notes although characteristics associated with other American or New World varieties may be found (tropical, stone fruit, melon, etc.). Moderate to bold maltiness supports hop profile, with medium to dark caramel a common presence, bready or toasty possible and background notes of light roast and/or chocolate noticeable in some examples. Generally exhibits clean to moderately fruity ester profile. Moderate alcohol aromatics may be noticeable, but should not be hot, harsh, or solventy.',
            appearance:
              'Medium amber to deep copper or light brown. Moderate-low to medium-sized off-white to light tan head; may have low head retention. Good clarity. Alcohol level and viscosity may present “legs” when glass is swirled.',
            flavor:
              'Medium to high dextrinous malt with a full range of caramel, toffee, dark fruit flavors. Low to medium toasty, bready, or Maillard-rich malty flavors are optional, and can add complexity. Medium-high to high hop bitterness. The malt gives a medium to high sweet impression on the palate, although the finish may be slightly sweet to somewhat dry. Moderate to high hop flavor. Low to moderate fruity esters. The hop flavors are similar to the aroma (citrusy, resiny, tropical, stone fruit, melon, etc.). Alcohol presence may be noticeable, but sharp or solventy alcohol flavors are undesirable. Roasted malt flavors are allowable but should be a background note; burnt malt flavors are inappropriate. While strongly malty on the palate, the finish should seem bitter to bittersweet. Should not be syrupy and under-attenuated. The aftertaste typically has malt, hops, and alcohol noticeable.',
            mouthfeel:
              'Medium to full body. An alcohol warmth may be present, but not be excessively hot. Any astringency present should be attributable to bold hop bitterness and should not be objectionable on the palate. Medium-low to medium carbonation.',
            comments:
              'A fairly broad style that can describe beers labeled in various ways, including modern Double/Imperial Red/Amber Ales and other strong, malty-but-hoppy beers that aren’t quite in the Barleywine class. Diverse enough to include what may be viewed as a strong American Amber Ale with room for more interpretations of other “Imperial” versions of lower gravity American Ale styles. Many “East Coast” type IPAs might fit better in this category if they have considerable crystal malt or otherwise more of a malty-sweet finish.',
            history:
              'While modern craft versions were developed as “imperial” strength versions of American amber or red ales, the style has much in common with historic American stock ales. Strong, malty beers were highly hopped to keep as provision beers prior to prohibition. There is no continuous legacy of brewing stock ales in this manner, but the resemblance is considerable. Stone Arrogant Bastard was born out of a batch of pale ale that was mistakenly made with excess ingredients, thus creating what may have been the prototype for the imperial amber/red ale. Great Lakes first brewed Nosferatu in the early 1990s and called it a stock ale, although they now call it an imperial red ale. So whether by direct historical inspiration or by accident, the style developed independently in the craft beer era and has subsequently become quite popular.',
            ingredients:
              'Well-modified pale malt as a base; some character malts would be appropriate, medium to dark crystal malts are typical. Citrusy or piney American hops are common, although any American or New World varieties can be used in quantity, provided they do not clash with the malt character. Generally uses an attenuative American yeast.',
            comparison:
              'Generally not as strong and as rich as an American Barleywine. More malt balanced than an American or Double IPA with more American hop intensity than an English Strong Ale style would tolerate.',

            vitalStatistics: {
              og: '1.062 - 1.090',
              fg: '1.014 - 1.024',
              abv: '6.3 - 10.0%',
              ibu: '50 - 100',
              srm: '7 - 19'
            }
          },
          commercialExamples: [
            {
              name: 'Bear Republic Red Rocket Ale'
            },
            {
              name: 'Great Lakes Nosferatu'
            },
            {
              name: 'Terrapin Big Hoppy Monster'
            },
            {
              name: 'Port Brewing Shark Attack Double Red'
            },
            {
              name: 'Stone Arrogant Bastard'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'strong-ale-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'American Barleywine',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A well-hopped American interpretation of the richest and strongest of the English ales. The hop character should be evident throughout, but does not have to be unbalanced. The alcohol strength and hop bitterness often combine to leave a very long finish.',
            aroma:
              'Hop character moderate to assertive and often showcases citrusy, fruity, or resiny New World varieties (although other varieties, such as floral, earthy or spicy English varieties or a blend of varieties, may be used). Rich maltiness, with a character that may be sweet, caramelly, bready, or fairly neutral. Low to moderately-strong fruity esters and alcohol aromatics. However, the intensity of aromatics often subsides with age. Hops tend to be nearly equal to malt in the aroma, with alcohol and esters far behind.',
            appearance:
              'Color may range from light amber to medium copper; may rarely be as dark as light brown. Often has ruby highlights. Moderately-low to large off-white to light tan head; may have low head retention. May be cloudy with chill haze at cooler temperatures, but generally clears to good to brilliant clarity as it warms. The color may appear to have great depth, as if viewed through a thick glass lens. High alcohol and viscosity may be visible in “legs” when beer is swirled in a glass.',
            flavor:
              'Strong, rich malt flavor with a noticeable hop flavor and bitterness in the balance. Moderately-low to moderately-high malty sweetness on the palate, although the finish may be somewhat sweet to quite dry (depending on aging). Hop bitterness may range from moderately strong to aggressive. While strongly malty, the balance should always seem bitter. Moderate to high hop flavor (any variety, but often showing a range of New World hop characteristics). Low to moderate fruity esters. Noticeable alcohol presence, but well-integrated. Flavors will smooth out and decline over time, but any oxidized character should be muted (and generally be masked by the hop character). May have some bready or caramelly malt flavors, but these should not be high; roasted or burnt malt flavors are inappropriate.',
            mouthfeel:
              'Full-bodied and chewy, with a velvety, luscious texture (although the body may decline with long conditioning). Alcohol warmth should be noticeable but smooth. Should not be syrupy and under-attenuated. Carbonation may be low to moderate, depending on age and conditioning.',
            comments:
              'Sometimes known as “Barley Wine” or “Barleywine style ale” (the latter due to legal requirements, not brewery preference).',
            history:
              'Usually the strongest ale offered by a brewery, often associated with the winter or holiday season and vintage-dated. As with many American craft beer styles, derived from English examples but using American ingredients and featuring a much more forward hop profile. One of the first American craft beer versions was Anchor Old Foghorn, first brewed in 1975. Sierra Nevada Bigfoot, first brewed in 1983, set the standard for the hop-forward style of today. The story goes that when Sierra Nevada first sent Bigfoot out for lab analysis, the lab called and said, “your barleywine is too bitter” – to which Sierra Nevada replied, “thank you.”',
            ingredients:
              'Well-modified pale malt should form the backbone of the grist. Some specialty or character malts may be used. Dark malts should be used with great restraint, if at all, as most of the color arises from a lengthy boil. New World hops are common, although any varieties can be used in quantity. Generally uses an attenuative American ale yeast.',
            comparison:
              'The American version of the Barleywine tends to have a greater emphasis on hop bitterness, flavor and aroma than the English Barleywine, and often features American hop varieties. Typically paler than the darker English Barleywines (and lacking in the deeper malt flavors) but darker than the golden English Barleywines. Differs from a Double IPA in that the hops are not extreme, the malt is more forward, and the body is fuller and often richer. An American Barleywine typically has more residual sweetness than a Double IPA, which affects the overall drinkability (sipping vs. drinking).',

            vitalStatistics: {
              og: '1.080 - 1.120',
              fg: '1.016 - 1.030',
              abv: '8.0 - 12.0%',
              ibu: '50 - 100',
              srm: '10 - 19'
            }
          },
          commercialExamples: [
            {
              name: 'Avery Hog Heaven Barleywine'
            },
            {
              name: 'Anchor Old Foghorn'
            },
            {
              name: 'Great Divide Old Ruffian'
            },
            {
              name: 'Rogue Old Crustacean'
            },
            {
              name: 'Sierra Nevada Bigfoot'
            },
            {
              name: 'Victory Old Horizontal'
            }
          ],
          tags: [
            {
              tag: 'very-high-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'strong-ale-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'Wheatwine',
          letter: 'D',
          guidelines: {
            overallImpression:
              'A richly textured, high alcohol sipping beer with a significant grainy, bready flavor and sleek body. The emphasis is first on the bready, wheaty flavors with interesting complexity from malt, hops, fruity yeast character and alcohol complexity.',
            aroma:
              'Hop aroma is mild and can represent just about any late hop aromatic. Moderate to moderately-strong bready, wheaty malt character, often with additional malt complexity such as honey and caramel. A light, clean, alcohol aroma may noted. Low to medium fruity notes may be apparent. Very low levels of diacetyl are acceptable but not required. Weizen yeast character (banana/clove) is inappropriate.',
            appearance:
              'Color ranges from gold to deep amber, often with garnet or ruby highlights. Low to medium off-white head. The head may have creamy texture, and good retention. Chill haze is allowable, but usually clears up as the beer gets warmer. High alcohol and viscosity may be visible in “legs” when beer is swirled in a glass.',
            flavor:
              'Moderate to moderately-high wheaty malt flavor, dominant in the flavor balance over any hop character. Low to moderate bready, toasty, caramel, or honey malt notes are a welcome complexity note, although not required. Hop flavor is low to medium, and can reflect any variety. Moderate to moderately-high fruitiness, often with a dried-fruit character. Hop bitterness may range from low to moderate; balance therefore ranges from malty to evenly balanced. Should not be syrupy and under-attenuated. Some oxidative or vinous flavors may be present, as are light alcohol notes that are clean and smooth but complex. A complementary, supportive oak character is welcome, but not required.',
            mouthfeel:
              'Medium-full to full bodied and chewy, often with a luscious, velvety texture. Low to moderate carbonation. Light to moderate smooth alcohol warming may also be present.',
            comments:
              'Dark malts should be used with restraint. Much of the color arises from a lengthy boil. Some commercial examples may be larger than the Vital Statistics, and some may not be brewed every year.',
            history:
              'A relatively recent American craft beer style that was first brewed at the Rubicon Brewing Company in 1988. Often a winter seasonal, vintage, or one-off release. Breweries frequently experiment with this style, leading to a range of interpretations.',
            ingredients:
              'Typically brewed with a combination of American two-row and American wheat. Style commonly uses 50% or more wheat malt. Any variety of hops may be used. May be oak-aged.',
            comparison:
              'More than simply a wheat-based barleywine, many versions have very expressive fruity and hoppy notes, while others develop complexity through oak aging. Less emphasis on the hops than American Barleywine. Has roots in American Wheat Beer rather than any German wheat styles, so should not have any German weizen yeast character.',

            vitalStatistics: {
              og: '1.080 - 1.120',
              fg: '1.016 - 1.030',
              abv: '8.0 - 12.0%',
              ibu: '30 - 60',
              srm: '8 - 15'
            }
          },
          commercialExamples: [
            {
              name: 'Rubicon Winter Wheat Wine'
            },
            {
              name: 'Two Brothers Bare Trees Weiss Wine'
            },
            {
              name: 'Smuttynose Wheat Wine'
            },
            {
              name: 'Portsmouth Wheat Wine'
            }
          ],
          tags: [
            {
              tag: 'very-high-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'strong-ale-family'
            },
            {
              tag: 'wheat-beer-family'
            },
            {
              tag: 'balanced'
            },
            {
              tag: 'hoppy'
            }
          ]
        }
      ]
    },
    {
      name: 'European Sour Ale',
      number: 23,
      subcategories: [
        {
          name: 'Berliner Weisse',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A very pale, refreshing, low-alcohol German wheat beer with a clean lactic sourness and a very high carbonation level. A light bread dough malt flavor supports the sourness, which shouldn’t seem artificial. Any Brettanomyces funk is restrained.',
            aroma:
              'A sharply sour character is dominant (moderate to moderately-high). Can have up to a moderately fruity character (often lemony or tart apple). The fruitiness may increase with age and a light flowery character may develop. No hop aroma. The wheat may present as uncooked bread dough in fresher versions; combined with the acidity, may suggest sourdough bread. May optionally have a restrained funky Brettanomyces character.',
            appearance:
              'Very pale straw in color. Clarity ranges from clear to somewhat hazy. Large, dense, white head with poor retention. Always effervescent.',
            flavor:
              'Clean lactic sourness dominates and can be quite strong. Some complementary doughy, bready or grainy wheat flavor is generally noticeable. Hop bitterness is undetectable; sourness provides the balance rather than hops. Never vinegary. A restrained citrusy-lemony or tart apple fruitiness may be detected. Very dry finish. Balance dominated by sourness, but some malt flavor should be present. No hop flavor. May optionally have a restrained funky Brettanomyces character.',
            mouthfeel:
              'Light body. Very high carbonation. No sensation of alcohol. Crisp, juicy acidity.',
            comments:
              'In Germany, it is classified as a Schankbier denoting a small beer of starting gravity in the range 7-8 °P. Often served with the addition of a shot of sugar syrups (mit schuss) flavored with raspberry (himbeer), woodruff (waldmeister), or Caraway schnapps (Kümmel) to counter the substantial sourness. Has been described by some as the most purely refreshing beer in the world.',
            history:
              "A regional specialty of Berlin; referred to by Napoleon's troops in 1809 as “the Champagne of the North” due to its lively and elegant character. At one point, it was smoked and there used to be Märzen-strength (14 °P) version. Increasingly rare in German, but some American craft breweries now regularly produce the style.",
            ingredients:
              'Wheat malt content is typically 50% of the grist (as is tradition with all German wheat beers) with the remainder typically being Pilsner malt. A symbiotic fermentation with top-fermenting yeast and Lactobacillus (various strains) provides the sharp sourness, which may be enhanced by blending of beers of different ages during fermentation and by extended cool aging. Hop bitterness is non-existent. Decoction mashing with mash hopping is traditional. German brewing scientists believe that Brettanomyces is essential to get the correct flavor profile, but this character is never strong.',
            comparison:
              'Compared to a lambic, is generally not as acidic and has a clean lactic sourness with restrained to below sensory threshold funk. Also lower in alcohol content.',

            vitalStatistics: {
              og: '1.028 - 1.032',
              fg: '1.003 - 1.006',
              abv: '2.8 - 3.8%',
              ibu: '3 - 8',
              srm: '2 - 3'
            }
          },
          commercialExamples: [
            {
              name: 'Bayerischer Bahnhof Berliner Style Weisse'
            },
            {
              name: 'Berliner Kindl Weisse'
            },
            {
              name: 'Nodding Head Berliner Weisse'
            },
            {
              name: 'The Bruery Hottenroth'
            }
          ],
          tags: [
            {
              tag: 'session-beer'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'wheat-beer-family'
            },
            {
              tag: 'sour'
            }
          ]
        },
        {
          name: 'Flanders Red Ale',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A sour, fruity, red wine-like Belgian-style ale with interesting supportive malt flavors and fruit complexity. The dry finish and tannin completes the mental image of a fine red wine.',
            aroma:
              'Complex fruity-sour profile with supporting malt that often gives a wine-like impression. Fruitiness is high, and reminiscent of black cherries, oranges, plums or red currants. There are often low to medium-low vanilla and/or chocolate notes. Spicy phenols can be present in low amounts for complexity. The sour aroma ranges from balanced to intense. Prominent vinegary acetic character is inappropriate. No hop aroma. Diacetyl is perceived only in very minor quantities, if at all, as a complementary aroma.',
            appearance:
              'Deep red, burgundy to reddish-brown in color. Good clarity. White to very pale tan head. Average to good head retention.',
            flavor:
              'Intense fruitiness commonly includes plum, orange, black cherry or red currant flavors. A mild vanilla and/or chocolate character is often present. Spicy phenols can be present in low amounts for complexity. Sour flavor ranges from complementary to intense, and can have an acidic bite. Malty flavors range from complementary to prominent, and often have a soft toasty-rich quality. Generally as the sour character increases, the malt character blends to more of a background flavor (and vice versa). No hop flavor. Restrained hop bitterness. An acidic, tannic bitterness is often present in low to moderate amounts, and adds an aged red wine-like character and finish. Prominent vinegary acetic character is inappropriate. Diacetyl is perceived only in very minor quantities, if at all, as a complementary flavor. Balanced to the malt side, but dominated by the fruity, sour, wine-like impression.',
            mouthfeel:
              'Medium bodied. Low to medium carbonation. Low to medium astringency, like a well-aged red wine, often with a prickly acidity. Deceivingly light and crisp on the palate although a somewhat sweet finish is not uncommon.',
            comments:
              'Long aging and blending of young and well-aged beer often occurs, adding to the smoothness and complexity, though the aged product is sometimes released as a connoisseur’s beer. Known as the Burgundy of Belgium, it is more wine-like than any other beer style. The reddish color is a product of the malt although an extended, less-than-rolling portion of the boil may help add an attractive Burgundy hue. Aging will also darken the beer. The Flanders red is more acetic (but never vinegar-like) and the fruity flavors more reminiscent of a red wine than an Oud Bruin. Can have an apparent attenuation of up to 98%.',
            history:
              'An indigenous beer of West Flanders, typified by the products of the Rodenbach brewery, established in 1820 in West Flanders but reflective of earlier brewing traditions. The beer is aged for up to two years, often in huge oaken barrels which contain the resident bacteria necessary to sour the beer. It was once common in Belgium and England to blend old beer with young to balance the sourness and acidity found in aged beer. While blending of batches for consistency is now common among larger breweries, this type of blending is a fading art.',
            ingredients:
              'A base of Vienna and/or Munich malts, light to medium cara-malts, and a small amount of Special B are used with up to 20% maize. Low alpha acid continental hops are commonly used (avoid high alpha or distinctive American hops). Saccharomyces, Lactobacillus and Brettanomyces (and acetobacter) contribute to the fermentation and eventual flavor.',
            comparison:
              'Less malty-rich than an Oud Bruin, often with more of a fruity-tart profile.',

            vitalStatistics: {
              og: '1.048 - 1.057',
              fg: '1.002 - 1.012',
              abv: '4.6 - 6.5%',
              ibu: '10 - 25',
              srm: '10 - 16'
            }
          },
          commercialExamples: [
            {
              name: 'Cuvée des Jacobins Rouge'
            },
            {
              name: 'Duchesse de Bourgogne'
            },
            {
              name: 'Rodenbach Grand Cru'
            },
            {
              name: 'Rodenbach Klassiek'
            },
            {
              name: 'Vichtenaar Flemish Ale'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermenting'
            },
            {
              tag: 'western-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'sour-ale-family'
            },
            {
              tag: 'balanced'
            },
            {
              tag: 'sour'
            },
            {
              tag: 'wood'
            }
          ]
        },
        {
          name: 'Oud Bruin',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A malty, fruity, aged, somewhat sour Belgian-style brown ale.',
            aroma:
              'Complex combination of fruity esters and rich malt character. Medium to medium-high esters commonly reminiscent of raisins, plums, figs, dates, black cherries or prunes. Medium low to medium high malt character of caramel, toffee, orange, treacle or chocolate. Spicy phenols can be present in low amounts for complexity. A sherry-like character may be present and generally denotes an aged example. A low sour aroma may be present, and can modestly increase with age but should not grow to a noticeable acetic/vinegary character. Hop aroma absent. Diacetyl is perceived only in very minor quantities, if at all, as a complementary aroma.',
            appearance:
              'Dark reddish-brown to brown in color. Good clarity. Average to good head retention. Ivory to light tan head color.',
            flavor:
              'Malty with fruity complexity and typically some caramel character. Medium to medium-high fruitiness commonly includes dark or dried fruit such as raisins, plums, figs, dates, black cherries or prunes. Medium low to medium high malt character of caramel, toffee, orange, treacle or chocolate. Spicy phenols can be present in low amounts for complexity. A slight sourness often becomes more pronounced in well-aged examples, along with some sherry-like character, producing a “sweet-and-sour” profile. The sourness should not grow to a notable acetic/vinegary character. Hop flavor absent. Restrained hop bitterness. Low oxidation is appropriate as a point of complexity. Diacetyl is perceived only in very minor quantities, if at all, as a complementary flavor. Balance is malty, but with fruitiness and sourness present. Sweet and tart finish',
            mouthfeel:
              'Medium to medium-full body. Low to moderate carbonation. No astringency.',
            comments:
              'Long aging and blending of young and aged beer may occur, adding smoothness and complexity and balancing any harsh, sour character. This style was designed to lay down so examples with a moderate aged character are considered superior to younger examples. As in fruit lambics, Oud Bruin can be used as a base for fruit-flavored beers such as kriek (cherries) or frambozen (raspberries), though these should be entered in the Classic-Style Fruit Beer category. ',
            history:
              'An “old ale” tradition, indigenous to East Flanders, typified by the products of the Liefman brewery (now owned by Riva), which has roots back to the 1600s. Historically brewed as a “provision beer” that would develop some sourness as it aged. These beers were typically more sour than current commercial examples. While Flanders red beers are aged in oak, the brown beers are warm aged in stainless steel.',
            ingredients:
              'A base of Pils malt with judicious amounts of dark cara malts and a tiny bit of black or roast malt. Often includes maize. Low alpha acid continental hops are typical (avoid high alpha or distinctive American hops). Saccharomyces and Lactobacillus (and acetobacter) contribute to the fermentation and eventual flavor. Lactobacillus reacts poorly to elevated levels of alcohol. Water high in carbonates is typical of its home region and will buffer the acidity of darker malts and the lactic sourness. Magnesium in the water accentuates the sourness.',
            comparison:
              'A deeper malt character distinguishes these beers from Flanders red ales. The Oud Bruin is less acetic and maltier than a Flanders Red, and the fruity flavors are more malt-oriented.',

            vitalStatistics: {
              og: '1.040 - 1.074',
              fg: '1.008 - 1.012',
              abv: '4.0 - 8.0%',
              ibu: '20 - 25',
              srm: '15 - 22'
            }
          },
          commercialExamples: [
            {
              name: 'Ichtegem Oud Bruin'
            },
            {
              name: 'Liefmans Goudenband'
            },
            {
              name: 'Liefmans Liefmans Oud Bruin'
            },
            {
              name: 'Petrus Oud Bruin'
            },
            {
              name: 'Riva Vondel'
            },
            {
              name: 'Vanderghinste Bellegems Bruin'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'western-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'sour-ale-family'
            },
            {
              tag: 'malty'
            },
            {
              tag: 'sour'
            }
          ]
        },
        {
          name: 'Lambic',
          letter: 'D',
          guidelines: {
            overallImpression:
              'A fairly sour, often moderately funky wild Belgian wheat beer with sourness taking the place of hop bitterness in the balance. Traditionally spontaneously fermented in the Brussels area and served uncarbonated, the refreshing acidity makes for a very pleasant café drink.',
            aroma:
              'A decidedly sour aroma is often dominant in young examples, but may become more subdued with age as it blends with aromas described as barnyard, earthy, goaty, hay, horsey, and horse blanket. A mild citrus-fruity aroma is considered favorable. An enteric, smoky, cigar-like, or cheesy aroma is unfavorable. Older versions are commonly fruity with aromas of apples or even honey. No hop aroma.',
            appearance:
              'Pale yellow to deep golden in color; age tends to darken the beer. Clarity is hazy to good. Younger versions are often cloudy, while older ones are generally clear. White colored head generally has poor retention.',
            flavor:
              'Young examples are often noticeably lactic-sour, but aging can bring this character more in balance with the malt, wheat and barnyard characteristics. Fruity flavors are simpler in young lambics and more complex in the older examples, where they are reminiscent of apples or other light fruits, rhubarb, or honey. Some citrus flavor (often grapefruit) is occasionally noticeable, and is desirable. The malt and wheat character are typically low with some bready-grainy notes. An enteric, smoky or cigar-like character is undesirable. Hop bitterness is low to none, and generally undetectable; sourness provides the balance. Typically has a dry finish. No hop flavor.',
            mouthfeel:
              'Light to medium-light body. In spite of the low finishing gravity, the many mouth-filling flavors prevent the beer from feeling like water. As a rule of thumb, lambic dries with age, which makes dryness a reasonable indicator of age. Has a medium to high tart, puckering quality without being sharply astringent. Traditional versions are virtually to completely uncarbonated, but bottled examples can pick up moderate carbonation with age.',
            comments:
              'Straight lambics are single-batch, unblended beers. Since they are unblended, the straight lambic is often a true product of the “house character” of a brewery and will be more variable than a gueuze. They are generally served young (6 months) and on tap as cheap, easy-drinking beers without any filling carbonation. Younger versions tend to be one-dimensionally sour since a complex Brett character often takes upwards of a year to develop. An enteric character is often indicative of a lambic that is too young. A noticeable vinegary or cidery character is considered a fault by Belgian brewers. Since the wild yeast and bacteria will ferment ALL sugars, they are typically bottled only when they have completely fermented.',
            history:
              'Spontaneously fermented wild ales from the area in and around Brussels (the Senne Valley) stem from a farmhouse brewing tradition several centuries old. The number of producers is constantly dwindling.',
            ingredients:
              'Unmalted wheat (30-40%), Pilsner malt and aged hops (3 years) are used. The aged hops are used more for preservative effects than bitterness, and makes actual bitterness levels difficult to estimate. Traditionally these beers are spontaneously fermented with naturally occurring yeast and bacteria in predominately oaken barrels. The barrels used are neutral with little oak character, so don’t expect a fresh or forward oak character – more neutral is typical. Home-brewed and craft-brewed versions are more typically made with pure cultures of yeast commonly including Saccharomyces, Brettanomyces, Pediococcus and Lactobacillus in an attempt to recreate the effects of the dominant microbiota of Brussels and the surrounding countryside of the Senne River valley. Cultures taken from bottles are sometimes used but there is no simple way of knowing what organisms are still viable.',
            comparison:
              'Generally has a more simple sourness and complexity than a gueuze. Traditionally served uncarbonated from pitchers, while gueuze is bottled and very highly carbonated.',

            vitalStatistics: {
              og: '1.040 - 1.054',
              fg: '1.001 - 1.010',
              abv: '5.0 - 6.5%',
              ibu: '0 - 10',
              srm: '3 - 7'
            }
          },
          commercialExamples: [
            {
              name:
                'The only bottled version readily available is Cantillon Grand Cru Bruocsella of whatever single batch vintage the brewer deems worthy to bottle. De Cam sometimes bottles their very old (5 years) lambic. In and around Brussels there are specialty cafes that often have draught lambics from traditional brewers or blenders such as Boon, De Cam, Cantillon, Drie Fonteinen, Lindemans, Timmermans and Girardin.'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'wild-fermented'
            },
            {
              tag: 'western-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'wheat-beer-family'
            },
            {
              tag: 'sour'
            }
          ]
        },
        {
          name: 'Gueuze',
          letter: 'E',
          guidelines: {
            overallImpression:
              'A complex, pleasantly sour but balanced wild Belgian wheat beer that is highly carbonated and very refreshing. The spontaneous fermentation character can provide a very interesting complexity, with a wide range of wild barnyard, horse blanket, or leather characteristics intermingling with citrusy-fruity flavors and acidity.',
            aroma:
              'A moderately sour aroma blends with aromas described as barnyard, leather, earthy, goaty, hay, horsey, and horse blanket. While some may be more dominantly sour, balance is the key and denotes a better gueuze. Commonly fruity with aromas of citrus fruits (often grapefruit), apples or other light fruits, rhubarb, or honey. A very mild oak aroma is considered favorable. An enteric, smoky, cigar-like, or cheesy aroma is unfavorable. No hop aroma.',
            appearance:
              'Golden color, with excellent clarity and a thick, rocky, mousse-like, white head that seems to last forever. Always effervescent.',
            flavor:
              'A moderately sour character is classically in balance with the malt, wheat and barnyard characteristics. A low, complementary sweetness may be present but higher levels are not traditional. While some may be more dominantly sour, balance is the key and denotes a better gueuze. A varied fruit flavor is common, and can have a honey-like character. A mild vanilla and/or oak flavor is occasionally noticeable. The malt is generally low and bready-grainy. An enteric, smoky or cigar-like character is undesirable. Hop bitterness is generally absent but a very low hop bitterness may occasionally be perceived; sourness provides most of the balance. Crisp, dry, and tart finish. No hop flavor.',
            mouthfeel:
              'Light to medium-light body. In spite of the low finishing gravity, the many mouth-filling flavors prevent the beer from feeling like water. Has a low to high tart, puckering quality without being sharply astringent. Some versions have a light warming character. Highly carbonated.',
            comments:
              'Gueuze is traditionally produced by mixing one, two, and three-year old lambic. “Young” lambic contains fermentable sugars while old lambic has the characteristic “wild” taste of the Senne River valley. A noticeable vinegary or cidery character is considered a fault by Belgian brewers. A good gueuze is not the most pungent, but possesses a full and tantalizing bouquet, a sharp aroma, and a soft, velvety flavor. Lambic is served uncarbonated, while gueuze is served effervescent. Products marked oude or ville are considered most traditional.',
            history:
              'Spontaneously fermented wild ales from the area in and around Brussels (the Senne Valley) stem from a farmhouse brewing and blending tradition several centuries old. The number of producers is constantly dwindling and some producers are untraditionally sweetening their products (post-fermentation) to make them more palatable to a wider audience. These guidelines describe the traditional dry product.',
            ingredients:
              'Unmalted wheat (30-40%), Pilsner malt and aged hops (3 years) are used. The aged hops are used more for preservative effects than bitterness, and makes actual bitterness levels difficult to estimate. Traditionally these beers are spontaneously fermented with naturally occurring yeast and bacteria in predominately oaken barrels. The barrels used are old and have little oak character, so don’t expect a fresh or forward oak character – more neutral is typical. Home-brewed and craft-brewed versions are more typically made with pure cultures of yeast commonly including Saccharomyces, Brettanomyces, Pediococcus and Lactobacillus in an attempt to recreate the effects of the dominant microbiota of Brussels and the surrounding countryside of the Senne River valley. Cultures taken from bottles are sometimes used but there is no simple way of knowing what organisms are still viable.',
            comparison:
              'More complex and carbonated than a lambic. The sourness isn’t necessarily higher, but it tends to have more of a well-developed wild character.',

            vitalStatistics: {
              og: '1.040 - 1.060',
              fg: '1.000 - 1.006',
              abv: '5.0 - 8.0%',
              ibu: '0 - 10',
              srm: '3 - 7'
            }
          },
          commercialExamples: [
            {
              name: 'Boon Oude Gueuze'
            },
            {
              name: 'Boon Oude Gueuze Mariage Parfait'
            },
            {
              name: 'Cantillon Gueuze'
            },
            {
              name: 'De Cam Gueuze'
            },
            {
              name: 'De Cam/Drei Fonteinen Millennium Gueuze'
            },
            {
              name: 'Drie Fonteinen Oud Gueuze'
            },
            {
              name: 'Girardin Gueuze (Black Label)'
            },
            {
              name: 'Hanssens Oude Gueuze'
            },
            {
              name: 'Lindemans Gueuze Cuvée René'
            },
            {
              name: 'Mort Subite (Unfiltered) Gueuze'
            },
            {
              name: 'Oud Beersel Oude Gueuze'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'wild-fermented'
            },
            {
              tag: 'western-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'wheat-beer-family'
            },
            {
              tag: 'aged'
            },
            {
              tag: 'sour'
            }
          ]
        },
        {
          name: 'Fruit Lambic',
          letter: 'F',
          guidelines: {
            overallImpression:
              'A complex, fruity, pleasantly sour, wild wheat ale fermented by a variety of Belgian microbiota, and showcasing the fruit contributions blended with the wild character. The type of fruit can sometimes be hard to identify as fermented and aged fruit characteristics can seem different from the more recognizable fresh fruit aromas and flavors.',
            aroma:
              'The specified fruit should be the dominant aroma. A low to moderately sour character blends with aromas described as barnyard, earthy, goaty, hay, horsey, and horse blanket (and thus should be recognizable as a lambic). The fruit aroma commonly blends well with the other aromas. An enteric, smoky, cigar-like, or cheesy aroma is unfavorable. No hop aroma.',
            appearance:
              'The variety of fruit generally determines the color, although lighter-colored fruit may have little effect on the color. The color intensity may fade with age. Clarity is often good, although some fruit will not drop bright. A thick rocky, mousse-like head, sometimes a shade of fruit, is generally long-lasting (carbonation-dependent). Carbonation is typically high, but must be specified.',
            flavor:
              'The specified fruit should be evident. Low to moderately sour flavor, often with an acidic bite in the finish. The classic barnyard characteristics may be low to high. When young, the beer will present its full fruity taste. As it ages, the lambic taste will become dominant at the expense of the fruit character—thus fruit lambics are not intended for long aging. The finish is commonly dry and tart, but a low, complementary sweetness may be present; higher sweetness levels are not traditional but can be included for personal preference (sweetness level must be specified). A mild vanilla and/or oak flavor is occasionally noticeable. An enteric, smoky or cigar-like character is undesirable. Hop bitterness is generally absent; acidity provides the balance. No hop flavor.',
            mouthfeel:
              'Light to medium-light body. In spite of the low finishing gravity, the many mouth-filling flavors prevent the beer from tasting like water. Has a low to high tart, puckering quality without being sharply astringent. Some versions have a light warming character. Carbonation can vary from sparkling to nearly still (must be specified).',
            comments:
              'Fruit-based lambics are often produced like gueuze by mixing one, two, and three-year old lambic. “Young” lambic contains fermentable sugars while old lambic has the characteristic “wild” taste of the Senne River valley. Fruit is commonly added halfway through aging and the yeast and bacteria will ferment all sugars from the fruit. Fruit may also be added to unblended lambic. The most traditional styles of fruit lambics include kriek (cherries), framboise (raspberries) and druivenlambik (muscat grapes). IBUs are approximate since aged hops are used; Belgians use hops for anti-bacterial properties more than bittering in lambics.',
            history:
              'Spontaneously fermented wild ales from the area in and around Brussels (the Senne Valley) stem from a farmhouse brewing and blending tradition several centuries old. The number of producers is constantly dwindling and some are untraditionally sweetening their products (post-fermentation) with sugar or sweet fruit to make them more palatable to a wider audience. Fruit was traditionally added to lambic or gueuze, either by the blender or publican, to increase the variety of beers available in local cafes.',
            ingredients:
              'Unmalted wheat (30-40%), Pilsner malt and aged hops (3 years) are used. The aged hops are used more for preservative effects than bitterness, and makes actual bitterness levels difficult to estimate. Traditional products use 10-30% fruit (25%, if cherry). Fruits traditionally used include tart cherries (with pits), raspberries or Muscat grapes. More recent examples include peaches, apricots or merlot grapes. Tart or acidic fruit is traditionally used as its purpose is not to sweeten the beer but to add a new dimension. Traditionally these beers are spontaneously fermented with naturally occurring yeast and bacteria in predominately oaken barrels. The barrels used are old and have little oak character, so don’t expect a fresh or forward oak character – more neutral is typical. Home-brewed and craft-brewed versions are more typically made with pure cultures of yeast commonly including Saccharomyces, Brettanomyces, Pediococcus and Lactobacillus in an attempt to recreate the effects of the dominant microbiota of Brussels and the surrounding countryside of the Senne River valley. Cultures taken from bottles are sometimes used but there is no simple way of knowing what organisms are still viable.',
            comparison:
              'A lambic with fruit, not just a fruit beer; the wild lambic character must be evident.',
            instruction:
              'The type of fruit used must be specified. The brewer must declare a carbonation level (low, medium, high) and a sweetness level (low/none, medium, high). ',
            vitalStatistics: {
              og: '1.040 - 1.060',
              fg: '1.000 - 1.010',
              abv: '5.0 - 7.0%',
              ibu: '0 - 10',
              srm: '3 - 7'
            }
          },
          commercialExamples: [
            {
              name: 'Boon Framboise Marriage Parfait'
            },
            {
              name: 'Boon Kriek Mariage Parfait'
            },
            {
              name: 'Boon Oude Kriek'
            },
            {
              name: 'Cantillon Fou’ Foune'
            },
            {
              name: 'Cantillon Kriek'
            },
            {
              name: 'Cantillon Lou Pepe Kriek'
            },
            {
              name: 'Cantillon Lou Pepe Framboise'
            },
            {
              name: 'Cantillon Rose de Gambrinus'
            },
            {
              name: 'Cantillon St. Lamvinus'
            },
            {
              name: 'Cantillon Vigneronne'
            },
            {
              name: 'De Cam Oude Kriek'
            },
            {
              name: 'Drie Fonteinen Kriek'
            },
            {
              name: 'Girardin Kriek'
            },
            {
              name: 'Hanssens Oude Kriek'
            },
            {
              name: 'Oud Beersel Kriek'
            },
            {
              name: 'Mort Subite Kriek'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'wild-fermented'
            },
            {
              tag: 'western-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'wheat-beer-family'
            },
            {
              tag: 'sour'
            },
            {
              tag: 'fruit'
            }
          ]
        }
      ]
    },
    {
      name: 'Belgian Ale',
      number: 24,
      subcategories: [
        {
          name: 'Witbier',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A refreshing, elegant, tasty, moderate-strength wheat-based ale.',
            aroma:
              'Moderate malty sweetness (often with light notes of honey and/or vanilla) with light, grainy, spicy wheat aromatics, often with a bit of tartness. Moderate perfumy coriander, often with a complex herbal, spicy, or peppery note in the background. Moderate zesty, citrusy-orangey fruitiness. A low spicy-herbal hop aroma is optional, but should never overpower the other characteristics. Vegetal, celery-like, or ham-like aromas are inappropriate. Spices should blend in with fruity, floral and sweet aromas and should not be overly strong.',
            appearance:
              'Very pale straw to very light gold in color. The beer will be very cloudy from starch haze and/or yeast, which gives it a milky, whitish-yellow appearance. Dense, white, moussy head. Head retention should be quite good.',
            flavor:
              'Pleasant malty-sweet grain flavor (often with a honey and/or vanilla character) and a zesty, orange-citrusy fruitiness. Refreshingly crisp with a dry, often tart, finish. Can have a low bready wheat flavor. Optionally has a very light lactic-tasting sourness. Herbal-spicy flavors, which may include coriander and other spices, are common should be subtle and balanced, not overpowering. A spicy-earthy hop flavor is low to none, and if noticeable, never gets in the way of the spices. Hop bitterness is low to medium-low, and doesn’t interfere with refreshing flavors of fruit and spice, nor does it persist into the finish. Bitterness from orange pith should not be present. Vegetal, celery-like, ham-like, or soapy flavors are inappropriate. ',
            mouthfeel:
              'Medium-light to medium body, often having a smoothness and light creaminess from unmalted wheat and the occasional oats. Despite body and creaminess, finishes dry and often a bit tart. Effervescent character from high carbonation. Refreshing, from carbonation, light acidity, and lack of bitterness in finish. No harshness or astringency from orange pith. Should not be overly dry and thin, nor should it be thick and heavy.',
            comments:
              'The presence, character and degree of spicing and lactic sourness varies. Overly spiced and/or sour beers are not good examples of the style. Coriander of certain origins might give an inappropriate ham or celery character. The beer tends to be fragile and does not age well, so younger, fresher, properly handled examples are most desirable. Most examples seem to be approximately 5% ABV.',
            history:
              'A 400-year-old Belgian beer style that died out in the 1950s; it was later revived by Pierre Celis at Hoegaarden, and has grown steadily in popularity over time, both with modern craft brewers and mass-market producers who see it as a somewhat fruity summer seasonal beer.',
            ingredients:
              'About 50% unmalted wheat and 50% pale barley malt (usually Pils malt) constitute the grist. In some versions, up to 5-10% raw oats may be used. Spices of freshly-ground coriander and Curaçao or sometimes sweet orange peel complement the sweet aroma and are quite characteristic. Other spices (e.g., chamomile, cumin, cinnamon, Grains of Paradise) may be used for complexity but are much less prominent. Ale yeast prone to the production of mild, spicy flavors is very characteristic. In some instances a very limited lactic fermentation, or the actual addition of lactic acid, is done.',
            comparison:
              'Low bitterness level with a balance similar to a Weissbier, but with spice and citrus character coming from additions rather than the yeast.',

            vitalStatistics: {
              og: '1.044 - 1.052',
              fg: '1.008 - 1.012',
              abv: '4.5 - 5.5%',
              ibu: '8 - 20',
              srm: '2 - 4'
            }
          },
          commercialExamples: [
            {
              name: 'Allagash White'
            },
            {
              name: 'Blanche de Bruxelles'
            },
            {
              name: 'Celis White'
            },
            {
              name: 'Hoegaarden Wit'
            },
            {
              name: 'Ommegang Witte'
            },
            {
              name: 'St. Bernardus Witbier, Wittekerke'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'western-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'wheat-beer-family'
            },
            {
              tag: 'spice'
            }
          ]
        },
        {
          name: 'Belgian Pale Ale',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A moderately malty, somewhat fruity, easy-drinking, copper-colored Belgian ale that is somewhat less aggressive in flavor profile than many other Belgian beers. The malt character tends to be a bit biscuity with light toasty, honey-like, or caramelly components; the fruit character is noticeable and complementary to the malt. The bitterness level is generally moderate, but may not seem as high due to the flavorful malt profile.',
            aroma:
              'Moderate malt aroma, which can be a combination of toasty, biscuity, or nutty, possibly with a touch of light caramel or honey. Moderate to moderately high fruitiness with an orange- or pear-like character. Low to moderate strength hop character (spicy, herbal, or floral) optionally blended with background level peppery, spicy phenols. The hop character is lower in balance than the malt and fruitiness.',
            appearance:
              'Amber to copper in color. Clarity is very good. Creamy, rocky, white head often fades more quickly than other Belgian beers.',
            flavor:
              'Has an initial soft, smooth, moderately malty flavor with a variable profile of toasty, biscuity, nutty, light caramel and/or honey notes. Moderate to moderately high fruitiness, sometimes orange- or pear-like. Relatively light (medium-low to low) spicy, herbal, or floral hop character. The hop bitterness is medium-high to medium-low, and is optionally enhanced by low to very low amounts of peppery phenols. There is a dry to balanced finish, with hops becoming more pronounced in the aftertaste of those with a drier finish. Fairly well balanced overall, with no single component being high in intensity; malt and fruitiness are more forward initially with a supportive bitterness and drying character coming on late.',
            mouthfeel:
              'Medium to medium-light body. Smooth palate. Alcohol level is restrained, and any warming character should be low if present. Medium to medium-high carbonation.',
            comments:
              'Most commonly found in the Flemish provinces of Antwerp and Brabant. Considered “everyday” beers (Category I). Compared to their higher alcohol Category S cousins, they are Belgian “session beers” for ease of drinking. Nothing should be too pronounced or dominant; balance is the key. Yeast character generally more subtle than many Belgian beers, with some of the fruitiness being hop-driven.',
            history:
              'Produced by breweries with roots as far back as the mid-1700s, the most well-known examples were perfected after the Second World War with some influence from Britain, including hops and yeast strains.',
            ingredients:
              'Pilsner or pale ale malt contributes the bulk of the grist with (cara) Vienna and Munich malts adding color, body and complexity. Sugar is not commonly used as high gravity is not desired. Saazer-type hops, Styrian Goldings, East Kent Goldings or Fuggles are commonly used. Yeasts prone to moderate production of phenols are often used but fermentation temperatures should be kept moderate to limit this character.',
            comparison:
              'Fairly similar to pale ales from England (Strong Bitter category), typically with a slightly different yeast character and a more varied malt profile. Less yeast character than many other Belgian beers, though.',

            vitalStatistics: {
              og: '1.048 - 1.054',
              fg: '1.010 - 1.014',
              abv: '4.8 - 5.5%',
              ibu: '20 - 30',
              srm: '8 - 14'
            }
          },
          commercialExamples: [
            {
              name: 'De Koninck'
            },
            {
              name: 'De Ryck Special'
            },
            {
              name: 'Palm Dobble'
            },
            {
              name: 'Palm Speciale'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'western-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'pale-ale-family'
            },
            {
              tag: 'balanced'
            }
          ]
        },
        {
          name: 'Bière de Garde',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A fairly strong, malt-accentuated, lagered artisanal beer with a range of malt flavors appropriate for the color. All are malty yet dry, with clean flavors and a smooth character.',
            aroma:
              'Prominent malty sweetness, often with a complex, light to moderate intensity toasty-bready-rich malt character. Low to moderate esters. Little to no hop aroma (may be a bit spicy, peppery, or herbal). Paler versions will still be malty but will lack richer, deeper aromatics and may have a bit more hops. Generally quite clean, although stronger versions may have a light, spicy alcohol note as it warms.',
            appearance:
              'Three main variations exist (blond, amber and brown), so color can range from golden-blonde to reddish-bronze to chestnut brown. Clarity is brilliant to fair, although haze is not unexpected in this type of often unfiltered beer. Well-formed head, generally white to off-white (varies by beer color), average persistence.',
            flavor:
              'Medium to high malt flavor often with a toasty-rich, biscuity, toffee-like or light caramel-sweet character. Malt flavors and complexity tend to increase with beer color. Low to moderate esters and alcohol flavors. Medium-low hop bitterness provides some support, but the balance is always tilted toward the malt. Darker versions will have more of an initial malty-sweet impression than paler versions, but all should be malty in the palate and finish. The malt flavor lasts into the finish, which is medium-dry to dry, never cloying. Low to no hop flavor (spicy, peppery, or herbal), although paler versions can have slightly higher levels of herbal or spicy hop flavor (which can also come from the yeast). Smooth, well-lagered character, even if made with ale yeast. Aftertaste of malt (character appropriate for the color) with some dryness and light alcohol.',
            mouthfeel:
              'Medium to medium-light (lean) body, often with a smooth, creamy-silky character. Moderate to high carbonation. Moderate alcohol warming, but should be very smooth and never hot.',
            comments:
              'Three main variations are included in the style: the brown (brune), the blond (blonde), and the amber (ambrée). The darker versions will have more malt character, while the paler versions can have more hops (but still are malt-focused beers). A related style is Bière de Mars, which is brewed in March (Mars) for present use and will not age as well. Attenuation rates are in the 80-85% range. Some fuller-bodied examples exist, but these are somewhat rare. Age and oxidation in imports often increases fruitiness, caramel flavors, and adds corked and musty notes; these are all signs of mishandling, not characteristic elements of the style.',
            history:
              'Name literally means “beer which has been kept or lagered.” A traditional artisanal ale from Northern France brewed in early spring and kept in cold cellars for consumption in warmer weather. It is now brewed year-round.',
            ingredients:
              'The “cellar” character commonly described in literature is more of a feature of mishandled commercial exports than fresh, authentic products. The somewhat moldy character comes from the corks and/or oxidation in commercial versions, and is incorrectly identified as “musty” or “cellar-like.” Base malts vary by beer color, but usually include pale, Vienna and Munich types. Darker versions will have richer malt complexity and sweetness from crystal-type malts. Sugar may be used to add flavor and aid in the dry finish. Lager or ale yeast fermented at cool ale temperatures, followed by long cold conditioning. Floral, herbal or spicy continental hops.',
            comparison:
              'Related to the Belgian Saison style, the main difference is that the Bière de Garde is rounder, richer, malt-focused, and lacks the spicy, bitter character of a Saison.',
            instruction:
              'Entrant must specify blond, amber, or brown bière de garde. If no color is specified, the judge should attempt to judge based on initial observation, expecting a malt flavor and balance that matches the color.',
            vitalStatistics: {
              og: '1.060 - 1.080',
              fg: '1.008 - 1.016',
              abv: '6.0 - 8.5%',
              ibu: '18 - 28',
              srm: '6 - 19'
            }
          },
          commercialExamples: [
            {
              name: 'Ch’Ti (brown and blond)'
            },
            {
              name: 'Jenlain (amber and blond)'
            },
            {
              name: 'La Choulette (all 3 versions)'
            },
            {
              name: 'St. Amand (brown)'
            },
            {
              name: 'Saint Sylvestre 3 Monts (blond)'
            },
            {
              name: 'Russian River Perdition'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'any-fermentation'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'western-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'amber-ale-family'
            },
            {
              tag: 'malty'
            }
          ]
        }
      ]
    },
    {
      name: 'Strong Belgian Ale',
      number: 25,
      subcategories: [
        {
          name: 'Belgian Blond Ale',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A moderate-strength golden ale that has a subtle fruity-spicy Belgian yeast complexity, slightly malty-sweet flavor, and dry finish.',
            aroma:
              'Light earthy or spicy hop nose, along with a lightly grainy-sweet malt character. Shows a subtle yeast character that may include spicy phenolics, perfumy or honey-like alcohol, or yeasty, fruity esters (commonly orange-like or lemony). Light sweetness that may have a slightly sugar-like character. Subtle yet complex.',
            appearance:
              'Light to deep gold color. Generally very clear. Large, dense, and creamy white to off-white head. Good head retention with Belgian lace.',
            flavor:
              'Smooth, light to moderate grainy-sweet malt flavor initially, but finishes medium-dry to dry with some smooth alcohol becoming evident in the aftertaste. Medium hop and alcohol bitterness to balance. Light hop flavor, can be spicy or earthy. Very soft yeast character (esters and alcohols, which are sometimes perfumy or orange/lemon-like). Light spicy phenolics optional. Some lightly caramelized sugar or honey-like sweetness on palate.',
            mouthfeel:
              'Medium-high to high carbonation, can give mouth-filling bubbly sensation. Medium body. Light to moderate alcohol warmth, but smooth. Can be somewhat creamy.',
            comments:
              'Often has an almost lager-like character, which gives it a cleaner profile in comparison to many other Belgian styles. Belgians use the term Blond, while the French spell it Blonde. Most commercial examples are in the 6.5 – 7% ABV range. Many Trappist or artisanal Belgian beers are called Blond but those are not representative of this style.',
            history:
              'Relatively recent development to further appeal to European Pils drinkers, becoming more popular as it is heavily marketed and widely distributed.',
            ingredients:
              'Belgian Pils malt, aromatic malts, sugar, Belgian yeast strains that produce complex alcohol, phenolics and perfumy esters, Saazer-type, Styrian Goldings, or East Kent Goldings hops. Spices are not traditionally used, although the ingredients and fermentation by-products may give an impression of spicing (often reminiscent of oranges or lemons). If spices are present, should be a background character only.',
            comparison:
              'Similar strength as a Dubbel, similar character as a Belgian Strong Golden Ale or Tripel, although a bit sweeter and not as bitter.',

            vitalStatistics: {
              og: '1.062 - 1.075',
              fg: '1.008 - 1.018',
              abv: '6.0 - 7.5%',
              ibu: '15 - 30',
              srm: '4 - 7'
            }
          },
          commercialExamples: [
            {
              name: 'Affligem Blond'
            },
            {
              name: 'Grimbergen Blond'
            },
            {
              name: 'La Trappe Blond'
            },
            {
              name: 'Leffe Blond'
            },
            {
              name: 'Val-Dieu Blond'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'western-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'balanced'
            }
          ]
        },
        {
          name: 'Saison',
          letter: 'B',
          guidelines: {
            overallImpression:
              'Most commonly, a pale, refreshing, highly-attenuated, moderately-bitter, moderate-strength Belgian ale with a very dry finish. Typically highly carbonated, and using non-barley cereal grains and optional spices for complexity, as complements the expressive yeast character that is fruity, spicy, and not overly phenolic. Less common variations include both lower-alcohol and higher-alcohol products, as well as darker versions with additional malt character.',
            aroma:
              'Quite aromatic, with fruity, spicy, and hoppy characteristics evident. The esters can be fairly high (moderate to high), and are often reminiscent of citrus fruits such as oranges or lemons. The hops are low to moderate and are often spicy, floral, earthy, or fruity. Stronger versions can have a soft, spicy alcohol note (low intensity). Spicy notes are typically peppery rather than clove-like, and can be up to moderately-strong (typically yeast-derived). Subtle, complementary herb or spice additions are allowable, but should not dominate. The malt character is typically slightly grainy in character and low in intensity. Darker and stronger versions will have more noticeable malt, with darker versions taking characteristics associated with grains of that color (toasty, biscuity, caramelly, chocolate, etc.). In versions where sourness is present instead of bitterness, some of the sour character can be detected (low to moderate).',
            appearance:
              'Pale versions are often a distinctive pale orange but may be pale golden to amber in color (gold to amber-gold is most common). Darker versions may run from copper to dark brown. Long-lasting, dense, rocky white to ivory head resulting in characteristic Belgian lace on the glass as it fades. Clarity is poor to good, though haze is not unexpected in this type of unfiltered beer. Effervescent.',
            flavor:
              'Medium-low to medium-high fruity and spicy flavors, supported by a low to medium soft malt character, often with some grainy flavors. Bitterness is typically moderate to high, although sourness can be present in place of bitterness (both should not be strong flavors at the same time). Attenuation is extremely high, which gives a characteristic dry finish essential to the style; a Saison should never finish sweet. The fruity character is frequently citrusy (orange or lemon), and the spices are typically peppery. Allow for a range of balance in the fruity-spicy characteristics; this is often driven by the yeast selection. Hop flavor is low to moderate, and generally spicy or earthy in character. The balance is towards the fruity, spicy, hoppy character, with any bitterness or sourness not overwhelming these flavors. Darker versions will have more malt character, with a range of flavors derived from darker malts (toasty, bready, biscuity, chocolate, etc.) that support the fruity-spicy character of the beer (roasted flavors are not typical). Stronger versions will have more malt flavor in general, as well as a light alcohol impression. Herbs and spices are completely optional, but if present should be used in moderation and not detract from the yeast character. The finish is very dry and the aftertaste is typically bitter and spicy. The hop bitterness can be restrained, although it can seem accentuated due to the high attenuation levels.',
            mouthfeel:
              'Light to medium body. Alcohol sensation varies with strength, from none in table version to light in standard versions, to moderate in super versions. However, any warming character should be fairly low. Very high carbonation with an effervescent quality. There is enough prickly acidity on the tongue to balance the very dry finish. In versions with sourness, a low to moderate tart character can add a refreshing bite, but not be puckering (optional).',
            comments:
              'Variations exist in strength and color, but they all have similar characteristics and balance, in particularly the refreshing, highly-attenuated, dry character with high carbonation. There is no correlation between strength and color. The balance can change somewhat with strength and color variations, but the family resemblance to the original artisanal ale should be evident. Pale versions are likely to be more bitter and have more hop character, while darker versions tend to have more malt character and sweetness, yielding a more balanced presentations. Stronger versions often will have more malt flavor, richness, and body simply due to their higher gravity. Although they tend to be very well-attenuated, they may not be perceived to be as dry as standard-strength saisons due to their strength. The Saison yeast character is a must, although maltier and richer versions will tend to mask this character more. Often called Farmhouse ales in the US, but this term is not common in Europe where they are simply part of a larger grouping of artisanal ales.',
            history:
              'A provision ale originally brewed in Wallonia, the French-speaking part of Belgium, for consumption during the active farming season. Originally a lower-alcohol product so as to not debilitate field workers, but tavern-strength products also existed. Higher-strength and different-colored products appeared after WWII. The best known modern saison, Saison Dupont, was first produced in the 1920s. Originally a rustic, artisanal ale made with local farm-produced ingredients, it is now brewed mostly in larger breweries yet retains the image of its humble origins.',
            ingredients:
              'Not typically spiced, with the yeast, hops and grain providing the character; but spices are allowed if they provide a complementary character. Continental base malts are typical, but the grist frequently contains other grains such as wheat, oats, rye, or spelt. Adjuncts such as sugar and honey can also serve to add complexity and dry out the beer. Darker versions will typically use richer, darker malts, but not typically roasted types. Saazer-type, Styrian or East Kent Golding hops are commonly used. A wide range of herbs or spices can add complexity and uniqueness, but should always meld well with the yeast and hop character. Brettanomyces is not typical for this style; Saisons with Brett should be entered in the American Wild Ale category.',
            comparison:
              'At standard strengths and pale color (the most common variety), like a more highly-attenuated, hoppy, and bitter Belgian blond ale with a stronger yeast character. At super strength and pale color, similar to a Belgian tripel, but often with more of a grainy, rustic quality and sometimes with a spicier yeast character.',
            instruction:
              'The entrant must specify the strength (table, standard, super) and the color (pale, dark).',
            vitalStatistics: {
              og: '1.048 - 1.065 (standard)',
              fg: '1.002 - 1.008 (standard)',
              abv:
                '3.5 - 5.0% (table), 5.0 - 7.0% (standard), 7.0 - 9.5%(super)',
              ibu: '20 - 35',
              srm: '5 - 14(pale), 15 - 22(dark)'
            }
          },
          commercialExamples: [
            {
              name: 'Ellezelloise Saison'
            },
            {
              name: 'Fantôme Saison'
            },
            {
              name: 'Lefebvre Saison 1900'
            },
            {
              name: 'Saison Dupont Vieille Provision'
            },
            {
              name: 'Saison de Pipaix'
            },
            {
              name: 'Saison Regal'
            },
            {
              name: 'Saison Voisin'
            },
            {
              name: 'Boulevard Tank 7 Farmhouse Ale'
            }
          ],
          tags: [
            {
              tag: 'tandard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'western-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'bitter'
            }
          ]
        },
        {
          name: 'Belgian Golden Strong Ale',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A pale, complex, effervescent, strong Belgian-style ale that is highly attenuated and features fruity and hoppy notes in preference to phenolics.',
            aroma:
              'Complex with significant fruity esters, moderate spiciness and low to moderate alcohol and hop aromas. Esters are reminiscent of lighter fruits such as pears, oranges or apples. Moderate to moderately low spicy, peppery phenols. A low to moderate yet distinctive perfumy, floral hop character is often present. Alcohols are soft, spicy, perfumy and low-to-moderate in intensity. No hot alcohol or solventy aromas. The malt character is light and slightly grainy-sweet to nearly neutral.',
            appearance:
              'Yellow to medium gold in color. Good clarity. Effervescent. Massive, long-lasting, rocky, often beady, white head resulting in characteristic Belgian lace on the glass as it fades.',
            flavor:
              'Marriage of fruity, spicy and alcohol flavors supported by a soft malt character. Esters are reminiscent of pears, oranges or apples. Low to moderately low phenols are peppery in character. A low to moderate spicy hop character is often present. Alcohols are soft and spicy, and are low-to-moderate in intensity. Bitterness is typically medium to high from a combination of hop bitterness and yeast-produced phenolics. Substantial carbonation and bitterness leads to a dry finish with a low to moderately bitter aftertaste. ',
            mouthfeel:
              'Very highly carbonated; effervescent. Light to medium body, although lighter than the substantial gravity would suggest. Smooth but noticeable alcohol warmth. No hot alcohol or solventy character.',
            comments:
              'References to the devil are included in the names of many commercial examples of this style, referring to their potent alcoholic strength and as a tribute to the original example (Duvel). The best examples are complex and delicate. High carbonation helps to bring out the many flavors and to increase the perception of a dry finish. Traditionally bottle-conditioned (or refermented in the bottle).',
            history:
              'Originally developed by the Moortgat brewery after WWI as a response to the growing popularity of Pilsner beers.',
            ingredients:
              'Pilsner malt with substantial sugary adjuncts. Saazer-type hops or Styrian Goldings are commonly used. Belgian yeast strains are used – those that produce fruity esters, spicy phenolics and higher alcohols – often aided by slightly warmer fermentation temperatures. Fairly soft water. Spicing is not traditional; if present, should be a background character only.',
            comparison:
              'Strongly resembles a Tripel, but may be even paler, lighter-bodied and even crisper and drier; the drier finish and lighter body also serves to make the assertive hopping and yeast character more prominent. Tends to use yeast that favor ester development (particularly pome fruit) over spiciness in the balance.',

            vitalStatistics: {
              og: '1.070 - 1.095',
              fg: '1.005 - 1.016',
              abv: '7.5 - 10.5%',
              ibu: '22 - 35',
              srm: '3 - 6'
            }
          },
          commercialExamples: [
            {
              name: 'Brigand'
            },
            {
              name: 'Delirium Tremens'
            },
            {
              name: 'Dulle Teve'
            },
            {
              name: 'Duvel'
            },
            {
              name: 'Judas'
            },
            {
              name: 'Lucifer'
            },
            {
              name: 'Piraat'
            },
            {
              name: 'Russian River Damnation'
            }
          ],
          tags: [
            {
              tag: 'very-high-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'western-europe'
            },
            {
              tag: 'traditional-style, bitter'
            }
          ]
        }
      ]
    },
    {
      name: 'Trappist Ale',
      number: 26,
      subcategories: [
        {
          name: 'Trappist Single',
          letter: 'A',
          guidelines: {
            overallImpression:
              'A pale, bitter, highly attenuated and well carbonated Trappist ale, showing a fruity-spicy Trappist yeast character, a spicy-floral hop profile, and a soft, supportive grainy-sweet malt palate.',
            aroma:
              'Medium-low to medium-high Trappist yeast character, showing a fruity-spicy character along with medium-low to medium spicy or floral hops, occasionally enhanced by light herbal/citrusy spice additions. Low to medium-low grainy-sweet malt backdrop, which may have a light honey or sugar quality. Fruit expression can vary widely (citrus, pome fruit, stone fruit). Light spicy, yeast-driven phenolics found in the best examples. Bubblegum inappropriate.',
            appearance:
              'Pale yellow to medium gold color. Generally good clarity, with a moderate-sized, persistent, billowy white head with characteristic lacing.',
            flavor:
              'Fruity, hoppy, bitter, and dry. Initial malty-sweet impression, with a grainy-sweet soft malt palate, and a dry, hoppy finish. The malt may have a light honeyed biscuit or cracker impression. Moderate spicy or floral hop flavor. Esters can be citrus (orange, lemon, grapefruit), pome fruit (apple, pear), or stone fruit (apricot, peach). Light to moderate spicy, peppery, or clove phenolics. Bitterness rises towards the crisp, dry finish, with an aftertaste of light malt, moderate hops and yeast character.',
            mouthfeel:
              'Medium-light to medium body. Smooth. Medium-high to high carbonation, can be somewhat prickly. Should not have noticeable alcohol warmth.',
            comments:
              'Often not labeled or available outside the monastery, or infrequently brewed. Might also be called monk’s beer or Brother’s beer. Highly attenuated, generally 85% or higher.',
            history:
              'While Trappist breweries have a tradition of brewing a lower-strength beer as a monk’s daily ration, the bitter, pale beer this style describes is a relatively modern invention reflecting current tastes. Westvleteren first brewed theirs in 1999, but replaced older lower-gravity products.',
            ingredients:
              'Pilsner malt, Belgian Trappist yeast, Saazer-type hops.',
            comparison:
              'Like a top-fermented Belgian/Trappist interpretation of a German Pils – pale, hoppy, and well-attenuated, but showing prototypical Belgian yeast character. Has less sweetness, higher attenuation, less character malt, and is more hop-centered than a Belgian Pale Ale. More like a much smaller, more highly hopped tripel than a smaller Belgian Blond Ale.',

            vitalStatistics: {
              og: '1.044 - 1.054',
              fg: '1.004 - 1.010',
              abv: '4.8 - 6.0%',
              ibu: '25 - 45',
              srm: '3 - 5'
            }
          },
          commercialExamples: [
            {
              name: 'Achel 5° Blond'
            },
            {
              name: 'St. Bernardus Extra 4'
            },
            {
              name: 'Westmalle Extra'
            },
            {
              name: 'Westvleteren Blond'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermenting'
            },
            {
              tag: 'western-europe'
            },
            {
              tag: 'craft-style'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'Belgian Dubbel',
          letter: 'B',
          guidelines: {
            overallImpression:
              'A deep reddish-copper, moderately strong, malty, complex Trappist ale with rich malty flavors, dark or dried fruit esters, and light alcohol blended together in a malty presentation that still finishes fairly dry.',
            aroma:
              'Complex, rich-sweet malty aroma, possibly with hints of chocolate, caramel and/or toast (but never roasted or burnt aromas). Moderate fruity esters (usually including raisins and plums, sometimes also dried cherries). Esters sometimes include banana or apple. Spicy phenols and higher alcohols are common (may include light clove and spice, peppery, rose-like and/or perfumy notes). Spicy qualities can be moderate to very low. Alcohol, if present, is soft and never hot or solventy. Low to no spicy, herbal, or floral hop aroma, typically absent. The malt is most prominent in the balance with esters and a touch of alcohol in support, blending together for a harmonious presentation.',
            appearance:
              'Dark amber to copper in color, with an attractive reddish depth of color. Generally clear. Large, dense, and long-lasting creamy off-white head.',
            flavor:
              'Similar qualities as aroma. Rich, complex medium to medium-full rich-sweet malt flavor on the palate yet finishes moderately dry. Complex malt, ester, alcohol and phenol interplay (raisiny flavors are common; dried fruit flavors are welcome; clove or pepper spiciness is optional). Balance is always toward the malt. Medium-low bitterness that doesn’t persist into the aftertaste. Low spicy, floral, or herbal hop flavor is optional and not usually present.',
            mouthfeel:
              'Medium-full body. Medium-high carbonation, which can influence the perception of body. Low alcohol warmth. Smooth, never hot or solventy.',
            comments:
              'Most commercial examples are in the 6.5 – 7% ABV range. Traditionally bottle-conditioned (or refermented in the bottle).',
            history:
              'Originated at monasteries in the Middle Ages, and was revived in the mid-1800s after the Napoleonic era.',
            ingredients:
              'Belgian yeast strains prone to production of higher alcohols, esters, and phenolics are commonly used. Impression of complex grain bill, although traditional versions are typically Belgian Pils malt with caramelized sugar syrup or other unrefined sugars providing much of the character. Saazer-type, English-type or Styrian Goldings hops commonly used. No spices are traditionally used, although restrained use is allowable (background strength only).',
            comparison:
              'Should not be as malty as a bock and should not have crystal malt-type sweetness. Similar in strength and balance as a Belgian Blond, but with a richer malt and ester profile. Less strong and intense as a Belgian Dark Strong Ale.',

            vitalStatistics: {
              og: '1.062 - 1.075',
              fg: '1.008 - 1.018',
              abv: '6.0 - 7.6%',
              ibu: '15 - 25',
              srm: '10 - 17'
            }
          },
          commercialExamples: [
            {
              name: 'Affligem Dubbel'
            },
            {
              name: 'Chimay Première'
            },
            {
              name: 'Corsendonk Pater'
            },
            {
              name: 'Grimbergen Double'
            },
            {
              name: 'La Trappe Dubbel'
            },
            {
              name: 'St. Bernardus Pater 6'
            },
            {
              name: 'Trappistes Rochefort 6'
            },
            {
              name: 'Westmalle Dubbel'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'western-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'malty'
            }
          ]
        },
        {
          name: 'Belgian Tripel',
          letter: 'C',
          guidelines: {
            overallImpression:
              'A pale, somewhat spicy, dry, strong Trappist ale with a pleasant rounded malt flavor and firm bitterness. Quite aromatic, with spicy, fruity, and light alcohol notes combining with the supportive clean malt character to produce a surprisingly drinkable beverage considering the high alcohol level.',
            aroma:
              'Complex bouquet with moderate to significant spiciness, moderate fruity esters and low alcohol and hop aromas. Generous spicy, peppery, sometimes clove-like phenols. Esters are often reminiscent of citrus fruits such as oranges, but may sometimes have a slight banana character. A low yet distinctive spicy, floral, sometimes perfumy hop character is usually found. Alcohols are soft, spicy and low in intensity. The malt character is light, with a soft, slightly grainy-sweet or slightly honey-like impression. The best examples have a seamless, harmonious interplay between the yeast character, hops, malt, and alcohol.',
            appearance:
              'Deep yellow to deep gold in color. Good clarity. Effervescent. Long-lasting, creamy, rocky, white head resulting in characteristic Belgian lace on the glass as it fades.',
            flavor:
              'Marriage of spicy, fruity and alcohol flavors supported by a soft, rounded grainy-sweet malt impression, occasionally with a very light honey note. Low to moderate phenols are peppery in character. Esters are reminiscent of citrus fruit such as orange or sometimes lemon, and are low to moderate. A low to moderate spicy hop character is usually found. Alcohols are soft, spicy, and low in intensity. Bitterness is typically medium to high from a combination of hop bitterness and yeast-produced phenolics. Substantial carbonation and bitterness lends a dry finish with a moderately bitter aftertaste with substantial spicy-fruity yeast character. The grainy-sweet malt flavor does not imply any residual sweetness.',
            mouthfeel:
              'Medium-light to medium body, although lighter than the substantial gravity would suggest. Highly carbonated. The alcohol content is deceptive, and has little to no obvious warming sensation. Always effervescent.',
            comments:
              'High in alcohol but does not taste strongly of alcohol. The best examples are sneaky, not obvious. High carbonation and attenuation helps to bring out the many flavors and to increase the perception of a dry finish. Most Trappist versions have at least 30 IBUs and are very dry. Traditionally bottle-conditioned (or refermented in the bottle).',
            history:
              'Originally popularized by the Trappist monastery at Westmalle.',
            ingredients:
              'Pilsner malt, typically with pale sugar adjuncts. Saazer-type hops or Styrian Goldings are commonly used. Belgian yeast strains are used – those that produce fruity esters, spicy phenolics and higher alcohols – often aided by slightly warmer fermentation temperatures. Spice additions are generally not traditional, and if used, should be a background character only. Fairly soft water.',
            comparison:
              'May resemble a Belgian Golden Strong Ale but slightly darker and somewhat fuller-bodied, with more emphasis on phenolics and less on esters. Usually has a more rounded malt flavor but should never be sweet.',

            vitalStatistics: {
              og: '1.075 - 1.085',
              fg: '1.008 - 1.014',
              abv: '7.5 - 9.5%',
              ibu: '20 - 40',
              srm: '4.5 - 7'
            }
          },
          commercialExamples: [
            {
              name: 'Affligem Tripel'
            },
            {
              name: 'Chimay Cinq Cents'
            },
            {
              name: 'La Rulles Tripel'
            },
            {
              name: 'La Trappe Tripel'
            },
            {
              name: 'St. Bernardus Tripel'
            },
            {
              name: 'Unibroue La Fin Du Monde'
            },
            {
              name: 'Val-Dieu Triple'
            },
            {
              name: 'Watou Tripel'
            },
            {
              name: 'Westmalle Tripel'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'western-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'bitter'
            }
          ]
        },
        {
          name: 'Belgian Dark Strong Ale',
          letter: 'D',
          guidelines: {
            overallImpression:
              'A dark, complex, very strong Belgian ale with a delicious blend of malt richness, dark fruit flavors, and spicy elements. Complex, rich, smooth and dangerous.',
            aroma:
              'Complex, with a rich-sweet malty presence, significant esters and alcohol, and an optional light to moderate spiciness. The malt is rich and strong, and can have a deep bready-toasty quality often with a deep caramel complexity. The fruity esters are strong to moderately low, and can contain raisin, plum, dried cherry, fig or prune notes. Spicy phenols may be present, but usually have a peppery quality not clove-like; light vanilla is possible. Alcohols are soft, spicy, perfumy and/or rose-like, and are low to moderate in intensity. Hops are not usually present (but a very low spicy, floral, or herbal hop aroma is acceptable). No dark/roast malt aroma. No hot alcohols or solventy aromas.',
            appearance:
              'Deep amber to deep coppery-brown in color (dark in this context implies more deeply colored than golden). Huge, dense, moussy, persistent cream- to light tan-colored head. Can be clear to somewhat hazy.',
            flavor:
              'Similar to aroma (same malt, ester, phenol, alcohol, and hop comments apply to flavor as well). Moderately malty-rich on the palate, which can have a sweet impression if bitterness is low. Usually moderately dry to dry finish, although may be up to moderately sweet. Medium-low to moderate bitterness; alcohol provides some of the balance to the malt. Generally malty-rich balance, but can be fairly even with bitterness. The complex and varied flavors should blend smoothly and harmoniously. The finish should not be heavy or syrupy.',
            mouthfeel:
              'High carbonation but not sharp. Smooth but noticeable alcohol warmth. Body can range from medium-light to medium-full and creamy. Most are medium-bodied.',
            comments:
              'Authentic Trappist versions tend to be drier (Belgians would say more digestible) than Abbey versions, which can be rather sweet and full-bodied. Traditionally bottle-conditioned (or refermented in the bottle). Sometimes known as a Trappist Quadruple, most are simply known by their strength or color designation.',
            history:
              'Most versions are unique in character reflecting characteristics of individual breweries, produced in limited quantities and often highly sought-after.',
            ingredients:
              'Belgian yeast strains prone to production of higher alcohols, esters, and sometimes phenolics are commonly used. Impression of a complex grain bill, although many traditional versions are quite simple, with caramelized sugar syrup or unrefined sugars and yeast providing much of the complexity. Saazer-type, English-type or Styrian Goldings hops commonly used. Spices generally not used; if used, keep subtle and in the background.',
            comparison:
              'Like a larger dubbel, with a fuller body and increased malt richness. Not as bitter or hoppy as a tripel, but of similar strength.',

            vitalStatistics: {
              og: '1.075 - 1.110',
              fg: '1.010 - 1.024',
              abv: '8.0 - 12.0%',
              ibu: '20 - 35',
              srm: '12 - 22'
            }
          },
          commercialExamples: [
            {
              name: 'Achel Extra Brune'
            },
            {
              name: 'Boulevard The Sixth Glass'
            },
            {
              name: 'Chimay Grande Réserve'
            },
            {
              name: 'Gouden Carolus Grand Cru of the Emperor'
            },
            {
              name: 'Rochefort 8 & 10'
            },
            {
              name: 'St. Bernardus Abt 12'
            },
            {
              name: 'Westvleteren 12'
            }
          ],
          tags: [
            {
              tag: 'very-high-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'western-europe'
            },
            {
              tag: 'traditional-style'
            },
            {
              tag: 'malty'
            }
          ]
        }
      ]
    },
    {
      name: 'Historical Beer',
      number: 27,
      subcategories: [
        {
          name: 'Historical Beer: Gose',
          letter: '',
          guidelines: {
            overallImpression:
              'A highly-carbonated, tart and fruity wheat ale with a restrained coriander and salt character and low bitterness. Very refreshing, with bright flavors and high attenuation.',
            aroma:
              'Light to moderately fruity aroma of pome fruit. Light sourness, slightly sharp. Noticeable coriander, which can have an aromatic lemony quality, and an intensity up to moderate. Light bready, doughy, yeasty character like uncooked sourdough bread. The acidity and coriander can give a bright, lively impression. The salt may be perceived as a very light, clean sea breeze character or just a general freshness, if noticeable at all.',
            appearance:
              'Unfiltered, with a moderate to full haze. Moderate to tall sized white head with tight bubbles and good retention. Effervescent. Medium yellow color.',
            flavor:
              'Moderate to restrained but noticeable sourness, like a squeeze of lemon in iced tea. Moderate bready/doughy malt flavor. Light to moderate fruity character of pome fruit, stone fruit, or lemons. Light to moderate salt character, up to the threshold of taste; the salt should be noticeable (particularly in the initial taste) but not taste overtly salty. Low bitterness, no hop flavor. Dry, fully-attenuated finish, with acidity not hops balancing the malt. Acidity can be more noticeable in the finish, and enhance the refreshing quality of the beer. The acidity should be balanced, not forward (although historical versions could be very sour).',
            mouthfeel:
              'High to very high carbonation, effervescent. Medium-light to medium-full body. Salt may give a slightly tingly, mouthwatering quality, if perceived at all. The yeast and wheat can give it a little body, but it shouldn’t have a heavy feel.',
            comments:
              'Served in traditional cylindrical glasses. Historical versions may have been more sour than modern examples due to spontaneous fermentation, and may be blended with syrups as is done with Berliner Weisse, or Kümmel, a liqueur flavored with caraway, cumin, and fennel. Modern examples are inoculated with lactobacillus, and are more balanced and generally don’t need sweetening. Pronounced GOH-zeh.',
            history:
              'Minor style associated with Leipzig but originating in the Middle Ages in the town of Goslar on the Gose River. Documented to have been in Leipzig by 1740. Leipzig was said to have 80 Gose houses in 1900. Production declined significantly after WWII, and ceased entirely in 1966. Modern production was revived in the 1980s, but the beer is not widely available. ',
            ingredients:
              'Pilsner and wheat malt, restrained use of salt and coriander seed, lactobacillus. The coriander should have a fresh, citrusy (lemon or bitter orange), bright note, and not be vegetal, celery-like, or ham-like. The salt should have a sea salt or fresh salt character, not a metallic, iodine note.',
            comparison:
              'Perceived acidity is not as intense as Berliner Weisse or Gueuze. Restrained use of salt, coriander, and lactobacillus – should not taste overtly salty. Coriander aroma can be similar to a witbier. Haziness similar to a Weissbier.',

            vitalStatistics: {
              og: '1.036 - 1.056',
              fg: '1.006 - 1.010',
              abv: '4.2 - 4.8%',
              ibu: '5 - 12',
              srm: '3 - 4'
            }
          },
          commercialExamples: [
            {
              name: 'Anderson Valley Gose'
            },
            {
              name: 'Bayerisch Bahnhof Leipziger Gose'
            },
            {
              name: 'Döllnitzer Ritterguts Gose'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'historical-style'
            },
            {
              tag: 'wheat-beer-family'
            },
            {
              tag: 'sour'
            },
            {
              tag: 'spice'
            }
          ]
        },
        {
          name: 'Historical Beer: Kentucky Common',
          letter: '',
          guidelines: {
            overallImpression:
              'A darker-colored, light-flavored, malt-accented beer with a dry finish and interesting character malt flavors. Refreshing due to its high carbonation and mild flavors, and highly sessionable due to being served very fresh and with restrained alcohol levels.',
            aroma:
              'Low to medium grainy, corn-like or sweet maltiness with a low toast, biscuity-grainy, bready, or caramel malt accent. Medium to moderately-low hop aroma, usually floral or spicy in character. Clean fermentation character, with possible faint berry ester. Low levels of DMS are acceptable. No sourness. Malt-forward in the balance.',
            appearance:
              'Amber-orange to light brown in color. Typically clear, but may have some light haze due to limited conditioning. Foam stand may not be long lasting, and is usually white to beige in color.',
            flavor:
              'Moderate grainy-sweet maltiness with low to medium-low caramel, toffee, bready, and/or biscuity notes. Generally light palate flavors typical of adjunct beers; a low grainy, corn-like sweetness is common. Medium to low floral or spicy hop flavor. Medium to low hop bitterness, which should neither be coarse nor have a harsh aftertaste. May exhibit light fruitiness. Balance in the finish is towards the malt. May have a lightly flinty or minerally-sulfate flavor in the finish. The finish is fairly dry, including the contributions of roasted grains and minerals. No sourness.',
            mouthfeel:
              'Medium to medium-light body with a relatively soft mouthfeel. Highly carbonated. Can have a creamy texture.',
            comments:
              'Modern characterizations of the style often mention a lactic sourness or sour mashing, but extensive brewing records from the larger breweries at the turn of the century have no indication of long acid rests, sour mashing, or extensive conditioning. This is likely a modern homebrewer invention, based on the supposition that since indigenous Bourbon distillers used a sour mash, beer brewers must also have used this process. No contemporaneous records indicate sour mashing or that the beer had a sour profile; rather the opposite, that the beer was brewed as an inexpensive, present-use ale. Enter soured versions in American Wild Ale.',
            history:
              'A true American original style, Kentucky Common was almost exclusively produced and sold around the Louisville Kentucky metropolitan area from some time after the Civil War up to Prohibition. Its hallmark was that it was inexpensive and quickly produced, typically 6 to 8 days from mash to delivery. The beer was racked into barrels while actively fermenting (1.020 – 1.022) and tightly bunged to allow carbonation in the saloon cellar. There is some speculation that it was a variant of the lighter common or cream ale produced throughout much of the East prior to the Civil War and that the darker grains were added by the mostly Germanic brewers to help acidify the typical carbonate water of the Louisville area, or that they had a preference for darker colored beers. Up until the late 19th century, Kentucky Common was not brewed in the summer months unless cellars, usually used for malting, were used for fermentation. With the advent of ice machines, the larger breweries were able to brew year round. In the period from 1900 to prohibition, about 75% of the beer sold in the Louisville area was Kentucky Common. With prohibition, the style died completely as the few larger breweries that survived were almost exclusively lager producers.',
            ingredients:
              'Six-row barley malt was used with 35% corn grits to dilute the excessive protein levels along with 1 to 2% each caramel and black malt. Native American hops, usually about .2 pounds per barrel of Western hops for bittering and a similar amount of New York hops (such as Clusters) for flavor (15 minutes prior to knock out). Imported continental Saazer-type hops (.1 pounds per barrel) were added at knock out for aroma. Water in the Louisville area was typically moderate to high in carbonates. Mash water was often pre-boiled to precipitate the carbonate and Gypsum was commonly added. Considering the time from mash in to kegging for delivery was typically 6 to 8 days, clearly aggressive top-fermenting yeasts was used.',
            comparison:
              'Like a darker-colored cream ale emphasizing corn, but with some light character malt flavor. Malt flavors and balance are probably closest to modern adjunct-driven international amber or dark lagers, Irish red ales, or Belgian pale ales.',

            vitalStatistics: {
              og: '1.044 - 1.055',
              fg: '1.010 - 1.018',
              abv: '4.0 - 5.5%',
              ibu: '15 - 30',
              srm: '11 - 20'
            }
          },
          commercialExamples: [
            {
              name: 'Apocalypse Brew Works Ortel’s 1912'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'historical-style'
            },
            {
              tag: 'balanced'
            }
          ]
        },
        {
          name: 'Historical Beer: Lichtenhainer',
          letter: '',
          guidelines: {
            overallImpression:
              'A sour, smoked, lower-gravity historical German wheat beer. Complex yet refreshing character due to high attenuation and carbonation, along with low bitterness and moderate sourness. ',
            aroma:
              'Moderately strong fresh smoky aroma, light hints of sourness, medium-low fruity esters, possibly apples or lemons, moderate bready-grainy malt. The smoke character is stronger than the bready notes, and the smoke has a ‘dry’ character, like the remnants of an old fire, not a ‘greasy’ smoke.',
            appearance:
              'Tall off-white head, rocky and persistent. Deep yellow to light gold color. Fair clarity, may be somewhat hazy.',
            flavor:
              'Moderately strong fruity flavor, possibly lemons or apples. Moderate intensity, clean lactic tartness (no funk). Similar smoky character as aroma (dry wood fire), medium strength. Dry finish, with acidity and smoke in the aftertaste. Low bitterness; the acidity is providing the balance, not hops. Fresh, clean palate and slightly puckery aftertaste. The wheat character is on the low side; the smoke and acidity are more prominent in the balance. The lemony-tart/green apple flavor is strongest in the finish, with smoke a close second. Complex.',
            mouthfeel:
              'Tingly acidity. High carbonation. Medium to medium-light body.',
            comments:
              'Served young. Smoke and sour is an unusual combination that is not for everyone.',
            history:
              'Originating in Lichtenhain, in Thüringen (central Germany). Height of popularity was towards the end of the 1800s, and was widely available throughout Thüringen. Like a pre-1840 Berliner Weisse.',
            ingredients:
              'Smoked barley malt, wheat malt, lactobacillus, top-fermenting yeast. Grists vary, but the wheat would typically be 30-50%.',
            comparison:
              'In the same general historical lower-alcohol top-fermenting central European wheat beer family as Gose, Grodziskie, and Berliner weisse, has elements of all of them but having its own unique balance – sour and smoke is not found in any of the other beers. Not as acidic as Berliner weisse, probably more like a smoked Gose without coriander and salt, or a Grodziskie with Gose-like acidity.',

            vitalStatistics: {
              og: '1.032 - 1.040',
              fg: '1.004 - 1.008',
              abv: '3.5 - 4.7%',
              ibu: '5 - 12',
              srm: '3 - 6'
            }
          },
          commercialExamples: [
            {
              name: ''
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'historical-style'
            },
            {
              tag: 'wheat-beer-family'
            },
            {
              tag: 'sour'
            },
            {
              tag: 'smoke'
            }
          ]
        },
        {
          name: 'Historical Beer: London Brown Ale',
          letter: '',
          guidelines: {
            overallImpression:
              'A luscious, sweet, malt-oriented dark brown ale, with caramel and toffee malt complexity and a sweet finish.',
            aroma:
              'Moderate malty-sweet aroma, often with a rich, caramel or toffee-like character. Low to medium fruity esters, often dark fruit like plums. Very low to no hop aroma, earthy or floral qualities.',
            appearance:
              'Medium to very dark brown color, but can be nearly black. Nearly opaque, although should be relatively clear if visible. Low to moderate off-white to tan head.',
            flavor:
              'Deep, caramel or toffee-like malty and sweet flavor on the palate and lasting into the finish. Hints of biscuit and coffee are common. Some fruity esters can be present (typically dark fruit); relatively clean fermentation profile for an English ale. Low hop bitterness. Hop flavor is low to non-existent, possibly earthy or floral in character. Moderately-low to no perceivable roasty or bitter black malt flavor. Moderately sweet finish with a smooth, malty aftertaste. May have a sugary-sweet flavor. ',
            mouthfeel:
              'Medium body, but the residual sweetness may give a heavier impression. Medium-low to medium carbonation. Quite creamy and smooth in texture, particularly for its gravity.',
            comments:
              'Increasingly rare; Mann’s has over 90% market share in Britain, but in an increasingly small segment. Always bottled. Frequently used as a sweet mixer with cask mild and bitter in pubs. Commercial versions can be pasteurized and back-sweetened, which gives more of a sugary-sweet flavor.',
            history:
              'Developed by Mann’s as a bottled product in 1902. Claimed at the time to be “the sweetest beer in London.” Pre-WWI versions were around 5% ABV, but same general balance. Declined in popularity in second half of 20th century, and now nearly extinct.',
            ingredients:
              'English pale ale malt as a base with a healthy proportion of darker caramel malts and often some roasted (black) malt and wheat malt (this is Mann’s traditional grist – others can rely on dark sugars for color and flavor). Moderate to high carbonate water. English hop varieties are most authentic, though with low flavor and bitterness almost any type could be used. Post-fermentation sweetening with lactose or artificial sweeteners, or sucrose (if pasteurized).',
            comparison:
              'May seem somewhat like a less roasty version of a sweet stout (and lower-gravity, at least for US sweet stout examples) or a sweet version of a dark mild.',

            vitalStatistics: {
              og: '1.033 - 1.038',
              fg: '1.012 - 1.015',
              abv: '2.8 - 3.6%',
              ibu: '15 - 20',
              srm: '22 - 35'
            }
          },
          commercialExamples: [
            {
              name: 'Harveys Bloomsbury Brown Ale'
            },
            {
              name: "Mann's Brown Ale"
            }
          ],
          tags: [
            {
              tag: 'session-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'british-isles'
            },
            {
              tag: 'historical-style'
            },
            {
              tag: 'brown-ale-family'
            },
            {
              tag: 'malty'
            },
            {
              tag: 'sweet'
            }
          ]
        },
        {
          name: 'Historical Beer: Piwo Grodziskie',
          letter: '',
          guidelines: {
            overallImpression:
              'A low-gravity, highly-carbonated, light-bodied ale combining an oak-smoked flavor with a clean hop bitterness. Highly sessionable.',
            aroma:
              'Low to moderate oak wood smoke is the most prominent aroma component, but can be subtle and hard to detect. A low spicy, herbal, or floral hop aroma is typically present, and should be lower than or equal to the smoke in intensity. Hints of grainy wheat are also detected in the best examples. The aroma is otherwise clean, although light pome fruit esters (especially ripe red apple or pear) are welcome. No acidity. Slight water-derived sulfury notes may be present.',
            appearance:
              'Pale yellow to medium gold in color with excellent clarity. A tall, billowy, white, tightly-knit head with excellent retention is distinctive. Murkiness is a fault.',
            flavor:
              'Moderately-low to medium oak smoke flavor up front which carries into the finish; the smoke can be stronger in flavor than in aroma. The smoke character is gentle, should not be acrid, and can lend an impression of sweetness. A moderate to strong bitterness is readily evident which lingers through the finish. The overall balance is toward bitterness. Low but perceptible spicy, herbal, or floral hop flavor. Low grainy wheat character in the background. Light pome fruit esters (red apple or pear) may be present. Dry, crisp finish. No sourness.',
            mouthfeel:
              'Light in body, with a crisp and dry finish. Carbonation is quite high and can add a slight carbonic bite or prickly sensation. No noticeable alcohol warmth.',
            comments:
              'Pronounced in English as “pivo grow-JEES-kee-uh” (meaning: Grodzisk beer). Known as Grätzer (pronounced “GRATE-sir”) in German-speaking countries, and in some beer literature. Traditionally made using a multi-step mash, a long boil (~2 hours), and multiple strains of ale yeast. The beer is never filtered but Isinglass is used to clarify before bottle conditioning. Traditionally served in tall conical glassware to accommodate the vigorous foam stand.',
            history:
              'Developed as a unique style centuries ago in the Polish city of Grodzisk (known as Grätz when ruled by Prussia and Germany). Its fame and popularity rapidly extended to other parts of the world in the late 19th and early 20th century. Regular commercial production declined after WWII and ceased altogether in the early-mid 1990s. This style description describes the traditional version during its period of greatest popularity.',
            ingredients:
              'Grain bill usually consists entirely of oak-smoked wheat malt. Oak-smoked wheat malt has a different (and less intense) smoke character than German beechwood-smoked barley malt; it has a drier, crisper, leaner quality – a bacon/ham smoke flavor is inappropriate. Saazer-type hops (Polish, Czech or German), moderate hardness sulfate water, and a relatively clean and attenuative continental ale yeast fermented at moderate ale temperatures are traditional. German hefeweizen yeast or other strains with a phenol or strong ester character are inappropriate.',
            comparison:
              'Similar in strength to a Berliner Weisse, but never sour. Has a smoked character but less intense than in a Rauchbier.',

            vitalStatistics: {
              og: '1.028 - 1.032',
              fg: '1.006 - 1.012',
              abv: '2.5 - 3.3%',
              ibu: '20 - 35',
              srm: '3 - 6'
            }
          },
          commercialExamples: [
            {
              name: ''
            }
          ],
          tags: [
            {
              tag: 'session-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'historical-style'
            },
            {
              tag: 'wheat-beer-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'smoke'
            }
          ]
        },
        {
          name: 'Historical Beer: Pre-Prohibition Lager',
          letter: '',
          guidelines: {
            overallImpression:
              'A clean, refreshing, but bitter pale lager, often showcasing a grainy-sweet corn flavor. All malt or rice-based versions have a crisper, more neutral character. The higher bitterness level is the largest differentiator between this style and most modern mass-market pale lagers, but the more robust flavor profile also sets it apart.',
            aroma:
              'Low to medium grainy, corn-like or sweet maltiness may be evident (although rice-based beers are more neutral). Medium to moderately high hop aroma, with a range of character from rustic to floral to herbal/spicy; a fruity or citrusy modern hop character is inappropriate. Clean lager character. Low DMS is acceptable. May show some yeast character, as with modern American lagers; allow for a range of subtle supporting yeast notes.',
            appearance:
              'Yellow to deep gold color. Substantial, long lasting white head. Bright clarity.',
            flavor:
              'Medium to medium-high maltiness with a grainy flavor, and optionally a corn-like roundness and impression of sweetness. Substantial hop bitterness stands up to the malt and lingers through the dry finish. All malt and rice-based versions are often crisper, drier, and generally lack corn-like flavors. Medium to high hop flavor, with a rustic, floral, or herbal/spicy character. Medium to high hop bitterness, which should neither be overly coarse nor have a harsh aftertaste. Allow for a range of lager yeast character, as with modern American lagers, but generally fairly neutral.',
            mouthfeel:
              'Medium body with a moderately rich, creamy mouthfeel. Smooth and well-lagered. Medium to high carbonation levels.',
            comments:
              'The classic American Pilsner was brewed both pre-Prohibition and post-Prohibition with some differences. OGs of 1.050–1.060 would have been appropriate for pre-Prohibition beers while gravities dropped to 1.044–1.048 after Prohibition. Corresponding IBUs dropped from a pre-Prohibition level of 30–40 to 25–30 after Prohibition.',
            history:
              'A version of Pilsner brewed in the USA by immigrant German brewers who brought the process and yeast with them, but who had to adapt their recipes to work with native hops and malt. This style died out after Prohibition but was resurrected by homebrewers in the 1990s. Few commercial versions are made, so the style still remains mostly a homebrew phenomenon.',
            ingredients:
              'Six-row barley with 20% to 30% flaked maize (corn) or rice to dilute the excessive protein levels; modern versions may be all malt. Native American hops such as Clusters, traditional continental hops, or modern noble-type crosses are also appropriate. Modern American hops such as Cascade are inappropriate. Water with a high mineral content can lead to an unpleasant coarseness in flavor and harshness in aftertaste. A wide range of lager yeast character can be exhibited, although modern versions tend to be fairly clean.',
            comparison:
              'Similar balance and bitterness as modern Czech Premium Pale Lagers, but exhibiting native American grains and hops from the era before US Prohibition. More robust, bitter, and flavorful than modern American pale lagers, and often with higher alcohol.',

            vitalStatistics: {
              og: '1.044 - 1.060',
              fg: '1.010 - 1.015',
              abv: '4.5 - 6.0%',
              ibu: '25 - 40',
              srm: '3 - 6'
            }
          },
          commercialExamples: [
            {
              name: 'Anchor California Lager'
            },
            {
              name: 'Coors Batch 19'
            },
            {
              name: 'Little Harpeth Chicken Scratch'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'pale-color'
            },
            {
              tag: 'bottom-fermented'
            },
            {
              tag: 'lagered'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'historical-style'
            },
            {
              tag: 'pilsner-family'
            },
            {
              tag: 'bitter'
            },
            {
              tag: 'hoppy'
            }
          ]
        },
        {
          name: 'Historical Beer: Pre-Prohibition Porter',
          letter: '',
          guidelines: {
            overallImpression:
              'An American adaptation of English Porter using American ingredients, including adjuncts.',
            aroma:
              'Base grainy malt aroma with low levels of dark malt (slight burnt or chocolate notes). Low hop aroma. Low to moderate low levels of DMS acceptable. May show low levels of caramel and biscuit aroma. No to very low esters. Light adjunct (licorice, molasses) aroma acceptable. Diacetyl low to none. Clean lager profile acceptable.',
            appearance:
              'Medium to dark brown, though some examples can be nearly black in color, with ruby or mahogany highlights. Relatively clear. Light to medium tan head which will persist in the glass.',
            flavor:
              'Grainy base malt flavor, with low levels of chocolate or burnt black malt notes, along with low levels of caramel, biscuit, licorice, and toast notes. Corn/DMS flavor acceptable at low to moderate levels. American hop bitterness low to moderate and American hop flavor low to none. Balance is typically even between malt and hops, with a moderate dry finish.',
            mouthfeel:
              'Medium light to medium body, moderate carbonation, low to moderate creaminess. May have a slight astringency from the dark malts.',
            comments:
              'Also sometimes known as Pennsylvania Porter or East Coast Porter.',
            history:
              'Commercially brewed in Philadelphia during the revolutionary period, the beer gained wide acceptance in the newly formed mid-Atlantic states, and was endorsed by President George Washington.',
            ingredients:
              'Two and six row malt (or a combination of both) are used, along with low percentages of dark malts including black, chocolate, and brown malt (roasted barley is not typically used). Adjuncts are acceptable, including corn, brewers licorice, molasses, and porterine. More historical versions will have up to twenty percent adjuncts. Lager or ale yeast. Emphasis on historical or traditional American bittering hops (Cluster, Willamette, Cascade), though finishing and flavor hops may vary.',
            comparison:
              'Smoother and less hoppy-bitter than a (modern) American Porter, less caramelly than an English Porter with more of an adjunct/lager character.',

            vitalStatistics: {
              og: '1.046 - 1.060',
              fg: '1.010 - 1.016',
              abv: '4.5 - 6.0%',
              ibu: '20 - 30',
              srm: '18 - 30'
            }
          },
          commercialExamples: [
            {
              name: 'Stegmaier Porter'
            },
            {
              name: 'Yuengling Porter'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'dark-color'
            },
            {
              tag: 'any-fermentation'
            },
            {
              tag: 'north-america'
            },
            {
              tag: 'historical-style'
            },
            {
              tag: 'porter-family'
            },
            {
              tag: 'malty'
            }
          ]
        },
        {
          name: 'Historical Beer: Roggenbier',
          letter: '',
          guidelines: {
            overallImpression:
              'A dunkelweizen made with rye rather than wheat, but with a greater body and light finishing hops.',
            aroma:
              'Light to moderate spicy rye aroma intermingled with light to moderate weizen yeast aromatics (spicy clove and fruity esters, either banana or citrus). Light spicy, floral, or herbal hops are acceptable.',
            appearance:
              'Light coppery-orange to very dark reddish or coppery-brown color. Large creamy off-white to tan head, quite dense and persistent (often thick and rocky). Cloudy, hazy appearance.',
            flavor:
              'Grainy, moderately-low to moderately-strong spicy rye flavor, often having a hearty flavor reminiscent of rye or pumpernickel bread. Medium to medium-low bitterness allows an initial malt sweetness (sometimes with a bit of caramel) to be tasted before yeast and rye character takes over. Low to moderate weizen yeast character (banana, clove), although the balance can vary. Medium-dry, grainy finish with a lightly bitter (from rye) aftertaste. Low to moderate spicy, herbal, or floral hop flavor acceptable, and can persist into aftertaste.',
            mouthfeel:
              'Medium to medium-full body. High carbonation. Moderately creamy.',
            comments:
              'Rye is a huskless grain and is difficult to mash, often resulting in a gummy mash texture that is prone to sticking. Rye has been characterized as having the most assertive flavor of all cereal grains. It is inappropriate to add caraway seeds to a roggenbier (as some American brewers do); the rye character is traditionally from the rye grain only.',
            history:
              'A specialty German rye beer originally brewed in Regensburg, Bavaria. Never a widely popular style, it has all but disappeared in modern times.',
            ingredients:
              'Malted rye typically constitutes 50% or greater of the grist (some versions have 60-65% rye). Remainder of grist can include pale malt, Munich malt, wheat malt, crystal malt and/or small amounts of debittered dark malts for color adjustment. Weizen yeast provides distinctive banana esters and clove phenols. Light usage of Saazer-type hops in bitterness, flavor and aroma. Lower fermentation temperatures accentuate the clove character by suppressing ester formation. Decoction mash traditionally used (as with weissbiers).',
            comparison:
              'A more distinctive variant of a dunkelweizen using malted rye instead of malted wheat. American Rye Beers will not have the weizen yeast character, and likely more hops.',

            vitalStatistics: {
              og: '1.046 - 1.056',
              fg: '1.010 - 1.014',
              abv: '4.5 - 6.0%',
              ibu: '10 - 20',
              srm: '14 - 19'
            }
          },
          commercialExamples: [
            {
              name: 'Thurn und Taxis Roggen'
            }
          ],
          tags: [
            {
              tag: 'standard-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermenting'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'historical-style'
            },
            {
              tag: 'wheat-beer-family'
            }
          ]
        },
        {
          name: 'Historical Beer: Sahti',
          letter: '',
          guidelines: {
            overallImpression:
              'A sweet, heavy, strong traditional Finnish beer with a rye, juniper, and juniper berry flavor and a strong banana-clove yeast character.',
            aroma:
              'High banana esters with moderate to moderately-high clove-like phenolics. Not sour. May have a low to moderate juniper character. Grainy malt, caramel, and rye in background. Light alcohol aroma. Sweet malt impression.',
            appearance:
              'Pale yellow to dark brown color; most are medium to dark amber. Generally quite cloudy (unfiltered). Little head, due to low carbonation.',
            flavor:
              'Strong banana and moderate to moderately-high clove yeast character. Moderate grainy rye flavor. Low bitterness. Fairly sweet finish. Juniper can add a pine-like flavor; juniper berries can add a gin-like flavor; both should be complementary, not dominant. No noticeable hop flavor. Moderate caramel flavor but no roast. Multi-layered and complex, with kind of a wortiness that is unusual in other beer styles. Not sour.',
            mouthfeel:
              'Thick, viscous, and heavy with protein (no boil means no hot break). Nearly still to medium-low carbonation. Strongly warming from the alcohol level and young age, but often masked by sweetness.',
            comments:
              'The use of rye doesn’t mean that it should taste like caraway (a dominant flavor in rye bread). The use of juniper berries will give a flavor like gin (similarly flavored with juniper berries). The juniper acts a bit like hops in the balance and flavor, providing some counterpoint to the sweet malt.',
            history:
              'An indigenous traditional style from Finland; a farmhouse tradition for at least 500 years, often brewed for festive occasions like summer weddings, and consumed within a week or two of brewing. A similar tradition exists in Estonia, where the beer is known as koduolu.',
            ingredients:
              'Malted barley along with malted and unmalted grains, often rye. Low hops. Juniper boughs used for lautering (traditionally in a hollowed-out log), but often producing a juniper/berry character. Often uses top-fermenting baker’s yeast in a fast, warm fermentation (German Weizen yeast is a good substitute). Not boiled; a long mash steep is used, with a separately added hop tea.',
            comparison:
              'Strong resemblance to Weizenbocks, but sweet and thick with a rye and juniper character.',

            vitalStatistics: {
              og: '1.076 - 1.120',
              fg: '1.016 - 1.020',
              abv: '7.0 - 11.0%',
              ibu: '7 - 15',
              srm: '4 - 22'
            }
          },
          commercialExamples: [
            {
              name: 'Now made year-round by several breweries in Finland.'
            }
          ],
          tags: [
            {
              tag: 'high-strength'
            },
            {
              tag: 'amber-color'
            },
            {
              tag: 'top-fermented'
            },
            {
              tag: 'central-europe'
            },
            {
              tag: 'historical-style'
            },
            {
              tag: 'spice'
            }
          ]
        }
      ]
    }
  ]
};

export default styles;
