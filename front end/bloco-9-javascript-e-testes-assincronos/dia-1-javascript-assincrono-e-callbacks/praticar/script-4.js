const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = (callback) => {
  const maxTemperature = 58;
  callback = maxTemperature;
  return Math.floor(Math.random() * callback);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = (callback) => {
    setTimeout(() => console.log('Mars temperature is: ' + getMarsTemperature(callback) + ' degree Celsius'));
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo