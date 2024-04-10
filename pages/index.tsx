/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import { HeroImage } from "../src/components/Hero";
import ArticleCard from '../src/components/ArticleCards/ArticleCard';
import { SORTED_ARTICLES_BY_DATE } from '../BLOG_CONSTANTS/_ARTICLES_LIST';
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureAricles";
import { ArticleSection } from "../src/components/ArticleCards/ArticleSection";


const Home = () => {
  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      <HeroImage 
      heading="The Ultimate Travel Blog"
      description="Discover the best locations, food, and camping spots for your European campervan adventure." />
      <ArticleSection 
      tagline="Latest"
      heading="Explore the Best Destinations"
      description="Discover amazing places to visit in Europe."
      
      />
      <div className="container mx-auto lg:px-[15px] px-0">
        <div className={'flex flex-wrap'}>
          <FeaturedArticleSection />
          <h1 className='px-3 w-full mb-5 text-xl md:text-3xl font-medium'>Checkout the below articles on how to use different layouts and components</h1>
          <hr className='border-1 mb-5 w-[98%] mx-auto' />
          <HomeNonFeatureArticles />
        </div>
      </div>
    </PageLayout>
  )
}

export default Home