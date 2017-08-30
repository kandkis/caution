<template>
  <!-- 页面 -->
  <div id="app">
    <div class="head">
      <Row class="headwenzi">
        <Col span="24" class="heads">
        <span>学校管理模块</span>
        <!-- 五级联动 -->
        <div id="example">

        </div>
        </Col>
      </Row>
    </div>
    <!-- 数据主体部分 -->
    <div class="school-content">
      <div class="school-topcontent">
        <Row>
          <!-- 左上 -->
          <Col span="6">
          <div class="leftop-image">
            <span>学校:</span>
          </div>
          <div id="echart-bing">

          </div>
          <div class="leftexamine">
            <div class="leftexamine_son1 clearfu">
              <span class="son1">1</span>
              <span class="son2">审核已通过：</span>
            </div>
            <div class="leftexamine_son2 clearfu">
              <span class="son1_1">1</span>
              <span class="son2_2">已注销删除：</span>
            </div>
          </div>
          </Col>
          <!-- 右上 -->
          <Col span="18" class="topright">
          <div class="imagebox">
            <div>任务总数：</div>
            <div>当月总数：</div>
          </div>
          <div class="table_1">
            <Table :columns="columns1" :data="data1"></Table>
          </div>
          <span>学校</span>

          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'app',
  data() {
    return {
      columns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data1: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居'
        }
      ]
    }
  }
}
</script>

<style lang='less'>
#app {
  width: 100%;
  height: 980px;
  background-color: #10113f; // 头部样式
  >.head {
    height: 47px;
    width: 100%;
    border-bottom: 1px solid #8889a0;
    >.headwenzi {
      width: 100%;
      >.heads {
        width: 100%;
        text-align: center;
        >span {
          color: #fff;
          font-size: 31px;
        }
      }
    }
  } // 主体样式
  >.school-content {
    width: 100%;

    >.school-topcontent {
      // 左上
      height: 286px;
      width: 100%;
      border-bottom: 1px solid #8889a0;
      >.ivu-row {
        >.ivu-col {
          border-right: 1px solid #8889a0;
          height: 286px;
          >.leftop-image {
            height: 41px;
            width: 200px;
            margin-top: 12px;
            background: url("./photo/Hotel-management.png") no-repeat 0px -30px;
            padding-left: 100px;
            >span {
              font-size: 27px;
              color: #fff;
            }
          } // 圆饼
          >#echart-bing {
            width: 155px;
            height: 132px;
            float: left;
            margin-top: 23px;
            margin-left: 16px;
            background-color: red;
          }
          >.leftexamine {
            float: right;
            width: 180px;
            height: 70px;
            margin-top: 43px;
            >div {

              font-size: 16px;
              color: #fff;
            }
            >.leftexamine_son1 {
              >.son1 {
                display: block;
                line-height: 16px;
                text-align: center;
                width: 16px;
                height: 16px;
                background-color: #ffcc00;
                border-radius: 50%;
                float: left;
              }
              >.son2 {
                float: right;
                margin-right: 60px;
                line-height: 20px;
              }
            }
            >.leftexamine_son2 {
              margin-top: 30px;
              >.son1_1 {
                display: block;
                line-height: 16px;
                text-align: center;
                width: 16px;
                height: 16px;
                background-color: #ff9966;
                border-radius: 50%;
                float: left;
              }
              >.son2_2 {
                float: right;
                margin-right: 60px;
                line-height: 20px;
              }
            }
          }
        }
        >.topright {
         >.imagebox {

         }
        >.table_1 {
          >.ivu-table-wrappe {
              .ivu-table {
                width: 516px;
                align: center;
              }
            }
          }
        }
      }
    }
  }
}

.clearfu:after {
  content: ".";
  clear: both;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
</style>
