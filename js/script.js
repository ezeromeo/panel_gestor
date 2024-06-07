window.addEventListener("load", function () {
  
    const burgerHeight = document
      .querySelector(".icono-burger")
      .getBoundingClientRect().height;
  
    
    const cardsWrapper = document.querySelector(".cards-wrapper");
  
    
    cardsWrapper.style.height = `${burgerHeight}px`;
  });
  
  window.addEventListener("load", function () {
    const col1 = document.querySelector("#col1");
    const col2 = document.querySelector("#col2");
    const col3 = document.querySelector("#col3");
  
    const titulo = 'Curso de PRL avanzado en la oficina';
    const subtitulo = 'F22023xxx88-001-002, Sesión 48906';
    let idCounter = 0;
    const collapseIcon = `<img src="assets/img/chevron-down.svg" class="bi" alt="">`;
    const createCard = (titulo, subtitulo, index) => {
      idCounter++;
      const card = document.createElement("div");
      card.classList.add("card");  
      const uniqueId = "collapse" + idCounter;    
  
  
      let iconColor;
      switch (cardNumber) {
        case 0: case 1:
          iconColor = "#F9C200";
          break;
        case 2:
          iconColor = "#DF1517";
          break;
        case 3: case 4:
          iconColor = "#684BBB";
          break;
        case 5:
          iconColor = "#F95A00";
          break;
        default:
          iconColor = "#000000"; 
          break;
      }


      let statusColor;
      switch (cardNumber) {
        case 0: 
          statusColor = "#51AC34";
          break;
        case 1:
          statusColor = "#FF7A00";
          break;
        case 2:
          statusColor = "#2F647E";
          break;
        case 3: 
          statusColor = "#7B7B7B";
          break;
        case 4:
          statusColor = "#7B7B7B";
          break;
        case 5:
          statusColor = "#DF1517";
          break;
      }

      let statusName, statusClass;
      switch (cardNumber) {
        case 0: 
          statusName = "Válido";
          statusClass = "status-valido"
          break;
        case 1:
          statusName = "Modificado";
          statusClass = "status-modificado"
          break;
        case 2:
          statusName = "Pdte";
          statusClass = "status-pendiente"
          break;
        case 3: 
          statusName = "Finalizado";
          statusClass = "status-finalizado"
          break;
        case 4:
          statusName = "Finalizado";
          statusClass = "status-finalizado"
          break;
        case 5:
          statusName = "Anulado";
          statusClass = "status-anulado"
          break;
      }

      function setupIconImageEvents(iconImage) {
        let isClicked = false;

        let menu = card.querySelector('#iconImage');
        
        var menuPopover = new bootstrap.Popover(menu, {
            html: true,
            content: '<div class="d-flex flex-column align-items-between justify-content-center popoverFecha"><p>Editar Grupo</p><p>Resumen Asistencia</p><p>Resumen Control</p></div>',
            trigger: 'manual',
            placement: 'bottom',
        });
    
        iconImage.addEventListener('mouseover', function () {
            if (!isClicked) {
                this.src = "assets/img/x-icon.svg";
            }
        });
    
        iconImage.addEventListener('mouseout', function () {
            if (!isClicked) {
                this.src = "assets/img/burger-menu-icon.svg";
            }
        });
    
        iconImage.addEventListener('click', function (event) {
            isClicked = !isClicked;
            this.src = "assets/img/x-icon.svg";
            menuPopover.toggle();
            event.stopPropagation();
        });
    
        document.addEventListener('click', function () {
            if (isClicked) {
                isClicked = false;
                iconImage.src = "assets/img/burger-menu-icon.svg";
                menuPopover.hide();
            }
        });
    }

    function setupSVGPopoverEvent(svgElement) {
        let svgPopover = new bootstrap.Popover(svgElement, {
            html: true,
            title: "",
            content: '<div class="d-flex flex-column align-items-between justify-content-center"><p>Añadir TAG</p><p>Cambiar Color</p></div>',
            trigger: 'manual'
        });
    
        svgElement.addEventListener('click', function(event) {
            svgPopover.toggle();
            event.stopPropagation();
        });
    
        document.addEventListener('click', function() {
            svgPopover.hide();
        });
    }
    
    
      card.innerHTML = `
      <div class="card-header d-flex align-items-center justify-content-between">
        <div class="titulos">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-subtitle">${subtitulo}</p>
        </div>
        <div class="card-header-svg d-flex align-items-center justify-content-between">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="${iconColor}" stroke="#FFF" class="bi bi-circle-fill me-2" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
          </svg>  
        </div>
      </div>
    <div class="card-body">
      <div class="clase-status d-flex align-items-center justify-content-between">
        <p>
          <strong>Próximas clase:</strong> Hoy (lunes)
        </p>
        <div class="status mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${statusColor}" class="bi bi-circle-fill mb-3 me-2" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8"/>
          </svg>
          <p class="activo ${statusClass}"><strong>${statusName}</strong></p>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <div class="fechaHorario">
          <div class="fecha-mensajes d-flex align-items-start flex-column justify-content-center">
              <div class="fecha d-flex align-items-center justify-content-start">
                  <img id="iconImage" class="mb-3 me-2" src="assets/img/burger-menu-icon.svg" alt="">
                  <p>
                      <strong>Fecha inicio y fin: </strong> 10/2 al 11/2
                  </p>
              </div>
          </div>
          <div class="horario-sesiones">
              <div class="horario">
                  <p>
                      <strong>Horario: </strong>L - M de 10:00 - 12:00
                  </p>
              </div>
          </div>
        </div>
        <div class="linea"></div>
        <div class="mensajesSesiones">
          <div class="mensajes d-flex align-items-center justify-content-start">
            <img class="mb-3 me-2" src="assets/img/message-icon.svg" alt="">
            <p class="p1">22 mensajes <strong class="strong1 me-1">3</strong> <p class="p2">mensajes sin leer</p></p>
          </div>
          <div class="sesiones">
              <p><strong>Sesiones: </strong>0/11 Firmadas  23 Restantes</p>
          </div>
        </div>
      </div>
      <div class="comInicio mb-2">
        ${createComDivs(cardNumber)}
      </div>
      <div class="iconos-cards d-flex align-items-center justify-content-between">
        ${createCardIcons(cardNumber, index)}
      </div>
      <div class="card-buttons d-flex align-items-center justify-content-start mt-2">
        ${createCardButtons(cardNumber, index)}
      </div>
      <button class="btn btn-link d-flex align-items-center justify-content-center w-100 mt-2" type="button" data-toggle="collapse" data-target="#${uniqueId}" aria-expanded="false" aria-controls="${uniqueId}">
        ${collapseIcon}
      </button>
    </div>
    <div class="collapse" id="${uniqueId}">
    <div class="accordion-body d-flex align-items-start justify-content-between">
        <div class="first-badges d-flex align-items-start justify-content-center flex-column">
            <div class="badge1 badge-alumnos d-flex align-items-center justify-content-center">
                <span class="badge badge-first mb-3 me-2">5</span>
                <p>Alumnos</p>
            </div>
            <div class="badge1 badge-cuestionario d-flex align-items-center justify-content-center">
              <span class="badge badge-second mb-3 me-2">0</span>
              <p>Cuestionario Satisfacción</p>
            </div>
            <div class="badge1 d-flex align-items-center justify-content-start">
              <span class="badge badge-second mb-3 me-2">0</span>
              <p>Firmas últ. sesión</p>
            </div>
        </div>
        <div class="second-badges d-flex align-items-start justify-content-start flex-column">
          <div class="badge2 d-flex align-items-center justify-content-center">
            <span class="badge badge-first mb-3 me-2">0</span>
            <p>Inician</p>
          </div>
          <div class="badge2 d-flex align-items-center justify-content-start">
              <span class="badge badge-second mb-3 me-2">0</span>
              <p>Firmas Recibí diploma</p>
          </div>
          <div class="badge2 d-flex align-items-center justify-content-start">
            <span class="badge badge-second mb-3 me-2">0</span>
            <p>Asistentes últ. sesión</p>
          </div>
        </div>
        <div class="third-badges d-flex align-items-center justify-content-between">
          <div class="badge3 d-flex align-items-center justify-content-center">
            <span class="badge badge-first mb-3 me-2">0</span>
            <p>Certifican</p>
          </div>
        </div>
    </div>
      <div class="tabla w-75 ms-auto me-auto tableTareas">
        <table class="table table-striped table-hover">
        <thead style="background-color: var(--gris-claro); color: white;">
          <tr>
            <th class="d-flex align-items-center justify-content-start">
             <img src="assets/img/tareas.svg" alt="" class="me-2">  
             Tareas
            </th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#51AC34" class="bi bi-check" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg>
            Adjuntar Contrato Firmado
          </td>
        </tr>
        <tr>
          <td>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#51AC34" class="bi bi-check" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg>
            Adjuntar Factura
          </td>
        </tr>
        <tr>
          <td>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1791C9" class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            Entregar PDF bienvenida
          </td>
        </tr>
        <tr>
          <td>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2F647E" class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
            Firma Evaluación Individual
          </td>
        </tr>
      </tbody>
      </table>
      </div>
  </div>
      `;

      setTimeout(() => {
        const iconImage = card.querySelector('#iconImage');
        if (iconImage) {
            setupIconImageEvents(iconImage);
        }
    }, 0);

    setTimeout(() => {
        const svgElement = card.querySelector('.bi.bi-circle-fill');
        if (svgElement) {
            setupSVGPopoverEvent(svgElement);
        }
    }, 0);

    // Modales

    let primerTD = card.querySelector('tbody tr:first-child td');
    let segundoTD = card.querySelector('tbody tr:nth-child(3) td');
    let tercerTD = card.querySelector('tbody tr:nth-child(4) td');
    let badge1Modal = card.querySelector('.badge-alumnos');
    let badgeCuestionario = document.querySelector('.badge-cuestionario');

    if (badgeCuestionario) {
        badgeCuestionario.addEventListener('click', function() {
            let badgeCuestionarioModalHTML = `
                <div class="modal fade" id="chartModal" tabindex="-1" aria-labelledby="chartModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="chartModalLabel">Gráfica</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body d-flex align-items-center justify-content-between">
                              <div class="referencia d-flex align-items-start justify-content-center flex-column">
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#01B8AA" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Organizacion</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#374649" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Contenidos y metodologias</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FD625E" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Duración y Horario</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F2C80F" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Formador</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5E6A6C" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Tutores</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8AD4EB" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Medios didácticos</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FE9464" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Instalaciones y medios</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#A66999" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Recursos y materiales (No presencial)</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-start">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3599B8" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8"/>
                                  </svg>
                                  <p class="mb-0 ms-2">Media de satisfacción</p>
                                </div>
                              </div>
                              <div class="progress-container d-flex align-items-center justify-content-end">
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 69%; background-color: #01B8AA;" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">3,3</div>
                                </div>
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 67%; background-color: #374649;" aria-valuenow="31" aria-valuemin="0" aria-valuemax="100">3,1</div>
                                </div>
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 60%; background-color: #FD625E;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">3,0</div>
                                </div>
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 58%; background-color: #F2C80F;" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100">2,8</div>
                                </div>
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 59%; background-color: #5E6A6C;" aria-valuenow="29" aria-valuemin="0" aria-valuemax="100">2,9</div>
                                </div>
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 69%; background-color: #8AD4EB;" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">3,3</div>
                                </div>
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 60%; background-color: #FE9464;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">3,0</div>
                                </div>
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 67%; background-color: #A66999;" aria-valuenow="31" aria-valuemin="0" aria-valuemax="100">3,1</div>
                                </div>
                                <div class="progress vertical" style="background-color: #FFF;">
                                    <div class="progress-bar" role="progressbar" style="height: 47%; background-color: #3599B8;" aria-valuenow="17" aria-valuemin="0" aria-valuemax="100">1,7</div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.body.insertAdjacentHTML('beforeend', badgeCuestionarioModalHTML);
            let chartModalElement = document.getElementById('chartModal');
            let chartModal = new bootstrap.Modal(chartModalElement, {});
    
            chartModal.show();
    
            chartModalElement.addEventListener('hidden.bs.modal', function () {
                chartModalElement.remove(); // Remove the modal element from DOM
                document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
                    backdrop.remove(); // Ensure all backdrops are removed
                });
                document.body.classList.remove('modal-open'); // Remove 'modal-open' class from the body
                document.body.style.overflow = ''; // Reset overflow property of the body
            });
          
            
        });


        
    } 
    else {
        console.error('Elemento .badge-cuestionario no encontrado');
    }  

    badge1Modal.addEventListener('click', function() {
        let badge1ModalHTML = `
            <div class="modal fade" id="resumenControlModal" tabindex="-1" aria-labelledby="resumenControlModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h6>Asistentes última sesión: 10/02/2023 - 10:00 - 12:00 (sesión 1)</h6>
                    <table class="table">
                    <thead>
                        <tr>
                        <th>Alumno</th>
                        <th>% Asistencia</th>
                        <th>Tipo Diploma</th>
                        <th>Certifica</th>
                        <th>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody id="modalTableBody">
                        <!-- Los datos de la tabla se insertarán aquí desde el script JavaScript -->
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', badge1ModalHTML);
        let resumenControlModal = new bootstrap.Modal(document.getElementById('resumenControlModal'), {});
        
        const data = [
            { nombre: 'González Ram María', asistencia: '100%', diploma: 'Aprovechamiento', certifica: 'Si', observaciones: 'El alumno se va 20 min antes de terminar la sesión' },
            { nombre: 'Pérez Donoso Diego', asistencia: '100%', diploma: 'Aprovechamiento', certifica: 'Si', observaciones: '-' },
            { nombre: 'Rodríguez Sainz Mathias', asistencia: '0%', diploma: 'Aprovechamiento', certifica: 'Si', observaciones: 'firma pero se va a los 5 min.​' },
            { nombre: 'Muños Sale Pablo', asistencia: '0%', diploma: 'Sin Diploma', certifica: 'No', observaciones: '-' },
            { nombre: 'Vargas Juan', asistencia: '0%', diploma: 'Aprovechamiento', certifica: 'Si', observaciones: '-' }
        ];
    
        const tableBody = document.getElementById('modalTableBody');
    
        data.forEach(item => {
            const row = document.createElement('tr');
    
            const nombreCell = document.createElement('td');
            nombreCell.innerText = item.nombre;
    
            const asistenciaCell = document.createElement('td');
            if (item.asistencia === '100%') {
              asistenciaCell.style.color = '#00AD1F';
            } else if(item.asistencia === '0%'){
              asistenciaCell.style.color = '#DF1517';
            }
            asistenciaCell.innerText = item.asistencia;
    
            const diplomaCell = document.createElement('td');
            diplomaCell.innerText = item.diploma;
    
            const certificaCell = document.createElement('td');
            if (item.certifica === 'Si') {
              certificaCell.style.color = '#00AD1F';
            } else if(item.certifica === 'No'){
              certificaCell.style.color = '#DF1517';
            }
            certificaCell.innerText = item.certifica;

            const observacionesCell = document.createElement('td');
            observacionesCell.innerText = item.observaciones;
            observacionesCell.style.color = '#636363';
    
            row.appendChild(nombreCell);
            row.appendChild(asistenciaCell);
            row.appendChild(diplomaCell);
            row.appendChild(certificaCell);
            row.appendChild(observacionesCell);
    
            tableBody.appendChild(row);
        });
    
        resumenControlModal.show();
    
        document.getElementById('resumenControlModal').addEventListener('hidden.bs.modal', function(e) {
            document.getElementById('resumenControlModal').remove();
        });
        
    });


    primerTD.addEventListener('click', function() {
        let modalHTML = `
            <div class="modal fade" id="miModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">CURSO DE PRL AVANZADO EN LA OFICINA</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form-check primerTd">
                                <input class="form-check-input check-primerTd" type="checkbox" value="" id="flexCheckChecked" checked>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Adjuntar Contrato Firmado
                                </label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn enviar-button" style="border-radius: 36px; color: #FFFF; background-color: var(--azul);" data-bs-dismiss="modal">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        let miModal = new bootstrap.Modal(document.getElementById('miModal'), {});
        miModal.show();
        
        document.getElementById('miModal').addEventListener('hidden.bs.modal', function(e) {
            document.getElementById('miModal').remove();
        });
    });

    segundoTD.addEventListener('click', function() {
        let segundoModalHTML = `
            <div class="modal fade" id="miSegundoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">CURSO DE PRL AVANZADO EN LA OFICINA</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form-check primerTd">
                                <input class="form-check-input check-primerTd" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Entregar PDF bienvenida
                                </label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn enviar-button" style="border-radius: 36px; color: #FFFF; background-color: var(--azul);" data-bs-dismiss="modal">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', segundoModalHTML);
        let miSegundoModal = new bootstrap.Modal(document.getElementById('miSegundoModal'), {});
        miSegundoModal.show();

        document.getElementById('miSegundoModal').addEventListener('hidden.bs.modal', function(e) {
            document.getElementById('miSegundoModal').remove();
        });
    });


    tercerTD.addEventListener('click', function() {
        let tercerModalHTML = `
          <div class="modal fade" id="miTercerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content modal-lg">
                    <div class="modal-header d-flex align-items-center justify-content-center">
                        <div class="fundacion m-2 me-3">
                            <img src="assets/img/fundacionEstatal.svg" alt="Fundación Estatal">
                            <img src="assets/img/fundacionEstatalLogo.svg" alt="Logo Fundación Estatal">
                        </div>
                    </div>
                    <div class="modal-body">
                        <img src="assets/img/evaluacion.jpg" alt="Evaluación" class="evaluacion">
                    </div>
                    <div class="modal-footer d-flex align-items-center justify-content-center">
                        <div class="fundacion m-2 me-3">
                            <img src="assets/img/fundacionEstatal.svg" alt="Fundación Estatal">
                            <img src="assets/img/fundacionEstatalLogo.svg" alt="Logo Fundación Estatal">
                        </div>
                    </div>
                </div>
            </div>
          </div>
    
        `;

        document.body.insertAdjacentHTML('beforeend', tercerModalHTML);
        let miTercerModal = new bootstrap.Modal(document.getElementById('miTercerModal'), {});
        miTercerModal.show();

        document.getElementById('miTercerModal').addEventListener('hidden.bs.modal', function(e) {
            document.getElementById('miTercerModal').remove();
        });
    });

    
    
      // Popovers

      let userSpan = card.querySelector('.user');
      let teacherSpan = card.querySelector('.teacher');
      let userIcon = card.querySelector('.user-icon');
      let mapIcon = card.querySelector('.map-icon');
      let isManualPopoverOpen = false;
      

      if (userSpan && teacherSpan && userIcon && mapIcon) {
        var userPopover = new bootstrap.Popover(userSpan, {
          placement: "bottom",
          html: true,
          trigger: 'manual',
          content: '<strong>Profesorado: Fernando Velasco</strong><p>fvelasco@innopulse.es</p><div class="popover-icon d-flex align-items-center justify-content-start"><img src="assets/img/popover-icon.svg" class="me-2" alt=""><a href="#">Panel del profesor</a></div>'
        });
      
        var teacherPopover = new bootstrap.Popover(teacherSpan, {
          placement: "bottom",
          html: true,
          trigger: 'manual',
          content: '<strong>Profesorado: Diego Pérez</strong><p>dperez@innopulse.es</p><div class="popover-icon d-flex align-items-center justify-content-start"><img src="assets/img/popover-icon.svg" class="me-2" alt=""><a href="#">Panel del profesor</a></div>'
        });
      
        var userPopoverIcon = new bootstrap.Popover(userIcon, {
          title: "Responsable del Grupo",
          placement: "bottom",
          html: true,
          trigger: 'hover',
          content: '<ul><li>Diego Pérez</li><li>Tel. 666090477</li><li>@: dperez@innopulse.es</li></ul>',
        });
      
        var mapPopoverIcon = new bootstrap.Popover(mapIcon, {
          title: '<p class="text-center m-0">Dirección</p>',
          placement: "bottom",
          html: true,
          trigger: 'hover',
          content: '<div class="mapPopoverContent"><p>Calle del Aguacate 41, </p><p>Edificio B4, Local 6, 28054</p><p>Madrid, </p><a href="#">Aula Innovación</a></div>',
        });
      
        function toggleManualPopover(popover) {
            popover.toggle();
            isManualPopoverOpen = popover._element.classList.contains('show');
            if (isManualPopoverOpen) {
              hideHoverPopovers();
            }
          }
          
          function hideHoverPopovers() {
            userPopoverIcon.hide();
            mapPopoverIcon.hide();
          }
          
          userSpan.addEventListener('click', function () {
            toggleManualPopover(userPopover);
            teacherPopover.hide();
          });
          
          teacherSpan.addEventListener('click', function () {
            toggleManualPopover(teacherPopover);
            userPopover.hide();
          });
          
          document.addEventListener('click', function (event) {
            if (!userSpan.contains(event.target) && !teacherSpan.contains(event.target) && !userIcon.contains(event.target) && !mapIcon.contains(event.target)) {
              userPopover.hide();
              teacherPopover.hide();
              isManualPopoverOpen = false;
            }
          });
      }

      card.querySelector('.btn-link').addEventListener("click", function() {
        const collapseElement = card.querySelector(`#${uniqueId}`);
        const icon = this.querySelector('.bi');
        const cardHeader = card.querySelector('.card-header');
        
        icon.style.transition = "transform 0.4s ease";
        
        if (collapseElement.classList.contains('show')) {
          
          collapseElement.classList.remove('show');
          cardHeader.classList.remove('card-header-expanded');
          icon.style.transform = "rotate(0deg)";
        } else {
          
          collapseElement.classList.add('show');
          cardHeader.classList.add('card-header-expanded');
          icon.style.transform = "rotate(180deg)";
        }
      });
      
      return card;
    };
  
    let cardNumber = 0;

    
    for (let i = 0; i < 2; i++) {
      col1.appendChild(createCard(titulo, subtitulo));
      cardNumber++;  
    }

    col2.appendChild(createCard(titulo, subtitulo));
    cardNumber++;  
        
    for (let i = 0; i < 3; i++) {
      col3.appendChild(createCard(titulo, subtitulo));
      cardNumber++;  
    }
  });

  const createCardButtons = (cardNumber) => {
    let buttonsHtml = '';
  
    const buttonStyles = {
      'Hoy': 'background-color: #E99496; color: #FFF',
      'Presencial': 'background-color: #001489; color: #FFF',
      'Ahora': 'background-color: #E95F61; color: #FFF',
      'Bimodal': 'background-color: #FFF; color: #8D8D8D; border: 1px solid #CCC',
      'Pdt Factura': 'background-color: #FFF; color: #8D8D8D; border: 1px solid #CCC',
      'PIF': 'background-color: #FFF; color: #8D8D8D; border: 1px solid #CCC',
      'CERTIFICADO PROFESIONALIDAD': 'background-color: #FFF; color: #8D8D8D; border: 1px solid #CCC'
    };
  
    const buttonLabels = {
      0: ['<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked1" checked> 2/4', 'Presencial', 'Hoy', 'Ahora', 'Bimodal', 'Pdt Factura', 'PIF', 'CERTIFICADO PROFESIONALIDAD'],
      1: ['<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked> 2/4', 'Bimodal', 'Hoy', '<a href="msteams://" target="_blank"><img src="assets/img/teams-icon.svg" alt="Abrir Microsoft Teams"></a>', 'CERTIFICADO PROFESIONALIDAD'],
      2: ['<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked3" checked> 0/3', 'Presencial', 'Bimodal', 'Pdt Factura', 'PIF', 'CERTIFICADO PROFESIONALIDAD'],
      3: ['<div class="checkGreen"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked4" checked> 3/3</div>', 'Bimodal', 'Presencial', 'Pdt Factura', 'PIF', '<a href="msteams://" target="_blank"><img src="assets/img/teams-icon.svg" alt="Abrir Microsoft Teams"></a>', 'CERTIFICADO PROFESIONALIDAD'],
      4: ['<div class="checkGreen"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked5" checked> 3/3</div>', 'Presencial', 'Bimodal', 'Pdt Factura', 'PIF', 'CERTIFICADO PROFESIONALIDAD'],
      5: ['<div class="checkGreen"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked6" checked> 3/3</div>', 'Presencial', 'Bimodal', 'Pdt Factura', 'PIF', 'CERTIFICADO PROFESIONALIDAD']
    };
   
    const isFirstBimodal = buttonLabels[cardNumber] && buttonLabels[cardNumber][1] === 'Bimodal';
    
    buttonLabels[cardNumber]?.forEach((label, index) => {
        let style = buttonStyles[label];
        let extraClass = '';
        if (isFirstBimodal && label === 'Bimodal') {
            style = 'background-color: #636363; color: #FFF;';
        }
        if (label === 'Ahora') {
            extraClass = 'blink'; // Clase que aplicará la animación
        }
        
        buttonsHtml += `<button class="btn small-button me-2 ${extraClass}" style="${style}">${label}</button>`;
    });
  
    return buttonsHtml;
  };

  const createCardIcons = (cardNumber) => {
    let iconsHtml = '';

    // Elementos base que siempre están presentes
    iconsHtml += `
        <img class="user-icon" src="assets/img/user-icon.svg" alt="user icon">
        <img class="map-icon" src="assets/img/maps.svg" alt="map icon">
        <span class="user">DP</span>
        <span class="teacher">FV</span>
        <a href="msteams://" target="_blank">
            <img src="assets/img/teams-icon.svg" alt="Abrir Microsoft Teams">
        </a>`;

    // Añadir el ícono del calendario solo en las posiciones 0, 1 y 2
    if ([0, 1, 2].includes(cardNumber)) {
        iconsHtml += `<img src="assets/img/calendar.svg" alt="calendar">`;
    }

    return iconsHtml;
};

const createComDivs = (cardNumber) => {
  let htmlContent = '';

  if ([3, 4, 5].includes(cardNumber)) {
      htmlContent += `
          <div class="com1 d-flex align-items-center justify-content-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#A1A1A1" class="bi bi-circle-fill me-1" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8"/>
              </svg>
              <p>1.Com. Inicio - Fecha límite 06/12/2023</p>
          </div>
          <div class="com2 d-flex align-items-center justify-content-start mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#A1A1A1" class="bi bi-circle-fill me-1" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8"/>
              </svg>
              <p>1.Com. Inicio - Fecha límite 06/12/2023 Incidencias</p>
          </div>
      `;
  }

  return htmlContent;
};
  
  function updateProgressBars(progressValues) {
    const progressBars = document.querySelectorAll('.progress.vertical .progress-bar');
    progressBars.forEach((bar, index) => {
        bar.style.height = progressValues[index] + '%';
        bar.setAttribute('aria-valuenow', progressValues[index]);
        bar.textContent = progressValues[index] + '%';
    });
}
