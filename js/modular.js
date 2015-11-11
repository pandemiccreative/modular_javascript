// LESSON 3 - REVEALING MODULE PATTERN
var people = (function(){
    var people = ['Justify', 'Hellraiser'];

    // Cache DOM
    var $el = $('#peopleModule');
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#people-template').html();

    // Bind Events
    $button.on('click', addPerson);
    $ul.delegate('i.del', 'click', deletePerson);

    _render();

    function _render(){
        $ul.html(Mustache._render(template, {people: people}));
    };

    function addPerson(value){
        var name = (typeof value === 'string') ? value : $input.val();
        people.push(name);
        _render();
        $input.val('');
    };

    function deletePerson(event){
        var i;
        if (typeof event === 'number'){
            i = event;
        } else{
            var $remove = $(event.target).closest('li');
            i = $ul.find('li').index($remove);
        }

        people.splice(i, 1);
        _render();
    };

    return{
        addPerson: addPerson,
        deletePerson: deletePerson
    };
})();





// LESSON 2 - OBJECT LITERAL MODULE
//(function(){
//    var people = {
//        people: ['Justify', 'Hellraiser'],
//        init: function(){
//            this.cacheDom();
//            this.bindEvents();
//            this.render();
//        },
//        cacheDom: function(){
//            this.$el = $('#peopleModule');
//            this.$button = this.$el.find('button');
//            this.$input = this.$el.find('input');
//            this.$ul = this.$el.find('ul');
//            this.template = this.$el.find('#people-template').html();
//        },
//        bindEvents: function() {
//            this.$button.on('click', this.addPerson.bind(this));
//            this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
//        },
//        render: function(){
//            var data = {
//                people: this.people,
//            };
//
//            this.$ul.html(Mustache.render(this.template, data));
//        },
//        addPerson: function(){
//            this.people.push(this.$input.val());
//            this.render();
//            this.$input.val('');
//        },
//        deletePerson: function(event) {
//            var $remove = $(event.target).closest('li');
//            var i = this.$ul.find('li').index($remove);
//
//            this.people.splice(i, 1);
//            this.render();
//        }
//    };
//
//    people.init();
//})();
