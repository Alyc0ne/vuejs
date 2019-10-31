<template>
 <div class="block-content">
    <div class='block-menu' style="border-bottom:none;">
        <div class='row' style="margin:10px;">
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
    <div style="margin:10px;">
      <!-- class="contentGoods" -->
        <div class="row m_a0 bordered-box pane">
          <div class="transac-pos">
            <div class="transac-pos-scroll">
              <table class="table" style="margin-bottom:0px;">
                  <thead class="thead-dark" style="line-height:10px;">
                      <th style="text-align:center;width:5%;">#</th>
                      <th style="text-align:left;width:10%;">รหัสสินค้า</th>
                      <th style="text-align:left;width:45%;">ชื่อสินค้า</th>
                      <th style="text-align:center; width:10%;">หน่วยนับสินค้า</th>
                      <th style="text-align:right; width:15%;">ราคาต้นทุน</th>
                      <th style="text-align:right; width:15%;">ราคาขาย</th>
                  </thead>
              </table>
              <div class="transac-posDetail-Scroll">
                <table>
                    <tbody>
                        <tr class="transac-posDetail" v-for="(_result) in result" v-bind:key="_result.GoodsID">
                          <td style="text-align:center;width:5%;">
                            <i class="far fa-edit" @click="ManageGoods()"></i>
                            <i class="fas fa-trash-alt"></i>
                          </td>
                          <td style="text-align:left;width:10%;">{{ _result.GoodsNo }}</td>
                          <td style="text-align:left;width:45%;" :title="_result.GoodsName">{{ _result.GoodsName }}</td>
                          <td style="text-align:center;width:10%;">ไข่ดำ นมเด้ง</td>
                          <td style="text-align:right;width:15%;">{{ _result.GoodsCost }}</td>
                          <td style="text-align:right;width:15%;">{{ _result.GoodsPrice }}</td>
                        </tr>
                    </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="row transac-pagination" style="margin-top:10px;">
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item disabled">
                <span class="page-link">Previous</span>
              </li>
              <li class="page-item" :class="{ active : thisPage == GP }" v-for="GP in GoodsPagination" v-bind:key="GP.page">
                <a class="page-link" @click="GetGoodData(GP)">{{ GP }}</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
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
    this.GetGoodData()
    return {
      result: [],
      GoodsPagination: 0,
      thisPage: 1
    }
  },
  methods: {
    GetGoodData: function (pageNumber) {
      console.log(pageNumber)
      this.$http.get('http://127.0.0.1:8000/api/TestAPI?page=' + pageNumber)
        .then((result) => {
          this.result = result.data.data
          this.GoodsPagination = result.data.last_page
          this.thisPage = result.data.current_page
        })
    }
  }
}
</script>
<style scoped>
.transac-pos {
  position:relative;
  width:100%;
}
.transac-pos table {
  width:100%;
}
.transac-posDetail-Scroll {
  height: 56vh;
  overflow:auto;
}
.transac-posDetail td {
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100px;
  overflow: hidden;
}
tr:not(:last-child).transac-posDetail {
  height: 30px;
  border-bottom: solid 1px black;
}
tr:last-child.transac-posDetail  {
  height: 30px;
}
.transac-pagination {
  justify-content: center;
}
i {
  cursor: pointer;
}
</style>
