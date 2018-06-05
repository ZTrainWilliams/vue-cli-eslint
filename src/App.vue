<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },  
  created () {
    this.$navigation.on('forward', (to, from) => {
      this.transitionName = 'slide-left'
    })
    this.$navigation.on('back', (to, from) => {
      this.transitionName = 'slide-right'
    })
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>
@import url('./assets/css/base.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  min-width: 1024px;
}
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  min-width: 1024px;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}

.bounce-enter-active {
  animation: bounce-in .5s;
  -webkit-animation:bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-out .2s;
  -webkit-animation: bounce-out .2s;
}

@keyframes bounce-in {
  0% {transform: scale(0)}
  50% {transform: scale(1.05)}
  100% {transform: scale(1)}
}

@keyframes bounce-out {
  0% {transform: scale(1)}
  50% {transform: scale(0.95)}
  100% {transform: scale(0)}
}
</style>
