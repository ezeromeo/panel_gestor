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
    const createCard = (titulo, subtitulo) => {
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

      function setupIconImageEvents(iconImage) {
        let isClicked = false;

        let menu = card.querySelector('#iconImage');
        
        var menuPopover = new bootstrap.Popover(menu, {
            html: true,
            content: '<div class="d-flex flex-column align-items-between justify-content-center"><p>Editar Grupo</p><p>Resumen Asistencia</p><p>Resumen Control</p></div>',
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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${iconColor}" class="bi bi-circle-fill" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8"/>
        </svg>  
      </div>
    <div class="card-body">
      <div class="clase-status d-flex align-items-center justify-content-between">
        <p>
          <strong>Próximas clase:</strong> Hoy (lunes)
        </p>
        <div class="status mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#51AC34" class="bi bi-circle-fill mb-3 me-2" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8"/>
          </svg>
          <p class="activo"><strong>Activo</strong></p>
        </div>
      </div>
      <div class="fecha-mensajes d-flex align-items-start flex-column justify-content-center">
          <div class="fecha d-flex align-items-center justify-content-start">
              <img id="iconImage" class="mb-3 me-2" src="assets/img/burger-menu-icon.svg" alt="">
              <p>
                  <strong>Fecha inicio y fin: </strong> 10/2 al 11/2
              </p>
          </div>
          <div class="mensajes d-flex align-items-center justify-content-start">
              <img class="mb-3 me-2" src="assets/img/message-icon.svg" alt="">
              <p>22 mensajes <strong>3</strong> mensajes sin leer</p>
          </div>
      </div>
      <div class="horario-sesiones">
          <div class="horario">
              <p>
                  <strong>Horario: </strong>L - M de 10:00 - 12:00
              </p>
          </div>
          <div class="sesiones">
              <p><strong>Sesiones: </strong>0/11 Firmadas  23 Restantes</p>
          </div>
      </div>
      <div class="iconos-cards d-flex align-items-center justify-content-between">
          <img class="user-icon" src="assets/img/user-icon.svg" alt="">
          <img class="map-icon" src="assets/img/map-icon.svg" alt="">
          <span class="user">DP</span>
          <span class="teacher">FV</span>
          <a href="msteams://" target="_blank">
            <img src="assets/img/teams-icon.svg" alt="Abrir Microsoft Teams">
          </a>
      </div>
      <button class="btn btn-link d-flex align-items-center justify-content-center w-100 mt-2" type="button" data-toggle="collapse" data-target="#${uniqueId}" aria-expanded="false" aria-controls="${uniqueId}">
        ${collapseIcon}
      </button>
    </div>
    <div class="collapse" id="${uniqueId}">
    <div class="accordion-body">
        <div class="first-badges d-flex align-items-center justify-content-between w-100">
            <div class="badge1 badge-alumnos d-flex align-items-center justify-content-center">
                <span class="badge badge-first mb-3 me-2">5</span>
                <p>Alumnos</p>
            </div>
            <div class="badge2 d-flex align-items-center justify-content-center">
                <span class="badge badge-first mb-3 me-2">0</span>
                <p>Inician</p>
            </div>
            <div class="badge3 d-flex align-items-center justify-content-center">
                <span class="badge badge-first mb-3 me-2">0</span>
                <p>Certifican</p>
            </div>
        </div>
        <div class="second-badges d-flex align-items-center justify-content-between">
          <div class="badge1 badge-cuestionario d-flex align-items-center justify-content-center">
              <span class="badge badge-second mb-3 me-2">0</span>
              <p>Cuestionario Satisfacción</p>
          </div>
          <div class="badge2 d-flex align-items-center justify-content-center w-100">
              <span class="badge badge-second mb-3 me-2">0</span>
              <p>Firmas Recibí diploma</p>
          </div>
        </div>
        <div class="third-badges d-flex align-items-center justify-content-between">
          <div class="badge1 d-flex align-items-center justify-content-start w-100">
              <span class="badge badge-second mb-3 me-2">0</span>
              <p>Firmas últ. sesión</p>
          </div>
          <div class="badge2 d-flex align-items-center justify-content-start w-100">
              <span class="badge badge-second mb-3 me-2">0</span>
              <p>Asistentes últ. sesión</p>
          </div>
        </div>
    </div>
      <div class="tabla w-75 ms-auto me-auto">
        <table class="table table-striped table-hover">
        <thead style="background-color: var(--gris-claro); color: white;">
          <tr>
            <th>
              <i class="bi bi-card-checklist"></i> Tareas
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
                            <div class="modal-body">
                                <div id="chart"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.body.insertAdjacentHTML('beforeend', badgeCuestionarioModalHTML);
            let chartModalElement = document.getElementById('chartModal');
            let chartModal = new bootstrap.Modal(chartModalElement, {});

            chartModalElement.addEventListener('shown.bs.modal', function (e) {
            createChart();
            });

            chartModal.show();

            chartModalElement.addEventListener('hidden.bs.modal', function (e) {
            document.getElementById('chartModal').remove();
            let backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
            });
            
        });

        function createChart() {
            $("#chart").kendoChart({
                legend: {
                    position: "top",
                    markers: {
                        type: "circle",
                        width: 10,
                        height: 10                    }
                },
                seriesDefaults: {
                    type: "column",
                    gap: 3,
                    spacing: 3,
                    labels: { visible: true, background: "transparent", template: "#= value #" },
                },
                series: [
                    { name: "Organización", data: [3.3], color: "#01B8AA" },
                    { name: "Contenidos y metodologías", data: [3.1], color: "#374649" },
                    { name: "Duración y Horario", data: [3.3], color: "#FD625E" },
                    { name: "Formador", data: [3.1], color: "#F2C80F" },
                    { name: "Tutores", data: [3.0], color: "#5E6A6C" },
                    { name: "Medios didácticos", data: [2.9], color: "#8AD4EB" },
                    { name: "Instalaciones y medios", data: [3.0], color: "#FE9464" },
                    { name: "Recursos y materiales (No presencial)", data: [2.8], color: "#A66999" },
                    { name: "Media de satisfacción", data: [3.7], color: "#3599B8" }
                ],
                valueAxis: {
                    labels: {
                        format: "{0}"
                    },
                    line: {
                        visible: false
                    },
                    axisCrossingValue: 0
                },
                categoryAxis: {
                    categories: [''],
                    line: {
                        visible: false
                    },
                    labels: {
                        visible: false
                    }
                },
                tooltip: {
                    visible: true,
                    template: "#= category #: #= value #"
                }
            });
            
            
        }        
    } 
    else {
        console.error('Elemento .badge-cuestionario no encontrado');
    }



    document.addEventListener('DOMContentLoaded', createChart);
    document.addEventListener('kendo:skinChange', createChart);



    badge1Modal.addEventListener('click', function() {
        let badge1ModalHTML = `
            <div class="modal fade" id="resumenControlModal" tabindex="-1" aria-labelledby="resumenControlModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="resumenControlModalLabel">Resumen control</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h6>Grupo: (6499) 11 - 1- Acción de contratación</h6>
                    <table class="table">
                    <thead>
                        <tr>
                        <th>Alumno</th>
                        <th>% Asistencia</th>
                        <th>Tipo Diploma</th>
                        <th>Certifica</th>
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
            { nombre: 'González María Teresa', asistencia: '100%', diploma: 'Aprovechamiento', certifica: 'Si' },
            { nombre: 'Sánchez Andrés', asistencia: '100%', diploma: 'Aprovechamiento', certifica: 'Si' },
            { nombre: 'Muñoz Pablo', asistencia: '100%', diploma: 'Aprovechamiento', certifica: 'Si' },
            { nombre: 'García Martha', asistencia: '100%', diploma: 'Aprovechamiento', certifica: 'Si' },
            { nombre: 'Vargas Juan', asistencia: '100%', diploma: 'Aprovechamiento', certifica: 'Si' }
        ];
    
        const tableBody = document.getElementById('modalTableBody');
    
        data.forEach(item => {
            const row = document.createElement('tr');
    
            const nombreCell = document.createElement('td');
            nombreCell.innerText = item.nombre;
    
            const asistenciaCell = document.createElement('td');
            asistenciaCell.innerText = item.asistencia;
            asistenciaCell.style.color = '#00AD1F';
    
            const diplomaCell = document.createElement('td');
            diplomaCell.innerText = item.diploma;
    
            const certificaCell = document.createElement('td');
            certificaCell.innerText = item.certifica;
            certificaCell.style.color = '#00AD1F';
    
            row.appendChild(nombreCell);
            row.appendChild(asistenciaCell);
            row.appendChild(diplomaCell);
            row.appendChild(certificaCell);
    
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
  
    cardNumber++;
    col2.appendChild(createCard(titulo, subtitulo));
    
    for (let i = 0; i < 3; i++) {
      col3.appendChild(createCard(titulo, subtitulo));
      cardNumber++;
    }
  });
  
