import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import DashboardCard from "../shared/DashboardCard";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { IconDotsVertical } from "@tabler/icons-react";
import Link from "next/link";


const DailyActivity = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <DashboardCard title="Daily Activity" subtitle='Overview of Years' action={
      <>
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <IconDotsVertical size="21" stroke="1.5" />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Item 1</MenuItem>
          <MenuItem onClick={handleClose}>Item 2</MenuItem>
          <MenuItem onClick={handleClose}>Item 3</MenuItem>
        </Menu>
      </>
    }>
      <Timeline
        className="theme-timeline"
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        sx={{
          p: 0,
          mb: '-40px',
          '& .MuiTimelineConnector-root': {
            width: '1.1px',
            backgroundColor: '#e5eaef'
          },
          '& .MuiTimelineItem-root': {
            minHeight: '64px',
          },
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.5,
            paddingLeft: 0,
            fontSize: '14px',
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent>09:30 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><Typography variant="body2">Payment received from John Doe of $385.90</Typography></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>10:00 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body2">
              <Typography fontWeight="600" variant="body2" component="span">New sale recorded</Typography>{' '}
              <Link href="/">
                #ML-3467
              </Link>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>12:00 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><Typography variant="body2">Payment was made of $64.95 to Michael</Typography></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>09:30 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body2">
              <Typography fontWeight="600" variant="body2" component="span">New sale recorded</Typography>{' '}
              <Link href="/">
                #ML-3467
              </Link>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>09:30 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="error" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography fontWeight="600" variant="body2">New arrival recorded</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>12:00 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" variant="outlined" />
          </TimelineSeparator>
          <TimelineContent><Typography variant="body2">Payment Received</Typography></TimelineContent>
        </TimelineItem>
      </Timeline>
    </DashboardCard>
  );
};

export default DailyActivity;
