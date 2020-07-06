import React, { Component, createRef, ReactNode } from "react";
import {
  Logo,
  LogoTitle,
  Nav,
  Navbar,
  NavbarContainer,
  NavbarWrapper,
  NavItem,
  NavLink,
  NavProfile,
  ProfileDrop,
  ProfileToggle,
  ToggleIcon,
  UserName,
} from "./style";
import { UserAvatar } from "../image";
import { Box, Link } from "rebass";
import ProfileDropdown from "./profileDropdown";
import withCurrentUser, { WithCurrentUserProps } from "../withCurrentUser";
import { Route, RouteComponentProps } from "react-router";
import { config } from "../../config/config";
import { Color } from "../globals";
import { Icon } from "../icon";

type TProps = RouteComponentProps;

interface IState {
  profileDropdownIsShown?: boolean;
}

class Header extends Component<WithCurrentUserProps<TProps>> {
  state: IState = {
    profileDropdownIsShown: false,
  };

  profileDropRef = createRef();

  render(): ReactNode {
    const { me } = this.props;

    return (
      <NavbarWrapper>
        <Navbar>
          <NavbarContainer>
            {/*Logo*/}
            <Logo to={"/"}>
              {/*<LogoImage src={logo}/>*/}
              <Icon
                glyph={"layers"}
                mr={"xs"}
                color={"primary"}
                fontSize={"lg"}
              />
              <LogoTitle>
                Item Market
                {config.networkCode === "T" ? (
                  <Color ml={"xs"} color={"yellow"} fontSize={"xs"}>
                    Testnet
                  </Color>
                ) : (
                  <Color ml={"xs"} color={"placeholder"} fontSize={"xs"}>
                    Beta
                  </Color>
                )}
              </LogoTitle>
            </Logo>
            {/*Menu*/}
            <Nav>
              {/* <Route path={'/items'}>
                {({ match }) => (
                  <NavItem isActive={!!match}>
                    <NavLink to={'/items'}>Browse</NavLink>
                  </NavItem>
                )}
              </Route> */}
              {/* <NavItem>
                <NavLink as={Link} href={`${config.docsUrl}/guides/how-to-use.html`} target='_blank'>How
                  to Use</NavLink>
              </NavItem> */}
            </Nav>
            {/*Profile*/}
            <Nav>
              <NavProfile>
                {me ? (
                  <ProfileDrop ref={this.profileDropRef}>
                    <ProfileToggle
                      onClick={this._onProfileDropdownToggle}
                      isActive={this.state.profileDropdownIsShown}
                    >
                      <ToggleIcon
                        glyph={
                          this.state.profileDropdownIsShown
                            ? "expand_less"
                            : "expand_more"
                        }
                      />
                      <UserName ml={"xs"}>{me.name || me.address}</UserName>
                      <Box ml={"md"}>
                        <UserAvatar user={me} size={"sm"} />
                      </Box>
                    </ProfileToggle>
                    <ProfileDropdown
                      isShown={this.state.profileDropdownIsShown}
                      target={this.profileDropRef.current}
                      onClickOutside={this._onProfileDropdownClickOutside}
                    />
                  </ProfileDrop>
                ) : (
                  <NavLink to={"/signin"}>Sign In</NavLink>
                )}
              </NavProfile>
            </Nav>
          </NavbarContainer>
        </Navbar>
      </NavbarWrapper>
    );
  }

  _onProfileDropdownToggle = () => {
    this.setState({
      profileDropdownIsShown: !this.state.profileDropdownIsShown,
    });
  };

  _onProfileDropdownClickOutside = () => {
    this.setState({
      profileDropdownIsShown: false,
    });
  };
}

export default withCurrentUser<TProps>(Header);
