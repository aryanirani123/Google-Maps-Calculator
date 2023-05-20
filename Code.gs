function doGet() {
  return HtmlService.createHtmlOutputFromFile('file.html');
}

function calculateDistances(start, end) {
  var directions = Maps.newDirectionFinder()
    .setOrigin(start)
    .setDestination(end)
    .setMode(Maps.DirectionFinder.Mode.DRIVING)
    .getDirections();

  var distance = directions.routes[0].legs[0].distance.text;
  var duration = directions.routes[0].legs[0].duration.text;

  return { distance: distance, duration: duration };
}
