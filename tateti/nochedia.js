// Función para alternar entre los temas claro y oscuro
function toggleTheme() {
    // Obtener el elemento body del documento
    const body = document.body;

    // Comprobar si el body tiene la clase "oscuro"
    if (body.classList.contains("oscuro")) {
      // Si el body tiene la clase "oscuro", lo elimina
      body.classList.remove("oscuro");

      // Agregar la clase "claro" al body para cambiar al tema claro
      body.classList.add("claro");
    } else {
      // Si el body no tiene la clase "oscuro" (tema claro), eliminar la clase "claro"
      body.classList.remove("claro");

      // Agregar la clase "oscuro" al body para cambiar al tema oscuro
      body.classList.add("oscuro");
    }
  }