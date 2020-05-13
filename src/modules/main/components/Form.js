import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  form: {
    flex: 1,
  },
}));

const Form = ({ children, onSubmit, ...props }) => {
  const styles = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
};

export default Form;
