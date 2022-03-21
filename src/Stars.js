import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import SubmitButtton from "./SubmitButtton";

const Stars = ({ onSubmitPress, setRating }) => {
  const [disabled, setDisabled] = useState(true);

  const stars = [1, 2, 3, 4, 5];
  const [color, setColor] = useState({
    active: "#fb7413",
    default: "#252d37",
    element: null,
  });

  const onButtonPress = (e, index) => {
    if (e.target.value === null) {
      setDisabled(true);
    } else {
      setRating(e.target.value);
      setDisabled(false);
    }
    setColor(() => ({
      ...color,
      element: index,
    }));
  };

  return (
    <Box>
      <Box my="30px" d="flex" justifyContent="space-between">
        {stars.map((star, i) => (
          <Button
            key={i}
            bgColor={color.element === i ? color.active : color.default}
            onClick={(e) => onButtonPress(e, i)}
            value={star}
            _focus={{ outline: "none" }}
            _hover={{ backgroundColor: "hsl(217, 12%, 63%)" }}
            borderRadius="100%"
            p={{ base: "1.3rem", md: "1.7rem" }}
            w="2.3rem"
            h="2.3rem"
            color="white"
            lineHeight="-2.3rem"
            boxSizing="border-box"
          >
            {star}
          </Button>
        ))}
      </Box>
      <SubmitButtton disabled={disabled} onSubmitPress={onSubmitPress} />
    </Box>
  );
};

export default Stars;
