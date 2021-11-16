import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.View`
    height: 80px;
    background-color: #F8DD52;
    margin-top: 50px;

    justify-content: center;
    align-items: center;
`;


export const HeaderTitle = styled.Text`
    color: #123053;
    font-size: 24px;
    font-weight: bold;
`;

export const SearchCep = styled.TextInput`
    width: 350px;
    height: 70px;
    color:#222;
    background-color: #dedede;
    border-radius: 10px;
    padding: 10px;
    margin:10px;

    justify-content: center;
    align-items: center;
`;

export const ButtonSearch = styled.TouchableOpacity`
    width: 350px;
    height: 50px;
    border-radius: 10px;
    background-color: #F8DD52;
    border-color: #123056;

    margin:20px;
    padding: 10px;

    justify-content: center;
    align-items: center;
`;

export const ButtonClear = styled.TouchableOpacity`
    width: 350px;
    height: 50px;
    border-radius: 10px;
    border: #123056 1px solid;

    margin:20px;
    padding: 10px;

    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    justify-content: center;
    align-items: center;
    color: #123056;
    font-weight: bold;
    font-size: 18px;
`;

export const Result = styled.View`
    width:350px;
    background-color: #ddd;

    padding:20px;

    flex:1;
    justify-content: flex-start;
`;


export const ResultText = styled.Text`
    font-size: 16px;
    color:#123056;
    height: 40px;
`;