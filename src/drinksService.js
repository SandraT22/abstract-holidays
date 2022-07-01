export default class Drinks {
  static getDrinks() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
      request.onload = function() {
        
        if (this.status === 200) {
         
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}