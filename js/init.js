//URLS PARA CARGAR DATOS JSON
const CATEGORIAS_URL = "https://aymaramelo.github.io/api-alternativo/json/categoria.json";
const COMENTARIOS_URL = "https://aymaramelo.github.io/api-alternativo/json/comentario.json";
const CARRITO_URL = "https://aymaramelo.github.io/api-alternativo/json/carritoCompra.json";
const PRODUCTOS_URL = "https://aymaramelo.github.io/api-alternativo/json/productoJoyeria.json";
const USUARIOS_URL = "https://aymaramelo.github.io/api-alternativo/json/usuario.json";

  
  var getJSONData = function(url){
      var result = {};
      return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }else{
          throw Error(response.statusText);
        }
      })
      .then(function(response) {
            result.status = 'ok';
            result.data = response;
            return result;
      })
      .catch(function(error) {
          result.status = 'error';
          result.data = error;
          return result;
      });
  }
  
  //Función que se ejecuta una vez que se haya lanzado el evento de
  //que el documento se encuentra cargado, es decir, se encuentran todos los
  //elementos HTML presentes.
  document.addEventListener("DOMContentLoaded", function(e){
  });