import { Button, Paper, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByValue } from "../store/count-slice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <div
      style={{
        display: "grid",
        width: "100%",
        height: "80vh",
        placeItems: "center",
      }}
    >
      <Stack direction="row" gap={2}>
        <Button
          sx={{ borderRadius: "4px !important" }}
          onClick={() => dispatch(increment(23))}
          variant="contained"
          color="primary"
        >
          Increment
        </Button>
        <Paper elevation={2} sx={{ p: 2.5 }}>
          {count}
        </Paper>
        <Button
          onClick={() => dispatch(decrement())}
          variant="contained"
          color="primary"
        >
          Decrement
        </Button>
      </Stack>
    </div>
  );
}

export default Counter;
