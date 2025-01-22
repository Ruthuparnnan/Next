import {
  Card,
  Stack,
  CardHeader,
  CardContent,
  TextField,
  Container,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addHabit,
  deleteHabit,
  addHabitAsync,
  getLoading,
  getHabits,
  getTodos,
  fetchTodos,
} from "../store/habits-slice";

function HabitsList() {
  const [habit, setHabit] = useState("");
  const habitsList = useSelector(getHabits);
  const toDosList = useSelector(getTodos);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();
  const handleChangeHabit = (e) => {
    e.preventDefault();
    setHabit(e.target.value);
  };

  const onSubmit = (e, data) => {
    e.preventDefault();
    dispatch(
      // addHabit({
      //   title: "One percent better",
      //   habit,
      // })
      addHabitAsync({
        title: "Aync Habit",
        habit,
      })
    );
    setHabit("");
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  console.log("list of todos", toDosList);

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
          {loading && <h1>Loading pls wait...</h1>}
          {habitsList?.map((item, index) => (
            <Card key={index} sx={{ border: "1px solid #929292" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <CardHeader title={item?.title} />
                <Button
                  variant="outlined"
                  color="error"
                  sx={{}}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(deleteHabit({ id: item?.id }));
                  }}
                >
                  Delete
                </Button>
              </Box>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>{item?.habit}</Typography>
                  <Typography>
                    {format(new Date(item?.createdAt), "dd MMMM yyyy hh:mm:aa")}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </form>
    </Container>
  );
}

export default HabitsList;
