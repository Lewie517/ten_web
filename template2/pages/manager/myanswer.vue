<template>
  <div class="answers">
    <h4>
      <span>我的回答</span>
    </h4>
    <ul class="answer-list">
      <!-- <li> <span class="fl good"> <span class="num">8</span> 有用</span> <span class="title"><a href="#">有关PHP初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span> </li> 
      <li> <span class="fl good"> <span class="num">7</span> 有用</span> <span class="title"><a href="#">有关JAVA初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span> </li> 
      <li> <span class="fl good"> <span class="num">6</span> 有用</span> <span class="title"><a href="#">有关HTML5初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span> </li> 
      <li> <span class="fl good"> <span class="num">12</span> 有用</span> <span class="title"><a href="#">有关C++初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span> </li> 
      <li> <span class="fl good"> <span class="num">12</span> 有用</span> <span class="title"><a href="#">有关python初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span> </li>-->
      <li v-for="(item,index) in problemlist" :key="index">
        <span class="fl good">
          <span class="num">{{item.thumbup}}</span> 有用
        </span>
        <span class="title">
          <router-link :to="'/qa/'+item.id">{{item.title}}</router-link>
        </span>
        <span class="fr date">{{renderTime(item.createtime)}}</span>
        <span class="clearfix"></span>
      </li>
    </ul>
  </div>
</template>
<script>
import "~/assets/css/page-sj-person-myanswer.css";
import problemApi from "@/api/problem";
import axios from "axios";
import { getUser } from "@/utils/auth";
export default {
  asyncData() {
    return problemApi.findProblemByAnswer(getUser().userid).then(res => {
      return {
        problemlist: res.data.data
      };
    });
  },
  data() {
    problemlist: {
    }
  },
  methods: {
    renderTime(date) {
      var dateee = new Date(date).toJSON();
      return new Date(+new Date(dateee) + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
    }
  }
};
</script>

