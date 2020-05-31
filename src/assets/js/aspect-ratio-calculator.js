import autoBind from 'auto-bind'

class aspectRatioCalculator {
  constructor(
    $ratioWidth,
    $ratioHeight,
    $pixelsWidth,
    $pixelsHeight
  ) {
    this.$ratioWidth = $ratioWidth
    this.$ratioHeight = $ratioHeight
    this.$pixelsWidth = $pixelsWidth
    this.$pixelsHeight = $pixelsHeight

    autoBind(this)
    this.applyListeners()
  }

  applyListeners() {
    this.$pixelsWidth.on('keyup', this.updatePixelsHeight)
    this.$ratioWidth.on('keyup', this.updatePixelsHeight)
    this.$ratioHeight.on('keyup', this.updatePixelsHeight)
    this.$pixelsHeight.on('keyup', this.updatePixelsWidth)
  }

  updatePixelsHeight() {
    this.$pixelsHeight.val(this.calculatePixelsHeight())
  }

  updatePixelsWidth() {
    this.$pixelsWidth.val(this.calculatePixelsWidth())
  }

  calculatePixelsHeight() {
    const ratioWidth = parseInt(this.$ratioWidth.val(), 10)
    const ratioHeight = parseInt(this.$ratioHeight.val(), 10)
    const pixelsWidth = parseInt(this.$pixelsWidth.val(), 10)

    return pixelsWidth / (ratioWidth / ratioHeight)
  }

  calculatePixelsWidth() {
    const ratioWidth = parseInt(this.$ratioWidth.val(), 10)
    const ratioHeight = parseInt(this.$ratioHeight.val(), 10)
    const pixelsHeight = parseInt(this.$pixelsHeight.val(), 10)

    return pixelsHeight * (ratioWidth / ratioHeight)
  }
}

export default aspectRatioCalculator
