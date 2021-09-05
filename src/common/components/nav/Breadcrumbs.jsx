import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  //console.info('You clicked a breadcrumb.');
}



export const BreadcrumbComp = (crumbs) => {
  const classes = useStyles();
  //console.log(crumbs)
  let links = crumbs.crumbs.map((crumb, i) => <Link color="inherit" href={crumb.link} onClick={handleClick}>{crumb.name}</Link>)

  return (
    <div className={classes.root}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {links}
      </Breadcrumbs>
    </div>
  );
}
