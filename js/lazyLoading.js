export default function defineLazyLoading() {
    document.addEventListener('DOMContentLoaded', function () {
        let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'))
        if ('IntersectionObserver' in window) {
            let lazyImageObserver = new IntersectionObserver(function (
                entries,
                observer
            ) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        let lazyImage = entry.target
                        lazyImage.src = lazyImage.dataset.src
                        lazyImage.classList.remove('lazy')
                        lazyImageObserver.unobserve(lazyImage)
                    }
                })
            })
            lazyImages.forEach(function (lazyImage) {
                lazyImageObserver.observe(lazyImage)
            })
        } else {
            let lazyLoadThrottleTimeout
            function lazyLoad() {
                if (lazyLoadThrottleTimeout) {
                    clearTimeout(lazyLoadThrottleTimeout)
                }
                lazyLoadThrottleTimeout = setTimeout(function () {
                    let scrollTop = window.pageYOffset
                    lazyImages.forEach(function (lazyImage) {
                        if (
                            lazyImage.offsetTop <
                            window.innerHeight + scrollTop
                        ) {
                            lazyImage.src = lazyImage.dataset.src
                            lazyImage.classList.remove('lazy')
                        }
                    })
                    if (lazyImages.length == 0) {
                        document.removeEventListener('scroll', lazyLoad)
                        window.removeEventListener('resize', lazyLoad)
                        window.removeEventListener(
                            'orientationChange',
                            lazyLoad
                        )
                    }
                }, 20)
            }
            document.addEventListener('scroll', lazyLoad)
            window.addEventListener('resize', lazyLoad)
            window.addEventListener('orientationChange', lazyLoad)
        }
    })
}
