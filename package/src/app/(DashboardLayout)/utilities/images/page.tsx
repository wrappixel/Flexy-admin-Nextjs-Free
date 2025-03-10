'use client';
import { Grid2 as Grid, ImageList, ImageListItem, Paper } from "@mui/material";
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Image from "next/image";

import img1 from "/images/backgrounds/u1.jpg";
import img2 from "/images/backgrounds/u3.jpg";
import img3 from "/images/backgrounds/u4.jpg";
import img4 from "/images/big/img5.jpg";
import img5 from "/images/big/img6.jpg";
import img6 from "/images/big/img7.jpg";
import img7 from "/images/big/img8.jpg";
const itemData = [
  {
    img: '/images/backgrounds/u1.jpg',
    rows: 2,
    cols: 2,
  },
  {
    img: '/images/backgrounds/u3.jpg',
    title: "Burger",
  },
  {
    img: '/images/backgrounds/u4.jpg',
  },
  {
    img: '/images/backgrounds/u3.jpg',
    cols: 2,
  },
  {
    img: '/images/big/img5.jpg',
    cols: 2,
    rows: 2,
  },
  {
    img: '/images/backgrounds/u4.jpg',
    cols: 2,
    rows: 2,
  },

  {
    img: '/images/big/img7.jpg',
  },
  {
    img: '/images/big/img6.jpg',
    title: "Fern",
  },
  {
    img: '/images/big/img8.jpg',
    rows: 2,
    cols: 2,
  },
  {
    img: '/images/backgrounds/u3.jpg',
    cols: 2,
  },

];
const Images = () => {
  return (
    (<Grid container spacing={0}>
      <Grid
        size={{
          xs: 12,
          lg: 12
        }}>
        <BaseCard title="Grid Image">
          <ImageList

            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {itemData.map((itemimg, index) => (
              <ImageListItem
                key={index}
                cols={itemimg.cols || 1}
                rows={itemimg.rows || 1}
              >
                <Image
                  src={itemimg.img}
                  alt="img"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}

                  fill
                />
              </ImageListItem>
            ))}
          </ImageList>
        </BaseCard>
      </Grid>
    </Grid>)
  );
};

export default Images;
