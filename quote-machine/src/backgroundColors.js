import tinycolor from 'tinycolor2';

function createColorTheme(color) {
    return {
        main: color,
        dark: tinycolor(color)
            .darken(8)
            .toString()
    }
}

export default [ 

  // Sunflower yellow
  { ...createColorTheme("#FFC312") }, 
  // Orange
  { ...createColorTheme("#EE5A24") },
  // Mint green
  { ...createColorTheme("#2ed573") },
  // Grass green
  { ...createColorTheme("#009432") },
  // Blue martina
  { ...createColorTheme("#12CBC4") },
  // Blue marine
  { ...createColorTheme("#0652DD") },
  // Turqish aqua
  { ...createColorTheme("#006266") },
  // Lightpurple circumorbital
  { ...createColorTheme("#5758BB") },
  // Berry
  { ...createColorTheme("#ED4C67") },
  // Magenta
  { ...createColorTheme("#6F1E51") },
  // Dark gray
  { ...createColorTheme("#2d3436") },
  // Red pigment
  { ...createColorTheme("#EA2027") },

];