import {
  BackgroundImage,
  Box,
  Button,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import useArticles from "../../hooks/useArticles";
import classes from "../../styles/TopCarousel.module.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

const TopCarousel = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1407px)");
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const { featured } = useArticles();
  const latestFeatured = featured.slice(-5).reverse();

  const handleThumbnailClick = (index: number) => {
    if (embla) {
      embla.scrollTo(index);
    }
  };

  return (
    <Group justify="center" wrap="nowrap" bg="black" p={20} mt={-16} mx={-16}>
      {/* Thumbnails */}
      <Stack
        align="center"
        justify="space-between"
        gap="xs"
        h={450}
        visibleFrom="xl"
      >
        {latestFeatured.map((featuredArticle, index) => (
          <Image
            className={classes.thumbnail}
            key={featuredArticle.id}
            src={featuredArticle.imageURL}
            miw={80}
            maw={120}
            onClick={() => handleThumbnailClick(index)}
            style={{ cursor: "pointer" }}
            radius="xs"
          />
        ))}
      </Stack>

      {/* Carousel's featured articles */}
      <Carousel
        slideSize={{ base: "90%", md: "60%" }}
        height={450}
        align="start"
        slideGap="md"
        loop
        withIndicators
        withControls={false}
        getEmblaApi={setEmbla}
        w="100%"
        styles={
          isSmallScreen
            ? {
                indicator: {
                  width: 10,
                  height: 10,
                  backgroundColor: "white",
                  transition: "background-color 150ms ease",
                },
              }
            : {}
        }
      >
        {latestFeatured.map((featuredArticle) => (
          <Carousel.Slide key={featuredArticle.id}>
            <Link
              to={`${featuredArticle.review ? "reviews" : "articles"}/${
                featuredArticle.id
              }`}
              style={{ textDecoration: "none" }}
            >
              <Box className={classes.featuredArticle}>
                <BackgroundImage
                  src={featuredArticle.imageURL}
                  h={450}
                  style={{
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                    borderTopLeftRadius: "0",
                    borderBottomLeftRadius: "0",
                    overflow: "hidden",
                  }}
                >
                  <Box className={classes.textBox}>
                    <div>
                      <Title>{featuredArticle.title}</Title>
                      <Text>{featuredArticle.description}</Text>
                    </div>
                    <Button maw={150} radius="xs" mb={{ base: "lg", md: 0 }}>
                      Read more
                    </Button>
                  </Box>
                </BackgroundImage>
              </Box>
            </Link>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Group>
  );
};

export default TopCarousel;
