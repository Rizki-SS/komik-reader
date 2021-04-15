export function getChapter(endpoin) {
    return fetch('https://mangamint.kaedenoki.net/api/chapter/' + endpoin)
        .then(item => {
            return item.json();;
        });
}