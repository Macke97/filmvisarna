let spa;
//JSON._load('comingMovies.json');
JSON._load('comingMovies.json').then(function(comingMovie){
  Templates.comingMovies = comingMovie;

});
JSON._load('movies.json').then(function(movie){

  Templates.movies = movie;
  // Templates.comingMovies = comingMovies;
  spa = new Spa();
});

$(document).on('click', 'main', () => $('.navbar-collapse').collapse('hide'));
