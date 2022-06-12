import React, {FC} from 'react';

//CSS
import styles from "./AppBar.module.css"
import AppBarContainer from './components/AppBarContainer';
import AppBarNav from './components/AppBarNav';
import AppBarNavItem from './components/AppBarNavItem';
import AppBarWrapper from './components/AppBarWrapper';

const AppBar:FC = () => {
    return (
        <AppBarWrapper>
            <AppBarContainer>
                <AppBarNav>
                    <AppBarNavItem>
                        Value 1 
                    </AppBarNavItem>
                    <AppBarNavItem>
                        Value 2 
                    </AppBarNavItem>
                    <AppBarNavItem>
                        Value 3 
                    </AppBarNavItem>
                    <AppBarNavItem>
                        Value 4 
                    </AppBarNavItem>
                </AppBarNav>
            </AppBarContainer>
        </AppBarWrapper>
    )
}

export default AppBar;

