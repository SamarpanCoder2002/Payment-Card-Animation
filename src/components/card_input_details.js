import {
  Container,
  makeStyles,
  Typography,
  ListItem,
  List,
  Divider,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/common.css";
import {
  CARD_NUMBER_ACTION,
  ROTATE_ACTION,
  MONTH_ACTION,
  YEAR_ACTION,
  CARD_HOLDER_NAME_ACTION,
  CVV_ACTION,
} from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  cardDetailsTake: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
    width: "100%",
    height: "300px",
  },
  cardDetailsHeading: {
    fontSize: "20px",
    paddingBottom: "10px",
    textAlign: "center",
  },
  middleRowInput: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  cardMonthInput: {
    width: "40%",
  },
  cardYearInput: {
    width: "40%",
  },
  cardNumberInput: {
    width: "100%",
  },
  cardHolderNameInput: {
    width: "100%",
  },
  cardCVVInput: {
    width: "15%",
  },
}));

export default function CardInputDetailsSection() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [cardNumberValue, setCardNumberValue] = useState("");

  const currentValue = useSelector((state) => state);

  function handleFlip(shouldRotate) {
    console.log("Current Value: " + currentValue.rotate);

    if (shouldRotate && !currentValue.rotate) dispatch({ type: ROTATE_ACTION });
    else if (!shouldRotate && currentValue.rotate)
      dispatch({ type: ROTATE_ACTION });
  }

  function addCardNumber(e) {
    const takeNumber =
      e.target.value.length > 0
        ? e.target.value.toString().split("-").join("")
        : e.target.value;

    if (
      e.target.value.length > 0 &&
      e.target.value.length < 19 &&
      takeNumber.length % 4 === 0
    ) {
      setCardNumberValue(e.target.value + "-");
      nowDispatchToShowInCard(e.target.value + "-");
    } else {
      setCardNumberValue(e.target.value);
      nowDispatchToShowInCard(e.target.value);
    }

    function nowDispatchToShowInCard(value) {
      dispatch({
        type: CARD_NUMBER_ACTION,
        payload: {
          cardNumber: value,
        },
      });
    }
  }

  function addMonth(e) {
    dispatch({
      type: MONTH_ACTION,
      payload: {
        newMonth: e.target.value,
      },
    });
  }

  function addYear(e) {
    dispatch({
      type: YEAR_ACTION,
      payload: {
        newYear: e.target.value,
      },
    });
  }

  function addCardHolder(e) {
    dispatch({
      type: CARD_HOLDER_NAME_ACTION,
      payload: {
        newHolderName: e.target.value,
      },
    });
  }

  function addCVV(e) {
    dispatch({
      type: CVV_ACTION,
      payload: {
        newCVV: e.target.value,
      },
    });
  }

  return (
    <Container className={classes.cardDetailsTake}>
      <List>
        <Typography className={classes.cardDetailsHeading}>
          <b>Card Details</b>
        </Typography>
        <Divider />

        <ListItem>
          <TextField
            required
            label="Card Number"
            variant="standard"
            type="text"
            value={cardNumberValue}
            onClick={() => handleFlip(false)}
            inputProps={{
              pattern: "[0-9]*",
              maxLength: 19,
            }}
            onChange={addCardNumber}
            className={classes.cardNumberInput}
          ></TextField>
        </ListItem>

        <ListItem className={classes.middleRowInput}>
          <TextField
            required
            label="Expiry Month"
            variant="standard"
            type="text"
            onClick={() => handleFlip(false)}
            onChange={addMonth}
            inputProps={{
              pattern: "[0-9]*",
              maxLength: 2,
            }}
            className={classes.cardMonthInput}
          ></TextField>
          <TextField
            required
            label="Expiry Year"
            variant="standard"
            type="text"
            onChange={addYear}
            onClick={() => handleFlip(false)}
            inputProps={{
              pattern: "[0-9]*",
              maxLength: 4,
            }}
            className={classes.cardYearInput}
          ></TextField>
        </ListItem>

        <ListItem>
          <TextField
            required
            label="Card Holder Name"
            type="text"
            variant="standard"
            onChange={addCardHolder}
            onClick={() => handleFlip(false)}
            className={classes.cardHolderNameInput}
          ></TextField>
        </ListItem>

        <ListItem>
          <TextField
            required
            label="CVV"
            type="text"
            variant="standard"
            onChange={addCVV}
            inputProps={{
              pattern: "[0-9]*",
              maxLength: 3,
            }}
            onClick={() => handleFlip(true)}
            className={classes.cardCVVInput}
          ></TextField>
        </ListItem>
      </List>
    </Container>
  );
}
