export default {
  methods: {
    GenRunningNumber: function (SystemName) {
      this.$http.get(this.$api + 'GetRunningNumber/Goods')
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    callModal (refModal) {
      alert(refModal)
    }
  }
}
