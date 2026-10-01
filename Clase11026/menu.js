document.addEventListener('DOMContentLoaded', () => {
  // Modo oscuro
  const btnModo = document.querySelector('#btn-modo-oscuro');
  if (btnModo) {
    btnModo.addEventListener('click', () => {
      document.body.classList.toggle('oscuro');
    });
  }

  // Sección Eventos: Botón e input
  const botonEvento = document.querySelector('#smi-boton');
  if (botonEvento) {
    botonEvento.addEventListener('click', (event) => {
      event.target.textContent = '¡Clic recibido!';
    });
  }

  const campoNombre = document.querySelector('#nombre');
  if (campoNombre) {
    campoNombre.addEventListener('input', (event) => {
      console.log('Escribiendo:', event.target.value);
    });
  }

  // Sección Comentarios: Inserción segura contra XSS con textContent
  const comentarios = [
    'Excelente atención, volveré pronto.',
    'Las pupusas estaban recién hechas.',
    '<img src="x" onerror="alert(1)">' // Inyección XSS neutralizada
  ];

  const listaComentarios = document.querySelector('.lista-comentarios');
  if (listaComentarios) {
    comentarios.forEach((texto) => {
      const li = document.createElement('li');
      li.textContent = texto; // Seguro: se inserta como texto plano sin interpretar etiquetas
      listaComentarios.appendChild(li);
    });
  }

  // Formulario de contacto: preventDefault
  const formContacto = document.querySelector('#form-contacto');
  const avisoFormulario = document.querySelector('#aviso-formulario');
  if (formContacto) {
    formContacto.addEventListener('submit', (event) => {
      event.preventDefault();
      if (avisoFormulario) {
        avisoFormulario.textContent = 'Formulario enviado correctamente (sin recargar).';
      }
    });
  }
});