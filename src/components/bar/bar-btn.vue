<template>
  <button 
    class="bar-slider-btn btn" 
    role="slider"
    @touchstart="start"
    @mousedown="start"
    @touchmove="move"
    @mousemove="move"
    @touchend="end"
    @mouseup="end"
    @touchcancel="end"
    @mousecancel="end"
    @mouseleave="end"
  ></button>
</template>
<script>
/**
 * ZBarBtn
 *
 * Spectre: https://picturepan2.github.io/spectre/components/bars.html
 *
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 */
// import { timeNow } from '@/utils';

const TOUCH_EVENT = 1
const MOUSE_EVENT = 2

const eventType = {
  touchstart: TOUCH_EVENT,
  touchmove: TOUCH_EVENT,
  touchend: TOUCH_EVENT,
  mousedown: MOUSE_EVENT,
  mousemove: MOUSE_EVENT,
  mouseup: MOUSE_EVENT,
  mouseleave: MOUSE_EVENT
}

export default {
  name: 'BarBtn',
  props: {
  },
  data () {
    return {
      x: 0,
      distX: 0,
      duration: 0
    }
  },
  computed: {
  },
  methods: {
    start (event) {
      const _eventType = eventType[event.type];

      if (_eventType !== TOUCH_EVENT) {
        if (event.button !== 0) {
          return;
        }
      }

      if (this.initiated && this.initiated !== _eventType) {
        return;
      }

      this.initiated = _eventType;
      this.$emit('bar-btn:start', { event, component: this });
      // this.duration = this.slideTime;
      this.distX = 0
      // this.startTime = timeNow();
      
      const touch = event.touches ? event.touches[0] : event
      this.x = touch.pageX;

      // this.startX = this.x;
      // this.absStartX = this.x
      // this.touchX = touch.pageX;
    },
    move (event) {
      if (eventType[event.type] !== this.initiated) {
        return;
      }

      const touch = event.touches ? event.touches[0] : event;
      console.log(touch);

      this.distX = touch.pageX - this.x;
      
      // const deltaX = touch.pageX - this.touchX
      // this.touchX = touch.pageX
      // this.distX += deltaX
      // const absDistX = Math.abs(this.distX);

      // const timestamp = timeNow()
      // if (timestamp - this.endTime > this.momentumLimitTime && absDistX < this.momentumLimitDistance) {
      //   return
      // }
      // let newX = this.x + deltaX
      // if ((this.left === 0 && newX > this.maxScrollX) || (this.right === 0 && newX < this.minScrollX)) {
      //   return
      // }
      // if (newX < this.minScrollX || newX > this.maxScrollX) {
      //   if (this.bounce) {
      //     newX = this.x + deltaX / 3
      //   } else {
      //     newX = newX < this.minScrollX ? this.minScrollX : this.maxScrollX
      //   }
      // }
      // this.x = newX

      this.$root.$emit('bar-btn:move', { event, component: this });
    },
    end (event) {
      if (eventType[event.type] !== this.initiated) {
        return;
      }

      this.x = 0;

      this.$emit('bar-btn:end', { event, component: this });
    },
  }
}
</script>
