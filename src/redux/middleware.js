import { CARD_NUMBER_ACTION } from "./actions";

import {takeEvery} from '@redux-saga/core/effects';

export function* addCardNumber(){
    yield takeEvery (CARD_NUMBER_ACTION, function*(){

    });
}

export default function*(){
    yield* addCardNumber();
}