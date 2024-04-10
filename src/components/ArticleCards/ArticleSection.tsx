"use client";

import { Button, ChevronRight } from "@relume_io/relume-ui";
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";

type BlogPost = {
  url: string;
  image: ImageProps;
  category: string;
  readTime: string;
  title: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
  blogPosts: BlogPost[];
};

export type ArticleSectionProps = React.ComponentPropsWithoutRef<"section"> &
  Props;

export const ArticleSection = (props: ArticleSectionProps) => {
  const { tagline, heading, description, button, blogPosts } = {
    ...Blog44Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center mb-10">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <a
              key={`${post.title}-${index}`}
              href={post.url}
              className="flex size-full flex-col items-center justify-start border border-border-primary ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
            >
              <div className="relative w-full overflow-hidden pt-[66%]">
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6">
                <div className="mb-4 flex items-center">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    {post.category}
                  </p>
                  <p className="inline text-sm font-semibold">
                    {post.readTime}
                  </p>
                </div>

                <div className="flex w-full flex-col items-start justify-start">
                  <h2 className="mb-2 text-xl font-bold md:text-2xl">
                    {post.title}
                  </h2>
                  <p>{post.description}</p>
                  <Button
                    variant={post.button.variant}
                    size={post.button.size}
                    iconRight={post.button.iconRight}
                    iconLeft={post.button.iconLeft}
                    className="mt-6 flex items-center justify-center gap-x-1"
                  >
                    {post.button.title}
                  </Button>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center mb-10">
          <Button
            variant={button.variant}
            size={button.size}
            iconRight={button.iconRight}
            iconLeft={button.iconLeft}
            className="mt-12"
          >
            {button.title}
          </Button>
        </div>
      </div>
    </section>
  );
};

export const Blog44Defaults: Blog44Props = {
  tagline: "Blog",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  button: { title: "View all", variant: "secondary" },
  blogPosts: [
    {
      url: "#",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 1",
      },
      category: "Category",
      readTime: "5 min read",
      title: "Blog title heading will go here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      button: {
        title: "Read more",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
    {
      url: "#",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 2",
      },
      category: "Category",
      readTime: "5 min read",
      title: "Blog title heading will go here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      button: {
        title: "Read more",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
    {
      url: "#",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 3",
      },
      category: "Category",
      readTime: "5 min read",
      title: "Blog title heading will go here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      button: {
        title: "Read more",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
  ],
};
