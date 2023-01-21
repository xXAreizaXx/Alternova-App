// ReactJS
import { Fragment } from "react";

// Components
import Header from "components/Header";

// Containers
import MainContainer from "containers/MainContainer";

const AppContainer = ({ children }) => {
    return (
        <Fragment>
            <Header title="Alternova Shop" />
            <MainContainer>{children}</MainContainer>
        </Fragment>
    );
};

export default AppContainer;
