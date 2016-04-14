var prof = {
  age:31,
  name: 'Ziad',
  languages: ['french','english'],
  sayHello: function(someone) {
    console.log(this.name + ' says hello to ' + someone);
  }
};
prof.sayHello("Charles");
