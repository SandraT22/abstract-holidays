export default class Holiday {
  static getHoliday(date) {
    return fetch(`https://holidays.abstractapi.com/v1/?api_key=${process.env.HOLIDAY_API_KEY}&country=US&year=2022&month=${date[1]}&day=${date[2]}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });        
  }
}