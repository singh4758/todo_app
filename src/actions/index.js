

export function addTodo(payload) {
    return ({
        'type' : 'ADD_TODO',
        payload
    });
}

export function deleteEntry(pos) {
    return ({
        'type' : 'DELETE_ENTRY',
        pos
    })
}

export function updateEntry(payload,pos) {
    return ({
        'type': 'UPDATE_ENTRY',
        payload,
        pos
    })

}