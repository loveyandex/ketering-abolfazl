import React from 'react';
import Nav from "./Nav"
import Head from "next/head";
import Link from "next/link"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Search from "./Search";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Container from '@material-ui/core/Container';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
   
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    
  }));




        export default function CenteredGrid() {
            const classes = useStyles();
            return (
        <>

<Head>
          <link
            rel="preload"
            href="/fonts/dana/dana-regular.woff"
            as="font"
            crossOrigin=""
          />
      
        </Head>

<header>

  <div className={classes.root}>
      <Grid container spacing={3} >
        <Grid item md={4} xs={6} className="grid-logo">
            <div className="col-first">
            <Link   href="/">
              
          <img className="logo" src="../UNIKTVAL-LOGO.png" />

          </Link>
          <h2 className="name-shop">کترینگ بزرگ احمد</h2>

          </div>
        </Grid>
        <Grid item md={4}  xs={12} className="grid-search">

       <Search></Search>

        </Grid>
        <Grid item md={4}  xs={6} className="grid-cart">
            <div>
              
            <IconButton aria-label="cart"  className="account-box">
            <PermIdentityIcon    className="account"/>
            </IconButton>

            <IconButton aria-label="cart"  className="account-box">
             <Badge badgeContent={4} color="primary">
             <AddShoppingCartIcon className="account"/>
      </Badge>
      </IconButton>

            
            </div>
        </Grid>
     
      </Grid>

    </div>
    </header>


      <Grid className="nav-backgr" container spacing={3}>
        <Grid item md={1} sm={6}>
        <IconButton aria-label="cart"  className="nav-hamber">
           <MenuIcon/>
           </IconButton>
        </Grid>
        <Grid item md={1} sm={6}>
        <p>دسته بندی غذا ها </p>
        </Grid>
      </Grid>

    <Grid container>
    <Grid item md={12} sm={12} className="sabt-logo">

     <div >
     <Link   href="/">
              
              <img className="logo" src="../UNIKTVAL-LOGO.png" />
    
             </Link>

             <p>پیش سفارش ثبت کنید</p>
<div class="search-center">
             <Search ></Search>
             </div>
     </div>
     </Grid>
    </Grid>
        </>
            
    )
}