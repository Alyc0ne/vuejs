<template>
<!--Use For Insert,Update Doc -->
 <div class="modal fade" ref="ManageGoodsModal" id="ManageGoodsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id='formGoods' v-on:submit.prevent="BindManage()">
                <div class="modal-body">
                    <div id='frmGoods'>
                        <div class="form-group row">
                            <label for="GoodsNo" class="col-2 col-form-label">รหัสสินค้า : </label>
                            <div class="frm-content col-10">
                                <input type="text" class="form-control" v-model="$store.getters.RunningNumber" data-maxlength='10' disabled>
                                <input type="hidden" class="form-control" id="tempGoodsNo" name="GoodsNo">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="GoodsBarcode" class="col-2 col-form-label require"><span class='text-red'> </span>Barcode : </label>
                            <div class="col-10">
                                <div class="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" class="custom-control-input" id="IsBarcode">
                                    <input type="hidden" v-model="obj.IsBarcode" value="0"/>
                                    <label class="custom-control-label" for="IsBarcode">ใช้งาน Barcode</label>
                                </div>
                                <input type="text" class="form-control" v-model="obj.GoodsBarcode" data-maxlength='10' disabled autocomplete="off">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="GoodsName" class="col-2 col-form-label require"><span class='text-red'>* </span>ชื่อสินค้า : </label>
                            <div class="col-10">
                                <input type="text" class="form-control inputFocus" v-model="obj.GoodsName" data-maxlength='250' autocomplete="off">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="GoodsCost" class="col-2 col-form-label">ต้นทุนสินค้า : </label>
                            <div class="col-10">
                                <input type="text" class="form-control _number" v-model="obj.GoodsCost" autocomplete="off">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="GoodsPrice" class="col-2 col-form-label require"><span class='text-red'>* </span>ราคาสินค้า : </label>
                            <div class="col-10">
                                <input type="text" class="form-control _number" v-model="obj.GoodsPrice" autocomplete="off">
                            </div>
                        </div>
                        <!-- <div class="form-group row">
                            <label for="GoodsUnit" class="col-2 col-form-label">หน่วยนับ : </label>
                            <div class="col-10">
                                <select class="unitGoods" name="unitGoods" style="width: 50%">
                                </select>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'ManageGoodsModal',
  data () {
    return {
      obj: {}
    }
  },
  mounted () {
    // this.obj.GoodsNo = this.$http.get(this.$api + 'GetRunningNumber/Goods')
  },
  methods: {
    BindManage: function () {
      this.obj.GoodsNo = this.$store.getters.RunningNumber
      this.$http.post(this.$api + 'BindManage' + this.$store.getters.SystemName, this.obj)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
