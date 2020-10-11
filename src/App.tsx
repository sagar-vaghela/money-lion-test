import React, { useEffect } from 'react';
import { Dispatch } from "redux";
import { connect } from "react-redux"
import { Welcome } from './components/welcome/Welcome';
import { Personal } from './components/personal/Personal';
import { DOB } from './components/dob/DOB';
import { Agreement } from './components/agreement/Agreement';
import { Header } from './components/header/Header';
import { Container } from "semantic-ui-react";
import { changeValues, currentCompoent } from './store/actions/actions';
import { RootState } from './store/reducers';
const mapStateToProps = (state: RootState) => {
  return {
    currentComp: state.user.currentComp,
    values: state.user.data
  };
}; 

const mapDispachToProps = (dispatch: Dispatch) => {
  return {
    changeCurrentComp: (val: any) => dispatch(currentCompoent(val)),
    changeValuesFunc: (val: any) => dispatch(changeValues(val)),
  };
};

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispachToProps> 

const App: React.FC<Props> = ({currentComp, changeCurrentComp, values, changeValuesFunc}) => {
  useEffect(() => {
    let currentPage: string | null = localStorage.getItem("currentPage");
    changeCurrentComp(currentPage);
  });

  return (
    <Container>
      <Header />
      {currentComp == 1 && <Welcome changeCurrentComp={changeCurrentComp} />}
      {currentComp == 2 && <Personal changeCurrentComp={changeCurrentComp} values={values} changeValuesFunc={changeValuesFunc}/>}
      {currentComp == 3  && <DOB changeCurrentComp={changeCurrentComp} values={values} changeValuesFunc={changeValuesFunc}/>} 
      {currentComp == 4 && <Agreement changeCurrentComp={changeCurrentComp} values={values} changeValuesFunc={changeValuesFunc} />}
    </Container>
  );
}

export default connect(mapStateToProps,mapDispachToProps,)(App);
