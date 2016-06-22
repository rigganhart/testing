var assert = require('chai').assert;
var expect = require('chai').expect;

// its time to meet the muppets
class Muppet {
  constructor(props){
    this.name = props.name;
    this.age = props.age;
  }
  speak(){
    return "Wakka Wakka";
  }
}

class Frog extends Muppet {
  constructor(props){
    super(props)
    this.color = props.color;
  }
  speak(){
    return "Ribbit Ribbit";
  }
}


var kermit = new Frog({
  name: "Kermit",
  age: 3,
  color: "green"
});

var fozzy = new Muppet({
  name:"Fozzy",
  age: 2
})
//end of the muppet show


describe('Muppet', function(){
  describe('speak()', function(){
    it('returns a string', function(){
      // given
      var fozzy = new Muppet({
        name:"Fozzy",
        age: 2
      })
      // when
      var sound = fozzy.speak();

      // then
      expect(sound).to.be.a("string")
    })
    it('string returned equals Wakka Wakka', function(){
      // given
      var fozzy = new Muppet({
        name:"Fozzy",
        age: 2
      })
      // when
      var sound = fozzy.speak();

      // then
      expect(sound).to.equal('Wakka Wakka');
    })
  })
})

describe('Muppet', function(){
  describe('Frog', function(){
  describe('speak()', function(){
    it('returns a string', function(){
      // given
      var kermit = new Frog({
        name: "Kermit",
        age: 3,
        color: "green"
      });

      // when
      var sound = kermit.speak();

      // then
      expect(sound).to.be.a("string")
    })
    it('string returned equals Ribbit Ribbit', function(){
      // given
      var kermit = new Frog({
        name: "Kermit",
        age: 3,
        color: "green"
      });

      // when
      var sound = kermit.speak();

      // then
      expect(sound).to.equal('Ribbit Ribbit');
    })
  })
})
})
