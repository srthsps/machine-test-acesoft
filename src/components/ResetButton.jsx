import { Button } from "@mui/material";

const ResetButton = ({ action }) => {
  return (
    <Button
      onClick={action}
      sx={{
        backgroundColor: "#dc2c2c",
        color: "#fff",
      }}
    >
      Reset
    </Button>
  );
};

export default ResetButton;
