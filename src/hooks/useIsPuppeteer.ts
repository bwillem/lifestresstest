function useIsPuppeteer() {
    // return true
    return process.env.NODE_ENV === 'development' || /HeadlessChrome/.test(navigator.userAgent)
}

export default useIsPuppeteer