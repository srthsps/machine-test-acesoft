import { Card, Grid, IconButton, Typography } from "@mui/material";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const CounterCard = ({ idx, increase, decrease, currentCounter }) => {
  return (
    <Card
      sx={{
        borderRadius: "5px",
        border: "1px solid #333",
        p: 1,
      }}
    >
      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            textAlign: "center",
            margin: "auto",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
            }}
          >
            Counter {idx + 1}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              border: "1px solid #333",
            }}
          >
            <FaMinus onClick={() => decrease(idx + 1)} />
          </IconButton>
          <Typography>{currentCounter}</Typography>
          <IconButton
            onClick={() => increase(idx + 1)}
            sx={{
              border: "1px solid #333",
            }}
          >
            <FaPlus />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CounterCard;
