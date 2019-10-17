<template>
 <div class='block-content'>
    <div class="row side-pos">
        <div class="col-xl-6 col-sm-4" id="Sell-PageLeft" style="height:100%!important;">

        </div>
        <div class="col-xl-6 col-sm-8">
          <div class="row">
            <div class="col-2">
              <input type="number" name="qtyBarcode" v-model="qtyBarcode" class="form-control" :min="1" :max="99">
            </div>
            <div class="col-10">
              <input type="text" name="GoodsBarCode" v-model="GoodsBarCode" class="form-control" autofocus placeholder="input barcode" @change="GetGoodsByBarCode()">
            </div>
          </div>
          <div class="row">
            <div class="card w_100" style="height:65vh;">
              <div class="card-body" style="padding:0px;">
                <table class="w_100">
                  <thead style="background:rgba(0,0,0,0.04);">
                    <th style="width: 2vw;">Qty</th>
                    <th class="text-left" style="width: 5vw;">ItemName</th>
                    <th class="text-right" style="width: 5vw;">Per Items</th>
                    <th class="text-right" style="width: 5vw;padding-right:5px;">Total</th>
                  </thead>
                  <tbody>
                    <tr class="transac-posDetail" v-for="_Goods in Goods" v-bind:key="_Goods.GoodsID">
                      <th style="width: 2vw;">5
                        <!-- <div style="border:solid 1px black;display: flex;position: relative;">
                          <button type="button" class="decressQty">-</button>
                          1
                          <button type="button" class="incressQty">+</button>
                        </div> -->
                      </th>
                      <th class="text-left" style="width: 5vw;">{{ _Goods.GoodsName }}</th>
                      <th class="text-right" style="width: 5vw;">{{ _Goods.GoodsPrice }}</th>
                      <th class="text-right" style="width: 5vw;padding-right:5px;">{{ _Goods.GoodsPrice * _Goods.GoodsQty }}</th>
                    </tr>
                    <!-- <tr class="transac-posDetail">
                      <th class="border">
                        <div style="border:solid 1px black;display: flex;position: relative;">
                          <button type="button" class="decressQty">-</button>
                          <input type="text" name="" id="" style="width:100%;border:none;text-align:center;">
                          <button type="button" class="incressQty">+</button>
                        </div>
                      </th>
                      <td class="border" style="width:20vw;">ItemName</td>
                      <td class="border" style="width:20%;">@</td>
                      <td class="border" style="width:20%;">Total</td>
                    </tr> -->
                  </tbody>
                </table>
              </div>
              <div class="card-footer" style="padding:0px;background-color: transparent;">
                <div class="row" style="height:6vh;margin:0px;">
                  <div class="col-8 text-right" style="padding:10px;">
                    <span>Sub Total : </span>
                  </div>
                  <div class="col-4" style="padding:0px 5px 0px 0px;">
                    <input type="text" name="subTotal" v-model="subtotal" class="w_100 h_100 text-right" style="border:none;background: transparent;" disabled>
                  </div>
                </div>
                <div class="row" style="height:6vh;margin:0px;">
                  <div class="col-8 text-right" style="padding:10px;">
                    <span>Discount : </span>
                  </div>
                  <div class="col-4" style="padding:0px;">
                    <input type="text" name="discount" v-model="discount" class="w_100 h_100 text-right" style="border:none;padding-right:5px;" @focus="ClearValue(this)" @change="calSummary()" autocomplete="false">
                  </div>
                </div>
                <div class="row" style="height:6vh;margin:0px;">
                  <div class="col-8 text-right" style="padding:10px;">
                    <span>Grand Total : </span>
                  </div>
                  <div class="col-4" style="padding:0px 5px 0px 0px;">
                    <input type="text" name="grandtotal" v-model="grandtotal" class="w_100 h_100 text-right" style="border:none;background: transparent;" disabled>
                  </div>
                </div>
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
      Goods: null,
      GoodsBarCode: '',
      qtyBarcode: 1,
      barcode: '',
      subtotal: '1,500.00',
      discount: '0.00',
      grandtotal: '0.00'
    }
  },
  methods: {
    ClearValue: function (e) {
      this.discount = ''
    },
    GetGoodsByBarCode: function () {
      this.$http.post('http://127.0.0.1:8000/GetGoodsByBarcode', {
        GoodsBarCode: this.GoodsBarCode
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    calSummary: function (e) {
      let subtotal = parseFloat(this.subtotal.replace(/,/g, ''))
      let discount = parseFloat(this.discount.replace(/,/g, ''))
      if (subtotal > discount) {
        this.discount = discount
        this.grandtotal = (subtotal - discount).toFixed(2)
      }
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
.transac-posDetail tr:not(:last-child) {
  height: 30px;
  border-bottom: solid 1px black;
}
.transac-posDetail tr:last-child {
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
.border {
  border: solid 1px black;
}
</style>
