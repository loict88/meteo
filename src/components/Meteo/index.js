import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { getHueFromTemperature } from '../../utils';

import './index.scss';

// console.log(process.env);
const Meteo = ({ city, code }) => {
  const [temperature, setTemperature] = useState(0);
  useEffect(() => {
    // let apiUrl = process.env.REACT_APP_API_URL;
    //  if (process.env.NODE_ENV === 'production') {
    //    apiUrl+=`?zip=${code},fr&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    //  }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${code},fr&units=metric&appid=e04ea56a69066d943d8974856fdc59a0`)
      .then((response) => {
        setTemperature(response.data.main.temp);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const hue = getHueFromTemperature(temperature);
  return (
    <article className="meteo">
      <h3 className="meteo-title">{city}</h3>
      <p className="meteo-cp">{code}</p>
      <p
        className="meteo-temperature"
        style={{
          color: `hsl(${hue}, 100%, 50%)`,
        }}
      >
        {Math.round(temperature)}°C
      </p>
    </article>
  );
};

Meteo.propTypes = {
  city: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default Meteo;
