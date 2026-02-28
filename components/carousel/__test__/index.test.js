import ACarousel from '../index'
import { creatVueVm } from 'util.js'

describe('Carousel', () => {
  it('should render carousel', () => {
    const vm = creatVueVm({
      template: `
        <a-carousel>
          <div>Slide 1</div>
          <div>Slide 2</div>
        </a-carousel>
      `,
      components: { ACarousel }
    }).$mount()
    expect(vm.$el.classList.contains('ant-carousel')).toBeTruthy()
  })

  it('should render dots', () => {
    const vm = creatVueVm({
      template: `
        <a-carousel>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
        </a-carousel>
      `,
      components: { ACarousel }
    }).$mount()
    const dots = vm.$el.querySelectorAll('.slick-dots li')
    expect(dots.length).toBe(3)
  })

  it('should render correct number of slides', () => {
    const vm = creatVueVm({
      template: `
        <a-carousel>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
          <div>Slide 4</div>
        </a-carousel>
      `,
      components: { ACarousel }
    }).$mount()
    const track = vm.$el.querySelector('.ant-carousel-slick-track')
    expect(track.children.length).toBe(4)
  })
})
