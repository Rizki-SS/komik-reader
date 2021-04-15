export function getNewUpdate(page) {
    return fetch('https://mangamint.kaedenoki.net/api/manga/page/' + page)
        .then(item => {
            return item.json();;
        });
}