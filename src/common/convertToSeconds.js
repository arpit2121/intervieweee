export const convertTimeStringToSeconds = (timeString) => {
    const regex = /(\d+)([smhr])/; // Regular expression to capture digits followed by "s", "m", or "hr"
    const match = timeString?.match(regex);
  
    if (!match) {
      return 0; // Return 0 if the input format is not recognized
    }
  
    const value = parseInt(match[1], 10);
    const unit = match[2];
  
    if (isNaN(value)) {
      return 0; // Return 0 if the value is not a valid number
    }
  
    // Convert to seconds based on the unit
    switch (unit) {
      case 's':
        return value;
      case 'm':
        return value * 60;
      case 'h':
        return value * 3600;
      default:
        return 0; // Return 0 if the unit is not recognized
    }
  };