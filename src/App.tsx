import {Text, Button, Stack} from "@mantine/core";
import {ThemeProvider} from "./ThemeProvider";
import React from "react";

export default function App() {
  return (
    <ThemeProvider>
      <Stack align="center" mt={50}>
        <Text size="x1" weight={500}>
          Welcome to Mantine!
          </Text>
          <Button>Click Here</Button>  
        </Stack>
    </ThemeProvider>
  );
}