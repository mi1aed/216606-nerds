var container = document.querySelector("[id=yandex-map]");

ymaps.ready(function ()  {
  var myMap = new ymaps.Map(container, {
    center: [59.939364, 30.319436],
    zoom: 16,
    controls: ["zoomControl"]
  });
  myMap.behaviors.disable("scrollZoom");
  myMap.controls.add("zoomControl", {});

    var myPlacemark = new ymaps.Placemark([59.939109, 30.322855] , {},
         {
            iconLayout: "default#image",
            iconImageHref: "img/my-icon.png",
            iconImageSize: [231, 190],
            iconImageOffset: [-40, -142]
         });
    myMap.geoObjects.add(myPlacemark);
});