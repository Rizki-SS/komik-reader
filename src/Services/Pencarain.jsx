export function getPopuler(keySearch) {
    return fetch('https://mangamint.kaedenoki.net/api/search/' + keySearch)
        .then(item => {
            return item.json();
        });
}