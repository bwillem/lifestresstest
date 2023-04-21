function useIsPuppeteer() {
    // return true
    return process.env.NODE_ENV === 'development' || /LST/.test(navigator.userAgent)
}

export default useIsPuppeteer