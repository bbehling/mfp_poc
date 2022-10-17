import { useEffect, useState } from "react";
import { Grid, Container, Card, Image, Text, Button, Group, createStyles, Radio } from "@mantine/core";
import Food from "./food";

const useStyles = createStyles(() => ({
  deleteButton: { position: "absolute", bottom: 10, width: "90%" },
}));

export default function Foods(props) {
  const { classes } = useStyles();
  const [totalCalories, setTotalCalories] = useState(0);
  const [foods, setFoods] = useState(() => {
    return props.foods;
  }, null);

  useEffect(() => {
    let calories = 0;
    foods.forEach((food) => {
      calories += food.calories;
    });
    setTotalCalories(calories);
  });

  const deleteData = async (id) => {
    // if we had an API, make a call to delete the food item
    const response = await (await fetch("/api/food", { method: "DELETE" })).json();
    setFoods(foods.filter((food) => food.id != id));
  };

  const addData = async (food) => {
    // if we had an API, make a call to post a new food item
    const response = await (await fetch("/api/food", { method: "POST" })).json();

    const foodObj = {
      id: food.id,
      name: food.foodName,
      calories: food.calories,
      macro: food.macro,
      micro: food.micro,
      image: food.imageUrl, //CORB (cross origin read blocking) issue when adding a URL. This should't be an issue with an API.
    };

    setFoods([...foods, foodObj]);
  };
  return (
    <Container my="md">
      <Grid>
        {foods.map((food, i) => (
          //segment foods based on color. if a food is less 200 calories, consider it a snack
          <Grid.Col
            key={i}
            sm={4}
            radius="md"
            style={food.calories < 200 ? { backgroundColor: "beige" } : { backgroundColor: "aliceblue" }}
          >
            <Card shadow="sm" p="lg" radius="md" withBorder style={{ minHeight: 580 }}>
              <Card.Section>
                <Image src={food.image} height={160} alt="Food" />
              </Card.Section>
              <Group position="center" mt="md" mb="xs">
                <Text weight={600}>Calories: {food.calories}</Text>
              </Group>
              <Group position="center" mt="md" mb="xs">
                <Text weight={600}>{food.name}</Text>
              </Group>
              <Group position="center" mt="md" mb="xs">
                <Text weight={300}>Macronutrients</Text>
                <Text size="sm" color="dimmed">
                  {food.macro}
                </Text>
                <Text weight={300}>Micronutrients</Text>
                <Text size="sm" color="dimmed" style={{ paddingBottom: 20 }}>
                  {food.micro}
                </Text>
                <Button
                  className={classes.deleteButton}
                  variant="light"
                  color="red"
                  fullWidth
                  mt="md"
                  radius="md"
                  onClick={() => {
                    deleteData(food.id);
                  }}
                >
                  Delete
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
        <Grid.Col sm={4}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Text weight={300}>Total Daily Calories: {totalCalories}</Text>
          </Card>
        </Grid.Col>
        <Grid.Col sm={4}>
          <Food addData={addData}></Food>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
