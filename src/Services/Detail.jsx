export function getDetail(endpoin) {
    return fetch('https://mangamint.kaedenoki.net/api/manga/detail/' + endpoin + "/")
        .then(item => {
            return item.json();;
        });
}