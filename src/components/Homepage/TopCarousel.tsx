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
import featuredArticles from "../../mock/featuredArticles";
import classes from "../../styles/TopCarousel.module.css";

const TopCarousel = () => {
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);

  const handleThumbnailClick = (index: number) => {
    if (embla) {
      embla.scrollTo(index);
    }
  };

  return (
    <Group justify="center" wrap="nowrap">
      {/* Thumbnails */}
      <Stack align="stretch" justify="space-between" gap="md" h={450}>
        {featuredArticles.map((featuredArticle, index) => (
          <Image
            className={classes.thumbnail}
            key={featuredArticle.id}
            src={featuredArticle.imageURL}
            w={140}
            onClick={() => handleThumbnailClick(index)}
            style={{ cursor: "pointer" }}
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
        {featuredArticles.map((featuredArticle) => (
          <Carousel.Slide key={featuredArticle.id}>
            <Box className={classes.featuredArticle}>
              <BackgroundImage src={featuredArticle.imageURL} h={450}>
                <Box className={classes.textBox}>
                  <div>
                    <Title>{featuredArticle.title}</Title>
                    <Text>{featuredArticle.description}</Text>
                  </div>
                  <Button>Read more...</Button>
                </Box>
              </BackgroundImage>
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Group>
  );
};

export default TopCarousel;
