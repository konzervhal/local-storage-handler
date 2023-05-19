function setObject(name, object) {
    localStorage.setItem(name, JSON.stringify(object));
}

function mergeObject(name, object) {
    let item = localStorage.getItem(name);
    item = item ? JSON.parse(item) : {};
    for (let i in object) {
        item[i] = object[i];
    }
    localStorage.setItem(name, JSON.stringify(item));
}

function getObject(name) {
    return JSON.parse(localStorage.getItem(name));
}

function deleteObject(name) {
    localStorage.removeItem(name)
}

export default {
    install: (app) => {
        app.config.globalProperties.$localstorage = {setObject, getObject, deleteObject, mergeObject};
    },
    setObject: (name, object) => {
        return setObject(name, object);
    },
    getObject: (name) => {
        return getObject(name);
    },
    deleteObject: (name) => {
        deleteObject(name);
        return true;
    },
    mergeObject: (name, object) => {
        return mergeObject(name, object);
    },
}
