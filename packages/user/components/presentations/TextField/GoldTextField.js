import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  TextFieldStyle: {
    width: "48ch",
    marginTop: "15px",
    [theme.breakpoints.down("xs")]: {
      width: "33ch",
      marginTop: "15px",
    },
  },
}));
const GoldTextField = ({
  key,
  id,
  label,
  name,
  type,
  variant,
  color,
  autoComplete,
}) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.TextFieldStyle}
      key={key}
      id={id}
      label={label}
      name={name}
      inputProps={{ style: { fontFamily: "Arial" } }}
      InputLabelProps={{ style: { color: "#E09C26" } }}
      type={type}
      multiline
      //onChange={handleChange}
      variant={variant}
      color={color}
      autoComplete={autoComplete}
    />
  );
};

export default GoldTextField;
