import {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authorize, logout, User} from '../slices/auth';

export default function useAuthActions() {
  const dispatch = useDispatch();

  // bindActionCreators로 액션함수 묶어주기
  // 첫번째 인자로 액션 생성 함수들이 들어있는 객체, 두번째 인자로 dispatch를 넣어줌
  // useMemo 활용하여 버그 발생 방지
  return useMemo(
    () => bindActionCreators({authorize, logout}, dispatch),
    [dispatch],
  );
  //   return {
  //     authorize: (user: User) => dispatch(authorize(user)),
  //     logout: () => dispatch(logout()),
  //   };
}
