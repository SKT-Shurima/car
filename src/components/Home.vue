<template>
  	<div class="wrap">
  		<mt-header fixed title="车辆查询服务">
  			<mt-button slot="right">
				<router-link to='/explain'>
					查询说明
				</router-link>
  			</mt-button>
  		</mt-header>
  		<div class="content">
  			<div class="protol color-gray">
  				<i class="icon icon-check-off" :class='check?"icon-check-off":"icon-check-on"' @touchstart='check=!check'></i>
  				我已经同意<a href="" class="color-primary">《有个车车辆查询协议》</a>
  			</div>
  			<ul class="theme">
  				<li>
  					<router-link to='/maintain'>
  						<img src="../assets/img/maintain.png">
  					</router-link>
  				</li>
  				<li>
  					<router-link to='/endangerment'>
  						<img src="../assets/img/endangerment.png">
  					</router-link>
  				</li>
  				<li>
  					<router-link to='endangerNum'>
  						<img src="../assets/img/endanger-num.png">
  					</router-link>
  				</li>
  			</ul>
  			<div>
  				<router-link to="/history" class="color-gray history">查询历史</router-link>
  			</div>
  		</div>
  	</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    	check: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang='scss' scoped>
	.content{
	  padding: 40px .26rem 40px;
	}
	.protol{
		margin: .8rem 0px .7rem;
		text-align: center;
		font-size: .28rem;
		.icon-check-off{
			background-image: url('../assets/img/check-off.png');
		}
		.icon-check-on{
			background-image: url('../assets/img/check-on.png');
		}  
	}
	.theme{
		li{
			margin-bottom: .4rem;
		}
		img{
			width: 100%;
			height: 100%;
		}
	}
	.history{
		text-decoration: underline;
		font-size: .28rem;
	}
</style>
