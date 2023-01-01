export const generateDate = () => {
  return new Date().toLocaleDateString('ind', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
};
