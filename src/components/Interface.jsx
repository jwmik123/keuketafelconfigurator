import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { useConfigurator } from "../contexts/Configurator";
export const Interface = () => {
  // const { tableWidth, setTableWidth, legs, setLegs, legsColor, setLegsColor } =
  //   useConfigurator();

  const { legs, setLegs, legsColor, setLegsColor, tableWidth, setTableWidth } =
    useConfigurator();
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
      p={3}
    >
      <Stack spacing={3}>
        <Typography variant="h4">Keukentafel Configurator</Typography>
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Tafel breedte</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={50}
              max={200}
              value={tableWidth}
              onChange={(e) => setTableWidth(e.target.value)}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Box>
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Tafelpoten Layout</FormLabel>
            <RadioGroup
              value={legs}
              onChange={(e) => setLegs(parseInt(e.target.value))}
            >
              <FormControlLabel
                value={0}
                control={<Radio />}
                label="Standaard"
              />
              <FormControlLabel value={1} control={<Radio />} label="Solid" />
              <FormControlLabel value={2} control={<Radio />} label="Design" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Tafelpoten Kleur</FormLabel>
            <RadioGroup
              value={legsColor}
              onChange={(e) => setLegsColor(e.target.value)}
            >
              <FormControlLabel
                value={"#777777"}
                control={<Radio />}
                label="Zwart"
              />
              <FormControlLabel
                value={"#ECECEC"}
                control={<Radio />}
                label="Zilver"
              />
              <FormControlLabel
                value={"#C9BD71"}
                control={<Radio />}
                label="Goud"
              />
              <FormControlLabel
                value={"#C9A3B9"}
                control={<Radio />}
                label="Rose Goud"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};

export default Interface;
