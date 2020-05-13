import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import Form from './Form';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  input: {
    color: theme.palette.primary.contrastText,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppBar() {
  const classes = useStyles();
  const [showSearchField, setShowSearchField] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const toggleSearchField = () => setShowSearchField(!showSearchField);

  const handleSearchChange = ({ target }) => setSearchValue(target.value);

  const handleSubmitSearch = () => {
    toggleSearchField();

    if (showSearchField) {
      console.log(`SEARCH FOR ${searchValue}`);
      setSearchValue('');
    }
  };

  const handleSearchBlur = (event) => {
    const targetAria =
      event.relatedTarget && event.relatedTarget.getAttribute('aria-label');

    if (!targetAria || targetAria !== 'search') toggleSearchField();
  };

  return (
    <div className={classes.root}>
      <MuiAppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          {showSearchField ? (
            <Form onSubmit={handleSubmitSearch}>
              <InputBase
                className={classes.input}
                onChange={handleSearchChange}
                onBlur={handleSearchBlur}
                value={searchValue}
                placeholder="Busque seu vinho de hoje"
                inputProps={{ 'aria-label': 'search' }}
                autoFocus
                fullWidth
              />
            </Form>
          ) : (
            <Typography className={classes.title} variant="h6">
              Bem vindo!
            </Typography>
          )}

          <IconButton
            className={classes.iconButton}
            onClick={handleSubmitSearch}
            type="submit"
            color="inherit"
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
}
