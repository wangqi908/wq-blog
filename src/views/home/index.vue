<template>
  <div>
    <div class="home">
      <div class="left-box">
        <Person />
        <Recent v-if="isShowRightDom" />
      </div>
      <div class="middle-box">
        <List />
      </div>
      <div class="rigth-box" v-if="!isShowRightDom">
        <Recent />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { Person, Recent } from "@c";
import { List } from "./components";
export default {
  components: { Person, Recent, List },
  data() {
    return {
      smallWidth: 400
    };
  },
  methods: {
    ...mapMutations(["setShowRightDom"]),
    watchClientWidth() {
      let clientWidth = document.body.clientWidth;
      this.setShowRightDom(clientWidth < this.smallWidth);
    },
    handleClientWidth() {
      this.watchClientWidth();
      window.addEventListener("resize", () => {
        this.watchClientWidth();
      });
    }
  },
  mounted() {
    this.handleClientWidth();
  },
  computed: {
    ...mapState(["isShowRightDom"])
  }
};
</script>

<style lang='scss' scoped>
.home {
  display: flex;
  .left-box {
    background-color: #fff;
    border: 1px solid #000;
    padding: 20px;
  }
  .middle-box {
    flex: 1;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #000;
  }
  .rigth-box {
    background-color: #fff;
    border: 1px solid #000;
    padding: 20px;
  }
}
</style>
