<template>
 <div class='block-content'>
    <div class="row side-pos">
        <div class="col-6" id="Sell-PageLeft" style="height:100%!important;">

        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-2">
              <input type="number" name="qtyBarcode" v-model="qtyBarcode" class="form-control" :min="1" :max="99">
            </div>
            <div class="col-10">
              <input type="text" name="barcode" v-model="barcode" class="form-control" autofocus placeholder="input barcode">
            </div>
          </div>
          <div class="row">
            <div class="card w_100">
              <div class="card-header">
                <table class="w_100">
                  <thead>
                    <th style="width:10%;">Qty</th>
                    <th style="width:40%;">ItemName</th>
                    <th style="width:20%;">@</th>
                    <th style="width:20%;">Total</th>
                  </thead>
                </table>
              </div>
              <div class="card-body">
                <table class="w_100">
                  <tbody>
                    <tr class="transac-posDetail">
                      <td style="width:10%;">
                        <div style="border:solid 1px black;display: flex;position: relative;">
                          <button type="button" class="decressQty">-</button>
                          <input type="text" name="" id="" style="width:100%;border:none;text-align:center;">
                          <button type="button" class="incressQty">+</button>
                        </div>
                      </td>
                      <td style="width:40%;">ItemName</td>
                      <td style="width:20%;">@</td>
                      <td style="width:20%;">Total</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      qtyBarcode: 1,
      barcode: ''
    }
  }
}
</script>

<style scoped>
.side-pos, .row {
  margin: 10px;
}
.side-pos .card {
  margin: 15px;
}
.transac-posDetail {
  height: 30px;
}
.transac-posDetail td {
  max-height: 30px;
}
.decressQty {
  border: 0;
  background-color: white;
  border-right: solid 1px black;
  border-top-right-radius: 0;
  width: 40px;
}
.incressQty {
  border: 0;
  background-color: white;
  border-left: solid 1px black;
  border-top-left-radius: 0;
  width: 40px;
}
</style>
