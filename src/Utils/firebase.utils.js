import firebase from '../Config/firebase.init';

export function GetDb() {
    return firebase.app().database();
}
