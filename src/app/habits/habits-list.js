import {
  Card,
  Stack,
  CardHeader,
  CardContent,
  TextField,
  Container,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHabit } from "../store/habits-slice";

function HabitsList() {
  const [habit, setHabit] = useState("");
  const habitsList = useSelector((state) => state.goodHabits);
  const dispatch = useDispatch();
  const handleChangeHabit = (e) => {
    e.preventDefault();
    setHabit(e.target.value);
  };

  const onSubmit = (e, data) => {
    e.preventDefault();
    dispatch(
      addHabit({
        title: "One percent better",
        habit,
      })
    );
    setHabit("");
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={onSubmit}>
        <Stack spacing={2}>
          <Stack
            spacing={2}
            direction="row"
            sx={{ height: "100%", width: "100%", mb: 2 }}
          >
            <TextField
              value={habit}
              onChange={handleChangeHabit}
              placeholder="Add a habit +"
              label="Habit name"
              sx={{ width: "100%" }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ height: "auto" }}
            >
              Add
            </Button>
          </Stack>
          {habitsList?.map((item, index) => (
            <Card key={index} sx={{ border: "1px solid #929292" }}>
              <CardHeader title={item?.title} />
              <CardContent>{item?.habit}</CardContent>
            </Card>
          ))}
        </Stack>
      </form>
    </Container>
  );
}

export default HabitsList;
