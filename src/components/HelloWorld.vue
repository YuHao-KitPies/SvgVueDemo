<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="draw"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello svg.js'
    }
  },
  mounted: function() {
   this.$nextTick(function() {
     this.drawPath();
   });
  },
  methods: {
     drawPath() {
       var draw = this.$svg().addTo('#draw').size(634, 489)

       var path = draw.path('M198.722 59.156l-69.6 17.244L45.05 55.57c-6.9-1.71-12.579 5.538-9.27 11.83l16.207 30.81 3.11 5.912 2.408 4.578a16.845 16.845 0 0 0 14.688 9.003l56.245.738v104.157a6.35 6.35 0 0 1-6.35 6.35H99.36a6.05 6.05 0 0 1-6.012-5.384L87.29 168.71a5.415 5.415 0 0 0-5.382-4.821H25.33a21.77 21.77 0 0 0-6.474.979c-.476.148-.94.318-1.402.497-.845.328-1.667.703-2.457 1.129-6.812 3.68-11.44 10.884-11.44 19.168v1.367c0 12.024 9.75 21.773 21.773 21.773h22.336a4.768 4.768 0 0 1 4.767 4.626l.466 15.52 1.69 35.29c1.86 17.002 16.22 29.877 33.322 29.877h40.528v57.303h-20.214c-7.833 0-14.182 6.349-14.182 14.182s6.35 14.183 14.182 14.183h.82v76.875h-.82c-7.833 0-14.182 6.35-14.182 14.183 0 7.832 6.35 14.182 14.182 14.182h449.343c7.833 0 14.183-6.35 14.183-14.182 0-5.836-3.527-10.844-8.563-13.02V378.62c5.036-2.177 8.563-7.185 8.563-13.02 0-7.833-6.35-14.182-14.183-14.182h-20.214v-50.746a6.558 6.558 0 0 1 6.558-6.557h13.425c18.527 0 33.541-15.03 33.52-33.558l-.025-22.871a8.747 8.747 0 0 0-8.747-8.738h-38.173a6.558 6.558 0 0 1-6.558-6.557V118.44l56.245-.738a16.848 16.848 0 0 0 14.69-9.003l2.407-4.578 6.731-12.795 9.4-17.87 2.31-4.39.876-1.667c3.31-6.292-2.37-13.54-9.27-11.83L536.67 76.4l-91.76-22.735a41.974 41.974 0 0 0-3.869-.748L326.956 2.613 261.421 31.51')
       path.fill('none').move(0, 0)
       path.stroke({ color: '#f06', width: 8, linecap: 'round', linejoin: 'round' });

       var poly = path.toPoly('20px', false);
       poly.fill('none');
       poly.stroke({ color: '#02DF82', width: 2, linecap: 'round', linejoin: 'round' });
       poly.addTo(draw);

       var dots = poly.array();
       dots.forEach(function (e) {
         draw.circle(6).fill('#02DF82').center(e[0], e[1]);
       });
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
