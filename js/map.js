var container = document.querySelector("[id=yandex-map]");

ymaps.ready(function () {
    var myMap = new ymaps.Map(container, {
            center: [59.939364, 30.329436],
            zoom: 16,
            controls: ["ZoomControl"]
        });
    myMap.behaviors.disable("scrollZoom");
    myMap.controls.add("zoomControl", {});
  
    var myPlacemark = new ymaps.Placemark([59.938631, 30.323055] , {},
         {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: "default#image",
            // Своё изображение иконки метки.
            iconImageHref: "img/my-icon.png",
            // Размеры метки.
            iconImageSize: [231, 190],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).

    myMap.geoObjects.add(myPlacemark);
});
