import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ShowOnScroll(props) {
  const { children } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="up" in={trigger}>
      <div className={classes.root}>{children}</div>
    </Slide>
  );
}

export default ShowOnScroll;
In this example, the useScrollTrigger hook is used to detect when the user has scrolled 100 pixels down the page. When this happens, the Slide component is rendered with its in prop set to true, causing it to slide up onto the screen.

You can use this component in your app like this:

jsx
Copy code
import React from 'react';
import ShowOnScroll from './ShowOnScroll';

function App() {
  return (
    <div>
      <h1>Scroll down to see the button!</h1>
      <ShowOnScroll>
        <button>Click me!</button>
      </ShowOnScroll>
    </div>
  );
}

export default App;
In this example, the button component will be hidden until the user scrolls down the page. Once they've scrolled 100 pixels, the button will slide up onto the screen.





