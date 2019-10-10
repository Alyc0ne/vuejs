<template>
 <div class='block-content'>
    <div class="row side-pos">
        <div class="col-8" id="Sell-PageLeft" style="height:100%!important;">

        </div>
        <div class="col-4">
            <input type="text" name="barcode" v-model="barcode" class="input-barcode" autofocus>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.side-pos {
  margin: 10px;
}
.input-barcode {
  width:100%;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
}
</style>
