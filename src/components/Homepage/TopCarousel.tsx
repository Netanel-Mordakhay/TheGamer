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

const TopCarousel = () => {
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
      <Stack align="stretch" justify="space-between" gap="xs" h={450}>
        {latestFeatured.map((featuredArticle, index) => (
          <Image
            className={classes.thumbnail}
            key={featuredArticle.id}
            src={featuredArticle.imageURL}
            w={120}
            onClick={() => handleThumbnailClick(index)}
            style={{ cursor: "pointer" }}
            radius="xs"
          />
        ))}
      </Stack>

      {/* Carousel's featured articles */}
      <Carousel
        slideSize="70%"
        height={450}
        align="start"
        slideGap="md"
        loop
        withControls={false}
        getEmblaApi={setEmbla}
        w="100%"
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
                    <Button
                      variant="gradient"
                      gradient={{ from: "orange", to: "yellow", deg: 90 }}
                      maw={150}
                      radius="lg"
                    >
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
