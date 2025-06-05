// script.js
document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');

    // URL de la API que deseas consumir
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Función para obtener datos de la API
    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            const data = await response.json();
            displayData(data);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    // Función para mostrar los datos en la página
    const displayData = (data) => {
        console.log("Entra");
        console.log(data);
        dataContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos datos
        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'data-item';
            div.textContent = JSON.stringify(item.id)+" "+JSON.stringify(item.name)+" "+JSON.stringify(item.email)+" "+JSON.stringify(item.phone);
            dataContainer.appendChild(div);
        });
    };

    // Llamar a la función para obtener datos cuando la página se cargue
    fetchData();
});