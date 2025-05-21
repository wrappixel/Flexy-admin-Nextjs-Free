import React from 'react'
import { Card, CardContent, Typography, Button, Grid } from '@mui/material'
import BaseCard from '../shared/BaseCard'

const blogs = [
  {
    img: '/images/backgrounds/u2.jpg',
    title: 'Super awesome, Next 14 is coming soon!',
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btncolor: 'error.main',
  },
  {
    img: '/images/backgrounds/u3.jpg',
    title: 'Super awesome, Next 14 is coming soon!',
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btncolor: 'warning.main',
  },
  {
    img: '/images/backgrounds/u4.jpg',
    title: 'Super awesome, Next 14 is coming soon!',
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btncolor: 'primary.main',
  },
]

const BlogCard = () => {
  return (
    <Grid container>
      {blogs.map((blog, index) => (
        <Grid
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'stretch',
          }}
          size={{
            xs: 12,
            lg: 4,
          }}>
          <Card
            sx={{
              p: 0,
              width: '100%',
            }}>
            <img
              src={blog.img}
              alt='img'
              style={{ width: '100%', height: '250px' }}
            />
            <CardContent
              sx={{
                paddingLeft: '30px',
                paddingRight: '30px',
              }}>
              <Typography variant='h4'>{blog.title}</Typography>
              <Typography
                color='textSecondary'
                mt={1}
                fontSize='14px'
                fontWeight={400}>
                {blog.subtitle}
              </Typography>
              <Button
                variant='contained'
                sx={{
                  mt: '15px',
                  backgroundColor: blog.btncolor,
                  '&:hover': {
                    backgroundColor: blog.btncolor,
                  },
                }}>
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default BlogCard
