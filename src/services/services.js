const headers = {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'accept': 'application/json'
}

const apiURL = "https://repetitora.net/api/JS/Tasks"

const mode = 'cors'

function requestData (url, type, body) {
    const settings = {
        method: type,
        body,
        headers,
        mode
    }

    return fetch(url, settings)
        .then(result => result.json())
}

export function createTask(title, widgetId) {

    const data = new URLSearchParams();
    data.append('widgetId', widgetId)
    data.append('title', title)

    return requestData(apiURL, 'POST', data)
}

export function getTasks(widgetId) {

    return requestData(`${apiURL}?widgetId=${widgetId}&count=30`, 'GET', null)
}

export function updateTask (widget,taskId, title, isDone ) {

    const data = new URLSearchParams();
    data.append('widgetId', widget)
    data.append('taskId', taskId)
    data.append('title', title)
    data.append('done', isDone)

    return requestData(apiURL, 'PUT', data)
}