import { Card, Grid, Typography } from "@mui/material";
import CounterCard from "../components/CounterCard";
import ResetButton from "../components/ResetButton";
import SumCard from "../components/SumCard";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  reset,
  incrementByIdx,
  decreaseByIdx,
} from "../slices/updateValueSlice";

const Task2 = () => {
  const countervalue = useSelector((state) => state.counter?.value);
  const error = useSelector((state) => state.counter?.error);

  const valuesRn = useSelector((state) => state.counter?.values);

  const [pageTitle, setPageTitle] = useState("");

  const dispatch = useDispatch();

  //   const InCreaseByOne = () => {
  //     dispatch(increment());
  //   };

  //   const DecreaseByOne = () => {
  //     dispatch(decrement());
  //   };

  const ResetValues = () => {
    dispatch(reset());
  };

  useEffect(() => {
    setTimeout(() => {
      setPageTitle("Page Title");
    }, [3000]);
  }, []);

  const InCreaseByID = (idx) => {
    dispatch(incrementByIdx());
  };

  const DecreaseByid = (idx) => {
    dispatch(decreaseByIdx(idx));
  };

  return (
    <Card
      sx={{
        borderRadius: "15px",
        maxWidth: "600px",
        border: "1px solid #333",
        p: 4,
        mt: 6,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          mb: 2,
        }}
        variant="h5"
      >
        {pageTitle}
      </Typography>
      {[1, 2, 3, 4]?.map((_, idx) => {
        return (
          <CounterCard
            key={idx}
            idx={idx}
            increase={InCreaseByID}
            decrease={DecreaseByid}
            countervalue={countervalue}
          />
        );
      })}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ResetButton action={ResetValues} />
      </Grid>
      <SumCard />
    </Card>
  );
};

export default Task2;
