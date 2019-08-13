<template>
  <div class="recommend">
    <!-- 首页整个页面都支持better-scroll滚动 -->
    <ScrollView>
      <ListBlock :movies="playingMovies" :title="`正在热映(${playingCount})`"></ListBlock>
    </ScrollView>
  </div>
</template>

<script>
import ListBlock from '@/components/ListBlock'
import axios from 'axios'
export default {
  data() {
    return {
      playingMovies: [],
      playingCount: 0
    }
  },
  components: {
    ListBlock
  },
  created() {
    this.getMovie()
  },
  methods: {
    getMovie() {
      console.log(4444)
      axios.get('/api/api/movies/get_hot').then(res => {
        console.log('111',res)
        if (res.code === 1001) {
          const { comming, playing } = res.result
          this.playingMovies = playing.movies
          this.playingCount = playing.count
        }
      })
    }
  },
}
</script>

<style scoped>

</style>
