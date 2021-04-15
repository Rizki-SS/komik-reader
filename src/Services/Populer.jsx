export function getPopuler(page) {
    return fetch('https://mangamint.kaedenoki.net/api/manga/popular/' + page)
        .then(item => {
            return item.json();
        });
}