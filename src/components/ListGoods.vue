<template>
 <div class="block-content">
    <div class='block-menu' style="border-bottom:none;">
        <div class='row'>
            <div class="col-md-12 col-lg-6 d-flex">
            </div>
            <div class="col-md-12 col-lg-6 d-inline-flex flex-wrap justify-content-lg-end">
                <div class="col-9 p_lr0">
                    <input type="text" class="form-control" name="frmGoods-Search" id="frmGoods-Search" placeholder="">
                </div>
                <div class="col-3 p_r0">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle w_100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" disabled>
                            Fix Barcode & Name
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <select name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="contentGoods">
        <div class="row m_a0 bordered-box pane">
            <!-- <div class="pane-hScroll"> -->
                <table class="table" style="margin-bottom:0px;">
                <thead>
                    <th>รหัสสินค้า</th>
                    <th>ชื่อสินค้า</th>
                    <th style="text-align:center;">หน่วยนับสินค้า</th>
                    <th style="text-align:right;">ราคาต้นทุน</th>
                    <th style="text-align:right;">ราคาขาย</th>
                    <th style="text-align:center;">#</th>
                </thead>
                </table>
                <!-- <div class="pane-vScroll" style="max-height:380px;"> -->
                <table class="table">
                    <tbody v-for="(_result) in result" v-bind:key="_result.GoodsID">
                        <td>{{ _result.GoodsNo }}</td>
                        <td style="text-align:left;">{{ _result.GoodsName }}</td>
                        <td style="text-align:left;">{{ _result.UnitName }}</td>
                        <td style="text-align:left;">{{ _result.GoodsCost }}</td>
                        <td style="text-align:left;">{{ _result.GoodsPrice }}</td>
                        <td style="text-align:center;">
                            <button class="btn btn-default p_a0" id="btn-editGoods"></button>
                        </td>
                    </tbody>
                </table>
                <!-- </div> -->
            <!-- </div> -->
        </div>
        <div class="row" style="margin-top:10px;">
        </div>
    </div>
</div>
</template>

<style scoped>
/* @import './assets/styles/SaleAutomation/POS/PosSales.css'; */
</style>

<script>
export default {
  name: 'hello',
  data () {
    this.$http.get('http://127.0.0.1:8000/TestAPI')
      .then((result) => {
        this.result = result.data.data
      })
    return {
      result: []
    }
  }
}
</script>
