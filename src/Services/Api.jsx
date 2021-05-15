const BASE_URL = "https://mangamint.kaedenoki.net/api"

function getChapter(endpoin) {
    return fetch(BASE_URL + '/chapter/' + endpoin)
        .then(item => {
            return item.json();;
        });
}

function getDetail(endpoin) {
    return fetch(BASE_URL + '/manga/detail/' + endpoin + "/")
        .then(item => {
            return item.json();;
        });
}

function getNewUpdate(page) {
    return fetch(BASE_URL + '/manga/page/' + page)
        .then(item => {
            return item.json();;
        });
}

function getPopuler(keySearch) {
    return fetch(BASE_URL + '/search/' + keySearch)
        .then(item => {
            return item.json();
        });
}

function getGenre() {
    return fetch(BASE_URL + '/genres')
        .then(item => {
            return item.json();
        })
}


export default BASE_URL;
export { getChapter, getDetail, getNewUpdate, getPopuler, getGenre };