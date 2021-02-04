export const getHueFromTemperature = (temperature) => {
  let limitedTemperature = temperature;

  // on borne notre temperature entre 2 valeurs extremes
  const min = 0;
  const max = 40;
  limitedTemperature = Math.max(min, limitedTemperature);
  limitedTemperature = Math.min(max, limitedTemperature);

  // calcul d'un pourcentage -30 -> 0, 40 -> 100, et donc 5 -> 50
  limitedTemperature = limitedTemperature - min;
  const percent = limitedTemperature * 100 / (max - min);

  const hueMax = 0;
  const hueMin = 230;

  // on remet le pourcentage dans un interval donné ici de 230(bleu) à 0(rouge)
  const hue = hueMin - (percent * (hueMin - hueMax) / 100);

  return hue;
}; 