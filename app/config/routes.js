/*jshint esversion: 6 */

import React from 'react';
import { Scene, Router, ActionConst, Stack, Modal, Tabs } from 'react-native-router-flux';

//Splash Component
import Splash from '../components/Splash/Splash';

//Authentication Scenes
import Welcome from '../modules/auth/scenes/Welcome';
import Register from '../modules/auth/scenes/Register';
import CompleteProfile from '../modules/auth/scenes/CompleteProfile';
import Login from '../modules/auth/scenes/Login';
import ForgotPassword from '../modules/auth/scenes/ForgotPassword';
import Home from '../modules/home/scenes/Home';
import AddTrainee from '../modules/home/scenes/AddTrainee';
import TraineeSummary from '../modules/home/scenes/TraineeSummary';
import AddTraining from '../modules/home/scenes/AddTraining';
import AddPlan from '../modules/home/scenes/AddPlan';

//Import Store, actions
import store from '../redux/store';
import { checkLoginStatus } from "../modules/auth/actions";

import { color, navTitleStyle } from "../styles/theme";

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
            isLoggedIn: false
        };
    }

    componentDidMount() {
        let _this = this;
        store.dispatch(checkLoginStatus((isLoggedIn) => {
            _this.setState({isReady: true, isLoggedIn});
        }));
    }

    render() {
        if (!this.state.isReady)
            return <Splash/>;

        return (
            <Router>
                <Scene key="root" hideNavBar={true}
                       navigationBarStyle={{backgroundColor: "#0B0C10", marginTop: 25}}
                       titleStyle={navTitleStyle}
                       backButtonTintColor={color.black}
                       navBarButtonColor={color.white}
                       titleStyle={{color: "white", fontSize: 14}}>
                    <Stack key="Auth" initial={!this.state.isLoggedIn}>
                        <Scene key="Welcome" component={Welcome} title="" initial={true} hideNavBar/>
                        <Scene key="Register" component={Register} title="Registro" back/>
                        <Scene key="CompleteProfile" component={CompleteProfile} title="Complete su perfil" back={false}/>
                        <Scene key="Login" component={Login} title="Iniciar sesión"/>
                        <Scene key="ForgotPassword" component={ForgotPassword} title="Recuperar contraseña"/>
                    </Stack>

                    <Stack key="Main" initial={this.state.isLoggedIn}>
                        <Scene key="Home" component={Home} title="Mis Atletas" initial={true} back={false}/>
                        <Scene key="AddTrainee" component={AddTrainee} title="Agregar Atleta" back={false}/>
                        <Scene key="TraineeSummary" component={TraineeSummary} title="Información del atleta"/>
                        <Scene key="AddTraining" component={AddTraining} title="Nuevo entrenamiento"/>
                        <Scene key="AddPlan" component={AddPlan} title="Nuevo plan alimenticio"/>
                    </Stack>
                </Scene>
            </Router>
        )
    }
}
