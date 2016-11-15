# neutronium vue command mixin
<p align="center"><img width="100"src="https://raw.githubusercontent.com/David-Desmaisons/neutronium-vue/master/template/src/assets/logo.png"></p>
Mixin to integrate MVVM ICommand with vue

[![Npm version](https://img.shields.io/npm/v/neutronium-vue-command-mixin.svg?maxAge=2592000)](https://www.npmjs.com/package/neutronium-vue-command-mixin)
[![MIT License](https://img.shields.io/github/license/David-Desmaisons/neutronium-vue-command-mixin.svg)](https://github.com/David-Desmaisons/neutronium-vue-command-mixin/blob/master/LICENSE)


### Usage
Provide mixin to easily integrate ICommand in vue.js using Neutronium.
Component this mixin exposes:

### Props
#### command
Type: `Array`<br>
Required: `true`<br>

The C# command.

#### arg
Type: `Object`<br>
Required: `false`

The argument that will be passed to comand when execute is called.

### Computed
#### canExecute
Type: `Boolean`<br>

True if Command CanExecute is true.

### Method
#### execute

Call the corresponding command with the argument `arg`


Example usage, declaring buttoncommand component in a .vue file (using semantic ui):
 
```javascript
<template>
  <div class="ui button" :class="{'disabled': !canExecute}" @click="execute">   
    <slot></slot>  
  </div>
</template>
<script>
import comandMixin from 'neutronium-vue-command-mixin'

export default {
  mixins:[comandMixin]
}
</script>

<style>
@import '~dist/semantic.css';
</style>
```

Using buttoncommand:

```javascript
<buttoncommand :command="compute">
	Submit
</buttoncommand> 
```
