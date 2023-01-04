import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
import useAuthActions from '../hooks/useAuthActions';
import useUser from '../hooks/useUser';

// 현재 사용자 인증 상태를 보여주는 컴포넌트
function AuthStatus() {
  // state의 타입은 자동으로 추론되지 않기 때문에 직접 지정해줘야함
  //  const user = useSelector((state: RootState) => state.auth.user);
  //   const user = useSelector(state => state.auth.user);
  const user = useUser();

  return (
    <View style={styles.status}>
      <Text style={styles.text}>
        {user ? user.displayName : '로그인하세요'}
      </Text>
    </View>
  );
}

// 로그인, 로그아웃 버튼을 보여주는 컴포넌트
function AuthButtons() {
  const {authorize, logout} = useAuthActions(); // 커스텀 훅 호출
  const onPressLogin = () => {
    authorize({
      id: 1,
      username: 'johndoe',
      displayName: 'john doe',
    });
  };

  return (
    <View>
      <Button title="로그인" onPress={onPressLogin} />
      <Button title="로그아웃" onPress={logout} />
    </View>
  );
}

// 위 두 컴포넌트를 보여주는 컴포넌트
function AuthApp() {
  return (
    <SafeAreaView style={styles.block}>
      <AuthStatus />
      <AuthButtons />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
  status: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20},
});

export default AuthApp;
