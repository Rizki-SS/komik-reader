function getChapter(endpoin) {
    return fetch('https://mangamint.kaedenoki.net/api/chapter/' + endpoin)
        .then(item => {
            return item.json();;
        });
}

function getDetail(endpoin) {
    return fetch('https://mangamint.kaedenoki.net/api/manga/detail/' + endpoin + "/")
        .then(item => {
            return item.json();;
        });
}

function getNewUpdate(page) {
    return fetch('https://mangamint.kaedenoki.net/api/manga/page/' + page)
        .then(item => {
            return item.json();;
        });
}

function getPopuler(keySearch) {
    return fetch('https://mangamint.kaedenoki.net/api/search/' + keySearch)
        .then(item => {
            return item.json();
        });
}

export { getChapter, getDetail, getNewUpdate, getPopuler }