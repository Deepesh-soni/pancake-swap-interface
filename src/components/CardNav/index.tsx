// import React from 'react'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'
// import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

// const StyledNav = styled.div`
//   margin-bottom: 40px;
// `

// function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
//   const TranslateString = useI18n()
//   return (
//     <StyledNav>
//       <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
//         <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
//           {TranslateString(1142, 'Swap')}
//         </ButtonMenuItem>
//         <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
//           {TranslateString(262, 'Liquidity')}
//         </ButtonMenuItem>
//         <ButtonMenuItem
//           id="pool-nav-link"
//           as="a"
//           href="https://www.binance.org/en/bridge?utm_source=PancakeSwap"
//           target="_blank"
//           rel="noreferrer noopener"
//         >
//           Bridge
//         </ButtonMenuItem>
//       </ButtonMenu>
//     </StyledNav>
//   )
// }

// export default Nav


import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import Pool from '../../pages/Pool'
import Swap from '../../pages/Swap'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Nav() {
  const classes = useStyles();
  const TranslateString = useI18n()
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label={TranslateString(1142, 'Swap')} icon={<SwapHorizIcon />} {...a11yProps(0)} />
          <Tab label={TranslateString(262, 'Liquidity')} icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="Bridge" icon={<PersonPinIcon />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Swap/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Pool/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Bridge
      </TabPanel>
    </div>
  );
}
