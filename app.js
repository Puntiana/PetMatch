// Lógica Interactiva para PetMatch

document.addEventListener('DOMContentLoaded', () => {

    // 1. Auto-seleccionar la mascota en el formulario al hacer clic en "Quiero adoptar a..."
    const selectPetButtons = document.querySelectorAll('.select-pet-btn');
    const petSelectDropdown = document.getElementById('petSelect');
    const formSection = document.getElementById('formulario');

    selectPetButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const petName = e.target.getAttribute('data-pet');
            
            if (petSelectDropdown && petName) {
                // Busca la opción correspondiente en el menú desplegable
                for (let option of petSelectDropdown.options) {
                    if (option.value.toLowerCase().includes(petName.toLowerCase())) {
                        petSelectDropdown.value = option.value;
                        break;
                    }
                }
            }

            // Desplazamiento suave hacia el formulario
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 2. Simulación de envío del formulario de adopción
    const adoptionForm = document.getElementById('adoption-form');
    const formMessage = document.getElementById('form-message');

    if (adoptionForm) {
        adoptionForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Obtener valores ingresados
            const name = document.getElementById('fullName').value;
            const pet = petSelectDropdown.value;

            // Mostrar mensaje de éxito en pantalla
            formMessage.classList.remove('hidden');
            formMessage.classList.add('success');
            formMessage.innerHTML = `
                <i class="fa-solid fa-circle-check"></i> 
                ¡Muchas gracias, <strong>${name}</strong>! Hemos recibido tu solicitud de adopción para <strong>${pet}</strong>. 
                Nos pondremos en contacto contigo pronto por WhatsApp o correo.
            `;

            // Limpiar los campos del formulario
            adoptionForm.reset();

            // Desplazar vista hacia el mensaje de confirmación
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }

});