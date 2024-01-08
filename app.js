// formEl.addEventListener("submit", e=> {
//     e.preventDefault();
//     let xabar = inputEl.value;
//     inputEl.value = "";
// });

// ymaps.ready(renderMap);

// function renderMap() {
//     const myMap = new ymaps.Map("map",{
//         center: [40.388100149508716, 71.78784333878554],
//         zoom: 18
//     })
// }

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [41.3111, 69.2797],
        zoom: 12
    });

    var searchControl = new ymaps.control.SearchControl({
        options: {
            provider: 'yandex#search'
        } 
    });

    myMap.controls.add(searchControl);

    document.getElementById('searchForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var inputValue = document.getElementById('searchInput').value;

        searchControl.search(inputValue).then(function (res) {
            var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
            myMap.geoObjects.removeAll();
            myMap.geoObjects.add(new ymaps.Placemark(coordinates));
        });
    });
}