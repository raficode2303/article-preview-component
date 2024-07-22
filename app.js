// Elements
const articleShareInfoEl = document.querySelector('.article-info-share')

const articleInfo = articleShareInfoEl.querySelector('.article-info')
const articleShareOptions = articleShareInfoEl.querySelector(
  '.article-share-options'
)
const articleShareArrow = articleShareInfoEl.querySelector(
  '.article-share-arrow'
)

// eventListener

articleShareArrow.addEventListener('click', () => {
  articleShareInfoEl.classList.toggle('very-dark-grayish-blue-bcg')
  articleInfo.classList.toggle('display-none')
  articleShareOptions.classList.toggle('display-none')
  articleShareArrow.classList.toggle('clicked')
})

// backup image for share-icon-twitter
const xImg = document.querySelector('.share-icon-twitter img')

xImg.onerror = (e) => {
  xImg.src = './images/icon-twitter.svg'
  // prevent infinite reloading when default image not found
  xImg.onerror = null
}
