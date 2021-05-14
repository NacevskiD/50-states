<template>

  <div>
  <p>There are {{states.length}} states and the District of Columbia</p>
  <p>You have visited {{totalVisited}} {{units}}</p>

    <p id="all-visited-message" v-if="areAllVisited">You have visited all the states in the district of Columbia</p>
  </div>

</template>


<script>

export default {
  name:'StateSummary',
  props: {
    states:Array
  },
  computed:{
    totalVisited(){
      let visitedCount = 0
      //adding +1 for every visited state
      this.states.forEach( state=>{
        if (state.visited){
          visitedCount++
        }
      })
      return visitedCount
    },
    units(){
      if(this.totalVisited===1){
        return 'state'
      }else {
        return "states"
      }
    },
    //checking if all states are visited to display a special message
    areAllVisited(){
      return this.totalVisited===this.states.length
    }
  }
}

</script>


<style>

#all-visited-message{
  color: purple;
  font-weight: 450;
}

</style>