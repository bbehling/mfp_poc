import { TextInput, Button, NumberInput } from "@mantine/core";
import { useState } from "react";

export default function Food(props) {
  const [foodName, setFoodName] = useState("");
  const [macro, setMacro] = useState("");
  const [micro, setMicro] = useState("");
  const [calories, setCalories] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div>
      <TextInput label="Enter Food Name" onChange={(e) => setFoodName(e.target.value)} />
      <TextInput label="Enter Macronutrients" onChange={(e) => setMacro(e.target.value)} />
      <TextInput label="Enter Micronutrients" onChange={(e) => setMicro(e.target.value)} />
      <TextInput label="Enter Calories" type="number" onChange={(e) => setCalories(e.target.value)} />
      <TextInput label="Image URL" onChange={(e) => setImageUrl(e.target.value)} />
      <Button
        variant="light"
        color="green"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => {
          props.addData({
            foodName: foodName,
            imageUrl: imageUrl,
            micro: micro,
            macro: macro,
            calories: parseInt(calories),
          });
        }}
      >
        Add Food
      </Button>
    </div>
  );
}
