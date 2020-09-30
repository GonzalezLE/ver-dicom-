cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
var loaded = false;

function loadAndViewImage(imageId) {
  var element = document.getElementById('dicomImage');

  try {
    var start = new Date().getTime();
    cornerstone.loadAndCacheImage(imageId).then(function (image) {
      console.log(image);
      var viewport = cornerstone.getDefaultViewportForImage(element, image);
      cornerstone.displayImage(element, image, viewport);
      if (loaded === false) {
        cornerstoneTools.mouseInput.enable(element);
        cornerstoneTools.mouseWheelInput.enable(element);
        cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button
        cornerstoneTools.pan.activate(element, 2); // pan is the default tool for middle mouse button
        cornerstoneTools.zoom.activate(element, 4); // zoom is the default tool for right mouse button
        cornerstoneTools.zoomWheel.activate(element); // zoom is the default tool for middle mouse wheel
        loaded = true;
      }
      ///INFORMACION DEL PACIENTE
      function getnamepaciente() {
        return value = image.data.string('x00100010');
      }

      function getIdpaciente() {
        return value = image.data.string('x00100020');
      }

      function nacimiento() {
        return value = image.data.string('x00100030');
      }

      function sexo() {
        return value = image.data.string('x00100040');
      }
      // document.getElementById('nombrepaciente').textContent = getnamepaciente();
      // document.getElementById('idpaciente').textContent = getIdpaciente();
      // document.getElementById('nacimiento').textContent = nacimiento();
      // document.getElementById('sexo').textContent = sexo();

      ///Información de estudio
      function desestudio() {
        return value = image.data.string('x00081030');
      }

      function nomprotocol() {
        return value = image.data.string('x00181030');
      }

      function numacceso() {
        return value = image.data.string('x00080050');
      }

      function idestudio() {
        return value = image.data.string('x00200010');
      }

      function fechaestudio() {
        return value = image.data.string('x00080020');
      }

      function timestudio() {
        return value = image.data.string('x00080030');
      }
      // document.getElementById('desestudio').textContent = desestudio();
      // document.getElementById('nomprotocol').textContent = nomprotocol();
      // document.getElementById('numacceso').textContent = numacceso();
      // document.getElementById('idestudio').textContent = idestudio();
      // document.getElementById('fechaestudio').textContent = fechaestudio();
      // document.getElementById('timestudio').textContent = timestudio();

      ///Información de la serie
      function descserie() {
        return value = image.data.string('x0008103e');
      }

      function numserie() {
        return value = image.data.string('x00200011');
      }

      function modalidad() {
        return value = image.data.string('x00080060');
      }

      function partecuerpo() {
        return value = image.data.string('x00180015');
      }

      function fechaestudio() {
        return value = image.data.string('x00080020');
      }

      function timserie() {
        return value = image.data.string('x00080031');
      }
      // document.getElementById('descserie').textContent = descserie();
      // document.getElementById('numserie').textContent = numserie();
      // document.getElementById('modalidad').textContent = modalidad();
      // document.getElementById('partecuerpo').textContent = partecuerpo();
      // document.getElementById('fechaestudio').textContent = fechaestudio();
      // document.getElementById('timserie').textContent = timserie();

      ///Información de la serie
      function fabricante() {
        return value = image.data.string('x00080070');
      }

      function modelo() {
        return value = image.data.string('x00081090');
      }

      function estacion() {
        return value = image.data.string('x00081010');
      }

      function tituloae() {
        return value = image.data.string('x00020016');
      }

      function istitucion() {
        return value = image.data.string('x00080080');
      }

      function software() {
        return value = image.data.string('x00181020');
      }

      function implementacion() {
        return value = image.data.string('x00020013');
      }
      // document.getElementById('fabricante').textContent = fabricante();
      // document.getElementById('modelo').textContent = modelo();
      // document.getElementById('estacion').textContent = estacion();
      // document.getElementById('tituloae').textContent = tituloae();
      // document.getElementById('istitucion').textContent = istitucion();
      // document.getElementById('software').textContent = software();
      // document.getElementById('implementacion').textContent = implementacion();


    }, function (err) {
      alert(err);
    });
  } catch (err) {
    alert(err);
  }
}

function downloadAndView(name='../1581454359abel ibarra cruz') {
  let url = name;
  url = "wadouri:" + url;
  loadAndViewImage(url);
}
var element = document.getElementById('dicomImage');
cornerstone.enable(element);

cornerstone.events.addEventListener('cornerstoneimageloadprogress', function (event) {
  const eventData = event.detail;
  if (eventData.percentComplete == 100) {
    // $('#dicomview').show();
    // $('#loadersDicom').hide();
  } else {
    // $('#loadersDicom').show();
    // $('#dicomview').hide();
  }
});