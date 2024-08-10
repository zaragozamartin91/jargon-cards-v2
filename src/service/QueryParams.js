export default class QueryParams {

    /**
     * Builds a query params instance
     * @param {string} url Url to parse ; defaults to document?.URL
     */
    constructor(url = document?.URL) {
        if (!url) {
            throw new Error('No url provided to parse query params from')
        }

        const urlAndQueryParams = url.split('?')
        if (urlAndQueryParams.length <= 1) {
            // No query params available
            this.searchParams = {}
            return
        }

        this.searchParams = urlAndQueryParams[1].split('&')
            .map(queryParam => queryParam.split('='))
            .filter(keyValue => keyValue.length > 1)
            .reduce((acc, [key, value]) => { acc[key] = value; return acc }, {})
    }
}
