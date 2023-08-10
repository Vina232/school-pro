import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  footerLinkStyle: {
    color: "black",
    "&:hover": {
      color: "black",
    },
  },
  ulStyle: {
    listStyle: "none",
    textAlign: "left",
    padding: 0,
  },
  gridContainerStyle: {
    display: "flex",
    justifyContent: "",
    margin: "50px",
  },
}));
