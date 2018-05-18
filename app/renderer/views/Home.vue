<template lang="pug">
#home
  div(ref="terminal")
</template>

<script lang="ts">
import Vue from 'vue'
import { Terminal } from 'xterm'
import * as fit from 'xterm/lib/addons/fit/fit'

Terminal.applyAddon(fit)

export default Vue.extend({
  data() {
    return {
      term: new Terminal(),
    }
  },
  mounted() {
    this.term.open(this.$refs.terminal, true)
    this.term.fit()
    this.term.write('Hello from \x1B[1;3;31mtint\x1B[0m \r\n$ ')
  },
})
</script>

<style lang="stylus" scoped>
@import 'xterm/dist/xterm.css'
</style>
