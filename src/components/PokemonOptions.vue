<template>
<div class="optionContainer">
  <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
  </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
ul{
    list-style-type: none;
}

li{
    background-color: white;
    border-radius: 5px;
    border: 1px solid black;
    width: 200px;
    margin-bottom: 10px;

    cursor: pointer;

    
}
li:hover{
    background-color: rgba(0, 0, 0, 0.2);
}

.optionContainer{
    justify-content: center;
    display: flex;
}
</style>