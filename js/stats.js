var stats = (function(){
    var people = 0;

    // Cache DOM
    var $stats = $('#statsModule');
    var template = $('#stats-template').html();

    // Bind Events
    events.on('peopleChanged', setPeople);
    _render();

    function _render(){
        $stats.html(Mustache.render(template, {people: people}));
    };

    function setPeople(newPeople){
        people = newPeople;
        _render();
    };
})();
