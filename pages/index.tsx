import type { NextPage } from 'next';
import classes from './index.module.scss'; // --> need to know about this
import ArticleCard from '../src/components/ArticleCards/ArticleCard';
import FeaturedArticle from '../src/components/ArticleCards/FeaturedArticle';
import ARTICLES_LIST from './_ARTICLES_LIST';
import { useEffect, useState } from 'react';
import { getTheme } from '../src/utils/utils';
import { ContainerWidths, NavbarLayouts, THEMES } from '../src/shared/enums';
import { THEME } from '../src/constants/appConstants';
import Navbar from '../src/components/Navbar';

const Home: NextPage = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  useEffect(() => {
    getTheme(setTheme);
  }, [theme]);

  return (
    <div className={classes.home_layout_wrapper} style={{ background: (THEME as any)[theme].bg }}>
      <Navbar container={ContainerWidths.DEFAULT} type={NavbarLayouts.DEFAULT} />
      <div className="container">
        <FeaturedArticle article={ARTICLES_LIST[0].preview} path={ARTICLES_LIST[0].path} />
        {/* main article  taking full width*/}
        {/* list of rest of the articles below it, one beside the other */}
        <div className={classes.articles_wrap}>
          {
            ARTICLES_LIST.map((each, i) => (
              <ArticleCard article={each.preview} path={each.path} key={i} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
