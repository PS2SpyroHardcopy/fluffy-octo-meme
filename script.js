Vue.component("flipper", {
  data: function() {
    return {
      flipped: false
    }; //end return
  }, //end data

  props: ["name", "codename"],
  template: `<div v-on:click ="changeStuff"   ><div  :class = "{hide:flipped}">{{name}}</div> <div :class = "{hide:!flipped}">{{codename}}</div></div>`,

  methods: {
    flip: function() {
      if (this.flipped) {
        //if it is flipped AKA name
        this.flipped = !this.flipped; //make it unflipped AKA codename
        this.$emit("card-unflipped");
        console.log(this.flipped);
        this.$emit("counterTrue");
      } else {
        this.flipped = !this.flipped; //if it is unflipped AKA code name; Flip it AKA name
        this.$emit("card-flipped");
        console.log(this.flipped);
      }
    }, //end flip

    changeStuff: function() {
      this.$emit("counterTrue");
    } //end changeStuff
  } //end methods
}); //end component

Vue.component("liker",{
  data:function(){
    return{
      likesProp:0,
    }//end return
  },//end data
  
  props: ["likesProp"],
  template: `<button v-on:click = "$emit('likeIncrease')">BUTTON THING</button>`,
  
  
})



new Vue({
  el: "#app",
  data: {
    message: "whatever",
    characters: [
      { name: "Protagonist", codename: "Joker" },
      { name: "Anne", codename: "Panther" },
      { name: "Ryuji", codename: "Skull" }
    ], // end characters
    changeBground: false,
    flippedCounter: 0,
    bgcolor: "white",
    textColor: "black",
    likes:0,
  } //end data

  //methods:{

  //}//end methods
}); //end vue