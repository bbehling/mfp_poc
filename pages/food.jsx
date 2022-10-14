import { TextInput, Button, NumberInput } from "@mantine/core";
import { useEffect, useState } from "react";

export default function Food(props) {
  const [foodName, setFoodName] = useState("");
  const [macro, setMacro] = useState("");
  const [micro, setMicro] = useState("");
  const [calories, setCalories] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const CreateUUID = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
  };

  return (
    <div>
      <TextInput label="Enter Food Name" onChange={(e) => setFoodName(e.target.value)} value={foodName} />
      <TextInput label="Enter Macronutrients" onChange={(e) => setMacro(e.target.value)} value={macro} />
      <TextInput label="Enter Micronutrients" onChange={(e) => setMicro(e.target.value)} value={micro} />
      <TextInput label="Enter Calories" type="number" onChange={(e) => setCalories(e.target.value)} value={calories} />
      <TextInput label="Image URL" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} />
      <Button
        variant="light"
        color="green"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => {
          props.addData({
            id: CreateUUID(),
            foodName: foodName,
            imageUrl: imageUrl,
            micro: micro,
            macro: macro,
            calories: parseInt(calories),
          });
          setFoodName("");
          setMacro("");
          setMicro("");
          setCalories("");
          setImageUrl("");
        }}
      >
        Add Food
      </Button>
    </div>
  );
}
