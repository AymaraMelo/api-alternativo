document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTOS_URL).then(function(resultObj){
        if(resultObj.status == "ok"){
            var products_array = [];
            products_array = resultObj.data;
            let element = document.getElementById("cosa");
            let cargar_html = "";

            for(let i=0; i<products_array.length ; i++){
                let product = products_array[i];

                cargar_html += `
                    <p>` + product.Id + `</p>
                    <p>` + product.Nombre + `</p>
                    <p>` + product.Precio + `</p>
                    <p>` + product.Descripcion + `</p>
                    <p>` + product.Cantidad_disponible + `</p> 
                    <p>` + product.Imagen + `</p>
                    </br>`
            }

            element.innerHTML += cargar_html;
        }
    });
});