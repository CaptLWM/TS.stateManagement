import {combineReducers} from 'redux';
import auth from './auth';
import todos from './todos';
import posts from './posts';

const rootReducer = combineReducers({
  auth,
  todos,
  posts,
});

// rootReducer 함수의 반환값 타입을 RootState type alias로 지정

// returntype : 특정 함수의 반환값 타입을 가져오는 유틸타입
export type RootState = ReturnType<typeof rootReducer>;

// RootState 호출
declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

export default rootReducer;
