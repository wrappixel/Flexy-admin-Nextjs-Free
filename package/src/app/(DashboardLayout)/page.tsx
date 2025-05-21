'use client'
import { Grid, Box } from '@mui/material'
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer'
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview'
import DailyActivity from '@/app/(DashboardLayout)/components/dashboard/DailyActivity'
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance'
import BlogCard from '@/app/(DashboardLayout)/components/dashboard/Blog'

const Dashboard = () => {
  return (
    <PageContainer title='Dashboard' description='this is Dashboard'>
      <Box>
        <Grid container spacing={0}>
          {/* ------------------------- row 1 ------------------------- */}
          <Grid
            size={{
              xs: 12,
              lg: 12,
            }}>
            <SalesOverview />
          </Grid>
          {/* ------------------------- row 2 ------------------------- */}
          <Grid
            size={{
              xs: 12,
              lg: 4,
            }}>
            <DailyActivity />
          </Grid>
          <Grid
            size={{
              xs: 12,
              lg: 8,
            }}>
            <ProductPerformance />
          </Grid>
          {/* ------------------------- row 3 ------------------------- */}
          <BlogCard />
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard
