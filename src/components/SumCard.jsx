import { Card, Typography } from "@mui/material";

const SumCard = ({ amount }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#fff4d6",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Typography>Sum</Typography>
      <Typography>{amount}</Typography>
    </Card>
  );
};

export default SumCard;
