import Vue from 'vue'
import VideoDetail from '@/components/VideoDetail'

describe('VideoDetail.vue', () => {
  it('should render video loading', () => {
    const Constructor = Vue.extend(VideoDetail)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#no-video').textContent)
      .toEqual('Loading...')
  })
  it('should render video iframe', () => {
    const Constructor = Vue.extend(VideoDetail)
    const vm = new Constructor({
      propsData:{
        video: {
          id: {
            videoId: 'videoid'
          },
          snippet:{}
        }
      }
    }).$mount()
    expect(vm.$el.querySelector('#youtube-video-iframe').src)
      .toEqual('https://www.youtube.com/embed/videoid')
  })
  it('should render video title and description', () => {
    const Constructor = Vue.extend(VideoDetail)
    const vm = new Constructor({
      propsData:{
        video: {
          snippet: {
            title: 'Test Title',
            description: 'Video description'
          },
          id:{}
        }
      }
    }).$mount()
    expect(vm.$el.querySelector('.details-title').textContent)
      .toEqual('Test Title')
    expect(vm.$el.querySelector('.details-description').textContent)
      .toEqual('Video description')
  })
})
