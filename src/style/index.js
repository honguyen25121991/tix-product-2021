import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  content: {
    backgroundColor: "red",
    color: "#ffffff",
    "& span": {
      fontSize: 15,
    },
  },
  title: {
    fontSize: 50,
  },
}));

export default useStyle;
