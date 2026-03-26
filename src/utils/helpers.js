export const formatTime = (isoString) => {
  try {
    return new Date(isoString).toLocaleTimeString();
  } catch {
    return '';
  }
};
